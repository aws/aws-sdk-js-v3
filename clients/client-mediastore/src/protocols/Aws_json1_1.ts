// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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
  DeleteContainerPolicyInput,
  DeleteCorsPolicyInput,
  DeleteLifecyclePolicyInput,
  DeleteMetricPolicyInput,
  DescribeContainerInput,
  DescribeContainerOutput,
  GetContainerPolicyInput,
  GetCorsPolicyInput,
  GetLifecyclePolicyInput,
  GetMetricPolicyInput,
  InternalServerError,
  LimitExceededException,
  ListContainersInput,
  ListContainersOutput,
  ListTagsForResourceInput,
  MethodName,
  MetricPolicy,
  MetricPolicyRule,
  PolicyNotFoundException,
  PutContainerPolicyInput,
  PutCorsPolicyInput,
  PutLifecyclePolicyInput,
  PutMetricPolicyInput,
  StartAccessLoggingInput,
  StopAccessLoggingInput,
  Tag,
  TagResourceInput,
  UntagResourceInput,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateContainerCommand
 */
export const se_CreateContainerCommand = async (
  input: CreateContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContainer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerCommand
 */
export const se_DeleteContainerCommand = async (
  input: DeleteContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContainer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContainerPolicyCommand
 */
export const se_DeleteContainerPolicyCommand = async (
  input: DeleteContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContainerPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCorsPolicyCommand
 */
export const se_DeleteCorsPolicyCommand = async (
  input: DeleteCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCorsPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLifecyclePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMetricPolicyCommand
 */
export const se_DeleteMetricPolicyCommand = async (
  input: DeleteMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMetricPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContainerCommand
 */
export const se_DescribeContainerCommand = async (
  input: DescribeContainerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContainer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContainerPolicyCommand
 */
export const se_GetContainerPolicyCommand = async (
  input: GetContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContainerPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCorsPolicyCommand
 */
export const se_GetCorsPolicyCommand = async (
  input: GetCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCorsPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLifecyclePolicyCommand
 */
export const se_GetLifecyclePolicyCommand = async (
  input: GetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLifecyclePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMetricPolicyCommand
 */
export const se_GetMetricPolicyCommand = async (
  input: GetMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMetricPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContainersCommand
 */
export const se_ListContainersCommand = async (
  input: ListContainersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContainers");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutContainerPolicyCommand
 */
export const se_PutContainerPolicyCommand = async (
  input: PutContainerPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutContainerPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutCorsPolicyCommand
 */
export const se_PutCorsPolicyCommand = async (
  input: PutCorsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutCorsPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLifecyclePolicyCommand
 */
export const se_PutLifecyclePolicyCommand = async (
  input: PutLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLifecyclePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutMetricPolicyCommand
 */
export const se_PutMetricPolicyCommand = async (
  input: PutMetricPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutMetricPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAccessLoggingCommand
 */
export const se_StartAccessLoggingCommand = async (
  input: StartAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAccessLogging");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAccessLoggingCommand
 */
export const se_StopAccessLoggingCommand = async (
  input: StopAccessLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAccessLogging");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteContainerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutContainerPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutCorsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutMetricPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopAccessLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AllowedHeaders omitted.

// se_AllowedMethods omitted.

// se_AllowedOrigins omitted.

// se_CorsPolicy omitted.

// se_CorsRule omitted.

// se_CreateContainerInput omitted.

// se_DeleteContainerInput omitted.

// se_DeleteContainerPolicyInput omitted.

// se_DeleteCorsPolicyInput omitted.

// se_DeleteLifecyclePolicyInput omitted.

// se_DeleteMetricPolicyInput omitted.

// se_DescribeContainerInput omitted.

// se_ExposeHeaders omitted.

// se_GetContainerPolicyInput omitted.

// se_GetCorsPolicyInput omitted.

// se_GetLifecyclePolicyInput omitted.

// se_GetMetricPolicyInput omitted.

// se_ListContainersInput omitted.

// se_ListTagsForResourceInput omitted.

// se_MetricPolicy omitted.

// se_MetricPolicyRule omitted.

// se_MetricPolicyRules omitted.

// se_PutContainerPolicyInput omitted.

// se_PutCorsPolicyInput omitted.

// se_PutLifecyclePolicyInput omitted.

// se_PutMetricPolicyInput omitted.

// se_StartAccessLoggingInput omitted.

// se_StopAccessLoggingInput omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_UntagResourceInput omitted.

// de_AllowedHeaders omitted.

// de_AllowedMethods omitted.

// de_AllowedOrigins omitted.

/**
 * deserializeAws_json1_1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return take(output, {
    ARN: __expectString,
    AccessLoggingEnabled: __expectBoolean,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Endpoint: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ContainerInUseException omitted.

/**
 * deserializeAws_json1_1ContainerList
 */
const de_ContainerList = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Container(entry, context);
    });
  return retVal;
};

// de_ContainerNotFoundException omitted.

// de_CorsPolicy omitted.

// de_CorsPolicyNotFoundException omitted.

// de_CorsRule omitted.

/**
 * deserializeAws_json1_1CreateContainerOutput
 */
const de_CreateContainerOutput = (output: any, context: __SerdeContext): CreateContainerOutput => {
  return take(output, {
    Container: (_: any) => de_Container(_, context),
  }) as any;
};

// de_DeleteContainerOutput omitted.

// de_DeleteContainerPolicyOutput omitted.

// de_DeleteCorsPolicyOutput omitted.

// de_DeleteLifecyclePolicyOutput omitted.

// de_DeleteMetricPolicyOutput omitted.

/**
 * deserializeAws_json1_1DescribeContainerOutput
 */
const de_DescribeContainerOutput = (output: any, context: __SerdeContext): DescribeContainerOutput => {
  return take(output, {
    Container: (_: any) => de_Container(_, context),
  }) as any;
};

// de_ExposeHeaders omitted.

// de_GetContainerPolicyOutput omitted.

// de_GetCorsPolicyOutput omitted.

// de_GetLifecyclePolicyOutput omitted.

// de_GetMetricPolicyOutput omitted.

// de_InternalServerError omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListContainersOutput
 */
const de_ListContainersOutput = (output: any, context: __SerdeContext): ListContainersOutput => {
  return take(output, {
    Containers: (_: any) => de_ContainerList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

// de_MetricPolicy omitted.

// de_MetricPolicyRule omitted.

// de_MetricPolicyRules omitted.

// de_PolicyNotFoundException omitted.

// de_PutContainerPolicyOutput omitted.

// de_PutCorsPolicyOutput omitted.

// de_PutLifecyclePolicyOutput omitted.

// de_PutMetricPolicyOutput omitted.

// de_StartAccessLoggingOutput omitted.

// de_StopAccessLoggingOutput omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

// de_UntagResourceOutput omitted.

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `MediaStore_20170901.${operation}`,
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
