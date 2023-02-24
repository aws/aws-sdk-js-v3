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

export const serializeAws_json1_0CancelResourceRequestCommand = async (
  input: CancelResourceRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.CancelResourceRequest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelResourceRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.CreateResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.DeleteResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetResourceCommand = async (
  input: GetResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.GetResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetResourceRequestStatusCommand = async (
  input: GetResourceRequestStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.GetResourceRequestStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetResourceRequestStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListResourceRequestsCommand = async (
  input: ListResourceRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.ListResourceRequests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListResourceRequestsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.ListResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CloudApiService.UpdateResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CancelResourceRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResourceRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelResourceRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelResourceRequestOutput(data, context);
  const response: CancelResourceRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelResourceRequestCommandError = async (
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
      throw await deserializeAws_json1_0ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "RequestTokenNotFoundException":
    case "com.amazonaws.cloudcontrol#RequestTokenNotFoundException":
      throw await deserializeAws_json1_0RequestTokenNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateResourceOutput(data, context);
  const response: CreateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateResourceCommandError = async (
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
      throw await deserializeAws_json1_0AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ClientTokenConflictException":
    case "com.amazonaws.cloudcontrol#ClientTokenConflictException":
      throw await deserializeAws_json1_0ClientTokenConflictExceptionResponse(parsedOutput, context);
    case "ConcurrentOperationException":
    case "com.amazonaws.cloudcontrol#ConcurrentOperationException":
      throw await deserializeAws_json1_0ConcurrentOperationExceptionResponse(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await deserializeAws_json1_0GeneralServiceExceptionResponse(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await deserializeAws_json1_0HandlerFailureExceptionResponse(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await deserializeAws_json1_0HandlerInternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await deserializeAws_json1_0InvalidCredentialsExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await deserializeAws_json1_0NetworkFailureExceptionResponse(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await deserializeAws_json1_0NotStabilizedExceptionResponse(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await deserializeAws_json1_0NotUpdatableExceptionResponse(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await deserializeAws_json1_0PrivateTypeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await deserializeAws_json1_0ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await deserializeAws_json1_0ServiceInternalErrorExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await deserializeAws_json1_0ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await deserializeAws_json1_0TypeNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await deserializeAws_json1_0UnsupportedActionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteResourceOutput(data, context);
  const response: DeleteResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteResourceCommandError = async (
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
      throw await deserializeAws_json1_0AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ClientTokenConflictException":
    case "com.amazonaws.cloudcontrol#ClientTokenConflictException":
      throw await deserializeAws_json1_0ClientTokenConflictExceptionResponse(parsedOutput, context);
    case "ConcurrentOperationException":
    case "com.amazonaws.cloudcontrol#ConcurrentOperationException":
      throw await deserializeAws_json1_0ConcurrentOperationExceptionResponse(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await deserializeAws_json1_0GeneralServiceExceptionResponse(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await deserializeAws_json1_0HandlerFailureExceptionResponse(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await deserializeAws_json1_0HandlerInternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await deserializeAws_json1_0InvalidCredentialsExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await deserializeAws_json1_0NetworkFailureExceptionResponse(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await deserializeAws_json1_0NotStabilizedExceptionResponse(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await deserializeAws_json1_0NotUpdatableExceptionResponse(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await deserializeAws_json1_0PrivateTypeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await deserializeAws_json1_0ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await deserializeAws_json1_0ServiceInternalErrorExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await deserializeAws_json1_0ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await deserializeAws_json1_0TypeNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await deserializeAws_json1_0UnsupportedActionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetResourceOutput(data, context);
  const response: GetResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetResourceCommandError = async (
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
      throw await deserializeAws_json1_0AlreadyExistsExceptionResponse(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await deserializeAws_json1_0GeneralServiceExceptionResponse(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await deserializeAws_json1_0HandlerFailureExceptionResponse(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await deserializeAws_json1_0HandlerInternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await deserializeAws_json1_0InvalidCredentialsExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await deserializeAws_json1_0NetworkFailureExceptionResponse(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await deserializeAws_json1_0NotStabilizedExceptionResponse(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await deserializeAws_json1_0NotUpdatableExceptionResponse(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await deserializeAws_json1_0PrivateTypeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await deserializeAws_json1_0ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await deserializeAws_json1_0ServiceInternalErrorExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await deserializeAws_json1_0ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await deserializeAws_json1_0TypeNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await deserializeAws_json1_0UnsupportedActionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetResourceRequestStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceRequestStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetResourceRequestStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetResourceRequestStatusOutput(data, context);
  const response: GetResourceRequestStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetResourceRequestStatusCommandError = async (
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
      throw await deserializeAws_json1_0RequestTokenNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListResourceRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListResourceRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListResourceRequestsOutput(data, context);
  const response: ListResourceRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListResourceRequestsCommandError = async (
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

export const deserializeAws_json1_0ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListResourcesOutput(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListResourcesCommandError = async (
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
      throw await deserializeAws_json1_0AlreadyExistsExceptionResponse(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await deserializeAws_json1_0GeneralServiceExceptionResponse(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await deserializeAws_json1_0HandlerFailureExceptionResponse(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await deserializeAws_json1_0HandlerInternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await deserializeAws_json1_0InvalidCredentialsExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await deserializeAws_json1_0NetworkFailureExceptionResponse(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await deserializeAws_json1_0NotStabilizedExceptionResponse(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await deserializeAws_json1_0NotUpdatableExceptionResponse(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await deserializeAws_json1_0PrivateTypeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await deserializeAws_json1_0ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await deserializeAws_json1_0ServiceInternalErrorExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await deserializeAws_json1_0ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await deserializeAws_json1_0TypeNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await deserializeAws_json1_0UnsupportedActionExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateResourceOutput(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateResourceCommandError = async (
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
      throw await deserializeAws_json1_0AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ClientTokenConflictException":
    case "com.amazonaws.cloudcontrol#ClientTokenConflictException":
      throw await deserializeAws_json1_0ClientTokenConflictExceptionResponse(parsedOutput, context);
    case "ConcurrentOperationException":
    case "com.amazonaws.cloudcontrol#ConcurrentOperationException":
      throw await deserializeAws_json1_0ConcurrentOperationExceptionResponse(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await deserializeAws_json1_0GeneralServiceExceptionResponse(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await deserializeAws_json1_0HandlerFailureExceptionResponse(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await deserializeAws_json1_0HandlerInternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await deserializeAws_json1_0InvalidCredentialsExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await deserializeAws_json1_0NetworkFailureExceptionResponse(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await deserializeAws_json1_0NotStabilizedExceptionResponse(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await deserializeAws_json1_0NotUpdatableExceptionResponse(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await deserializeAws_json1_0PrivateTypeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await deserializeAws_json1_0ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await deserializeAws_json1_0ServiceInternalErrorExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await deserializeAws_json1_0ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await deserializeAws_json1_0TypeNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await deserializeAws_json1_0UnsupportedActionExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ClientTokenConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientTokenConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ClientTokenConflictException(body, context);
  const exception = new ClientTokenConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConcurrentOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConcurrentOperationException(body, context);
  const exception = new ConcurrentOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0GeneralServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GeneralServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0GeneralServiceException(body, context);
  const exception = new GeneralServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0HandlerFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandlerFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0HandlerFailureException(body, context);
  const exception = new HandlerFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0HandlerInternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandlerInternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0HandlerInternalFailureException(body, context);
  const exception = new HandlerInternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidCredentialsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCredentialsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidCredentialsException(body, context);
  const exception = new InvalidCredentialsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0NetworkFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0NetworkFailureException(body, context);
  const exception = new NetworkFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0NotStabilizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotStabilizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0NotStabilizedException(body, context);
  const exception = new NotStabilizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0NotUpdatableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotUpdatableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0NotUpdatableException(body, context);
  const exception = new NotUpdatableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0PrivateTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PrivateTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0PrivateTypeException(body, context);
  const exception = new PrivateTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0RequestTokenNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTokenNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0RequestTokenNotFoundException(body, context);
  const exception = new RequestTokenNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceConflictException(body, context);
  const exception = new ResourceConflictException({
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

const deserializeAws_json1_0ServiceInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceInternalErrorException(body, context);
  const exception = new ServiceInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceLimitExceededException(body, context);
  const exception = new ServiceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0TypeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TypeNotFoundException(body, context);
  const exception = new TypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0UnsupportedActionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0UnsupportedActionException(body, context);
  const exception = new UnsupportedActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0CancelResourceRequestInput = (
  input: CancelResourceRequestInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestToken != null && { RequestToken: input.RequestToken }),
  };
};

const serializeAws_json1_0CreateResourceInput = (input: CreateResourceInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

const serializeAws_json1_0DeleteResourceInput = (input: DeleteResourceInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

const serializeAws_json1_0GetResourceInput = (input: GetResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

const serializeAws_json1_0GetResourceRequestStatusInput = (
  input: GetResourceRequestStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestToken != null && { RequestToken: input.RequestToken }),
  };
};

const serializeAws_json1_0ListResourceRequestsInput = (
  input: ListResourceRequestsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceRequestStatusFilter != null && {
      ResourceRequestStatusFilter: serializeAws_json1_0ResourceRequestStatusFilter(
        input.ResourceRequestStatusFilter,
        context
      ),
    }),
  };
};

const serializeAws_json1_0ListResourcesInput = (input: ListResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceModel != null && { ResourceModel: input.ResourceModel }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

const serializeAws_json1_0Operations = (input: (Operation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0OperationStatuses = (input: (OperationStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0ResourceRequestStatusFilter = (
  input: ResourceRequestStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperationStatuses != null && {
      OperationStatuses: serializeAws_json1_0OperationStatuses(input.OperationStatuses, context),
    }),
    ...(input.Operations != null && { Operations: serializeAws_json1_0Operations(input.Operations, context) }),
  };
};

const serializeAws_json1_0UpdateResourceInput = (input: UpdateResourceInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.PatchDocument != null && { PatchDocument: input.PatchDocument }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

const deserializeAws_json1_0AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CancelResourceRequestOutput = (
  output: any,
  context: __SerdeContext
): CancelResourceRequestOutput => {
  return {
    ProgressEvent:
      output.ProgressEvent != null ? deserializeAws_json1_0ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ClientTokenConflictException = (
  output: any,
  context: __SerdeContext
): ClientTokenConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ConcurrentOperationException = (
  output: any,
  context: __SerdeContext
): ConcurrentOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CreateResourceOutput = (output: any, context: __SerdeContext): CreateResourceOutput => {
  return {
    ProgressEvent:
      output.ProgressEvent != null ? deserializeAws_json1_0ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteResourceOutput = (output: any, context: __SerdeContext): DeleteResourceOutput => {
  return {
    ProgressEvent:
      output.ProgressEvent != null ? deserializeAws_json1_0ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GeneralServiceException = (
  output: any,
  context: __SerdeContext
): GeneralServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0GetResourceOutput = (output: any, context: __SerdeContext): GetResourceOutput => {
  return {
    ResourceDescription:
      output.ResourceDescription != null
        ? deserializeAws_json1_0ResourceDescription(output.ResourceDescription, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_0GetResourceRequestStatusOutput = (
  output: any,
  context: __SerdeContext
): GetResourceRequestStatusOutput => {
  return {
    ProgressEvent:
      output.ProgressEvent != null ? deserializeAws_json1_0ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

const deserializeAws_json1_0HandlerFailureException = (
  output: any,
  context: __SerdeContext
): HandlerFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0HandlerInternalFailureException = (
  output: any,
  context: __SerdeContext
): HandlerInternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidCredentialsException = (
  output: any,
  context: __SerdeContext
): InvalidCredentialsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListResourceRequestsOutput = (
  output: any,
  context: __SerdeContext
): ListResourceRequestsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceRequestStatusSummaries:
      output.ResourceRequestStatusSummaries != null
        ? deserializeAws_json1_0ResourceRequestStatusSummaries(output.ResourceRequestStatusSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListResourcesOutput = (output: any, context: __SerdeContext): ListResourcesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceDescriptions:
      output.ResourceDescriptions != null
        ? deserializeAws_json1_0ResourceDescriptions(output.ResourceDescriptions, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

const deserializeAws_json1_0NetworkFailureException = (
  output: any,
  context: __SerdeContext
): NetworkFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0NotStabilizedException = (output: any, context: __SerdeContext): NotStabilizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0NotUpdatableException = (output: any, context: __SerdeContext): NotUpdatableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0PrivateTypeException = (output: any, context: __SerdeContext): PrivateTypeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ProgressEvent = (output: any, context: __SerdeContext): ProgressEvent => {
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

const deserializeAws_json1_0RequestTokenNotFoundException = (
  output: any,
  context: __SerdeContext
): RequestTokenNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResourceConflictException = (
  output: any,
  context: __SerdeContext
): ResourceConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResourceDescription = (output: any, context: __SerdeContext): ResourceDescription => {
  return {
    Identifier: __expectString(output.Identifier),
    Properties: __expectString(output.Properties),
  } as any;
};

const deserializeAws_json1_0ResourceDescriptions = (output: any, context: __SerdeContext): ResourceDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ResourceDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResourceRequestStatusSummaries = (
  output: any,
  context: __SerdeContext
): ProgressEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ProgressEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ServiceInternalErrorException = (
  output: any,
  context: __SerdeContext
): ServiceInternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ServiceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ServiceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0TypeNotFoundException = (output: any, context: __SerdeContext): TypeNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UnsupportedActionException = (
  output: any,
  context: __SerdeContext
): UnsupportedActionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UpdateResourceOutput = (output: any, context: __SerdeContext): UpdateResourceOutput => {
  return {
    ProgressEvent:
      output.ProgressEvent != null ? deserializeAws_json1_0ProgressEvent(output.ProgressEvent, context) : undefined,
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
