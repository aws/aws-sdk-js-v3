// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "../commands/DeleteScalingPolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "../commands/DeleteScheduledActionCommand";
import {
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
} from "../commands/DeregisterScalableTargetCommand";
import {
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "../commands/DescribeScalableTargetsCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "../commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "../commands/RegisterScalableTargetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { ApplicationAutoScalingServiceException as __BaseException } from "../models/ApplicationAutoScalingServiceException";
import {
  Alarm,
  ConcurrentUpdateException,
  CustomizedMetricSpecification,
  DeleteScalingPolicyRequest,
  DeleteScalingPolicyResponse,
  DeleteScheduledActionRequest,
  DeleteScheduledActionResponse,
  DeregisterScalableTargetRequest,
  DeregisterScalableTargetResponse,
  DescribeScalableTargetsRequest,
  DescribeScalableTargetsResponse,
  DescribeScalingActivitiesRequest,
  DescribeScalingActivitiesResponse,
  DescribeScalingPoliciesRequest,
  DescribeScalingPoliciesResponse,
  DescribeScheduledActionsRequest,
  DescribeScheduledActionsResponse,
  FailedResourceAccessException,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MetricDimension,
  NotScaledReason,
  ObjectNotFoundException,
  PredefinedMetricSpecification,
  PutScalingPolicyRequest,
  PutScalingPolicyResponse,
  PutScheduledActionRequest,
  PutScheduledActionResponse,
  RegisterScalableTargetRequest,
  RegisterScalableTargetResponse,
  ResourceNotFoundException,
  ScalableTarget,
  ScalableTargetAction,
  ScalingActivity,
  ScalingPolicy,
  ScheduledAction,
  StepAdjustment,
  StepScalingPolicyConfiguration,
  SuspendedState,
  TagResourceRequest,
  TagResourceResponse,
  TargetTrackingMetric,
  TargetTrackingMetricDataQuery,
  TargetTrackingMetricDimension,
  TargetTrackingMetricStat,
  TargetTrackingScalingPolicyConfiguration,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1DeleteScalingPolicyCommand
 */
export const se_DeleteScalingPolicyCommand = async (
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScalingPolicy");
  let body: any;
  body = JSON.stringify(se_DeleteScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteScheduledActionCommand
 */
export const se_DeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScheduledAction");
  let body: any;
  body = JSON.stringify(se_DeleteScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterScalableTargetCommand
 */
export const se_DeregisterScalableTargetCommand = async (
  input: DeregisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterScalableTarget");
  let body: any;
  body = JSON.stringify(se_DeregisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScalableTargetsCommand
 */
export const se_DescribeScalableTargetsCommand = async (
  input: DescribeScalableTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScalableTargets");
  let body: any;
  body = JSON.stringify(se_DescribeScalableTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScalingActivitiesCommand
 */
export const se_DescribeScalingActivitiesCommand = async (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScalingActivities");
  let body: any;
  body = JSON.stringify(se_DescribeScalingActivitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScalingPoliciesCommand
 */
export const se_DescribeScalingPoliciesCommand = async (
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScalingPolicies");
  let body: any;
  body = JSON.stringify(se_DescribeScalingPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScheduledActionsCommand
 */
export const se_DescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScheduledActions");
  let body: any;
  body = JSON.stringify(se_DescribeScheduledActionsRequest(input, context));
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
 * serializeAws_json1_1PutScalingPolicyCommand
 */
export const se_PutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutScalingPolicy");
  let body: any;
  body = JSON.stringify(se_PutScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutScheduledActionCommand
 */
export const se_PutScheduledActionCommand = async (
  input: PutScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutScheduledAction");
  let body: any;
  body = JSON.stringify(se_PutScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterScalableTargetCommand
 */
export const se_RegisterScalableTargetCommand = async (
  input: RegisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterScalableTarget");
  let body: any;
  body = JSON.stringify(se_RegisterScalableTargetRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DeleteScalingPolicyCommand
 */
export const de_DeleteScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteScalingPolicyResponse(data, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteScalingPolicyCommandError
 */
const de_DeleteScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteScheduledActionResponse(data, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteScheduledActionCommandError
 */
const de_DeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterScalableTargetCommand
 */
export const de_DeregisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterScalableTargetResponse(data, context);
  const response: DeregisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterScalableTargetCommandError
 */
const de_DeregisterScalableTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScalableTargetsCommand
 */
export const de_DescribeScalableTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalableTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalableTargetsResponse(data, context);
  const response: DescribeScalableTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeScalableTargetsCommandError
 */
const de_DescribeScalableTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScalingActivitiesCommand
 */
export const de_DescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingActivitiesResponse(data, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeScalingActivitiesCommandError
 */
const de_DescribeScalingActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScalingPoliciesCommand
 */
export const de_DescribeScalingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingPoliciesResponse(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeScalingPoliciesCommandError
 */
const de_DescribeScalingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      throw await de_FailedResourceAccessExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScheduledActionsCommand
 */
export const de_DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScheduledActionsResponse(data, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeScheduledActionsCommandError
 */
const de_DescribeScheduledActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationautoscaling#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutScalingPolicyCommand
 */
export const de_PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutScalingPolicyResponse(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutScalingPolicyCommandError
 */
const de_PutScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      throw await de_FailedResourceAccessExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutScheduledActionCommand
 */
export const de_PutScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutScheduledActionResponse(data, context);
  const response: PutScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutScheduledActionCommandError
 */
const de_PutScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterScalableTargetCommand
 */
export const de_RegisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterScalableTargetResponse(data, context);
  const response: RegisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterScalableTargetCommandError
 */
const de_RegisterScalableTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationautoscaling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.applicationautoscaling#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationautoscaling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConcurrentUpdateExceptionRes
 */
const de_ConcurrentUpdateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentUpdateException(body, context);
  const exception = new ConcurrentUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FailedResourceAccessExceptionRes
 */
const de_FailedResourceAccessExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedResourceAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FailedResourceAccessException(body, context);
  const exception = new FailedResourceAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceException(body, context);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
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
 * deserializeAws_json1_1ObjectNotFoundExceptionRes
 */
const de_ObjectNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ObjectNotFoundException(body, context);
  const exception = new ObjectNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1CustomizedMetricSpecification
 */
const se_CustomizedMetricSpecification = (input: CustomizedMetricSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Metrics != null && { Metrics: se_TargetTrackingMetricDataQueries(input.Metrics, context) }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_json1_1DeleteScalingPolicyRequest
 */
const se_DeleteScalingPolicyRequest = (input: DeleteScalingPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

/**
 * serializeAws_json1_1DeleteScheduledActionRequest
 */
const se_DeleteScheduledActionRequest = (input: DeleteScheduledActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionName != null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

/**
 * serializeAws_json1_1DeregisterScalableTargetRequest
 */
const se_DeregisterScalableTargetRequest = (input: DeregisterScalableTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

/**
 * serializeAws_json1_1DescribeScalableTargetsRequest
 */
const se_DescribeScalableTargetsRequest = (input: DescribeScalableTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceIds != null && { ResourceIds: se_ResourceIdsMaxLen1600(input.ResourceIds, context) }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

/**
 * serializeAws_json1_1DescribeScalingActivitiesRequest
 */
const se_DescribeScalingActivitiesRequest = (input: DescribeScalingActivitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeNotScaledActivities != null && { IncludeNotScaledActivities: input.IncludeNotScaledActivities }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

/**
 * serializeAws_json1_1DescribeScalingPoliciesRequest
 */
const se_DescribeScalingPoliciesRequest = (input: DescribeScalingPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyNames != null && { PolicyNames: se_ResourceIdsMaxLen1600(input.PolicyNames, context) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

/**
 * serializeAws_json1_1DescribeScheduledActionsRequest
 */
const se_DescribeScheduledActionsRequest = (input: DescribeScheduledActionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionNames != null && {
      ScheduledActionNames: se_ResourceIdsMaxLen1600(input.ScheduledActionNames, context),
    }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
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
 * serializeAws_json1_1MetricDimension
 */
const se_MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1MetricDimensions
 */
const se_MetricDimensions = (input: MetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricDimension(entry, context);
    });
};

/**
 * serializeAws_json1_1PredefinedMetricSpecification
 */
const se_PredefinedMetricSpecification = (input: PredefinedMetricSpecification, context: __SerdeContext): any => {
  return {
    ...(input.PredefinedMetricType != null && { PredefinedMetricType: input.PredefinedMetricType }),
    ...(input.ResourceLabel != null && { ResourceLabel: input.ResourceLabel }),
  };
};

/**
 * serializeAws_json1_1PutScalingPolicyRequest
 */
const se_PutScalingPolicyRequest = (input: PutScalingPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StepScalingPolicyConfiguration != null && {
      StepScalingPolicyConfiguration: se_StepScalingPolicyConfiguration(input.StepScalingPolicyConfiguration, context),
    }),
    ...(input.TargetTrackingScalingPolicyConfiguration != null && {
      TargetTrackingScalingPolicyConfiguration: se_TargetTrackingScalingPolicyConfiguration(
        input.TargetTrackingScalingPolicyConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1PutScheduledActionRequest
 */
const se_PutScheduledActionRequest = (input: PutScheduledActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalableTargetAction != null && {
      ScalableTargetAction: se_ScalableTargetAction(input.ScalableTargetAction, context),
    }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.ScheduledActionName != null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

/**
 * serializeAws_json1_1RegisterScalableTargetRequest
 */
const se_RegisterScalableTargetRequest = (input: RegisterScalableTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.SuspendedState != null && { SuspendedState: se_SuspendedState(input.SuspendedState, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1ResourceIdsMaxLen1600
 */
const se_ResourceIdsMaxLen1600 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ScalableTargetAction
 */
const se_ScalableTargetAction = (input: ScalableTargetAction, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
  };
};

/**
 * serializeAws_json1_1StepAdjustment
 */
const se_StepAdjustment = (input: StepAdjustment, context: __SerdeContext): any => {
  return {
    ...(input.MetricIntervalLowerBound != null && {
      MetricIntervalLowerBound: __serializeFloat(input.MetricIntervalLowerBound),
    }),
    ...(input.MetricIntervalUpperBound != null && {
      MetricIntervalUpperBound: __serializeFloat(input.MetricIntervalUpperBound),
    }),
    ...(input.ScalingAdjustment != null && { ScalingAdjustment: input.ScalingAdjustment }),
  };
};

/**
 * serializeAws_json1_1StepAdjustments
 */
const se_StepAdjustments = (input: StepAdjustment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StepAdjustment(entry, context);
    });
};

/**
 * serializeAws_json1_1StepScalingPolicyConfiguration
 */
const se_StepScalingPolicyConfiguration = (input: StepScalingPolicyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdjustmentType != null && { AdjustmentType: input.AdjustmentType }),
    ...(input.Cooldown != null && { Cooldown: input.Cooldown }),
    ...(input.MetricAggregationType != null && { MetricAggregationType: input.MetricAggregationType }),
    ...(input.MinAdjustmentMagnitude != null && { MinAdjustmentMagnitude: input.MinAdjustmentMagnitude }),
    ...(input.StepAdjustments != null && { StepAdjustments: se_StepAdjustments(input.StepAdjustments, context) }),
  };
};

/**
 * serializeAws_json1_1SuspendedState
 */
const se_SuspendedState = (input: SuspendedState, context: __SerdeContext): any => {
  return {
    ...(input.DynamicScalingInSuspended != null && { DynamicScalingInSuspended: input.DynamicScalingInSuspended }),
    ...(input.DynamicScalingOutSuspended != null && { DynamicScalingOutSuspended: input.DynamicScalingOutSuspended }),
    ...(input.ScheduledScalingSuspended != null && { ScheduledScalingSuspended: input.ScheduledScalingSuspended }),
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
 * serializeAws_json1_1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetTrackingMetric
 */
const se_TargetTrackingMetric = (input: TargetTrackingMetric, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_TargetTrackingMetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
  };
};

/**
 * serializeAws_json1_1TargetTrackingMetricDataQueries
 */
const se_TargetTrackingMetricDataQueries = (input: TargetTrackingMetricDataQuery[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetTrackingMetricDataQuery(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetTrackingMetricDataQuery
 */
const se_TargetTrackingMetricDataQuery = (input: TargetTrackingMetricDataQuery, context: __SerdeContext): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Label != null && { Label: input.Label }),
    ...(input.MetricStat != null && { MetricStat: se_TargetTrackingMetricStat(input.MetricStat, context) }),
    ...(input.ReturnData != null && { ReturnData: input.ReturnData }),
  };
};

/**
 * serializeAws_json1_1TargetTrackingMetricDimension
 */
const se_TargetTrackingMetricDimension = (input: TargetTrackingMetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TargetTrackingMetricDimensions
 */
const se_TargetTrackingMetricDimensions = (input: TargetTrackingMetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetTrackingMetricDimension(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetTrackingMetricStat
 */
const se_TargetTrackingMetricStat = (input: TargetTrackingMetricStat, context: __SerdeContext): any => {
  return {
    ...(input.Metric != null && { Metric: se_TargetTrackingMetric(input.Metric, context) }),
    ...(input.Stat != null && { Stat: input.Stat }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_json1_1TargetTrackingScalingPolicyConfiguration
 */
const se_TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomizedMetricSpecification != null && {
      CustomizedMetricSpecification: se_CustomizedMetricSpecification(input.CustomizedMetricSpecification, context),
    }),
    ...(input.DisableScaleIn != null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.PredefinedMetricSpecification != null && {
      PredefinedMetricSpecification: se_PredefinedMetricSpecification(input.PredefinedMetricSpecification, context),
    }),
    ...(input.ScaleInCooldown != null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown != null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
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
 * deserializeAws_json1_1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    AlarmARN: __expectString(output.AlarmARN),
    AlarmName: __expectString(output.AlarmName),
  } as any;
};

/**
 * deserializeAws_json1_1Alarms
 */
const de_Alarms = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alarm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConcurrentUpdateException
 */
const de_ConcurrentUpdateException = (output: any, context: __SerdeContext): ConcurrentUpdateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CustomizedMetricSpecification
 */
const de_CustomizedMetricSpecification = (output: any, context: __SerdeContext): CustomizedMetricSpecification => {
  return {
    Dimensions: output.Dimensions != null ? de_MetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Metrics: output.Metrics != null ? de_TargetTrackingMetricDataQueries(output.Metrics, context) : undefined,
    Namespace: __expectString(output.Namespace),
    Statistic: __expectString(output.Statistic),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteScalingPolicyResponse
 */
const de_DeleteScalingPolicyResponse = (output: any, context: __SerdeContext): DeleteScalingPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteScheduledActionResponse
 */
const de_DeleteScheduledActionResponse = (output: any, context: __SerdeContext): DeleteScheduledActionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterScalableTargetResponse
 */
const de_DeregisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): DeregisterScalableTargetResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeScalableTargetsResponse
 */
const de_DescribeScalableTargetsResponse = (output: any, context: __SerdeContext): DescribeScalableTargetsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalableTargets: output.ScalableTargets != null ? de_ScalableTargets(output.ScalableTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeScalingActivitiesResponse
 */
const de_DescribeScalingActivitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingActivitiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingActivities:
      output.ScalingActivities != null ? de_ScalingActivities(output.ScalingActivities, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeScalingPoliciesResponse
 */
const de_DescribeScalingPoliciesResponse = (output: any, context: __SerdeContext): DescribeScalingPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPolicies: output.ScalingPolicies != null ? de_ScalingPolicies(output.ScalingPolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeScheduledActionsResponse
 */
const de_DescribeScheduledActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledActionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScheduledActions:
      output.ScheduledActions != null ? de_ScheduledActions(output.ScheduledActions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FailedResourceAccessException
 */
const de_FailedResourceAccessException = (output: any, context: __SerdeContext): FailedResourceAccessException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceException
 */
const de_InternalServiceException = (output: any, context: __SerdeContext): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
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
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimension
 */
const de_MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimensions
 */
const de_MetricDimensions = (output: any, context: __SerdeContext): MetricDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDimension(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotScaledReason
 */
const de_NotScaledReason = (output: any, context: __SerdeContext): NotScaledReason => {
  return {
    Code: __expectString(output.Code),
    CurrentCapacity: __expectInt32(output.CurrentCapacity),
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1NotScaledReasons
 */
const de_NotScaledReasons = (output: any, context: __SerdeContext): NotScaledReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotScaledReason(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ObjectNotFoundException
 */
const de_ObjectNotFoundException = (output: any, context: __SerdeContext): ObjectNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PredefinedMetricSpecification
 */
const de_PredefinedMetricSpecification = (output: any, context: __SerdeContext): PredefinedMetricSpecification => {
  return {
    PredefinedMetricType: __expectString(output.PredefinedMetricType),
    ResourceLabel: __expectString(output.ResourceLabel),
  } as any;
};

/**
 * deserializeAws_json1_1PutScalingPolicyResponse
 */
const de_PutScalingPolicyResponse = (output: any, context: __SerdeContext): PutScalingPolicyResponse => {
  return {
    Alarms: output.Alarms != null ? de_Alarms(output.Alarms, context) : undefined,
    PolicyARN: __expectString(output.PolicyARN),
  } as any;
};

/**
 * deserializeAws_json1_1PutScheduledActionResponse
 */
const de_PutScheduledActionResponse = (output: any, context: __SerdeContext): PutScheduledActionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RegisterScalableTargetResponse
 */
const de_RegisterScalableTargetResponse = (output: any, context: __SerdeContext): RegisterScalableTargetResponse => {
  return {
    ScalableTargetARN: __expectString(output.ScalableTargetARN),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

/**
 * deserializeAws_json1_1ScalableTarget
 */
const de_ScalableTarget = (output: any, context: __SerdeContext): ScalableTarget => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
    ResourceId: __expectString(output.ResourceId),
    RoleARN: __expectString(output.RoleARN),
    ScalableDimension: __expectString(output.ScalableDimension),
    ScalableTargetARN: __expectString(output.ScalableTargetARN),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    SuspendedState: output.SuspendedState != null ? de_SuspendedState(output.SuspendedState, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScalableTargetAction
 */
const de_ScalableTargetAction = (output: any, context: __SerdeContext): ScalableTargetAction => {
  return {
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1ScalableTargets
 */
const de_ScalableTargets = (output: any, context: __SerdeContext): ScalableTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScalableTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingActivities
 */
const de_ScalingActivities = (output: any, context: __SerdeContext): ScalingActivity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScalingActivity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingActivity
 */
const de_ScalingActivity = (output: any, context: __SerdeContext): ScalingActivity => {
  return {
    ActivityId: __expectString(output.ActivityId),
    Cause: __expectString(output.Cause),
    Description: __expectString(output.Description),
    Details: __expectString(output.Details),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    NotScaledReasons:
      output.NotScaledReasons != null ? de_NotScaledReasons(output.NotScaledReasons, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    StatusCode: __expectString(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingPolicies
 */
const de_ScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScalingPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPolicy
 */
const de_ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  return {
    Alarms: output.Alarms != null ? de_Alarms(output.Alarms, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    PolicyARN: __expectString(output.PolicyARN),
    PolicyName: __expectString(output.PolicyName),
    PolicyType: __expectString(output.PolicyType),
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    StepScalingPolicyConfiguration:
      output.StepScalingPolicyConfiguration != null
        ? de_StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context)
        : undefined,
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration != null
        ? de_TargetTrackingScalingPolicyConfiguration(output.TargetTrackingScalingPolicyConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScheduledAction
 */
const de_ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ScalableTargetAction:
      output.ScalableTargetAction != null ? de_ScalableTargetAction(output.ScalableTargetAction, context) : undefined,
    Schedule: __expectString(output.Schedule),
    ScheduledActionARN: __expectString(output.ScheduledActionARN),
    ScheduledActionName: __expectString(output.ScheduledActionName),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Timezone: __expectString(output.Timezone),
  } as any;
};

/**
 * deserializeAws_json1_1ScheduledActions
 */
const de_ScheduledActions = (output: any, context: __SerdeContext): ScheduledAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduledAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepAdjustment
 */
const de_StepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  return {
    MetricIntervalLowerBound: __limitedParseDouble(output.MetricIntervalLowerBound),
    MetricIntervalUpperBound: __limitedParseDouble(output.MetricIntervalUpperBound),
    ScalingAdjustment: __expectInt32(output.ScalingAdjustment),
  } as any;
};

/**
 * deserializeAws_json1_1StepAdjustments
 */
const de_StepAdjustments = (output: any, context: __SerdeContext): StepAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StepAdjustment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepScalingPolicyConfiguration
 */
const de_StepScalingPolicyConfiguration = (output: any, context: __SerdeContext): StepScalingPolicyConfiguration => {
  return {
    AdjustmentType: __expectString(output.AdjustmentType),
    Cooldown: __expectInt32(output.Cooldown),
    MetricAggregationType: __expectString(output.MetricAggregationType),
    MinAdjustmentMagnitude: __expectInt32(output.MinAdjustmentMagnitude),
    StepAdjustments: output.StepAdjustments != null ? de_StepAdjustments(output.StepAdjustments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SuspendedState
 */
const de_SuspendedState = (output: any, context: __SerdeContext): SuspendedState => {
  return {
    DynamicScalingInSuspended: __expectBoolean(output.DynamicScalingInSuspended),
    DynamicScalingOutSuspended: __expectBoolean(output.DynamicScalingOutSuspended),
    ScheduledScalingSuspended: __expectBoolean(output.ScheduledScalingSuspended),
  } as any;
};

/**
 * deserializeAws_json1_1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TargetTrackingMetric
 */
const de_TargetTrackingMetric = (output: any, context: __SerdeContext): TargetTrackingMetric => {
  return {
    Dimensions: output.Dimensions != null ? de_TargetTrackingMetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
  } as any;
};

/**
 * deserializeAws_json1_1TargetTrackingMetricDataQueries
 */
const de_TargetTrackingMetricDataQueries = (output: any, context: __SerdeContext): TargetTrackingMetricDataQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetTrackingMetricDataQuery(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetTrackingMetricDataQuery
 */
const de_TargetTrackingMetricDataQuery = (output: any, context: __SerdeContext): TargetTrackingMetricDataQuery => {
  return {
    Expression: __expectString(output.Expression),
    Id: __expectString(output.Id),
    Label: __expectString(output.Label),
    MetricStat: output.MetricStat != null ? de_TargetTrackingMetricStat(output.MetricStat, context) : undefined,
    ReturnData: __expectBoolean(output.ReturnData),
  } as any;
};

/**
 * deserializeAws_json1_1TargetTrackingMetricDimension
 */
const de_TargetTrackingMetricDimension = (output: any, context: __SerdeContext): TargetTrackingMetricDimension => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TargetTrackingMetricDimensions
 */
const de_TargetTrackingMetricDimensions = (output: any, context: __SerdeContext): TargetTrackingMetricDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetTrackingMetricDimension(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetTrackingMetricStat
 */
const de_TargetTrackingMetricStat = (output: any, context: __SerdeContext): TargetTrackingMetricStat => {
  return {
    Metric: output.Metric != null ? de_TargetTrackingMetric(output.Metric, context) : undefined,
    Stat: __expectString(output.Stat),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration
 */
const de_TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  return {
    CustomizedMetricSpecification:
      output.CustomizedMetricSpecification != null
        ? de_CustomizedMetricSpecification(output.CustomizedMetricSpecification, context)
        : undefined,
    DisableScaleIn: __expectBoolean(output.DisableScaleIn),
    PredefinedMetricSpecification:
      output.PredefinedMetricSpecification != null
        ? de_PredefinedMetricSpecification(output.PredefinedMetricSpecification, context)
        : undefined,
    ScaleInCooldown: __expectInt32(output.ScaleInCooldown),
    ScaleOutCooldown: __expectInt32(output.ScaleOutCooldown),
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AnyScaleFrontendService.${operation}`,
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
