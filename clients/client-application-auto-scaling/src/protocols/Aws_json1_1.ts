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
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "../commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "../commands/RegisterScalableTargetCommand";
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
  ScalableTarget,
  ScalableTargetAction,
  ScalingActivity,
  ScalingPolicy,
  ScheduledAction,
  StepAdjustment,
  StepScalingPolicyConfiguration,
  SuspendedState,
  TargetTrackingScalingPolicyConfiguration,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_1DeleteScalingPolicyCommand = async (
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DeleteScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DeleteScheduledAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterScalableTargetCommand = async (
  input: DeregisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DeregisterScalableTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalableTargetsCommand = async (
  input: DescribeScalableTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScalableTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalableTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingActivitiesCommand = async (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScalingActivities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingActivitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPoliciesCommand = async (
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScalingPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.DescribeScheduledActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScheduledActionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.PutScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutScheduledActionCommand = async (
  input: PutScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.PutScheduledAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterScalableTargetCommand = async (
  input: RegisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleFrontendService.RegisterScalableTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DeleteScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScalingPolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScheduledActionCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterScalableTargetResponse(data, context);
  const response: DeregisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterScalableTargetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeScalableTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalableTargetsResponse(data, context);
  const response: DescribeScalableTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalableTargetsCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(data, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingActivitiesCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeScalingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPoliciesCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      throw await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScheduledActionsResponse(data, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScheduledActionsCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutScalingPolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      throw await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
  const response: PutScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutScheduledActionCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterScalableTargetResponse(data, context);
  const response: RegisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterScalableTargetCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConcurrentUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentUpdateException(body, context);
  const exception = new ConcurrentUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FailedResourceAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedResourceAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FailedResourceAccessException(body, context);
  const exception = new FailedResourceAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
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

const deserializeAws_json1_1ObjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ObjectNotFoundException(body, context);
  const exception = new ObjectNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1CustomizedMetricSpecification = (
  input: CustomizedMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_json1_1DeleteScalingPolicyRequest = (
  input: DeleteScalingPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DeleteScheduledActionRequest = (
  input: DeleteScheduledActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionName != null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DeregisterScalableTargetRequest = (
  input: DeregisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScalableTargetsRequest = (
  input: DescribeScalableTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceIds != null && {
      ResourceIds: serializeAws_json1_1ResourceIdsMaxLen1600(input.ResourceIds, context),
    }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScalingActivitiesRequest = (
  input: DescribeScalingActivitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeNotScaledActivities != null && { IncludeNotScaledActivities: input.IncludeNotScaledActivities }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScalingPoliciesRequest = (
  input: DescribeScalingPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyNames != null && {
      PolicyNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.PolicyNames, context),
    }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScheduledActionsRequest = (
  input: DescribeScheduledActionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionNames != null && {
      ScheduledActionNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.ScheduledActionNames, context),
    }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1MetricDimensions = (input: MetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MetricDimension(entry, context);
    });
};

const serializeAws_json1_1PredefinedMetricSpecification = (
  input: PredefinedMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedMetricType != null && { PredefinedMetricType: input.PredefinedMetricType }),
    ...(input.ResourceLabel != null && { ResourceLabel: input.ResourceLabel }),
  };
};

const serializeAws_json1_1PutScalingPolicyRequest = (input: PutScalingPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StepScalingPolicyConfiguration != null && {
      StepScalingPolicyConfiguration: serializeAws_json1_1StepScalingPolicyConfiguration(
        input.StepScalingPolicyConfiguration,
        context
      ),
    }),
    ...(input.TargetTrackingScalingPolicyConfiguration != null && {
      TargetTrackingScalingPolicyConfiguration: serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
        input.TargetTrackingScalingPolicyConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutScheduledActionRequest = (
  input: PutScheduledActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalableTargetAction != null && {
      ScalableTargetAction: serializeAws_json1_1ScalableTargetAction(input.ScalableTargetAction, context),
    }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.ScheduledActionName != null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

const serializeAws_json1_1RegisterScalableTargetRequest = (
  input: RegisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.SuspendedState != null && {
      SuspendedState: serializeAws_json1_1SuspendedState(input.SuspendedState, context),
    }),
  };
};

const serializeAws_json1_1ResourceIdsMaxLen1600 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ScalableTargetAction = (input: ScalableTargetAction, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
  };
};

const serializeAws_json1_1StepAdjustment = (input: StepAdjustment, context: __SerdeContext): any => {
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

const serializeAws_json1_1StepAdjustments = (input: StepAdjustment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StepAdjustment(entry, context);
    });
};

const serializeAws_json1_1StepScalingPolicyConfiguration = (
  input: StepScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdjustmentType != null && { AdjustmentType: input.AdjustmentType }),
    ...(input.Cooldown != null && { Cooldown: input.Cooldown }),
    ...(input.MetricAggregationType != null && { MetricAggregationType: input.MetricAggregationType }),
    ...(input.MinAdjustmentMagnitude != null && { MinAdjustmentMagnitude: input.MinAdjustmentMagnitude }),
    ...(input.StepAdjustments != null && {
      StepAdjustments: serializeAws_json1_1StepAdjustments(input.StepAdjustments, context),
    }),
  };
};

const serializeAws_json1_1SuspendedState = (input: SuspendedState, context: __SerdeContext): any => {
  return {
    ...(input.DynamicScalingInSuspended != null && { DynamicScalingInSuspended: input.DynamicScalingInSuspended }),
    ...(input.DynamicScalingOutSuspended != null && { DynamicScalingOutSuspended: input.DynamicScalingOutSuspended }),
    ...(input.ScheduledScalingSuspended != null && { ScheduledScalingSuspended: input.ScheduledScalingSuspended }),
  };
};

const serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomizedMetricSpecification != null && {
      CustomizedMetricSpecification: serializeAws_json1_1CustomizedMetricSpecification(
        input.CustomizedMetricSpecification,
        context
      ),
    }),
    ...(input.DisableScaleIn != null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.PredefinedMetricSpecification != null && {
      PredefinedMetricSpecification: serializeAws_json1_1PredefinedMetricSpecification(
        input.PredefinedMetricSpecification,
        context
      ),
    }),
    ...(input.ScaleInCooldown != null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown != null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

const deserializeAws_json1_1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    AlarmARN: __expectString(output.AlarmARN),
    AlarmName: __expectString(output.AlarmName),
  } as any;
};

const deserializeAws_json1_1Alarms = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConcurrentUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentUpdateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CustomizedMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedMetricSpecification => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Statistic: __expectString(output.Statistic),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1DeleteScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): DeleteScheduledActionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): DeregisterScalableTargetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeScalableTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalableTargetsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalableTargets:
      output.ScalableTargets != null
        ? deserializeAws_json1_1ScalableTargets(output.ScalableTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScalingActivitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingActivitiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingActivities:
      output.ScalingActivities != null
        ? deserializeAws_json1_1ScalingActivities(output.ScalingActivities, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScalingPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPolicies:
      output.ScalingPolicies != null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScheduledActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledActionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScheduledActions:
      output.ScheduledActions != null
        ? deserializeAws_json1_1ScheduledActions(output.ScheduledActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedResourceAccessException = (
  output: any,
  context: __SerdeContext
): FailedResourceAccessException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1MetricDimensions = (output: any, context: __SerdeContext): MetricDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDimension(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotScaledReason = (output: any, context: __SerdeContext): NotScaledReason => {
  return {
    Code: __expectString(output.Code),
    CurrentCapacity: __expectInt32(output.CurrentCapacity),
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
  } as any;
};

const deserializeAws_json1_1NotScaledReasons = (output: any, context: __SerdeContext): NotScaledReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NotScaledReason(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ObjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ObjectNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PredefinedMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedMetricSpecification => {
  return {
    PredefinedMetricType: __expectString(output.PredefinedMetricType),
    ResourceLabel: __expectString(output.ResourceLabel),
  } as any;
};

const deserializeAws_json1_1PutScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutScalingPolicyResponse => {
  return {
    Alarms: output.Alarms != null ? deserializeAws_json1_1Alarms(output.Alarms, context) : undefined,
    PolicyARN: __expectString(output.PolicyARN),
  } as any;
};

const deserializeAws_json1_1PutScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): PutScheduledActionResponse => {
  return {} as any;
};

const deserializeAws_json1_1RegisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): RegisterScalableTargetResponse => {
  return {} as any;
};

const deserializeAws_json1_1ScalableTarget = (output: any, context: __SerdeContext): ScalableTarget => {
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
    ServiceNamespace: __expectString(output.ServiceNamespace),
    SuspendedState:
      output.SuspendedState != null ? deserializeAws_json1_1SuspendedState(output.SuspendedState, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ScalableTargetAction = (output: any, context: __SerdeContext): ScalableTargetAction => {
  return {
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
  } as any;
};

const deserializeAws_json1_1ScalableTargets = (output: any, context: __SerdeContext): ScalableTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalableTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScalingActivities = (output: any, context: __SerdeContext): ScalingActivity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingActivity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScalingActivity = (output: any, context: __SerdeContext): ScalingActivity => {
  return {
    ActivityId: __expectString(output.ActivityId),
    Cause: __expectString(output.Cause),
    Description: __expectString(output.Description),
    Details: __expectString(output.Details),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    NotScaledReasons:
      output.NotScaledReasons != null
        ? deserializeAws_json1_1NotScaledReasons(output.NotScaledReasons, context)
        : undefined,
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    StatusCode: __expectString(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_json1_1ScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  return {
    Alarms: output.Alarms != null ? deserializeAws_json1_1Alarms(output.Alarms, context) : undefined,
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
        ? deserializeAws_json1_1StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context)
        : undefined,
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration != null
        ? deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
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
      output.ScalableTargetAction != null
        ? deserializeAws_json1_1ScalableTargetAction(output.ScalableTargetAction, context)
        : undefined,
    Schedule: __expectString(output.Schedule),
    ScheduledActionARN: __expectString(output.ScheduledActionARN),
    ScheduledActionName: __expectString(output.ScheduledActionName),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Timezone: __expectString(output.Timezone),
  } as any;
};

const deserializeAws_json1_1ScheduledActions = (output: any, context: __SerdeContext): ScheduledAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScheduledAction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  return {
    MetricIntervalLowerBound: __limitedParseDouble(output.MetricIntervalLowerBound),
    MetricIntervalUpperBound: __limitedParseDouble(output.MetricIntervalUpperBound),
    ScalingAdjustment: __expectInt32(output.ScalingAdjustment),
  } as any;
};

const deserializeAws_json1_1StepAdjustments = (output: any, context: __SerdeContext): StepAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepAdjustment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StepScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): StepScalingPolicyConfiguration => {
  return {
    AdjustmentType: __expectString(output.AdjustmentType),
    Cooldown: __expectInt32(output.Cooldown),
    MetricAggregationType: __expectString(output.MetricAggregationType),
    MinAdjustmentMagnitude: __expectInt32(output.MinAdjustmentMagnitude),
    StepAdjustments:
      output.StepAdjustments != null
        ? deserializeAws_json1_1StepAdjustments(output.StepAdjustments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SuspendedState = (output: any, context: __SerdeContext): SuspendedState => {
  return {
    DynamicScalingInSuspended: __expectBoolean(output.DynamicScalingInSuspended),
    DynamicScalingOutSuspended: __expectBoolean(output.DynamicScalingOutSuspended),
    ScheduledScalingSuspended: __expectBoolean(output.ScheduledScalingSuspended),
  } as any;
};

const deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  return {
    CustomizedMetricSpecification:
      output.CustomizedMetricSpecification != null
        ? deserializeAws_json1_1CustomizedMetricSpecification(output.CustomizedMetricSpecification, context)
        : undefined,
    DisableScaleIn: __expectBoolean(output.DisableScaleIn),
    PredefinedMetricSpecification:
      output.PredefinedMetricSpecification != null
        ? deserializeAws_json1_1PredefinedMetricSpecification(output.PredefinedMetricSpecification, context)
        : undefined,
    ScaleInCooldown: __expectInt32(output.ScaleInCooldown),
    ScaleOutCooldown: __expectInt32(output.ScaleOutCooldown),
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
