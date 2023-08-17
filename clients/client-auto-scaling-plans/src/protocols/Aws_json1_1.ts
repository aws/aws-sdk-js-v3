// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import { CreateScalingPlanCommandInput, CreateScalingPlanCommandOutput } from "../commands/CreateScalingPlanCommand";
import { DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput } from "../commands/DeleteScalingPlanCommand";
import {
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput,
} from "../commands/DescribeScalingPlanResourcesCommand";
import {
  DescribeScalingPlansCommandInput,
  DescribeScalingPlansCommandOutput,
} from "../commands/DescribeScalingPlansCommand";
import {
  GetScalingPlanResourceForecastDataCommandInput,
  GetScalingPlanResourceForecastDataCommandOutput,
} from "../commands/GetScalingPlanResourceForecastDataCommand";
import { UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput } from "../commands/UpdateScalingPlanCommand";
import { AutoScalingPlansServiceException as __BaseException } from "../models/AutoScalingPlansServiceException";
import {
  ApplicationSource,
  ConcurrentUpdateException,
  CreateScalingPlanRequest,
  CustomizedLoadMetricSpecification,
  CustomizedScalingMetricSpecification,
  Datapoint,
  DeleteScalingPlanRequest,
  DescribeScalingPlanResourcesRequest,
  DescribeScalingPlanResourcesResponse,
  DescribeScalingPlansRequest,
  DescribeScalingPlansResponse,
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataResponse,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  MetricDimension,
  ObjectNotFoundException,
  PredefinedLoadMetricSpecification,
  PredefinedScalingMetricSpecification,
  ScalingInstruction,
  ScalingPlan,
  ScalingPlanResource,
  ScalingPolicy,
  TagFilter,
  TargetTrackingConfiguration,
  UpdateScalingPlanRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateScalingPlanCommand
 */
export const se_CreateScalingPlanCommand = async (
  input: CreateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateScalingPlan");
  let body: any;
  body = JSON.stringify(se_CreateScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteScalingPlanCommand
 */
export const se_DeleteScalingPlanCommand = async (
  input: DeleteScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScalingPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScalingPlanResourcesCommand
 */
export const se_DescribeScalingPlanResourcesCommand = async (
  input: DescribeScalingPlanResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScalingPlanResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeScalingPlansCommand
 */
export const se_DescribeScalingPlansCommand = async (
  input: DescribeScalingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScalingPlans");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetScalingPlanResourceForecastDataCommand
 */
export const se_GetScalingPlanResourceForecastDataCommand = async (
  input: GetScalingPlanResourceForecastDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetScalingPlanResourceForecastData");
  let body: any;
  body = JSON.stringify(se_GetScalingPlanResourceForecastDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateScalingPlanCommand
 */
export const se_UpdateScalingPlanCommand = async (
  input: UpdateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateScalingPlan");
  let body: any;
  body = JSON.stringify(se_UpdateScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateScalingPlanCommand
 */
export const de_CreateScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateScalingPlanCommandError
 */
const de_CreateScalingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.autoscalingplans#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteScalingPlanCommand
 */
export const de_DeleteScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteScalingPlanCommandError
 */
const de_DeleteScalingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScalingPlanResourcesCommand
 */
export const de_DescribeScalingPlanResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingPlanResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingPlanResourcesResponse(data, context);
  const response: DescribeScalingPlanResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScalingPlanResourcesCommandError
 */
const de_DescribeScalingPlanResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeScalingPlansCommand
 */
export const de_DescribeScalingPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingPlansCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingPlansResponse(data, context);
  const response: DescribeScalingPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeScalingPlansCommandError
 */
const de_DescribeScalingPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand
 */
export const de_GetScalingPlanResourceForecastDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetScalingPlanResourceForecastDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetScalingPlanResourceForecastDataResponse(data, context);
  const response: GetScalingPlanResourceForecastDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError
 */
const de_GetScalingPlanResourceForecastDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateScalingPlanCommand
 */
export const de_UpdateScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateScalingPlanCommandError
 */
const de_UpdateScalingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      throw await de_ConcurrentUpdateExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      throw await de_ObjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

// se_ApplicationSource omitted.

// se_ApplicationSources omitted.

/**
 * serializeAws_json1_1CreateScalingPlanRequest
 */
const se_CreateScalingPlanRequest = (input: CreateScalingPlanRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationSource: _json,
    ScalingInstructions: (_) => se_ScalingInstructions(_, context),
    ScalingPlanName: [],
  });
};

// se_CustomizedLoadMetricSpecification omitted.

// se_CustomizedScalingMetricSpecification omitted.

// se_DeleteScalingPlanRequest omitted.

// se_DescribeScalingPlanResourcesRequest omitted.

// se_DescribeScalingPlansRequest omitted.

/**
 * serializeAws_json1_1GetScalingPlanResourceForecastDataRequest
 */
const se_GetScalingPlanResourceForecastDataRequest = (
  input: GetScalingPlanResourceForecastDataRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    ForecastDataType: [],
    ResourceId: [],
    ScalableDimension: [],
    ScalingPlanName: [],
    ScalingPlanVersion: [],
    ServiceNamespace: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_MetricDimension omitted.

// se_MetricDimensions omitted.

// se_PredefinedLoadMetricSpecification omitted.

// se_PredefinedScalingMetricSpecification omitted.

/**
 * serializeAws_json1_1ScalingInstruction
 */
const se_ScalingInstruction = (input: ScalingInstruction, context: __SerdeContext): any => {
  return take(input, {
    CustomizedLoadMetricSpecification: _json,
    DisableDynamicScaling: [],
    MaxCapacity: [],
    MinCapacity: [],
    PredefinedLoadMetricSpecification: _json,
    PredictiveScalingMaxCapacityBehavior: [],
    PredictiveScalingMaxCapacityBuffer: [],
    PredictiveScalingMode: [],
    ResourceId: [],
    ScalableDimension: [],
    ScalingPolicyUpdateBehavior: [],
    ScheduledActionBufferTime: [],
    ServiceNamespace: [],
    TargetTrackingConfigurations: (_) => se_TargetTrackingConfigurations(_, context),
  });
};

/**
 * serializeAws_json1_1ScalingInstructions
 */
const se_ScalingInstructions = (input: ScalingInstruction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ScalingInstruction(entry, context);
    });
};

// se_ScalingPlanNames omitted.

// se_TagFilter omitted.

// se_TagFilters omitted.

// se_TagValues omitted.

/**
 * serializeAws_json1_1TargetTrackingConfiguration
 */
const se_TargetTrackingConfiguration = (input: TargetTrackingConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CustomizedScalingMetricSpecification: _json,
    DisableScaleIn: [],
    EstimatedInstanceWarmup: [],
    PredefinedScalingMetricSpecification: _json,
    ScaleInCooldown: [],
    ScaleOutCooldown: [],
    TargetValue: __serializeFloat,
  });
};

/**
 * serializeAws_json1_1TargetTrackingConfigurations
 */
const se_TargetTrackingConfigurations = (input: TargetTrackingConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetTrackingConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1UpdateScalingPlanRequest
 */
const se_UpdateScalingPlanRequest = (input: UpdateScalingPlanRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationSource: _json,
    ScalingInstructions: (_) => se_ScalingInstructions(_, context),
    ScalingPlanName: [],
    ScalingPlanVersion: [],
  });
};

// de_ApplicationSource omitted.

// de_ConcurrentUpdateException omitted.

// de_CreateScalingPlanResponse omitted.

// de_CustomizedLoadMetricSpecification omitted.

// de_CustomizedScalingMetricSpecification omitted.

/**
 * deserializeAws_json1_1Datapoint
 */
const de_Datapoint = (output: any, context: __SerdeContext): Datapoint => {
  return take(output, {
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1Datapoints
 */
const de_Datapoints = (output: any, context: __SerdeContext): Datapoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Datapoint(entry, context);
    });
  return retVal;
};

// de_DeleteScalingPlanResponse omitted.

/**
 * deserializeAws_json1_1DescribeScalingPlanResourcesResponse
 */
const de_DescribeScalingPlanResourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlanResourcesResponse => {
  return take(output, {
    NextToken: __expectString,
    ScalingPlanResources: (_: any) => de_ScalingPlanResources(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeScalingPlansResponse
 */
const de_DescribeScalingPlansResponse = (output: any, context: __SerdeContext): DescribeScalingPlansResponse => {
  return take(output, {
    NextToken: __expectString,
    ScalingPlans: (_: any) => de_ScalingPlans(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse
 */
const de_GetScalingPlanResourceForecastDataResponse = (
  output: any,
  context: __SerdeContext
): GetScalingPlanResourceForecastDataResponse => {
  return take(output, {
    Datapoints: (_: any) => de_Datapoints(_, context),
  }) as any;
};

// de_InternalServiceException omitted.

// de_InvalidNextTokenException omitted.

// de_LimitExceededException omitted.

// de_MetricDimension omitted.

// de_MetricDimensions omitted.

// de_ObjectNotFoundException omitted.

// de_PredefinedLoadMetricSpecification omitted.

// de_PredefinedScalingMetricSpecification omitted.

/**
 * deserializeAws_json1_1ScalingInstruction
 */
const de_ScalingInstruction = (output: any, context: __SerdeContext): ScalingInstruction => {
  return take(output, {
    CustomizedLoadMetricSpecification: _json,
    DisableDynamicScaling: __expectBoolean,
    MaxCapacity: __expectInt32,
    MinCapacity: __expectInt32,
    PredefinedLoadMetricSpecification: _json,
    PredictiveScalingMaxCapacityBehavior: __expectString,
    PredictiveScalingMaxCapacityBuffer: __expectInt32,
    PredictiveScalingMode: __expectString,
    ResourceId: __expectString,
    ScalableDimension: __expectString,
    ScalingPolicyUpdateBehavior: __expectString,
    ScheduledActionBufferTime: __expectInt32,
    ServiceNamespace: __expectString,
    TargetTrackingConfigurations: (_: any) => de_TargetTrackingConfigurations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingInstructions
 */
const de_ScalingInstructions = (output: any, context: __SerdeContext): ScalingInstruction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingInstruction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPlan
 */
const de_ScalingPlan = (output: any, context: __SerdeContext): ScalingPlan => {
  return take(output, {
    ApplicationSource: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ScalingInstructions: (_: any) => de_ScalingInstructions(_, context),
    ScalingPlanName: __expectString,
    ScalingPlanVersion: __expectLong,
    StatusCode: __expectString,
    StatusMessage: __expectString,
    StatusStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingPlanResource
 */
const de_ScalingPlanResource = (output: any, context: __SerdeContext): ScalingPlanResource => {
  return take(output, {
    ResourceId: __expectString,
    ScalableDimension: __expectString,
    ScalingPlanName: __expectString,
    ScalingPlanVersion: __expectLong,
    ScalingPolicies: (_: any) => de_ScalingPolicies(_, context),
    ScalingStatusCode: __expectString,
    ScalingStatusMessage: __expectString,
    ServiceNamespace: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingPlanResources
 */
const de_ScalingPlanResources = (output: any, context: __SerdeContext): ScalingPlanResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingPlanResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPlans
 */
const de_ScalingPlans = (output: any, context: __SerdeContext): ScalingPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingPlan(entry, context);
    });
  return retVal;
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
    PolicyName: __expectString,
    PolicyType: __expectString,
    TargetTrackingConfiguration: (_: any) => de_TargetTrackingConfiguration(_, context),
  }) as any;
};

// de_TagFilter omitted.

// de_TagFilters omitted.

// de_TagValues omitted.

/**
 * deserializeAws_json1_1TargetTrackingConfiguration
 */
const de_TargetTrackingConfiguration = (output: any, context: __SerdeContext): TargetTrackingConfiguration => {
  return take(output, {
    CustomizedScalingMetricSpecification: _json,
    DisableScaleIn: __expectBoolean,
    EstimatedInstanceWarmup: __expectInt32,
    PredefinedScalingMetricSpecification: _json,
    ScaleInCooldown: __expectInt32,
    ScaleOutCooldown: __expectInt32,
    TargetValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1TargetTrackingConfigurations
 */
const de_TargetTrackingConfigurations = (output: any, context: __SerdeContext): TargetTrackingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetTrackingConfiguration(entry, context);
    });
  return retVal;
};

// de_UpdateScalingPlanResponse omitted.

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
    "x-amz-target": `AnyScaleScalingPlannerFrontendService.${operation}`,
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
