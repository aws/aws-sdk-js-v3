// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  GetPredictiveScalingForecastCommandInput,
  GetPredictiveScalingForecastCommandOutput,
} from "../commands/GetPredictiveScalingForecastCommand";
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
  CapacityForecast,
  ConcurrentUpdateException,
  CustomizedMetricSpecification,
  DeleteScalingPolicyRequest,
  DeleteScheduledActionRequest,
  DeregisterScalableTargetRequest,
  DescribeScalableTargetsRequest,
  DescribeScalableTargetsResponse,
  DescribeScalingActivitiesRequest,
  DescribeScalingActivitiesResponse,
  DescribeScalingPoliciesRequest,
  DescribeScalingPoliciesResponse,
  DescribeScheduledActionsRequest,
  DescribeScheduledActionsResponse,
  FailedResourceAccessException,
  GetPredictiveScalingForecastRequest,
  GetPredictiveScalingForecastResponse,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  ListTagsForResourceRequest,
  LoadForecast,
  MetricDimension,
  ObjectNotFoundException,
  PredefinedMetricSpecification,
  PredictiveScalingCustomizedMetricSpecification,
  PredictiveScalingMetric,
  PredictiveScalingMetricDataQuery,
  PredictiveScalingMetricDimension,
  PredictiveScalingMetricSpecification,
  PredictiveScalingMetricStat,
  PredictiveScalingPolicyConfiguration,
  PredictiveScalingPredefinedLoadMetricSpecification,
  PredictiveScalingPredefinedMetricPairSpecification,
  PredictiveScalingPredefinedScalingMetricSpecification,
  PutScalingPolicyRequest,
  PutScheduledActionRequest,
  RegisterScalableTargetRequest,
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
  TargetTrackingMetric,
  TargetTrackingMetricDataQuery,
  TargetTrackingMetricDimension,
  TargetTrackingMetricStat,
  TargetTrackingScalingPolicyConfiguration,
  TooManyTagsException,
  UntagResourceRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPredictiveScalingForecastCommand
 */
export const se_GetPredictiveScalingForecastCommand = async (
  input: GetPredictiveScalingForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPredictiveScalingForecast");
  let body: any;
  body = JSON.stringify(se_GetPredictiveScalingForecastRequest(input, context));
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
 * deserializeAws_json1_1DeleteScalingPolicyCommand
 */
export const de_DeleteScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterScalableTargetCommand
 */
export const de_DeregisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeregisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScalableTargetsCommand
 */
export const de_DescribeScalableTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalableTargetsResponse(data, context);
  const response: DescribeScalableTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScalingActivitiesCommand
 */
export const de_DescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingActivitiesResponse(data, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScalingPoliciesCommand
 */
export const de_DescribeScalingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingPoliciesResponse(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScheduledActionsCommand
 */
export const de_DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScheduledActionsResponse(data, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPredictiveScalingForecastCommand
 */
export const de_GetPredictiveScalingForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictiveScalingForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPredictiveScalingForecastResponse(data, context);
  const response: GetPredictiveScalingForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutScalingPolicyCommand
 */
export const de_PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutScheduledActionCommand
 */
export const de_PutScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterScalableTargetCommand
 */
export const de_RegisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      throw await de_FailedResourceAccessExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationautoscaling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.applicationautoscaling#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_CustomizedMetricSpecification omitted.

// se_DeleteScalingPolicyRequest omitted.

// se_DeleteScheduledActionRequest omitted.

// se_DeregisterScalableTargetRequest omitted.

// se_DescribeScalableTargetsRequest omitted.

// se_DescribeScalingActivitiesRequest omitted.

// se_DescribeScalingPoliciesRequest omitted.

// se_DescribeScheduledActionsRequest omitted.

/**
 * serializeAws_json1_1GetPredictiveScalingForecastRequest
 */
const se_GetPredictiveScalingForecastRequest = (
  input: GetPredictiveScalingForecastRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    PolicyName: [],
    ResourceId: [],
    ScalableDimension: [],
    ServiceNamespace: [],
    StartTime: (_) => _.getTime() / 1_000,
  });
};

// se_ListTagsForResourceRequest omitted.

// se_MetricDimension omitted.

// se_MetricDimensions omitted.

// se_PredefinedMetricSpecification omitted.

// se_PredictiveScalingCustomizedMetricSpecification omitted.

// se_PredictiveScalingMetric omitted.

// se_PredictiveScalingMetricDataQueries omitted.

// se_PredictiveScalingMetricDataQuery omitted.

// se_PredictiveScalingMetricDimension omitted.

// se_PredictiveScalingMetricDimensions omitted.

/**
 * serializeAws_json1_1PredictiveScalingMetricSpecification
 */
const se_PredictiveScalingMetricSpecification = (
  input: PredictiveScalingMetricSpecification,
  context: __SerdeContext
): any => {
  return take(input, {
    CustomizedCapacityMetricSpecification: _json,
    CustomizedLoadMetricSpecification: _json,
    CustomizedScalingMetricSpecification: _json,
    PredefinedLoadMetricSpecification: _json,
    PredefinedMetricPairSpecification: _json,
    PredefinedScalingMetricSpecification: _json,
    TargetValue: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1PredictiveScalingMetricSpecifications
 */
const se_PredictiveScalingMetricSpecifications = (
  input: PredictiveScalingMetricSpecification[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PredictiveScalingMetricSpecification(entry, context);
    });
};

// se_PredictiveScalingMetricStat omitted.

/**
 * serializeAws_json1_1PredictiveScalingPolicyConfiguration
 */
const se_PredictiveScalingPolicyConfiguration = (
  input: PredictiveScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    MaxCapacityBreachBehavior: [],
    MaxCapacityBuffer: [],
    MetricSpecifications: (_) => se_PredictiveScalingMetricSpecifications(_, context),
    Mode: [],
    SchedulingBufferTime: [],
  });
};

// se_PredictiveScalingPredefinedLoadMetricSpecification omitted.

// se_PredictiveScalingPredefinedMetricPairSpecification omitted.

// se_PredictiveScalingPredefinedScalingMetricSpecification omitted.

/**
 * serializeAws_json1_1PutScalingPolicyRequest
 */
const se_PutScalingPolicyRequest = (input: PutScalingPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    PolicyName: [],
    PolicyType: [],
    PredictiveScalingPolicyConfiguration: (_) => se_PredictiveScalingPolicyConfiguration(_, context),
    ResourceId: [],
    ScalableDimension: [],
    ServiceNamespace: [],
    StepScalingPolicyConfiguration: (_) => se_StepScalingPolicyConfiguration(_, context),
    TargetTrackingScalingPolicyConfiguration: (_) => se_TargetTrackingScalingPolicyConfiguration(_, context),
  });
};

/**
 * serializeAws_json1_1PutScheduledActionRequest
 */
const se_PutScheduledActionRequest = (input: PutScheduledActionRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    ResourceId: [],
    ScalableDimension: [],
    ScalableTargetAction: _json,
    Schedule: [],
    ScheduledActionName: [],
    ServiceNamespace: [],
    StartTime: (_) => _.getTime() / 1_000,
    Timezone: [],
  });
};

// se_RegisterScalableTargetRequest omitted.

// se_ResourceIdsMaxLen1600 omitted.

// se_ScalableTargetAction omitted.

/**
 * serializeAws_json1_1StepAdjustment
 */
const se_StepAdjustment = (input: StepAdjustment, context: __SerdeContext): any => {
  return take(input, {
    MetricIntervalLowerBound: __serializeFloat,
    MetricIntervalUpperBound: __serializeFloat,
    ScalingAdjustment: [],
  });
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
  return take(input, {
    AdjustmentType: [],
    Cooldown: [],
    MetricAggregationType: [],
    MinAdjustmentMagnitude: [],
    StepAdjustments: (_) => se_StepAdjustments(_, context),
  });
};

// se_SuspendedState omitted.

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_TagResourceRequest omitted.

// se_TargetTrackingMetric omitted.

// se_TargetTrackingMetricDataQueries omitted.

// se_TargetTrackingMetricDataQuery omitted.

// se_TargetTrackingMetricDimension omitted.

// se_TargetTrackingMetricDimensions omitted.

// se_TargetTrackingMetricStat omitted.

/**
 * serializeAws_json1_1TargetTrackingScalingPolicyConfiguration
 */
const se_TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    CustomizedMetricSpecification: _json,
    DisableScaleIn: [],
    PredefinedMetricSpecification: _json,
    ScaleInCooldown: [],
    ScaleOutCooldown: [],
    TargetValue: __serializeFloat,
  });
};

// se_UntagResourceRequest omitted.

// de_Alarm omitted.

// de_Alarms omitted.

/**
 * deserializeAws_json1_1CapacityForecast
 */
const de_CapacityForecast = (output: any, context: __SerdeContext): CapacityForecast => {
  return take(output, {
    Timestamps: (_: any) => de_PredictiveScalingForecastTimestamps(_, context),
    Values: (_: any) => de_PredictiveScalingForecastValues(_, context),
  }) as any;
};

// de_ConcurrentUpdateException omitted.

// de_CustomizedMetricSpecification omitted.

// de_DeleteScalingPolicyResponse omitted.

// de_DeleteScheduledActionResponse omitted.

// de_DeregisterScalableTargetResponse omitted.

/**
 * deserializeAws_json1_1DescribeScalableTargetsResponse
 */
const de_DescribeScalableTargetsResponse = (output: any, context: __SerdeContext): DescribeScalableTargetsResponse => {
  return take(output, {
    NextToken: __expectString,
    ScalableTargets: (_: any) => de_ScalableTargets(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeScalingActivitiesResponse
 */
const de_DescribeScalingActivitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingActivitiesResponse => {
  return take(output, {
    NextToken: __expectString,
    ScalingActivities: (_: any) => de_ScalingActivities(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeScalingPoliciesResponse
 */
const de_DescribeScalingPoliciesResponse = (output: any, context: __SerdeContext): DescribeScalingPoliciesResponse => {
  return take(output, {
    NextToken: __expectString,
    ScalingPolicies: (_: any) => de_ScalingPolicies(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeScheduledActionsResponse
 */
const de_DescribeScheduledActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledActionsResponse => {
  return take(output, {
    NextToken: __expectString,
    ScheduledActions: (_: any) => de_ScheduledActions(_, context),
  }) as any;
};

// de_FailedResourceAccessException omitted.

/**
 * deserializeAws_json1_1GetPredictiveScalingForecastResponse
 */
const de_GetPredictiveScalingForecastResponse = (
  output: any,
  context: __SerdeContext
): GetPredictiveScalingForecastResponse => {
  return take(output, {
    CapacityForecast: (_: any) => de_CapacityForecast(_, context),
    LoadForecast: (_: any) => de_LoadForecasts(_, context),
    UpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_InternalServiceException omitted.

// de_InvalidNextTokenException omitted.

// de_LimitExceededException omitted.

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1LoadForecast
 */
const de_LoadForecast = (output: any, context: __SerdeContext): LoadForecast => {
  return take(output, {
    MetricSpecification: (_: any) => de_PredictiveScalingMetricSpecification(_, context),
    Timestamps: (_: any) => de_PredictiveScalingForecastTimestamps(_, context),
    Values: (_: any) => de_PredictiveScalingForecastValues(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LoadForecasts
 */
const de_LoadForecasts = (output: any, context: __SerdeContext): LoadForecast[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadForecast(entry, context);
    });
  return retVal;
};

// de_MetricDimension omitted.

// de_MetricDimensions omitted.

// de_NotScaledReason omitted.

// de_NotScaledReasons omitted.

// de_ObjectNotFoundException omitted.

// de_PredefinedMetricSpecification omitted.

// de_PredictiveScalingCustomizedMetricSpecification omitted.

/**
 * deserializeAws_json1_1PredictiveScalingForecastTimestamps
 */
const de_PredictiveScalingForecastTimestamps = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictiveScalingForecastValues
 */
const de_PredictiveScalingForecastValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_PredictiveScalingMetric omitted.

// de_PredictiveScalingMetricDataQueries omitted.

// de_PredictiveScalingMetricDataQuery omitted.

// de_PredictiveScalingMetricDimension omitted.

// de_PredictiveScalingMetricDimensions omitted.

/**
 * deserializeAws_json1_1PredictiveScalingMetricSpecification
 */
const de_PredictiveScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredictiveScalingMetricSpecification => {
  return take(output, {
    CustomizedCapacityMetricSpecification: _json,
    CustomizedLoadMetricSpecification: _json,
    CustomizedScalingMetricSpecification: _json,
    PredefinedLoadMetricSpecification: _json,
    PredefinedMetricPairSpecification: _json,
    PredefinedScalingMetricSpecification: _json,
    TargetValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1PredictiveScalingMetricSpecifications
 */
const de_PredictiveScalingMetricSpecifications = (
  output: any,
  context: __SerdeContext
): PredictiveScalingMetricSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictiveScalingMetricSpecification(entry, context);
    });
  return retVal;
};

// de_PredictiveScalingMetricStat omitted.

/**
 * deserializeAws_json1_1PredictiveScalingPolicyConfiguration
 */
const de_PredictiveScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPolicyConfiguration => {
  return take(output, {
    MaxCapacityBreachBehavior: __expectString,
    MaxCapacityBuffer: __expectInt32,
    MetricSpecifications: (_: any) => de_PredictiveScalingMetricSpecifications(_, context),
    Mode: __expectString,
    SchedulingBufferTime: __expectInt32,
  }) as any;
};

// de_PredictiveScalingPredefinedLoadMetricSpecification omitted.

// de_PredictiveScalingPredefinedMetricPairSpecification omitted.

// de_PredictiveScalingPredefinedScalingMetricSpecification omitted.

// de_PutScalingPolicyResponse omitted.

// de_PutScheduledActionResponse omitted.

// de_RegisterScalableTargetResponse omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1ScalableTarget
 */
const de_ScalableTarget = (output: any, context: __SerdeContext): ScalableTarget => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxCapacity: __expectInt32,
    MinCapacity: __expectInt32,
    PredictedCapacity: __expectInt32,
    ResourceId: __expectString,
    RoleARN: __expectString,
    ScalableDimension: __expectString,
    ScalableTargetARN: __expectString,
    ServiceNamespace: __expectString,
    SuspendedState: _json,
  }) as any;
};

// de_ScalableTargetAction omitted.

/**
 * deserializeAws_json1_1ScalableTargets
 */
const de_ScalableTargets = (output: any, context: __SerdeContext): ScalableTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ScalingActivity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingActivity
 */
const de_ScalingActivity = (output: any, context: __SerdeContext): ScalingActivity => {
  return take(output, {
    ActivityId: __expectString,
    Cause: __expectString,
    Description: __expectString,
    Details: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotScaledReasons: _json,
    ResourceId: __expectString,
    ScalableDimension: __expectString,
    ServiceNamespace: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StatusCode: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingPolicies
 */
const de_ScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPolicy
 */
const de_ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  return take(output, {
    Alarms: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyARN: __expectString,
    PolicyName: __expectString,
    PolicyType: __expectString,
    PredictiveScalingPolicyConfiguration: (_: any) => de_PredictiveScalingPolicyConfiguration(_, context),
    ResourceId: __expectString,
    ScalableDimension: __expectString,
    ServiceNamespace: __expectString,
    StepScalingPolicyConfiguration: (_: any) => de_StepScalingPolicyConfiguration(_, context),
    TargetTrackingScalingPolicyConfiguration: (_: any) => de_TargetTrackingScalingPolicyConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ScheduledAction
 */
const de_ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceId: __expectString,
    ScalableDimension: __expectString,
    ScalableTargetAction: _json,
    Schedule: __expectString,
    ScheduledActionARN: __expectString,
    ScheduledActionName: __expectString,
    ServiceNamespace: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Timezone: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ScheduledActions
 */
const de_ScheduledActions = (output: any, context: __SerdeContext): ScheduledAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduledAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepAdjustment
 */
const de_StepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  return take(output, {
    MetricIntervalLowerBound: __limitedParseDouble,
    MetricIntervalUpperBound: __limitedParseDouble,
    ScalingAdjustment: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1StepAdjustments
 */
const de_StepAdjustments = (output: any, context: __SerdeContext): StepAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepAdjustment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepScalingPolicyConfiguration
 */
const de_StepScalingPolicyConfiguration = (output: any, context: __SerdeContext): StepScalingPolicyConfiguration => {
  return take(output, {
    AdjustmentType: __expectString,
    Cooldown: __expectInt32,
    MetricAggregationType: __expectString,
    MinAdjustmentMagnitude: __expectInt32,
    StepAdjustments: (_: any) => de_StepAdjustments(_, context),
  }) as any;
};

// de_SuspendedState omitted.

// de_TagMap omitted.

// de_TagResourceResponse omitted.

// de_TargetTrackingMetric omitted.

// de_TargetTrackingMetricDataQueries omitted.

// de_TargetTrackingMetricDataQuery omitted.

// de_TargetTrackingMetricDimension omitted.

// de_TargetTrackingMetricDimensions omitted.

// de_TargetTrackingMetricStat omitted.

/**
 * deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration
 */
const de_TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  return take(output, {
    CustomizedMetricSpecification: _json,
    DisableScaleIn: __expectBoolean,
    PredefinedMetricSpecification: _json,
    ScaleInCooldown: __expectInt32,
    ScaleOutCooldown: __expectInt32,
    TargetValue: __limitedParseDouble,
  }) as any;
};

// de_TooManyTagsException omitted.

// de_UntagResourceResponse omitted.

// de_ValidationException omitted.

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
    "x-amz-target": `AnyScaleFrontendService.${operation}`,
  };
}
