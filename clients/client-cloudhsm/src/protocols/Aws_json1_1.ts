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

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToResource");
  let body: any;
  body = JSON.stringify(se_AddTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHapgCommand
 */
export const se_CreateHapgCommand = async (
  input: CreateHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHapg");
  let body: any;
  body = JSON.stringify(se_CreateHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHsmCommand
 */
export const se_CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHsm");
  let body: any;
  body = JSON.stringify(se_CreateHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLunaClientCommand
 */
export const se_CreateLunaClientCommand = async (
  input: CreateLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLunaClient");
  let body: any;
  body = JSON.stringify(se_CreateLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHapgCommand
 */
export const se_DeleteHapgCommand = async (
  input: DeleteHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHapg");
  let body: any;
  body = JSON.stringify(se_DeleteHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHsmCommand
 */
export const se_DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHsm");
  let body: any;
  body = JSON.stringify(se_DeleteHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLunaClientCommand
 */
export const se_DeleteLunaClientCommand = async (
  input: DeleteLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLunaClient");
  let body: any;
  body = JSON.stringify(se_DeleteLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHapgCommand
 */
export const se_DescribeHapgCommand = async (
  input: DescribeHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHapg");
  let body: any;
  body = JSON.stringify(se_DescribeHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHsmCommand
 */
export const se_DescribeHsmCommand = async (
  input: DescribeHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHsm");
  let body: any;
  body = JSON.stringify(se_DescribeHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLunaClientCommand
 */
export const se_DescribeLunaClientCommand = async (
  input: DescribeLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLunaClient");
  let body: any;
  body = JSON.stringify(se_DescribeLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConfigCommand
 */
export const se_GetConfigCommand = async (
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConfig");
  let body: any;
  body = JSON.stringify(se_GetConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableZonesCommand
 */
export const se_ListAvailableZonesCommand = async (
  input: ListAvailableZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailableZones");
  let body: any;
  body = JSON.stringify(se_ListAvailableZonesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHapgsCommand
 */
export const se_ListHapgsCommand = async (
  input: ListHapgsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHapgs");
  let body: any;
  body = JSON.stringify(se_ListHapgsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHsmsCommand
 */
export const se_ListHsmsCommand = async (
  input: ListHsmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHsms");
  let body: any;
  body = JSON.stringify(se_ListHsmsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLunaClientsCommand
 */
export const se_ListLunaClientsCommand = async (
  input: ListLunaClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLunaClients");
  let body: any;
  body = JSON.stringify(se_ListLunaClientsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyHapgCommand
 */
export const se_ModifyHapgCommand = async (
  input: ModifyHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyHapg");
  let body: any;
  body = JSON.stringify(se_ModifyHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyHsmCommand
 */
export const se_ModifyHsmCommand = async (
  input: ModifyHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyHsm");
  let body: any;
  body = JSON.stringify(se_ModifyHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyLunaClientCommand
 */
export const se_ModifyLunaClientCommand = async (
  input: ModifyLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyLunaClient");
  let body: any;
  body = JSON.stringify(se_ModifyLunaClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromResource");
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsToResourceResponse(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommandError
 */
const de_AddTagsToResourceCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateHapgCommand
 */
export const de_CreateHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHapgResponse(data, context);
  const response: CreateHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHapgCommandError
 */
const de_CreateHapgCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateHsmCommand
 */
export const de_CreateHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHsmResponse(data, context);
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHsmCommandError
 */
const de_CreateHsmCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateLunaClientCommand
 */
export const de_CreateLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLunaClientResponse(data, context);
  const response: CreateLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLunaClientCommandError
 */
const de_CreateLunaClientCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteHapgCommand
 */
export const de_DeleteHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHapgResponse(data, context);
  const response: DeleteHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteHapgCommandError
 */
const de_DeleteHapgCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteHsmCommand
 */
export const de_DeleteHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHsmResponse(data, context);
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteHsmCommandError
 */
const de_DeleteHsmCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLunaClientCommand
 */
export const de_DeleteLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLunaClientResponse(data, context);
  const response: DeleteLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLunaClientCommandError
 */
const de_DeleteLunaClientCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeHapgCommand
 */
export const de_DescribeHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHapgResponse(data, context);
  const response: DescribeHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeHapgCommandError
 */
const de_DescribeHapgCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeHsmCommand
 */
export const de_DescribeHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHsmResponse(data, context);
  const response: DescribeHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeHsmCommandError
 */
const de_DescribeHsmCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeLunaClientCommand
 */
export const de_DescribeLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLunaClientResponse(data, context);
  const response: DescribeLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLunaClientCommandError
 */
const de_DescribeLunaClientCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetConfigCommand
 */
export const de_GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConfigResponse(data, context);
  const response: GetConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConfigCommandError
 */
const de_GetConfigCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAvailableZonesCommand
 */
export const de_ListAvailableZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableZonesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableZonesResponse(data, context);
  const response: ListAvailableZonesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailableZonesCommandError
 */
const de_ListAvailableZonesCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHapgsCommand
 */
export const de_ListHapgsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHapgsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHapgsResponse(data, context);
  const response: ListHapgsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHapgsCommandError
 */
const de_ListHapgsCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHsmsCommand
 */
export const de_ListHsmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHsmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHsmsResponse(data, context);
  const response: ListHsmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHsmsCommandError
 */
const de_ListHsmsCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLunaClientsCommand
 */
export const de_ListLunaClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLunaClientsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLunaClientsResponse(data, context);
  const response: ListLunaClientsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLunaClientsCommandError
 */
const de_ListLunaClientsCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ModifyHapgCommand
 */
export const de_ModifyHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyHapgResponse(data, context);
  const response: ModifyHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyHapgCommandError
 */
const de_ModifyHapgCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ModifyHsmCommand
 */
export const de_ModifyHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyHsmResponse(data, context);
  const response: ModifyHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyHsmCommandError
 */
const de_ModifyHsmCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ModifyLunaClientCommand
 */
export const de_ModifyLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyLunaClientResponse(data, context);
  const response: ModifyLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyLunaClientCommandError
 */
const de_ModifyLunaClientCommandError = async (
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
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsFromResourceResponse(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommandError
 */
const de_RemoveTagsFromResourceCommandError = async (
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
      throw await de_CloudHsmInternalExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CloudHsmInternalExceptionRes
 */
const de_CloudHsmInternalExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmInternalException(body, context);
  const exception = new CloudHsmInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmServiceExceptionRes
 */
const de_CloudHsmServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmServiceException(body, context);
  const exception = new CloudHsmServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
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
 * serializeAws_json1_1AddTagsToResourceRequest
 */
const se_AddTagsToResourceRequest = (input: AddTagsToResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1CreateHapgRequest
 */
const se_CreateHapgRequest = (input: CreateHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.Label != null && { Label: input.Label }),
  };
};

/**
 * serializeAws_json1_1CreateHsmRequest
 */
const se_CreateHsmRequest = (input: CreateHsmRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1CreateLunaClientRequest
 */
const se_CreateLunaClientRequest = (input: CreateLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.Label != null && { Label: input.Label }),
  };
};

/**
 * serializeAws_json1_1DeleteHapgRequest
 */
const se_DeleteHapgRequest = (input: DeleteHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.HapgArn != null && { HapgArn: input.HapgArn }),
  };
};

/**
 * serializeAws_json1_1DeleteHsmRequest
 */
const se_DeleteHsmRequest = (input: DeleteHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.HsmArn != null && { HsmArn: input.HsmArn }),
  };
};

/**
 * serializeAws_json1_1DeleteLunaClientRequest
 */
const se_DeleteLunaClientRequest = (input: DeleteLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
  };
};

/**
 * serializeAws_json1_1DescribeHapgRequest
 */
const se_DescribeHapgRequest = (input: DescribeHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.HapgArn != null && { HapgArn: input.HapgArn }),
  };
};

/**
 * serializeAws_json1_1DescribeHsmRequest
 */
const se_DescribeHsmRequest = (input: DescribeHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.HsmArn != null && { HsmArn: input.HsmArn }),
    ...(input.HsmSerialNumber != null && { HsmSerialNumber: input.HsmSerialNumber }),
  };
};

/**
 * serializeAws_json1_1DescribeLunaClientRequest
 */
const se_DescribeLunaClientRequest = (input: DescribeLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateFingerprint != null && { CertificateFingerprint: input.CertificateFingerprint }),
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
  };
};

/**
 * serializeAws_json1_1GetConfigRequest
 */
const se_GetConfigRequest = (input: GetConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
    ...(input.ClientVersion != null && { ClientVersion: input.ClientVersion }),
    ...(input.HapgList != null && { HapgList: se_HapgList(input.HapgList, context) }),
  };
};

/**
 * serializeAws_json1_1HapgList
 */
const se_HapgList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListAvailableZonesRequest
 */
const se_ListAvailableZonesRequest = (input: ListAvailableZonesRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1ListHapgsRequest
 */
const se_ListHapgsRequest = (input: ListHapgsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListHsmsRequest
 */
const se_ListHsmsRequest = (input: ListHsmsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLunaClientsRequest
 */
const se_ListLunaClientsRequest = (input: ListLunaClientsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ModifyHapgRequest
 */
const se_ModifyHapgRequest = (input: ModifyHapgRequest, context: __SerdeContext): any => {
  return {
    ...(input.HapgArn != null && { HapgArn: input.HapgArn }),
    ...(input.Label != null && { Label: input.Label }),
    ...(input.PartitionSerialList != null && {
      PartitionSerialList: se_PartitionSerialList(input.PartitionSerialList, context),
    }),
  };
};

/**
 * serializeAws_json1_1ModifyHsmRequest
 */
const se_ModifyHsmRequest = (input: ModifyHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.EniIp != null && { EniIp: input.EniIp }),
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.HsmArn != null && { HsmArn: input.HsmArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.SyslogIp != null && { SyslogIp: input.SyslogIp }),
  };
};

/**
 * serializeAws_json1_1ModifyLunaClientRequest
 */
const se_ModifyLunaClientRequest = (input: ModifyLunaClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.ClientArn != null && { ClientArn: input.ClientArn }),
  };
};

/**
 * serializeAws_json1_1PartitionSerialList
 */
const se_PartitionSerialList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceRequest
 */
const se_RemoveTagsFromResourceRequest = (input: RemoveTagsFromResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeyList != null && { TagKeyList: se_TagKeyList(input.TagKeyList, context) }),
  };
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
 * deserializeAws_json1_1AddTagsToResourceResponse
 */
const de_AddTagsToResourceResponse = (output: any, context: __SerdeContext): AddTagsToResourceResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1AZList
 */
const de_AZList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ClientList
 */
const de_ClientList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1CloudHsmInternalException
 */
const de_CloudHsmInternalException = (output: any, context: __SerdeContext): CloudHsmInternalException => {
  return {
    message: __expectString(output.message),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmServiceException
 */
const de_CloudHsmServiceException = (output: any, context: __SerdeContext): CloudHsmServiceException => {
  return {
    message: __expectString(output.message),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

/**
 * deserializeAws_json1_1CreateHapgResponse
 */
const de_CreateHapgResponse = (output: any, context: __SerdeContext): CreateHapgResponse => {
  return {
    HapgArn: __expectString(output.HapgArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateHsmResponse
 */
const de_CreateHsmResponse = (output: any, context: __SerdeContext): CreateHsmResponse => {
  return {
    HsmArn: __expectString(output.HsmArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLunaClientResponse
 */
const de_CreateLunaClientResponse = (output: any, context: __SerdeContext): CreateLunaClientResponse => {
  return {
    ClientArn: __expectString(output.ClientArn),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteHapgResponse
 */
const de_DeleteHapgResponse = (output: any, context: __SerdeContext): DeleteHapgResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteHsmResponse
 */
const de_DeleteHsmResponse = (output: any, context: __SerdeContext): DeleteHsmResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteLunaClientResponse
 */
const de_DeleteLunaClientResponse = (output: any, context: __SerdeContext): DeleteLunaClientResponse => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeHapgResponse
 */
const de_DescribeHapgResponse = (output: any, context: __SerdeContext): DescribeHapgResponse => {
  return {
    HapgArn: __expectString(output.HapgArn),
    HapgSerial: __expectString(output.HapgSerial),
    HsmsLastActionFailed:
      output.HsmsLastActionFailed != null ? de_HsmList(output.HsmsLastActionFailed, context) : undefined,
    HsmsPendingDeletion:
      output.HsmsPendingDeletion != null ? de_HsmList(output.HsmsPendingDeletion, context) : undefined,
    HsmsPendingRegistration:
      output.HsmsPendingRegistration != null ? de_HsmList(output.HsmsPendingRegistration, context) : undefined,
    Label: __expectString(output.Label),
    LastModifiedTimestamp: __expectString(output.LastModifiedTimestamp),
    PartitionSerialList:
      output.PartitionSerialList != null ? de_PartitionSerialList(output.PartitionSerialList, context) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeHsmResponse
 */
const de_DescribeHsmResponse = (output: any, context: __SerdeContext): DescribeHsmResponse => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    EniId: __expectString(output.EniId),
    EniIp: __expectString(output.EniIp),
    HsmArn: __expectString(output.HsmArn),
    HsmType: __expectString(output.HsmType),
    IamRoleArn: __expectString(output.IamRoleArn),
    Partitions: output.Partitions != null ? de_PartitionList(output.Partitions, context) : undefined,
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

/**
 * deserializeAws_json1_1DescribeLunaClientResponse
 */
const de_DescribeLunaClientResponse = (output: any, context: __SerdeContext): DescribeLunaClientResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateFingerprint: __expectString(output.CertificateFingerprint),
    ClientArn: __expectString(output.ClientArn),
    Label: __expectString(output.Label),
    LastModifiedTimestamp: __expectString(output.LastModifiedTimestamp),
  } as any;
};

/**
 * deserializeAws_json1_1GetConfigResponse
 */
const de_GetConfigResponse = (output: any, context: __SerdeContext): GetConfigResponse => {
  return {
    ConfigCred: __expectString(output.ConfigCred),
    ConfigFile: __expectString(output.ConfigFile),
    ConfigType: __expectString(output.ConfigType),
  } as any;
};

/**
 * deserializeAws_json1_1HapgList
 */
const de_HapgList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1HsmList
 */
const de_HsmList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    message: __expectString(output.message),
    retryable: __expectBoolean(output.retryable),
  } as any;
};

/**
 * deserializeAws_json1_1ListAvailableZonesResponse
 */
const de_ListAvailableZonesResponse = (output: any, context: __SerdeContext): ListAvailableZonesResponse => {
  return {
    AZList: output.AZList != null ? de_AZList(output.AZList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListHapgsResponse
 */
const de_ListHapgsResponse = (output: any, context: __SerdeContext): ListHapgsResponse => {
  return {
    HapgList: output.HapgList != null ? de_HapgList(output.HapgList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListHsmsResponse
 */
const de_ListHsmsResponse = (output: any, context: __SerdeContext): ListHsmsResponse => {
  return {
    HsmList: output.HsmList != null ? de_HsmList(output.HsmList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLunaClientsResponse
 */
const de_ListLunaClientsResponse = (output: any, context: __SerdeContext): ListLunaClientsResponse => {
  return {
    ClientList: output.ClientList != null ? de_ClientList(output.ClientList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyHapgResponse
 */
const de_ModifyHapgResponse = (output: any, context: __SerdeContext): ModifyHapgResponse => {
  return {
    HapgArn: __expectString(output.HapgArn),
  } as any;
};

/**
 * deserializeAws_json1_1ModifyHsmResponse
 */
const de_ModifyHsmResponse = (output: any, context: __SerdeContext): ModifyHsmResponse => {
  return {
    HsmArn: __expectString(output.HsmArn),
  } as any;
};

/**
 * deserializeAws_json1_1ModifyLunaClientResponse
 */
const de_ModifyLunaClientResponse = (output: any, context: __SerdeContext): ModifyLunaClientResponse => {
  return {
    ClientArn: __expectString(output.ClientArn),
  } as any;
};

/**
 * deserializeAws_json1_1PartitionList
 */
const de_PartitionList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PartitionSerialList
 */
const de_PartitionSerialList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1RemoveTagsFromResourceResponse
 */
const de_RemoveTagsFromResourceResponse = (output: any, context: __SerdeContext): RemoveTagsFromResourceResponse => {
  return {
    Status: __expectString(output.Status),
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `CloudHsmFrontendService.${operation}`,
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
