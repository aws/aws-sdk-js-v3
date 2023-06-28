// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  GetResourceRequestStatusInput,
  GetResourceRequestStatusOutput,
  HandlerFailureException,
  HandlerInternalFailureException,
  InvalidCredentialsException,
  InvalidRequestException,
  ListResourceRequestsInput,
  ListResourceRequestsOutput,
  ListResourcesInput,
  NetworkFailureException,
  NotStabilizedException,
  NotUpdatableException,
  Operation,
  OperationStatus,
  PrivateTypeException,
  ProgressEvent,
  RequestTokenNotFoundException,
  ResourceConflictException,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_CancelResourceRequestInput omitted.

/**
 * serializeAws_json1_0CreateResourceInput
 */
const se_CreateResourceInput = (input: CreateResourceInput, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DesiredState: [],
    RoleArn: [],
    TypeName: [],
    TypeVersionId: [],
  });
};

/**
 * serializeAws_json1_0DeleteResourceInput
 */
const se_DeleteResourceInput = (input: DeleteResourceInput, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Identifier: [],
    RoleArn: [],
    TypeName: [],
    TypeVersionId: [],
  });
};

// se_GetResourceInput omitted.

// se_GetResourceRequestStatusInput omitted.

// se_ListResourceRequestsInput omitted.

// se_ListResourcesInput omitted.

// se_Operations omitted.

// se_OperationStatuses omitted.

// se_ResourceRequestStatusFilter omitted.

/**
 * serializeAws_json1_0UpdateResourceInput
 */
const se_UpdateResourceInput = (input: UpdateResourceInput, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Identifier: [],
    PatchDocument: [],
    RoleArn: [],
    TypeName: [],
    TypeVersionId: [],
  });
};

// de_AlreadyExistsException omitted.

/**
 * deserializeAws_json1_0CancelResourceRequestOutput
 */
const de_CancelResourceRequestOutput = (output: any, context: __SerdeContext): CancelResourceRequestOutput => {
  return take(output, {
    ProgressEvent: (_: any) => de_ProgressEvent(_, context),
  }) as any;
};

// de_ClientTokenConflictException omitted.

// de_ConcurrentModificationException omitted.

// de_ConcurrentOperationException omitted.

/**
 * deserializeAws_json1_0CreateResourceOutput
 */
const de_CreateResourceOutput = (output: any, context: __SerdeContext): CreateResourceOutput => {
  return take(output, {
    ProgressEvent: (_: any) => de_ProgressEvent(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteResourceOutput
 */
const de_DeleteResourceOutput = (output: any, context: __SerdeContext): DeleteResourceOutput => {
  return take(output, {
    ProgressEvent: (_: any) => de_ProgressEvent(_, context),
  }) as any;
};

// de_GeneralServiceException omitted.

// de_GetResourceOutput omitted.

/**
 * deserializeAws_json1_0GetResourceRequestStatusOutput
 */
const de_GetResourceRequestStatusOutput = (output: any, context: __SerdeContext): GetResourceRequestStatusOutput => {
  return take(output, {
    ProgressEvent: (_: any) => de_ProgressEvent(_, context),
  }) as any;
};

// de_HandlerFailureException omitted.

// de_HandlerInternalFailureException omitted.

// de_InvalidCredentialsException omitted.

// de_InvalidRequestException omitted.

/**
 * deserializeAws_json1_0ListResourceRequestsOutput
 */
const de_ListResourceRequestsOutput = (output: any, context: __SerdeContext): ListResourceRequestsOutput => {
  return take(output, {
    NextToken: __expectString,
    ResourceRequestStatusSummaries: (_: any) => de_ResourceRequestStatusSummaries(_, context),
  }) as any;
};

// de_ListResourcesOutput omitted.

// de_NetworkFailureException omitted.

// de_NotStabilizedException omitted.

// de_NotUpdatableException omitted.

// de_PrivateTypeException omitted.

/**
 * deserializeAws_json1_0ProgressEvent
 */
const de_ProgressEvent = (output: any, context: __SerdeContext): ProgressEvent => {
  return take(output, {
    ErrorCode: __expectString,
    EventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Identifier: __expectString,
    Operation: __expectString,
    OperationStatus: __expectString,
    RequestToken: __expectString,
    ResourceModel: __expectString,
    RetryAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StatusMessage: __expectString,
    TypeName: __expectString,
  }) as any;
};

// de_RequestTokenNotFoundException omitted.

// de_ResourceConflictException omitted.

// de_ResourceDescription omitted.

// de_ResourceDescriptions omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0ResourceRequestStatusSummaries
 */
const de_ResourceRequestStatusSummaries = (output: any, context: __SerdeContext): ProgressEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProgressEvent(entry, context);
    });
  return retVal;
};

// de_ServiceInternalErrorException omitted.

// de_ServiceLimitExceededException omitted.

// de_ThrottlingException omitted.

// de_TypeNotFoundException omitted.

// de_UnsupportedActionException omitted.

/**
 * deserializeAws_json1_0UpdateResourceOutput
 */
const de_UpdateResourceOutput = (output: any, context: __SerdeContext): UpdateResourceOutput => {
  return take(output, {
    ProgressEvent: (_: any) => de_ProgressEvent(_, context),
  }) as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
