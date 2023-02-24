// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import { CreateHapgCommandInput, CreateHapgCommandOutput } from "../commands/CreateHapgCommand";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "../commands/CreateHsmCommand";
import { CreateLunaClientCommandInput, CreateLunaClientCommandOutput } from "../commands/CreateLunaClientCommand";
import { DeleteHapgCommandInput, DeleteHapgCommandOutput } from "../commands/DeleteHapgCommand";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "../commands/DeleteHsmCommand";
import { DeleteLunaClientCommandInput, DeleteLunaClientCommandOutput } from "../commands/DeleteLunaClientCommand";
import { DescribeHapgCommandInput, DescribeHapgCommandOutput } from "../commands/DescribeHapgCommand";
import { DescribeHsmCommandInput, DescribeHsmCommandOutput } from "../commands/DescribeHsmCommand";
import { DescribeLunaClientCommandInput, DescribeLunaClientCommandOutput } from "../commands/DescribeLunaClientCommand";
import { GetConfigCommandInput, GetConfigCommandOutput } from "../commands/GetConfigCommand";
import { ListAvailableZonesCommandInput, ListAvailableZonesCommandOutput } from "../commands/ListAvailableZonesCommand";
import { ListHapgsCommandInput, ListHapgsCommandOutput } from "../commands/ListHapgsCommand";
import { ListHsmsCommandInput, ListHsmsCommandOutput } from "../commands/ListHsmsCommand";
import { ListLunaClientsCommandInput, ListLunaClientsCommandOutput } from "../commands/ListLunaClientsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ModifyHapgCommandInput, ModifyHapgCommandOutput } from "../commands/ModifyHapgCommand";
import { ModifyHsmCommandInput, ModifyHsmCommandOutput } from "../commands/ModifyHsmCommand";
import { ModifyLunaClientCommandInput, ModifyLunaClientCommandOutput } from "../commands/ModifyLunaClientCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import { CloudHSMServiceException as __BaseException } from "../models/CloudHSMServiceException";
import {
  AddTagsToResourceRequest,
  AddTagsToResourceResponse,
  CloudHsmInternalException,
  CloudHsmServiceException,
  CreateHapgRequest,
  CreateHapgResponse,
  CreateHsmRequest,
  CreateHsmResponse,
  CreateLunaClientRequest,
  CreateLunaClientResponse,
  DeleteHapgRequest,
  DeleteHapgResponse,
  DeleteHsmRequest,
  DeleteHsmResponse,
  DeleteLunaClientRequest,
  DeleteLunaClientResponse,
  DescribeHapgRequest,
  DescribeHapgResponse,
  DescribeHsmRequest,
  DescribeHsmResponse,
  DescribeLunaClientRequest,
  DescribeLunaClientResponse,
  GetConfigRequest,
  GetConfigResponse,
  InvalidRequestException,
  ListAvailableZonesRequest,
  ListAvailableZonesResponse,
  ListHapgsRequest,
  ListHapgsResponse,
  ListHsmsRequest,
  ListHsmsResponse,
  ListLunaClientsRequest,
  ListLunaClientsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ModifyHapgRequest,
  ModifyHapgResponse,
  ModifyHsmRequest,
  ModifyHsmResponse,
  ModifyLunaClientRequest,
  ModifyLunaClientResponse,
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResponse,
  Tag,
} from "../models/models_0";

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHapgCommand = async (
  input: CreateHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.CreateHapg",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.CreateHsm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLunaClientCommand = async (
  input: CreateLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.CreateLunaClient",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHapgCommand = async (
  input: DeleteHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.DeleteHapg",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.DeleteHsm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLunaClientCommand = async (
  input: DeleteLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.DeleteLunaClient",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHapgCommand = async (
  input: DescribeHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.DescribeHapg",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHsmCommand = async (
  input: DescribeHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.DescribeHsm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLunaClientCommand = async (
  input: DescribeLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.DescribeLunaClient",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConfigCommand = async (
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.GetConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableZonesCommand = async (
  input: ListAvailableZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ListAvailableZones",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailableZonesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHapgsCommand = async (
  input: ListHapgsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ListHapgs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHapgsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHsmsCommand = async (
  input: ListHsmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ListHsms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHsmsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLunaClientsCommand = async (
  input: ListLunaClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ListLunaClients",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLunaClientsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyHapgCommand = async (
  input: ModifyHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ModifyHapg",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyHsmCommand = async (
  input: ModifyHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ModifyHsm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyLunaClientCommand = async (
  input: ModifyLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.ModifyLunaClient",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudHsmFrontendService.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHapgResponse(data, context);
  const response: CreateHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHsmResponse(data, context);
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLunaClientResponse(data, context);
  const response: CreateLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHapgResponse(data, context);
  const response: DeleteHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHsmResponse(data, context);
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLunaClientResponse(data, context);
  const response: DeleteLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHapgResponse(data, context);
  const response: DescribeHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHsmResponse(data, context);
  const response: DescribeHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLunaClientResponse(data, context);
  const response: DescribeLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConfigResponse(data, context);
  const response: GetConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAvailableZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailableZonesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableZonesResponse(data, context);
  const response: ListAvailableZonesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableZonesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHapgsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHapgsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHapgsResponse(data, context);
  const response: ListHapgsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHapgsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHsmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHsmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHsmsResponse(data, context);
  const response: ListHsmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHsmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLunaClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLunaClientsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLunaClientsResponse(data, context);
  const response: ListLunaClientsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLunaClientsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyHapgResponse(data, context);
  const response: ModifyHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyHsmResponse(data, context);
  const response: ModifyHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyLunaClientResponse(data, context);
  const response: ModifyLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await deserializeAws_json1_1CloudHsmInternalExceptionResponse(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1CloudHsmInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmInternalException(body, context);
  const exception = new CloudHsmInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmServiceException(body, context);
  const exception = new CloudHsmServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddTagsToResourceRequest = (
  input: AddTagsToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagList != null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1CreateHapgRequest = (input: CreateHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.Label != null && { Label: input.Label }),
  };
};

const serializeAws_json1_1CreateHsmRequest = (input: CreateHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.EniIp != null && { EniIp: input.EniIp }),
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.SshKey != null && { SshKey: input.SshKey }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.SubscriptionType != null && { SubscriptionType: input.SubscriptionType }),
    ...(input.SyslogIp != null && { SyslogIp: input.SyslogIp }),
  };
};

const serializeAws_json1_1CreateLunaClientRequest = (input: CreateLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.Label != null && { Label: input.Label }),
  };
};

const serializeAws_json1_1DeleteHapgRequest = (input: DeleteHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.HapgArn != null && { HapgArn: input.HapgArn }),
  };
};

const serializeAws_json1_1DeleteHsmRequest = (input: DeleteHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.HsmArn != null && { HsmArn: input.HsmArn }),
  };
};

const serializeAws_json1_1DeleteLunaClientRequest = (input: DeleteLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
  };
};

const serializeAws_json1_1DescribeHapgRequest = (input: DescribeHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.HapgArn != null && { HapgArn: input.HapgArn }),
  };
};

const serializeAws_json1_1DescribeHsmRequest = (input: DescribeHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.HsmArn != null && { HsmArn: input.HsmArn }),
    ...(input.HsmSerialNumber != null && { HsmSerialNumber: input.HsmSerialNumber }),
  };
};

const serializeAws_json1_1DescribeLunaClientRequest = (
  input: DescribeLunaClientRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateFingerprint != null && { CertificateFingerprint: input.CertificateFingerprint }),
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
  };
};

const serializeAws_json1_1GetConfigRequest = (input: GetConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
    ...(input.ClientVersion != null && { ClientVersion: input.ClientVersion }),
    ...(input.HapgList != null && { HapgList: serializeAws_json1_1HapgList(input.HapgList, context) }),
  };
};

const serializeAws_json1_1HapgList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListAvailableZonesRequest = (
  input: ListAvailableZonesRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ListHapgsRequest = (input: ListHapgsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListHsmsRequest = (input: ListHsmsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLunaClientsRequest = (input: ListLunaClientsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ModifyHapgRequest = (input: ModifyHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.HapgArn != null && { HapgArn: input.HapgArn }),
    ...(input.Label != null && { Label: input.Label }),
    ...(input.PartitionSerialList != null && {
      PartitionSerialList: serializeAws_json1_1PartitionSerialList(input.PartitionSerialList, context),
    }),
  };
};

const serializeAws_json1_1ModifyHsmRequest = (input: ModifyHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.EniIp != null && { EniIp: input.EniIp }),
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.HsmArn != null && { HsmArn: input.HsmArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.SyslogIp != null && { SyslogIp: input.SyslogIp }),
  };
};

const serializeAws_json1_1ModifyLunaClientRequest = (input: ModifyLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
  };
};

const serializeAws_json1_1PartitionSerialList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RemoveTagsFromResourceRequest = (
  input: RemoveTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeyList != null && { TagKeyList: serializeAws_json1_1TagKeyList(input.TagKeyList, context) }),
  };
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

const deserializeAws_json1_1AddTagsToResourceResponse = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1AZList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ClientList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1CloudHsmInternalException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalException => {
  return {
    message: __expectString(output.message),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

const deserializeAws_json1_1CloudHsmServiceException = (
  output: any,
  context: __SerdeContext
): CloudHsmServiceException => {
  return {
    message: __expectString(output.message),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

const deserializeAws_json1_1CreateHapgResponse = (output: any, context: __SerdeContext): CreateHapgResponse => {
  return {
    HapgArn: __expectString(output.HapgArn),
  } as any;
};

const deserializeAws_json1_1CreateHsmResponse = (output: any, context: __SerdeContext): CreateHsmResponse => {
  return {
    HsmArn: __expectString(output.HsmArn),
  } as any;
};

const deserializeAws_json1_1CreateLunaClientResponse = (
  output: any,
  context: __SerdeContext
): CreateLunaClientResponse => {
  return {
    ClientArn: __expectString(output.ClientArn),
  } as any;
};

const deserializeAws_json1_1DeleteHapgResponse = (output: any, context: __SerdeContext): DeleteHapgResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteHsmResponse = (output: any, context: __SerdeContext): DeleteHsmResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteLunaClientResponse = (
  output: any,
  context: __SerdeContext
): DeleteLunaClientResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeHapgResponse = (output: any, context: __SerdeContext): DescribeHapgResponse => {
  return {
    HapgArn: __expectString(output.HapgArn),
    HapgSerial: __expectString(output.HapgSerial),
    HsmsLastActionFailed:
      output.HsmsLastActionFailed != null
        ? deserializeAws_json1_1HsmList(output.HsmsLastActionFailed, context)
        : undefined,
    HsmsPendingDeletion:
      output.HsmsPendingDeletion != null
        ? deserializeAws_json1_1HsmList(output.HsmsPendingDeletion, context)
        : undefined,
    HsmsPendingRegistration:
      output.HsmsPendingRegistration != null
        ? deserializeAws_json1_1HsmList(output.HsmsPendingRegistration, context)
        : undefined,
    Label: __expectString(output.Label),
    LastModifiedTimestamp: __expectString(output.LastModifiedTimestamp),
    PartitionSerialList:
      output.PartitionSerialList != null
        ? deserializeAws_json1_1PartitionSerialList(output.PartitionSerialList, context)
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1DescribeHsmResponse = (output: any, context: __SerdeContext): DescribeHsmResponse => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    EniId: __expectString(output.EniId),
    EniIp: __expectString(output.EniIp),
    HsmArn: __expectString(output.HsmArn),
    HsmType: __expectString(output.HsmType),
    IamRoleArn: __expectString(output.IamRoleArn),
    Partitions: output.Partitions != null ? deserializeAws_json1_1PartitionList(output.Partitions, context) : undefined,
    SerialNumber: __expectString(output.SerialNumber),
    ServerCertLastUpdated: __expectString(output.ServerCertLastUpdated),
    ServerCertUri: __expectString(output.ServerCertUri),
    SoftwareVersion: __expectString(output.SoftwareVersion),
    SshKeyLastUpdated: __expectString(output.SshKeyLastUpdated),
    SshPublicKey: __expectString(output.SshPublicKey),
    Status: __expectString(output.Status),
    StatusDetails: __expectString(output.StatusDetails),
    SubnetId: __expectString(output.SubnetId),
    SubscriptionEndDate: __expectString(output.SubscriptionEndDate),
    SubscriptionStartDate: __expectString(output.SubscriptionStartDate),
    SubscriptionType: __expectString(output.SubscriptionType),
    VendorName: __expectString(output.VendorName),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1DescribeLunaClientResponse = (
  output: any,
  context: __SerdeContext
): DescribeLunaClientResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateFingerprint: __expectString(output.CertificateFingerprint),
    ClientArn: __expectString(output.ClientArn),
    Label: __expectString(output.Label),
    LastModifiedTimestamp: __expectString(output.LastModifiedTimestamp),
  } as any;
};

const deserializeAws_json1_1GetConfigResponse = (output: any, context: __SerdeContext): GetConfigResponse => {
  return {
    ConfigCred: __expectString(output.ConfigCred),
    ConfigFile: __expectString(output.ConfigFile),
    ConfigType: __expectString(output.ConfigType),
  } as any;
};

const deserializeAws_json1_1HapgList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1HsmList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    message: __expectString(output.message),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

const deserializeAws_json1_1ListAvailableZonesResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableZonesResponse => {
  return {
    AZList: output.AZList != null ? deserializeAws_json1_1AZList(output.AZList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListHapgsResponse = (output: any, context: __SerdeContext): ListHapgsResponse => {
  return {
    HapgList: output.HapgList != null ? deserializeAws_json1_1HapgList(output.HapgList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListHsmsResponse = (output: any, context: __SerdeContext): ListHsmsResponse => {
  return {
    HsmList: output.HsmList != null ? deserializeAws_json1_1HsmList(output.HsmList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLunaClientsResponse = (
  output: any,
  context: __SerdeContext
): ListLunaClientsResponse => {
  return {
    ClientList: output.ClientList != null ? deserializeAws_json1_1ClientList(output.ClientList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyHapgResponse = (output: any, context: __SerdeContext): ModifyHapgResponse => {
  return {
    HapgArn: __expectString(output.HapgArn),
  } as any;
};

const deserializeAws_json1_1ModifyHsmResponse = (output: any, context: __SerdeContext): ModifyHsmResponse => {
  return {
    HsmArn: __expectString(output.HsmArn),
  } as any;
};

const deserializeAws_json1_1ModifyLunaClientResponse = (
  output: any,
  context: __SerdeContext
): ModifyLunaClientResponse => {
  return {
    ClientArn: __expectString(output.ClientArn),
  } as any;
};

const deserializeAws_json1_1PartitionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PartitionSerialList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RemoveTagsFromResourceResponse = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResponse => {
  return {
    Status: __expectString(output.Status),
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
