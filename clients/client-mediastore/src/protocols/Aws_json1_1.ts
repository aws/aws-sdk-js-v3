// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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

import { CreateContainerCommandInput, CreateContainerCommandOutput } from "../commands/CreateContainerCommand";
import { DeleteContainerCommandInput, DeleteContainerCommandOutput } from "../commands/DeleteContainerCommand";
import {
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput,
} from "../commands/DeleteContainerPolicyCommand";
import { DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput } from "../commands/DeleteCorsPolicyCommand";
import {
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
import { DeleteMetricPolicyCommandInput, DeleteMetricPolicyCommandOutput } from "../commands/DeleteMetricPolicyCommand";
import { DescribeContainerCommandInput, DescribeContainerCommandOutput } from "../commands/DescribeContainerCommand";
import { GetContainerPolicyCommandInput, GetContainerPolicyCommandOutput } from "../commands/GetContainerPolicyCommand";
import { GetCorsPolicyCommandInput, GetCorsPolicyCommandOutput } from "../commands/GetCorsPolicyCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import { GetMetricPolicyCommandInput, GetMetricPolicyCommandOutput } from "../commands/GetMetricPolicyCommand";
import { ListContainersCommandInput, ListContainersCommandOutput } from "../commands/ListContainersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutContainerPolicyCommandInput, PutContainerPolicyCommandOutput } from "../commands/PutContainerPolicyCommand";
import { PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput } from "../commands/PutCorsPolicyCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "../commands/PutLifecyclePolicyCommand";
import { PutMetricPolicyCommandInput, PutMetricPolicyCommandOutput } from "../commands/PutMetricPolicyCommand";
import { StartAccessLoggingCommandInput, StartAccessLoggingCommandOutput } from "../commands/StartAccessLoggingCommand";
import { StopAccessLoggingCommandInput, StopAccessLoggingCommandOutput } from "../commands/StopAccessLoggingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { MediaStoreServiceException as __BaseException } from "../models/MediaStoreServiceException";
import {
  Container,
  ContainerInUseException,
  ContainerNotFoundException,
  CorsPolicyNotFoundException,
  CorsRule,
  CreateContainerInput,
  CreateContainerOutput,
  DeleteContainerInput,
  DeleteContainerOutput,
  DeleteContainerPolicyInput,
  DeleteContainerPolicyOutput,
  DeleteCorsPolicyInput,
  DeleteCorsPolicyOutput,
  DeleteLifecyclePolicyInput,
  DeleteLifecyclePolicyOutput,
  DeleteMetricPolicyInput,
  DeleteMetricPolicyOutput,
  DescribeContainerInput,
  DescribeContainerOutput,
  GetContainerPolicyInput,
  GetContainerPolicyOutput,
  GetCorsPolicyInput,
  GetCorsPolicyOutput,
  GetLifecyclePolicyInput,
  GetLifecyclePolicyOutput,
  GetMetricPolicyInput,
  GetMetricPolicyOutput,
  InternalServerError,
  LimitExceededException,
  ListContainersInput,
  ListContainersOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  MethodName,
  MetricPolicy,
  MetricPolicyRule,
  PolicyNotFoundException,
  PutContainerPolicyInput,
  PutContainerPolicyOutput,
  PutCorsPolicyInput,
  PutCorsPolicyOutput,
  PutLifecyclePolicyInput,
  PutLifecyclePolicyOutput,
  PutMetricPolicyInput,
  PutMetricPolicyOutput,
  StartAccessLoggingInput,
  StartAccessLoggingOutput,
  StopAccessLoggingInput,
  StopAccessLoggingOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateContainerCommand
 */
export const se_CreateContainerCommand = async (
  input: CreateContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.CreateContainer",
  };
  let body: any;
  body = JSON.stringify(se_CreateContainerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerCommand
 */
export const se_DeleteContainerCommand = async (
  input: DeleteContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteContainer",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContainerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerPolicyCommand
 */
export const se_DeleteContainerPolicyCommand = async (
  input: DeleteContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteContainerPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContainerPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCorsPolicyCommand
 */
export const se_DeleteCorsPolicyCommand = async (
  input: DeleteCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteCorsPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCorsPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLifecyclePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMetricPolicyCommand
 */
export const se_DeleteMetricPolicyCommand = async (
  input: DeleteMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DeleteMetricPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteMetricPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContainerCommand
 */
export const se_DescribeContainerCommand = async (
  input: DescribeContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.DescribeContainer",
  };
  let body: any;
  body = JSON.stringify(se_DescribeContainerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerPolicyCommand
 */
export const se_GetContainerPolicyCommand = async (
  input: GetContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetContainerPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetContainerPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCorsPolicyCommand
 */
export const se_GetCorsPolicyCommand = async (
  input: GetCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetCorsPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetCorsPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetLifecyclePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMetricPolicyCommand
 */
export const se_GetMetricPolicyCommand = async (
  input: GetMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.GetMetricPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetMetricPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContainersCommand
 */
export const se_ListContainersCommand = async (
  input: ListContainersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.ListContainers",
  };
  let body: any;
  body = JSON.stringify(se_ListContainersInput(input, context));
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
    "x-amz-target": "MediaStore_20170901.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutContainerPolicyCommand
 */
export const se_PutContainerPolicyCommand = async (
  input: PutContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutContainerPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutContainerPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutCorsPolicyCommand
 */
export const se_PutCorsPolicyCommand = async (
  input: PutCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutCorsPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutCorsPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLifecyclePolicyCommand
 */
export const se_PutLifecyclePolicyCommand = async (
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutLifecyclePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutLifecyclePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutMetricPolicyCommand
 */
export const se_PutMetricPolicyCommand = async (
  input: PutMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.PutMetricPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutMetricPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAccessLoggingCommand
 */
export const se_StartAccessLoggingCommand = async (
  input: StartAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.StartAccessLogging",
  };
  let body: any;
  body = JSON.stringify(se_StartAccessLoggingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAccessLoggingCommand
 */
export const se_StopAccessLoggingCommand = async (
  input: StopAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MediaStore_20170901.StopAccessLogging",
  };
  let body: any;
  body = JSON.stringify(se_StopAccessLoggingInput(input, context));
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
    "x-amz-target": "MediaStore_20170901.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
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
    "x-amz-target": "MediaStore_20170901.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateContainerCommand
 */
export const de_CreateContainerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateContainerOutput(data, context);
  const response: CreateContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateContainerCommandError
 */
const de_CreateContainerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.mediastore#LimitExceededException":
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
 * deserializeAws_json1_1DeleteContainerCommand
 */
export const de_DeleteContainerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContainerOutput(data, context);
  const response: DeleteContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteContainerCommandError
 */
const de_DeleteContainerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteContainerPolicyCommand
 */
export const de_DeleteContainerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContainerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteContainerPolicyOutput(data, context);
  const response: DeleteContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteContainerPolicyCommandError
 */
const de_DeleteContainerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteCorsPolicyCommand
 */
export const de_DeleteCorsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCorsPolicyOutput(data, context);
  const response: DeleteCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCorsPolicyCommandError
 */
const de_DeleteCorsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCorsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "CorsPolicyNotFoundException":
    case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
      throw await de_CorsPolicyNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLifecyclePolicyOutput(data, context);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLifecyclePolicyCommandError
 */
const de_DeleteLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteMetricPolicyCommand
 */
export const de_DeleteMetricPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMetricPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMetricPolicyOutput(data, context);
  const response: DeleteMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMetricPolicyCommandError
 */
const de_DeleteMetricPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeContainerCommand
 */
export const de_DescribeContainerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeContainerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContainerOutput(data, context);
  const response: DescribeContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeContainerCommandError
 */
const de_DescribeContainerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContainerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetContainerPolicyCommand
 */
export const de_GetContainerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContainerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContainerPolicyOutput(data, context);
  const response: GetContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContainerPolicyCommandError
 */
const de_GetContainerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCorsPolicyCommand
 */
export const de_GetCorsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCorsPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCorsPolicyOutput(data, context);
  const response: GetCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCorsPolicyCommandError
 */
const de_GetCorsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCorsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "CorsPolicyNotFoundException":
    case "com.amazonaws.mediastore#CorsPolicyNotFoundException":
      throw await de_CorsPolicyNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetLifecyclePolicyCommand
 */
export const de_GetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLifecyclePolicyOutput(data, context);
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyCommandError
 */
const de_GetLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetMetricPolicyCommand
 */
export const de_GetMetricPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMetricPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMetricPolicyOutput(data, context);
  const response: GetMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMetricPolicyCommandError
 */
const de_GetMetricPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.mediastore#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListContainersCommand
 */
export const de_ListContainersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListContainersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListContainersOutput(data, context);
  const response: ListContainersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListContainersCommandError
 */
const de_ListContainersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
  contents = de_ListTagsForResourceOutput(data, context);
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
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutContainerPolicyCommand
 */
export const de_PutContainerPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutContainerPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutContainerPolicyOutput(data, context);
  const response: PutContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutContainerPolicyCommandError
 */
const de_PutContainerPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutCorsPolicyCommand
 */
export const de_PutCorsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCorsPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutCorsPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutCorsPolicyOutput(data, context);
  const response: PutCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutCorsPolicyCommandError
 */
const de_PutCorsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCorsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutLifecyclePolicyCommand
 */
export const de_PutLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLifecyclePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLifecyclePolicyOutput(data, context);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutLifecyclePolicyCommandError
 */
const de_PutLifecyclePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecyclePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutMetricPolicyCommand
 */
export const de_PutMetricPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMetricPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutMetricPolicyOutput(data, context);
  const response: PutMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutMetricPolicyCommandError
 */
const de_PutMetricPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartAccessLoggingCommand
 */
export const de_StartAccessLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAccessLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAccessLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartAccessLoggingOutput(data, context);
  const response: StartAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartAccessLoggingCommandError
 */
const de_StartAccessLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAccessLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopAccessLoggingCommand
 */
export const de_StopAccessLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAccessLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopAccessLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopAccessLoggingOutput(data, context);
  const response: StopAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopAccessLoggingCommandError
 */
const de_StopAccessLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAccessLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
  contents = de_TagResourceOutput(data, context);
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
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
  contents = de_UntagResourceOutput(data, context);
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
    case "ContainerInUseException":
    case "com.amazonaws.mediastore#ContainerInUseException":
      throw await de_ContainerInUseExceptionRes(parsedOutput, context);
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore#ContainerNotFoundException":
      throw await de_ContainerNotFoundExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastore#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_json1_1ContainerInUseExceptionRes
 */
const de_ContainerInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ContainerInUseException(body, context);
  const exception = new ContainerInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ContainerNotFoundExceptionRes
 */
const de_ContainerNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ContainerNotFoundException(body, context);
  const exception = new ContainerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CorsPolicyNotFoundExceptionRes
 */
const de_CorsPolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CorsPolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CorsPolicyNotFoundException(body, context);
  const exception = new CorsPolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
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
 * deserializeAws_json1_1PolicyNotFoundExceptionRes
 */
const de_PolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyNotFoundException(body, context);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AllowedHeaders
 */
const se_AllowedHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AllowedMethods
 */
const se_AllowedMethods = (input: (MethodName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AllowedOrigins
 */
const se_AllowedOrigins = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CorsPolicy
 */
const se_CorsPolicy = (input: CorsRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CorsRule(entry, context);
    });
};

/**
 * serializeAws_json1_1CorsRule
 */
const se_CorsRule = (input: CorsRule, context: __SerdeContext): any => {
  return {
    ...(input.AllowedHeaders != null && { AllowedHeaders: se_AllowedHeaders(input.AllowedHeaders, context) }),
    ...(input.AllowedMethods != null && { AllowedMethods: se_AllowedMethods(input.AllowedMethods, context) }),
    ...(input.AllowedOrigins != null && { AllowedOrigins: se_AllowedOrigins(input.AllowedOrigins, context) }),
    ...(input.ExposeHeaders != null && { ExposeHeaders: se_ExposeHeaders(input.ExposeHeaders, context) }),
    ...(input.MaxAgeSeconds != null && { MaxAgeSeconds: input.MaxAgeSeconds }),
  };
};

/**
 * serializeAws_json1_1CreateContainerInput
 */
const se_CreateContainerInput = (input: CreateContainerInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteContainerInput
 */
const se_DeleteContainerInput = (input: DeleteContainerInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1DeleteContainerPolicyInput
 */
const se_DeleteContainerPolicyInput = (input: DeleteContainerPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1DeleteCorsPolicyInput
 */
const se_DeleteCorsPolicyInput = (input: DeleteCorsPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1DeleteLifecyclePolicyInput
 */
const se_DeleteLifecyclePolicyInput = (input: DeleteLifecyclePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1DeleteMetricPolicyInput
 */
const se_DeleteMetricPolicyInput = (input: DeleteMetricPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1DescribeContainerInput
 */
const se_DescribeContainerInput = (input: DescribeContainerInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1ExposeHeaders
 */
const se_ExposeHeaders = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetContainerPolicyInput
 */
const se_GetContainerPolicyInput = (input: GetContainerPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1GetCorsPolicyInput
 */
const se_GetCorsPolicyInput = (input: GetCorsPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1GetLifecyclePolicyInput
 */
const se_GetLifecyclePolicyInput = (input: GetLifecyclePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1GetMetricPolicyInput
 */
const se_GetMetricPolicyInput = (input: GetMetricPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1ListContainersInput
 */
const se_ListContainersInput = (input: ListContainersInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Resource != null && { Resource: input.Resource }),
  };
};

/**
 * serializeAws_json1_1MetricPolicy
 */
const se_MetricPolicy = (input: MetricPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ContainerLevelMetrics != null && { ContainerLevelMetrics: input.ContainerLevelMetrics }),
    ...(input.MetricPolicyRules != null && {
      MetricPolicyRules: se_MetricPolicyRules(input.MetricPolicyRules, context),
    }),
  };
};

/**
 * serializeAws_json1_1MetricPolicyRule
 */
const se_MetricPolicyRule = (input: MetricPolicyRule, context: __SerdeContext): any => {
  return {
    ...(input.ObjectGroup != null && { ObjectGroup: input.ObjectGroup }),
    ...(input.ObjectGroupName != null && { ObjectGroupName: input.ObjectGroupName }),
  };
};

/**
 * serializeAws_json1_1MetricPolicyRules
 */
const se_MetricPolicyRules = (input: MetricPolicyRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricPolicyRule(entry, context);
    });
};

/**
 * serializeAws_json1_1PutContainerPolicyInput
 */
const se_PutContainerPolicyInput = (input: PutContainerPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

/**
 * serializeAws_json1_1PutCorsPolicyInput
 */
const se_PutCorsPolicyInput = (input: PutCorsPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.CorsPolicy != null && { CorsPolicy: se_CorsPolicy(input.CorsPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1PutLifecyclePolicyInput
 */
const se_PutLifecyclePolicyInput = (input: PutLifecyclePolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.LifecyclePolicy != null && { LifecyclePolicy: input.LifecyclePolicy }),
  };
};

/**
 * serializeAws_json1_1PutMetricPolicyInput
 */
const se_PutMetricPolicyInput = (input: PutMetricPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.MetricPolicy != null && { MetricPolicy: se_MetricPolicy(input.MetricPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1StartAccessLoggingInput
 */
const se_StartAccessLoggingInput = (input: StartAccessLoggingInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

/**
 * serializeAws_json1_1StopAccessLoggingInput
 */
const se_StopAccessLoggingInput = (input: StopAccessLoggingInput, context: __SerdeContext): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
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
 * serializeAws_json1_1TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Resource != null && { Resource: input.Resource }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Resource != null && { Resource: input.Resource }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1AllowedHeaders
 */
const de_AllowedHeaders = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AllowedMethods
 */
const de_AllowedMethods = (output: any, context: __SerdeContext): (MethodName | string)[] => {
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
 * deserializeAws_json1_1AllowedOrigins
 */
const de_AllowedOrigins = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return {
    ARN: __expectString(output.ARN),
    AccessLoggingEnabled: __expectBoolean(output.AccessLoggingEnabled),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerInUseException
 */
const de_ContainerInUseException = (output: any, context: __SerdeContext): ContainerInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ContainerList
 */
const de_ContainerList = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Container(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContainerNotFoundException
 */
const de_ContainerNotFoundException = (output: any, context: __SerdeContext): ContainerNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CorsPolicy
 */
const de_CorsPolicy = (output: any, context: __SerdeContext): CorsRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CorsRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CorsPolicyNotFoundException
 */
const de_CorsPolicyNotFoundException = (output: any, context: __SerdeContext): CorsPolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CorsRule
 */
const de_CorsRule = (output: any, context: __SerdeContext): CorsRule => {
  return {
    AllowedHeaders: output.AllowedHeaders != null ? de_AllowedHeaders(output.AllowedHeaders, context) : undefined,
    AllowedMethods: output.AllowedMethods != null ? de_AllowedMethods(output.AllowedMethods, context) : undefined,
    AllowedOrigins: output.AllowedOrigins != null ? de_AllowedOrigins(output.AllowedOrigins, context) : undefined,
    ExposeHeaders: output.ExposeHeaders != null ? de_ExposeHeaders(output.ExposeHeaders, context) : undefined,
    MaxAgeSeconds: __expectInt32(output.MaxAgeSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1CreateContainerOutput
 */
const de_CreateContainerOutput = (output: any, context: __SerdeContext): CreateContainerOutput => {
  return {
    Container: output.Container != null ? de_Container(output.Container, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteContainerOutput
 */
const de_DeleteContainerOutput = (output: any, context: __SerdeContext): DeleteContainerOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteContainerPolicyOutput
 */
const de_DeleteContainerPolicyOutput = (output: any, context: __SerdeContext): DeleteContainerPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteCorsPolicyOutput
 */
const de_DeleteCorsPolicyOutput = (output: any, context: __SerdeContext): DeleteCorsPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteLifecyclePolicyOutput
 */
const de_DeleteLifecyclePolicyOutput = (output: any, context: __SerdeContext): DeleteLifecyclePolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteMetricPolicyOutput
 */
const de_DeleteMetricPolicyOutput = (output: any, context: __SerdeContext): DeleteMetricPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeContainerOutput
 */
const de_DescribeContainerOutput = (output: any, context: __SerdeContext): DescribeContainerOutput => {
  return {
    Container: output.Container != null ? de_Container(output.Container, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExposeHeaders
 */
const de_ExposeHeaders = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1GetContainerPolicyOutput
 */
const de_GetContainerPolicyOutput = (output: any, context: __SerdeContext): GetContainerPolicyOutput => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1GetCorsPolicyOutput
 */
const de_GetCorsPolicyOutput = (output: any, context: __SerdeContext): GetCorsPolicyOutput => {
  return {
    CorsPolicy: output.CorsPolicy != null ? de_CorsPolicy(output.CorsPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLifecyclePolicyOutput
 */
const de_GetLifecyclePolicyOutput = (output: any, context: __SerdeContext): GetLifecyclePolicyOutput => {
  return {
    LifecyclePolicy: __expectString(output.LifecyclePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetMetricPolicyOutput
 */
const de_GetMetricPolicyOutput = (output: any, context: __SerdeContext): GetMetricPolicyOutput => {
  return {
    MetricPolicy: output.MetricPolicy != null ? de_MetricPolicy(output.MetricPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListContainersOutput
 */
const de_ListContainersOutput = (output: any, context: __SerdeContext): ListContainersOutput => {
  return {
    Containers: output.Containers != null ? de_ContainerList(output.Containers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricPolicy
 */
const de_MetricPolicy = (output: any, context: __SerdeContext): MetricPolicy => {
  return {
    ContainerLevelMetrics: __expectString(output.ContainerLevelMetrics),
    MetricPolicyRules:
      output.MetricPolicyRules != null ? de_MetricPolicyRules(output.MetricPolicyRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricPolicyRule
 */
const de_MetricPolicyRule = (output: any, context: __SerdeContext): MetricPolicyRule => {
  return {
    ObjectGroup: __expectString(output.ObjectGroup),
    ObjectGroupName: __expectString(output.ObjectGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1MetricPolicyRules
 */
const de_MetricPolicyRules = (output: any, context: __SerdeContext): MetricPolicyRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricPolicyRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PolicyNotFoundException
 */
const de_PolicyNotFoundException = (output: any, context: __SerdeContext): PolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PutContainerPolicyOutput
 */
const de_PutContainerPolicyOutput = (output: any, context: __SerdeContext): PutContainerPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutCorsPolicyOutput
 */
const de_PutCorsPolicyOutput = (output: any, context: __SerdeContext): PutCorsPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutLifecyclePolicyOutput
 */
const de_PutLifecyclePolicyOutput = (output: any, context: __SerdeContext): PutLifecyclePolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutMetricPolicyOutput
 */
const de_PutMetricPolicyOutput = (output: any, context: __SerdeContext): PutMetricPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartAccessLoggingOutput
 */
const de_StartAccessLoggingOutput = (output: any, context: __SerdeContext): StartAccessLoggingOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StopAccessLoggingOutput
 */
const de_StopAccessLoggingOutput = (output: any, context: __SerdeContext): StopAccessLoggingOutput => {
  return {} as any;
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
 * deserializeAws_json1_1TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
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
