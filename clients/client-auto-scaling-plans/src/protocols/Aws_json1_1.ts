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

export const serializeAws_json1_1CreateScalingPlanCommand = async (
  input: CreateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteScalingPlanCommand = async (
  input: DeleteScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPlanResourcesCommand = async (
  input: DescribeScalingPlanResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPlanResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPlansCommand = async (
  input: DescribeScalingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPlansRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetScalingPlanResourceForecastDataCommand = async (
  input: GetScalingPlanResourceForecastDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetScalingPlanResourceForecastDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateScalingPlanCommand = async (
  input: UpdateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateScalingPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateScalingPlanResponse(data, context);
  const response: CreateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateScalingPlanCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.autoscalingplans#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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

export const deserializeAws_json1_1DeleteScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScalingPlanResponse(data, context);
  const response: DeleteScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScalingPlanCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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

export const deserializeAws_json1_1DescribeScalingPlanResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPlanResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPlanResourcesResponse(data, context);
  const response: DescribeScalingPlanResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPlanResourcesCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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

export const deserializeAws_json1_1DescribeScalingPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPlansCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPlansResponse(data, context);
  const response: DescribeScalingPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPlansCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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

export const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse(data, context);
  const response: GetScalingPlanResourceForecastDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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

export const deserializeAws_json1_1UpdateScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateScalingPlanResponse(data, context);
  const response: UpdateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateScalingPlanCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      throw await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
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

const serializeAws_json1_1ApplicationSource = (input: ApplicationSource, context: __SerdeContext): any => {
  return {
    ...(input.CloudFormationStackARN != null && { CloudFormationStackARN: input.CloudFormationStackARN }),
    ...(input.TagFilters != null && { TagFilters: serializeAws_json1_1TagFilters(input.TagFilters, context) }),
  };
};

const serializeAws_json1_1ApplicationSources = (input: ApplicationSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ApplicationSource(entry, context);
    });
};

const serializeAws_json1_1CreateScalingPlanRequest = (
  input: CreateScalingPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationSource != null && {
      ApplicationSource: serializeAws_json1_1ApplicationSource(input.ApplicationSource, context),
    }),
    ...(input.ScalingInstructions != null && {
      ScalingInstructions: serializeAws_json1_1ScalingInstructions(input.ScalingInstructions, context),
    }),
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
  };
};

const serializeAws_json1_1CustomizedLoadMetricSpecification = (
  input: CustomizedLoadMetricSpecification,
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

const serializeAws_json1_1CustomizedScalingMetricSpecification = (
  input: CustomizedScalingMetricSpecification,
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

const serializeAws_json1_1DeleteScalingPlanRequest = (
  input: DeleteScalingPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

const serializeAws_json1_1DescribeScalingPlanResourcesRequest = (
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

const serializeAws_json1_1DescribeScalingPlansRequest = (
  input: DescribeScalingPlansRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationSources != null && {
      ApplicationSources: serializeAws_json1_1ApplicationSources(input.ApplicationSources, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ScalingPlanNames != null && {
      ScalingPlanNames: serializeAws_json1_1ScalingPlanNames(input.ScalingPlanNames, context),
    }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

const serializeAws_json1_1GetScalingPlanResourceForecastDataRequest = (
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

const serializeAws_json1_1PredefinedLoadMetricSpecification = (
  input: PredefinedLoadMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedLoadMetricType != null && { PredefinedLoadMetricType: input.PredefinedLoadMetricType }),
    ...(input.ResourceLabel != null && { ResourceLabel: input.ResourceLabel }),
  };
};

const serializeAws_json1_1PredefinedScalingMetricSpecification = (
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

const serializeAws_json1_1ScalingInstruction = (input: ScalingInstruction, context: __SerdeContext): any => {
  return {
    ...(input.CustomizedLoadMetricSpecification != null && {
      CustomizedLoadMetricSpecification: serializeAws_json1_1CustomizedLoadMetricSpecification(
        input.CustomizedLoadMetricSpecification,
        context
      ),
    }),
    ...(input.DisableDynamicScaling != null && { DisableDynamicScaling: input.DisableDynamicScaling }),
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
    ...(input.PredefinedLoadMetricSpecification != null && {
      PredefinedLoadMetricSpecification: serializeAws_json1_1PredefinedLoadMetricSpecification(
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
      TargetTrackingConfigurations: serializeAws_json1_1TargetTrackingConfigurations(
        input.TargetTrackingConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ScalingInstructions = (input: ScalingInstruction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ScalingInstruction(entry, context);
    });
};

const serializeAws_json1_1ScalingPlanNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: serializeAws_json1_1TagValues(input.Values, context) }),
  };
};

const serializeAws_json1_1TagFilters = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TagFilter(entry, context);
    });
};

const serializeAws_json1_1TagValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TargetTrackingConfiguration = (
  input: TargetTrackingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomizedScalingMetricSpecification != null && {
      CustomizedScalingMetricSpecification: serializeAws_json1_1CustomizedScalingMetricSpecification(
        input.CustomizedScalingMetricSpecification,
        context
      ),
    }),
    ...(input.DisableScaleIn != null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.EstimatedInstanceWarmup != null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
    ...(input.PredefinedScalingMetricSpecification != null && {
      PredefinedScalingMetricSpecification: serializeAws_json1_1PredefinedScalingMetricSpecification(
        input.PredefinedScalingMetricSpecification,
        context
      ),
    }),
    ...(input.ScaleInCooldown != null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown != null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue != null && { TargetValue: __serializeFloat(input.TargetValue) }),
  };
};

const serializeAws_json1_1TargetTrackingConfigurations = (
  input: TargetTrackingConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1TargetTrackingConfiguration(entry, context);
    });
};

const serializeAws_json1_1UpdateScalingPlanRequest = (
  input: UpdateScalingPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationSource != null && {
      ApplicationSource: serializeAws_json1_1ApplicationSource(input.ApplicationSource, context),
    }),
    ...(input.ScalingInstructions != null && {
      ScalingInstructions: serializeAws_json1_1ScalingInstructions(input.ScalingInstructions, context),
    }),
    ...(input.ScalingPlanName != null && { ScalingPlanName: input.ScalingPlanName }),
    ...(input.ScalingPlanVersion != null && { ScalingPlanVersion: input.ScalingPlanVersion }),
  };
};

const deserializeAws_json1_1ApplicationSource = (output: any, context: __SerdeContext): ApplicationSource => {
  return {
    CloudFormationStackARN: __expectString(output.CloudFormationStackARN),
    TagFilters: output.TagFilters != null ? deserializeAws_json1_1TagFilters(output.TagFilters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentUpdateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): CreateScalingPlanResponse => {
  return {
    ScalingPlanVersion: __expectLong(output.ScalingPlanVersion),
  } as any;
};

const deserializeAws_json1_1CustomizedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedLoadMetricSpecification => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Statistic: __expectString(output.Statistic),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1CustomizedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedScalingMetricSpecification => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Statistic: __expectString(output.Statistic),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1Datapoint = (output: any, context: __SerdeContext): Datapoint => {
  return {
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_json1_1Datapoints = (output: any, context: __SerdeContext): Datapoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Datapoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DeleteScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPlanResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeScalingPlanResourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlanResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPlanResources:
      output.ScalingPlanResources != null
        ? deserializeAws_json1_1ScalingPlanResources(output.ScalingPlanResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScalingPlansResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlansResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScalingPlans:
      output.ScalingPlans != null ? deserializeAws_json1_1ScalingPlans(output.ScalingPlans, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse = (
  output: any,
  context: __SerdeContext
): GetScalingPlanResourceForecastDataResponse => {
  return {
    Datapoints: output.Datapoints != null ? deserializeAws_json1_1Datapoints(output.Datapoints, context) : undefined,
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

const deserializeAws_json1_1ObjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ObjectNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PredefinedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedLoadMetricSpecification => {
  return {
    PredefinedLoadMetricType: __expectString(output.PredefinedLoadMetricType),
    ResourceLabel: __expectString(output.ResourceLabel),
  } as any;
};

const deserializeAws_json1_1PredefinedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedScalingMetricSpecification => {
  return {
    PredefinedScalingMetricType: __expectString(output.PredefinedScalingMetricType),
    ResourceLabel: __expectString(output.ResourceLabel),
  } as any;
};

const deserializeAws_json1_1ScalingInstruction = (output: any, context: __SerdeContext): ScalingInstruction => {
  return {
    CustomizedLoadMetricSpecification:
      output.CustomizedLoadMetricSpecification != null
        ? deserializeAws_json1_1CustomizedLoadMetricSpecification(output.CustomizedLoadMetricSpecification, context)
        : undefined,
    DisableDynamicScaling: __expectBoolean(output.DisableDynamicScaling),
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
    PredefinedLoadMetricSpecification:
      output.PredefinedLoadMetricSpecification != null
        ? deserializeAws_json1_1PredefinedLoadMetricSpecification(output.PredefinedLoadMetricSpecification, context)
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
        ? deserializeAws_json1_1TargetTrackingConfigurations(output.TargetTrackingConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingInstructions = (output: any, context: __SerdeContext): ScalingInstruction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingInstruction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScalingPlan = (output: any, context: __SerdeContext): ScalingPlan => {
  return {
    ApplicationSource:
      output.ApplicationSource != null
        ? deserializeAws_json1_1ApplicationSource(output.ApplicationSource, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ScalingInstructions:
      output.ScalingInstructions != null
        ? deserializeAws_json1_1ScalingInstructions(output.ScalingInstructions, context)
        : undefined,
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

const deserializeAws_json1_1ScalingPlanResource = (output: any, context: __SerdeContext): ScalingPlanResource => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ScalableDimension: __expectString(output.ScalableDimension),
    ScalingPlanName: __expectString(output.ScalingPlanName),
    ScalingPlanVersion: __expectLong(output.ScalingPlanVersion),
    ScalingPolicies:
      output.ScalingPolicies != null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
    ScalingStatusCode: __expectString(output.ScalingStatusCode),
    ScalingStatusMessage: __expectString(output.ScalingStatusMessage),
    ServiceNamespace: __expectString(output.ServiceNamespace),
  } as any;
};

const deserializeAws_json1_1ScalingPlanResources = (output: any, context: __SerdeContext): ScalingPlanResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingPlanResource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScalingPlans = (output: any, context: __SerdeContext): ScalingPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingPlan(entry, context);
    });
  return retVal;
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
    PolicyName: __expectString(output.PolicyName),
    PolicyType: __expectString(output.PolicyType),
    TargetTrackingConfiguration:
      output.TargetTrackingConfiguration != null
        ? deserializeAws_json1_1TargetTrackingConfiguration(output.TargetTrackingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TagFilter = (output: any, context: __SerdeContext): TagFilter => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? deserializeAws_json1_1TagValues(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TagFilters = (output: any, context: __SerdeContext): TagFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TargetTrackingConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration => {
  return {
    CustomizedScalingMetricSpecification:
      output.CustomizedScalingMetricSpecification != null
        ? deserializeAws_json1_1CustomizedScalingMetricSpecification(
            output.CustomizedScalingMetricSpecification,
            context
          )
        : undefined,
    DisableScaleIn: __expectBoolean(output.DisableScaleIn),
    EstimatedInstanceWarmup: __expectInt32(output.EstimatedInstanceWarmup),
    PredefinedScalingMetricSpecification:
      output.PredefinedScalingMetricSpecification != null
        ? deserializeAws_json1_1PredefinedScalingMetricSpecification(
            output.PredefinedScalingMetricSpecification,
            context
          )
        : undefined,
    ScaleInCooldown: __expectInt32(output.ScaleInCooldown),
    ScaleOutCooldown: __expectInt32(output.ScaleOutCooldown),
    TargetValue: __limitedParseDouble(output.TargetValue),
  } as any;
};

const deserializeAws_json1_1TargetTrackingConfigurations = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetTrackingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UpdateScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): UpdateScalingPlanResponse => {
  return {} as any;
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
