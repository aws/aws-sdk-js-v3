// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
} from "../commands/DescribeDimensionKeysCommand";
import {
  GetDimensionKeyDetailsCommandInput,
  GetDimensionKeyDetailsCommandOutput,
} from "../commands/GetDimensionKeyDetailsCommand";
import {
  GetResourceMetadataCommandInput,
  GetResourceMetadataCommandOutput,
} from "../commands/GetResourceMetadataCommand";
import { GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput } from "../commands/GetResourceMetricsCommand";
import {
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
} from "../commands/ListAvailableResourceDimensionsCommand";
import {
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput,
} from "../commands/ListAvailableResourceMetricsCommand";
import {
  DataPoint,
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DimensionDetail,
  DimensionGroup,
  DimensionGroupDetail,
  DimensionKeyDescription,
  DimensionKeyDetail,
  FeatureMetadata,
  GetDimensionKeyDetailsRequest,
  GetDimensionKeyDetailsResponse,
  GetResourceMetadataRequest,
  GetResourceMetadataResponse,
  GetResourceMetricsRequest,
  GetResourceMetricsResponse,
  InternalServiceError,
  InvalidArgumentException,
  ListAvailableResourceDimensionsRequest,
  ListAvailableResourceDimensionsResponse,
  ListAvailableResourceMetricsRequest,
  ListAvailableResourceMetricsResponse,
  MetricDimensionGroups,
  MetricKeyDataPoints,
  MetricQuery,
  NotAuthorizedException,
  ResponsePartitionKey,
  ResponseResourceMetric,
  ResponseResourceMetricKey,
} from "../models/models_0";
import { PIServiceException as __BaseException } from "../models/PIServiceException";

/**
 * serializeAws_json1_1DescribeDimensionKeysCommand
 */
export const se_DescribeDimensionKeysCommand = async (
  input: DescribeDimensionKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.DescribeDimensionKeys",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDimensionKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDimensionKeyDetailsCommand
 */
export const se_GetDimensionKeyDetailsCommand = async (
  input: GetDimensionKeyDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.GetDimensionKeyDetails",
  };
  let body: any;
  body = JSON.stringify(se_GetDimensionKeyDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceMetadataCommand
 */
export const se_GetResourceMetadataCommand = async (
  input: GetResourceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.GetResourceMetadata",
  };
  let body: any;
  body = JSON.stringify(se_GetResourceMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceMetricsCommand
 */
export const se_GetResourceMetricsCommand = async (
  input: GetResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.GetResourceMetrics",
  };
  let body: any;
  body = JSON.stringify(se_GetResourceMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableResourceDimensionsCommand
 */
export const se_ListAvailableResourceDimensionsCommand = async (
  input: ListAvailableResourceDimensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.ListAvailableResourceDimensions",
  };
  let body: any;
  body = JSON.stringify(se_ListAvailableResourceDimensionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailableResourceMetricsCommand
 */
export const se_ListAvailableResourceMetricsCommand = async (
  input: ListAvailableResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.ListAvailableResourceMetrics",
  };
  let body: any;
  body = JSON.stringify(se_ListAvailableResourceMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DescribeDimensionKeysCommand
 */
export const de_DescribeDimensionKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDimensionKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDimensionKeysResponse(data, context);
  const response: DescribeDimensionKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDimensionKeysCommandError
 */
const de_DescribeDimensionKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDimensionKeyDetailsCommand
 */
export const de_GetDimensionKeyDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionKeyDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDimensionKeyDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDimensionKeyDetailsResponse(data, context);
  const response: GetDimensionKeyDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDimensionKeyDetailsCommandError
 */
const de_GetDimensionKeyDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionKeyDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResourceMetadataCommand
 */
export const de_GetResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceMetadataResponse(data, context);
  const response: GetResourceMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourceMetadataCommandError
 */
const de_GetResourceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResourceMetricsCommand
 */
export const de_GetResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceMetricsResponse(data, context);
  const response: GetResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourceMetricsCommandError
 */
const de_GetResourceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAvailableResourceDimensionsCommand
 */
export const de_ListAvailableResourceDimensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableResourceDimensionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableResourceDimensionsResponse(data, context);
  const response: ListAvailableResourceDimensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailableResourceDimensionsCommandError
 */
const de_ListAvailableResourceDimensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAvailableResourceMetricsCommand
 */
export const de_ListAvailableResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailableResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailableResourceMetricsResponse(data, context);
  const response: ListAvailableResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailableResourceMetricsCommandError
 */
const de_ListAvailableResourceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceError(body, context);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArgumentException(body, context);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotAuthorizedException(body, context);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AdditionalMetricsList
 */
const se_AdditionalMetricsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DescribeDimensionKeysRequest
 */
const se_DescribeDimensionKeysRequest = (input: DescribeDimensionKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalMetrics != null && {
      AdditionalMetrics: se_AdditionalMetricsList(input.AdditionalMetrics, context),
    }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Filter != null && { Filter: se_MetricQueryFilterMap(input.Filter, context) }),
    ...(input.GroupBy != null && { GroupBy: se_DimensionGroup(input.GroupBy, context) }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PartitionBy != null && { PartitionBy: se_DimensionGroup(input.PartitionBy, context) }),
    ...(input.PeriodInSeconds != null && { PeriodInSeconds: input.PeriodInSeconds }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DimensionGroup
 */
const se_DimensionGroup = (input: DimensionGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_RequestStringList(input.Dimensions, context) }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

/**
 * serializeAws_json1_1DimensionsMetricList
 */
const se_DimensionsMetricList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetDimensionKeyDetailsRequest
 */
const se_GetDimensionKeyDetailsRequest = (input: GetDimensionKeyDetailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupIdentifier != null && { GroupIdentifier: input.GroupIdentifier }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.RequestedDimensions != null && {
      RequestedDimensions: se_RequestedDimensionList(input.RequestedDimensions, context),
    }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

/**
 * serializeAws_json1_1GetResourceMetadataRequest
 */
const se_GetResourceMetadataRequest = (input: GetResourceMetadataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

/**
 * serializeAws_json1_1GetResourceMetricsRequest
 */
const se_GetResourceMetricsRequest = (input: GetResourceMetricsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricQueries != null && { MetricQueries: se_MetricQueryList(input.MetricQueries, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PeriodAlignment != null && { PeriodAlignment: input.PeriodAlignment }),
    ...(input.PeriodInSeconds != null && { PeriodInSeconds: input.PeriodInSeconds }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListAvailableResourceDimensionsRequest
 */
const se_ListAvailableResourceDimensionsRequest = (
  input: ListAvailableResourceDimensionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: se_DimensionsMetricList(input.Metrics, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

/**
 * serializeAws_json1_1ListAvailableResourceMetricsRequest
 */
const se_ListAvailableResourceMetricsRequest = (
  input: ListAvailableResourceMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricTypes != null && { MetricTypes: se_MetricTypeList(input.MetricTypes, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

/**
 * serializeAws_json1_1MetricQuery
 */
const se_MetricQuery = (input: MetricQuery, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_MetricQueryFilterMap(input.Filter, context) }),
    ...(input.GroupBy != null && { GroupBy: se_DimensionGroup(input.GroupBy, context) }),
    ...(input.Metric != null && { Metric: input.Metric }),
  };
};

/**
 * serializeAws_json1_1MetricQueryFilterMap
 */
const se_MetricQueryFilterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1MetricQueryList
 */
const se_MetricQueryList = (input: MetricQuery[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricQuery(entry, context);
    });
};

/**
 * serializeAws_json1_1MetricTypeList
 */
const se_MetricTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RequestedDimensionList
 */
const se_RequestedDimensionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RequestStringList
 */
const se_RequestStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AdditionalMetricsMap
 */
const de_AdditionalMetricsMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1DataPoint
 */
const de_DataPoint = (output: any, context: __SerdeContext): DataPoint => {
  return {
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1DataPointsList
 */
const de_DataPointsList = (output: any, context: __SerdeContext): DataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeDimensionKeysResponse
 */
const de_DescribeDimensionKeysResponse = (output: any, context: __SerdeContext): DescribeDimensionKeysResponse => {
  return {
    AlignedEndTime:
      output.AlignedEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AlignedEndTime)))
        : undefined,
    AlignedStartTime:
      output.AlignedStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AlignedStartTime)))
        : undefined,
    Keys: output.Keys != null ? de_DimensionKeyDescriptionList(output.Keys, context) : undefined,
    NextToken: __expectString(output.NextToken),
    PartitionKeys:
      output.PartitionKeys != null ? de_ResponsePartitionKeyList(output.PartitionKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DimensionDetail
 */
const de_DimensionDetail = (output: any, context: __SerdeContext): DimensionDetail => {
  return {
    Identifier: __expectString(output.Identifier),
  } as any;
};

/**
 * deserializeAws_json1_1DimensionDetailList
 */
const de_DimensionDetailList = (output: any, context: __SerdeContext): DimensionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DimensionGroupDetail
 */
const de_DimensionGroupDetail = (output: any, context: __SerdeContext): DimensionGroupDetail => {
  return {
    Dimensions: output.Dimensions != null ? de_DimensionDetailList(output.Dimensions, context) : undefined,
    Group: __expectString(output.Group),
  } as any;
};

/**
 * deserializeAws_json1_1DimensionGroupDetailList
 */
const de_DimensionGroupDetailList = (output: any, context: __SerdeContext): DimensionGroupDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionGroupDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DimensionKeyDescription
 */
const de_DimensionKeyDescription = (output: any, context: __SerdeContext): DimensionKeyDescription => {
  return {
    AdditionalMetrics:
      output.AdditionalMetrics != null ? de_AdditionalMetricsMap(output.AdditionalMetrics, context) : undefined,
    Dimensions: output.Dimensions != null ? de_DimensionMap(output.Dimensions, context) : undefined,
    Partitions: output.Partitions != null ? de_MetricValuesList(output.Partitions, context) : undefined,
    Total: __limitedParseDouble(output.Total),
  } as any;
};

/**
 * deserializeAws_json1_1DimensionKeyDescriptionList
 */
const de_DimensionKeyDescriptionList = (output: any, context: __SerdeContext): DimensionKeyDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionKeyDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DimensionKeyDetail
 */
const de_DimensionKeyDetail = (output: any, context: __SerdeContext): DimensionKeyDetail => {
  return {
    Dimension: __expectString(output.Dimension),
    Status: __expectString(output.Status),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1DimensionKeyDetailList
 */
const de_DimensionKeyDetailList = (output: any, context: __SerdeContext): DimensionKeyDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionKeyDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DimensionMap
 */
const de_DimensionMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FeatureMetadata
 */
const de_FeatureMetadata = (output: any, context: __SerdeContext): FeatureMetadata => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1FeatureMetadataMap
 */
const de_FeatureMetadataMap = (output: any, context: __SerdeContext): Record<string, FeatureMetadata> => {
  return Object.entries(output).reduce((acc: Record<string, FeatureMetadata>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_FeatureMetadata(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1GetDimensionKeyDetailsResponse
 */
const de_GetDimensionKeyDetailsResponse = (output: any, context: __SerdeContext): GetDimensionKeyDetailsResponse => {
  return {
    Dimensions: output.Dimensions != null ? de_DimensionKeyDetailList(output.Dimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetResourceMetadataResponse
 */
const de_GetResourceMetadataResponse = (output: any, context: __SerdeContext): GetResourceMetadataResponse => {
  return {
    Features: output.Features != null ? de_FeatureMetadataMap(output.Features, context) : undefined,
    Identifier: __expectString(output.Identifier),
  } as any;
};

/**
 * deserializeAws_json1_1GetResourceMetricsResponse
 */
const de_GetResourceMetricsResponse = (output: any, context: __SerdeContext): GetResourceMetricsResponse => {
  return {
    AlignedEndTime:
      output.AlignedEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AlignedEndTime)))
        : undefined,
    AlignedStartTime:
      output.AlignedStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AlignedStartTime)))
        : undefined,
    Identifier: __expectString(output.Identifier),
    MetricList: output.MetricList != null ? de_MetricKeyDataPointsList(output.MetricList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceError
 */
const de_InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArgumentException
 */
const de_InvalidArgumentException = (output: any, context: __SerdeContext): InvalidArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAvailableResourceDimensionsResponse
 */
const de_ListAvailableResourceDimensionsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableResourceDimensionsResponse => {
  return {
    MetricDimensions:
      output.MetricDimensions != null ? de_MetricDimensionsList(output.MetricDimensions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAvailableResourceMetricsResponse
 */
const de_ListAvailableResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableResourceMetricsResponse => {
  return {
    Metrics: output.Metrics != null ? de_ResponseResourceMetricList(output.Metrics, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimensionGroups
 */
const de_MetricDimensionGroups = (output: any, context: __SerdeContext): MetricDimensionGroups => {
  return {
    Groups: output.Groups != null ? de_DimensionGroupDetailList(output.Groups, context) : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimensionsList
 */
const de_MetricDimensionsList = (output: any, context: __SerdeContext): MetricDimensionGroups[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDimensionGroups(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricKeyDataPoints
 */
const de_MetricKeyDataPoints = (output: any, context: __SerdeContext): MetricKeyDataPoints => {
  return {
    DataPoints: output.DataPoints != null ? de_DataPointsList(output.DataPoints, context) : undefined,
    Key: output.Key != null ? de_ResponseResourceMetricKey(output.Key, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricKeyDataPointsList
 */
const de_MetricKeyDataPointsList = (output: any, context: __SerdeContext): MetricKeyDataPoints[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricKeyDataPoints(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricValuesList
 */
const de_MetricValuesList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotAuthorizedException
 */
const de_NotAuthorizedException = (output: any, context: __SerdeContext): NotAuthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResponsePartitionKey
 */
const de_ResponsePartitionKey = (output: any, context: __SerdeContext): ResponsePartitionKey => {
  return {
    Dimensions: output.Dimensions != null ? de_DimensionMap(output.Dimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResponsePartitionKeyList
 */
const de_ResponsePartitionKeyList = (output: any, context: __SerdeContext): ResponsePartitionKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponsePartitionKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResponseResourceMetric
 */
const de_ResponseResourceMetric = (output: any, context: __SerdeContext): ResponseResourceMetric => {
  return {
    Description: __expectString(output.Description),
    Metric: __expectString(output.Metric),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1ResponseResourceMetricKey
 */
const de_ResponseResourceMetricKey = (output: any, context: __SerdeContext): ResponseResourceMetricKey => {
  return {
    Dimensions: output.Dimensions != null ? de_DimensionMap(output.Dimensions, context) : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

/**
 * deserializeAws_json1_1ResponseResourceMetricList
 */
const de_ResponseResourceMetricList = (output: any, context: __SerdeContext): ResponseResourceMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponseResourceMetric(entry, context);
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
