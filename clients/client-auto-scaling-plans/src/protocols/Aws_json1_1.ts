// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  CreateScalingPlanResponse,
  CustomizedLoadMetricSpecification,
  CustomizedScalingMetricSpecification,
  Datapoint,
  DeleteScalingPlanRequest,
  DeleteScalingPlanResponse,
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
  UpdateScalingPlanResponse,
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
  body = JSON.stringify(se_DeleteScalingPlanRequest(input, context));
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
  body = JSON.stringify(se_DescribeScalingPlanResourcesRequest(input, context));
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
  body = JSON.stringify(se_DescribeScalingPlansRequest(input, context));
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
  contents = de_CreateScalingPlanResponse(data, context);
  const response: CreateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteScalingPlanResponse(data, context);
  const response: DeleteScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateScalingPlanResponse(data, context);
  const response: UpdateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
 * serializeAws_json1_1ApplicationSource
 */
const se_ApplicationSource = (input: ApplicationSource, context: __SerdeContext): any => {
  return {
    ...(input.CloudFormationStackARN != null && { CloudFormationStackARN: input.CloudFormationStackARN }),
    ...(input.TagFilters != null && { TagFilters: se_TagFilters(input.TagFilters, context) }),
  };
};

/**
 * serializeAws_json1_1ApplicationSources
 */
const se_ApplicationSources = (input: ApplicationSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ApplicationSource(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateScalingPlanRequest
 */
const se_CreateScalingPlanRequest = (input: CreateScalingPlanRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationSource != null && {
      ApplicationSource: se_ApplicationSource(input.ApplicationSource, context),
    }),
    ...(input.ScalingInstructions != null && {
      ScalingInstructions: se_ScalingInstructions(input.ScalingInstructions, context),
    }),
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
  };
};

/**
 * serializeAws_json1_1CustomizedLoadMetricSpecification
 */
const se_CustomizedLoadMetricSpecification = (
  input: CustomizedLoadMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_json1_1CustomizedScalingMetricSpecification
 */
const se_CustomizedScalingMetricSpecification = (
  input: CustomizedScalingMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_json1_1DeleteScalingPlanRequest
 */
const se_DeleteScalingPlanRequest = (input: DeleteScalingPlanRequest, context: __SerdeContext): any => {
  return {
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

/**
 * serializeAws_json1_1DescribeScalingPlanResourcesRequest
 */
const se_DescribeScalingPlanResourcesRequest = (
  input: DescribeScalingPlanResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

/**
 * serializeAws_json1_1DescribeScalingPlansRequest
 */
const se_DescribeScalingPlansRequest = (input: DescribeScalingPlansRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationSources != null && {
      ApplicationSources: se_ApplicationSources(input.ApplicationSources, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ScalingPlanNames != null && { ScalingPlanNames: se_ScalingPlanNames(input.ScalingPlanNames, context) }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

/**
 * serializeAws_json1_1GetScalingPlanResourceForecastDataRequest
 */
const se_GetScalingPlanResourceForecastDataRequest = (
  input: GetScalingPlanResourceForecastDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.ForecastDataType != null && { ForecastDataType: input.ForecastDataType }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
 * serializeAws_json1_1PredefinedLoadMetricSpecification
 */
const se_PredefinedLoadMetricSpecification = (
  input: PredefinedLoadMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedLoadMetricType != null && { PredefinedLoadMetricType: input.PredefinedLoadMetricType }),
    ...(input.ResourceLabel != null && { ResourceLabel: input.ResourceLabel }),
  };
};

/**
 * serializeAws_json1_1PredefinedScalingMetricSpecification
 */
const se_PredefinedScalingMetricSpecification = (
  input: PredefinedScalingMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedScalingMetricType != null && {
      PredefinedScalingMetricType: input.PredefinedScalingMetricType,
    }),
    ...(input.ResourceLabel != null && { ResourceLabel: input.ResourceLabel }),
  };
};

/**
 * serializeAws_json1_1ScalingInstruction
 */
const se_ScalingInstruction = (input: ScalingInstruction, context: __SerdeContext): any => {
  return {
    ...(input.CustomizedLoadMetricSpecification != null && {
      CustomizedLoadMetricSpecification: se_CustomizedLoadMetricSpecification(
        input.CustomizedLoadMetricSpecification,
        context
      ),
    }),
    ...(input.DisableDynamicScaling != null && { DisableDynamicScaling: input.DisableDynamicScaling }),
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
    ...(input.PredefinedLoadMetricSpecification != null && {
      PredefinedLoadMetricSpecification: se_PredefinedLoadMetricSpecification(
        input.PredefinedLoadMetricSpecification,
        context
      ),
    }),
    ...(input.PredictiveScalingMaxCapacityBehavior != null && {
      PredictiveScalingMaxCapacityBehavior: input.PredictiveScalingMaxCapacityBehavior,
    }),
    ...(input.PredictiveScalingMaxCapacityBuffer != null && {
      PredictiveScalingMaxCapacityBuffer: input.PredictiveScalingMaxCapacityBuffer,
    }),
    ...(input.PredictiveScalingMode != null && { PredictiveScalingMode: input.PredictiveScalingMode }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension != null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalingPolicyUpdateBehavior != null && {
      ScalingPolicyUpdateBehavior: input.ScalingPolicyUpdateBehavior,
    }),
    ...(input.ScheduledActionBufferTime != null && { ScheduledActionBufferTime: input.ScheduledActionBufferTime }),
    ...(input.ServiceNamespace != null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.TargetTrackingConfigurations != null && {
      TargetTrackingConfigurations: se_TargetTrackingConfigurations(input.TargetTrackingConfigurations, context),
    }),
  };
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

/**
 * serializeAws_json1_1ScalingPlanNames
 */
const se_ScalingPlanNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagFilter
 */
const se_TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_TagValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1TagFilters
 */
const se_TagFilters = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1TagValues
 */
const se_TagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TargetTrackingConfiguration
 */
const se_TargetTrackingConfiguration = (input: TargetTrackingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CustomizedScalingMetricSpecification != null && {
      CustomizedScalingMetricSpecification: se_CustomizedScalingMetricSpecification(
        input.CustomizedScalingMetricSpecification,
        context
      ),
    }),
    ...(input.DisableScaleIn != null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.EstimatedInstanceWarmup != null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
    ...(input.PredefinedScalingMetricSpecification != null && {
      PredefinedScalingMetricSpecification: se_PredefinedScalingMetricSpecification(
        input.PredefinedScalingMetricSpecification,
        context
      ),
    }),
    ...(input.ScaleInCooldown != null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown != null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
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
  return {
    ...(input.ApplicationSource != null && {
      ApplicationSource: se_ApplicationSource(input.ApplicationSource, context),
    }),
    ...(input.ScalingInstructions != null && {
      ScalingInstructions: se_ScalingInstructions(input.ScalingInstructions, context),
    }),
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

/**
 * deserializeAws_json1_1ApplicationSource
 */
const de_ApplicationSource = (output: any, context: __SerdeContext): ApplicationSource => {
  return {
    CloudFormationStackARN: __expectString(output.CloudFormationStackARN),
    TagFilters: output.TagFilters != null ? de_TagFilters(output.TagFilters, context) : undefined,
  } as any;
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
 * deserializeAws_json1_1CreateScalingPlanResponse
 */
const de_CreateScalingPlanResponse = (output: any, context: __SerdeContext): CreateScalingPlanResponse => {
  return {
    ScalingPlanVersion: __expectLong(output.ScalingPlanVersion),
  } as any;
};

/**
 * deserializeAws_json1_1CustomizedLoadMetricSpecification
 */
const de_CustomizedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedLoadMetricSpecification => {
  return {
    Dimensions: output.Dimensions != null ? de_MetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Statistic: __expectString(output.Statistic),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1CustomizedScalingMetricSpecification
 */
const de_CustomizedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedScalingMetricSpecification => {
  return {
    Dimensions: output.Dimensions != null ? de_MetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Statistic: __expectString(output.Statistic),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1Datapoint
 */
const de_Datapoint = (output: any, context: __SerdeContext): Datapoint => {
  return {
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Datapoints
 */
const de_Datapoints = (output: any, context: __SerdeContext): Datapoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Datapoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteScalingPlanResponse
 */
const de_DeleteScalingPlanResponse = (output: any, context: __SerdeContext): DeleteScalingPlanResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeScalingPlanResourcesResponse
 */
const de_DescribeScalingPlanResourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlanResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPlanResources:
      output.ScalingPlanResources != null ? de_ScalingPlanResources(output.ScalingPlanResources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeScalingPlansResponse
 */
const de_DescribeScalingPlansResponse = (output: any, context: __SerdeContext): DescribeScalingPlansResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPlans: output.ScalingPlans != null ? de_ScalingPlans(output.ScalingPlans, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse
 */
const de_GetScalingPlanResourceForecastDataResponse = (
  output: any,
  context: __SerdeContext
): GetScalingPlanResourceForecastDataResponse => {
  return {
    Datapoints: output.Datapoints != null ? de_Datapoints(output.Datapoints, context) : undefined,
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
 * deserializeAws_json1_1ObjectNotFoundException
 */
const de_ObjectNotFoundException = (output: any, context: __SerdeContext): ObjectNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PredefinedLoadMetricSpecification
 */
const de_PredefinedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedLoadMetricSpecification => {
  return {
    PredefinedLoadMetricType: __expectString(output.PredefinedLoadMetricType),
    ResourceLabel: __expectString(output.ResourceLabel),
  } as any;
};

/**
 * deserializeAws_json1_1PredefinedScalingMetricSpecification
 */
const de_PredefinedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedScalingMetricSpecification => {
  return {
    PredefinedScalingMetricType: __expectString(output.PredefinedScalingMetricType),
    ResourceLabel: __expectString(output.ResourceLabel),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingInstruction
 */
const de_ScalingInstruction = (output: any, context: __SerdeContext): ScalingInstruction => {
  return {
    CustomizedLoadMetricSpecification:
      output.CustomizedLoadMetricSpecification != null
        ? de_CustomizedLoadMetricSpecification(output.CustomizedLoadMetricSpecification, context)
        : undefined,
    DisableDynamicScaling: __expectBoolean(output.DisableDynamicScaling),
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
    PredefinedLoadMetricSpecification:
      output.PredefinedLoadMetricSpecification != null
        ? de_PredefinedLoadMetricSpecification(output.PredefinedLoadMetricSpecification, context)
        : undefined,
    PredictiveScalingMaxCapacityBehavior: __expectString(output.PredictiveScalingMaxCapacityBehavior),
    PredictiveScalingMaxCapacityBuffer: __expectInt32(output.PredictiveScalingMaxCapacityBuffer),
    PredictiveScalingMode: __expectString(output.PredictiveScalingMode),
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ScalingPolicyUpdateBehavior: __expectString(output.ScalingPolicyUpdateBehavior),
    ScheduledActionBufferTime: __expectInt32(output.ScheduledActionBufferTime),
    ServiceNamespace: __expectString(output.ServiceNamespace),
    TargetTrackingConfigurations:
      output.TargetTrackingConfigurations != null
        ? de_TargetTrackingConfigurations(output.TargetTrackingConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScalingInstructions
 */
const de_ScalingInstructions = (output: any, context: __SerdeContext): ScalingInstruction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScalingInstruction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingPlan
 */
const de_ScalingPlan = (output: any, context: __SerdeContext): ScalingPlan => {
  return {
    ApplicationSource:
      output.ApplicationSource != null ? de_ApplicationSource(output.ApplicationSource, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ScalingInstructions:
      output.ScalingInstructions != null ? de_ScalingInstructions(output.ScalingInstructions, context) : undefined,
    ScalingPlanName: __expectString(output.ScalingPlanName),
    ScalingPlanVersion: __expectLong(output.ScalingPlanVersion),
    StatusCode: __expectString(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    StatusStartTime:
      output.StatusStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusStartTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScalingPlanResource
 */
const de_ScalingPlanResource = (output: any, context: __SerdeContext): ScalingPlanResource => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ScalingPlanName: __expectString(output.ScalingPlanName),
    ScalingPlanVersion: __expectLong(output.ScalingPlanVersion),
    ScalingPolicies: output.ScalingPolicies != null ? de_ScalingPolicies(output.ScalingPolicies, context) : undefined,
    ScalingStatusCode: __expectString(output.ScalingStatusCode),
    ScalingStatusMessage: __expectString(output.ScalingStatusMessage),
    ServiceNamespace: __expectString(output.ServiceNamespace),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingPlanResources
 */
const de_ScalingPlanResources = (output: any, context: __SerdeContext): ScalingPlanResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
    PolicyName: __expectString(output.PolicyName),
    PolicyType: __expectString(output.PolicyType),
    TargetTrackingConfiguration:
      output.TargetTrackingConfiguration != null
        ? de_TargetTrackingConfiguration(output.TargetTrackingConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TagFilter
 */
const de_TagFilter = (output: any, context: __SerdeContext): TagFilter => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? de_TagValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TagFilters
 */
const de_TagFilters = (output: any, context: __SerdeContext): TagFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagValues
 */
const de_TagValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1TargetTrackingConfiguration
 */
const de_TargetTrackingConfiguration = (output: any, context: __SerdeContext): TargetTrackingConfiguration => {
  return {
    CustomizedScalingMetricSpecification:
      output.CustomizedScalingMetricSpecification != null
        ? de_CustomizedScalingMetricSpecification(output.CustomizedScalingMetricSpecification, context)
        : undefined,
    DisableScaleIn: __expectBoolean(output.DisableScaleIn),
    EstimatedInstanceWarmup: __expectInt32(output.EstimatedInstanceWarmup),
    PredefinedScalingMetricSpecification:
      output.PredefinedScalingMetricSpecification != null
        ? de_PredefinedScalingMetricSpecification(output.PredefinedScalingMetricSpecification, context)
        : undefined,
    ScaleInCooldown: __expectInt32(output.ScaleInCooldown),
    ScaleOutCooldown: __expectInt32(output.ScaleOutCooldown),
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

/**
 * deserializeAws_json1_1TargetTrackingConfigurations
 */
const de_TargetTrackingConfigurations = (output: any, context: __SerdeContext): TargetTrackingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetTrackingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateScalingPlanResponse
 */
const de_UpdateScalingPlanResponse = (output: any, context: __SerdeContext): UpdateScalingPlanResponse => {
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
