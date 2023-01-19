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

export const serializeAws_json1_1DescribeDimensionKeysCommand = async (
  input: DescribeDimensionKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.DescribeDimensionKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDimensionKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDimensionKeyDetailsCommand = async (
  input: GetDimensionKeyDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.GetDimensionKeyDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDimensionKeyDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourceMetadataCommand = async (
  input: GetResourceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.GetResourceMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourceMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourceMetricsCommand = async (
  input: GetResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.GetResourceMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourceMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableResourceDimensionsCommand = async (
  input: ListAvailableResourceDimensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.ListAvailableResourceDimensions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailableResourceDimensionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableResourceMetricsCommand = async (
  input: ListAvailableResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "PerformanceInsightsv20180227.ListAvailableResourceMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailableResourceMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeDimensionKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDimensionKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDimensionKeysResponse(data, context);
  const response: DescribeDimensionKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDimensionKeysCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDimensionKeyDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionKeyDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDimensionKeyDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDimensionKeyDetailsResponse(data, context);
  const response: GetDimensionKeyDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDimensionKeyDetailsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourceMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceMetadataResponse(data, context);
  const response: GetResourceMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourceMetadataCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceMetricsResponse(data, context);
  const response: GetResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourceMetricsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAvailableResourceDimensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceDimensionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailableResourceDimensionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableResourceDimensionsResponse(data, context);
  const response: ListAvailableResourceDimensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableResourceDimensionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAvailableResourceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableResourceMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailableResourceMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableResourceMetricsResponse(data, context);
  const response: ListAvailableResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableResourceMetricsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      throw await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(body, context);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(body, context);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotAuthorizedException(body, context);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AdditionalMetricsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DescribeDimensionKeysRequest = (
  input: DescribeDimensionKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalMetrics != null && {
      AdditionalMetrics: serializeAws_json1_1AdditionalMetricsList(input.AdditionalMetrics, context),
    }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PartitionBy != null && { PartitionBy: serializeAws_json1_1DimensionGroup(input.PartitionBy, context) }),
    ...(input.PeriodInSeconds != null && { PeriodInSeconds: input.PeriodInSeconds }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DimensionGroup = (input: DimensionGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_json1_1RequestStringList(input.Dimensions, context) }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1DimensionsMetricList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetDimensionKeyDetailsRequest = (
  input: GetDimensionKeyDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Group != null && { Group: input.Group }),
    ...(input.GroupIdentifier != null && { GroupIdentifier: input.GroupIdentifier }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.RequestedDimensions != null && {
      RequestedDimensions: serializeAws_json1_1RequestedDimensionList(input.RequestedDimensions, context),
    }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

const serializeAws_json1_1GetResourceMetadataRequest = (
  input: GetResourceMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

const serializeAws_json1_1GetResourceMetricsRequest = (
  input: GetResourceMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricQueries != null && {
      MetricQueries: serializeAws_json1_1MetricQueryList(input.MetricQueries, context),
    }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PeriodInSeconds != null && { PeriodInSeconds: input.PeriodInSeconds }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListAvailableResourceDimensionsRequest = (
  input: ListAvailableResourceDimensionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Metrics != null && { Metrics: serializeAws_json1_1DimensionsMetricList(input.Metrics, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

const serializeAws_json1_1ListAvailableResourceMetricsRequest = (
  input: ListAvailableResourceMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricTypes != null && { MetricTypes: serializeAws_json1_1MetricTypeList(input.MetricTypes, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

const serializeAws_json1_1MetricQuery = (input: MetricQuery, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) }),
    ...(input.GroupBy != null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) }),
    ...(input.Metric != null && { Metric: input.Metric }),
  };
};

const serializeAws_json1_1MetricQueryFilterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1MetricQueryList = (input: MetricQuery[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MetricQuery(entry, context);
    });
};

const serializeAws_json1_1MetricTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RequestedDimensionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RequestStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AdditionalMetricsMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1DataPoint = (output: any, context: __SerdeContext): DataPoint => {
  return {
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_json1_1DataPointsList = (output: any, context: __SerdeContext): DataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeDimensionKeysResponse = (
  output: any,
  context: __SerdeContext
): DescribeDimensionKeysResponse => {
  return {
    AlignedEndTime:
      output.AlignedEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AlignedEndTime)))
        : undefined,
    AlignedStartTime:
      output.AlignedStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AlignedStartTime)))
        : undefined,
    Keys: output.Keys != null ? deserializeAws_json1_1DimensionKeyDescriptionList(output.Keys, context) : undefined,
    NextToken: __expectString(output.NextToken),
    PartitionKeys:
      output.PartitionKeys != null
        ? deserializeAws_json1_1ResponsePartitionKeyList(output.PartitionKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionDetail = (output: any, context: __SerdeContext): DimensionDetail => {
  return {
    Identifier: __expectString(output.Identifier),
  } as any;
};

const deserializeAws_json1_1DimensionDetailList = (output: any, context: __SerdeContext): DimensionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DimensionGroupDetail = (output: any, context: __SerdeContext): DimensionGroupDetail => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1DimensionDetailList(output.Dimensions, context) : undefined,
    Group: __expectString(output.Group),
  } as any;
};

const deserializeAws_json1_1DimensionGroupDetailList = (
  output: any,
  context: __SerdeContext
): DimensionGroupDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionGroupDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DimensionKeyDescription = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription => {
  return {
    AdditionalMetrics:
      output.AdditionalMetrics != null
        ? deserializeAws_json1_1AdditionalMetricsMap(output.AdditionalMetrics, context)
        : undefined,
    Dimensions: output.Dimensions != null ? deserializeAws_json1_1DimensionMap(output.Dimensions, context) : undefined,
    Partitions:
      output.Partitions != null ? deserializeAws_json1_1MetricValuesList(output.Partitions, context) : undefined,
    Total: __limitedParseDouble(output.Total),
  } as any;
};

const deserializeAws_json1_1DimensionKeyDescriptionList = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionKeyDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DimensionKeyDetail = (output: any, context: __SerdeContext): DimensionKeyDetail => {
  return {
    Dimension: __expectString(output.Dimension),
    Status: __expectString(output.Status),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1DimensionKeyDetailList = (output: any, context: __SerdeContext): DimensionKeyDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionKeyDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DimensionMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1FeatureMetadata = (output: any, context: __SerdeContext): FeatureMetadata => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1FeatureMetadataMap = (
  output: any,
  context: __SerdeContext
): Record<string, FeatureMetadata> => {
  return Object.entries(output).reduce((acc: Record<string, FeatureMetadata>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1FeatureMetadata(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1GetDimensionKeyDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetDimensionKeyDetailsResponse => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1DimensionKeyDetailList(output.Dimensions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourceMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetResourceMetadataResponse => {
  return {
    Features: output.Features != null ? deserializeAws_json1_1FeatureMetadataMap(output.Features, context) : undefined,
    Identifier: __expectString(output.Identifier),
  } as any;
};

const deserializeAws_json1_1GetResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetResourceMetricsResponse => {
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
    MetricList:
      output.MetricList != null ? deserializeAws_json1_1MetricKeyDataPointsList(output.MetricList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAvailableResourceDimensionsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableResourceDimensionsResponse => {
  return {
    MetricDimensions:
      output.MetricDimensions != null
        ? deserializeAws_json1_1MetricDimensionsList(output.MetricDimensions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAvailableResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableResourceMetricsResponse => {
  return {
    Metrics:
      output.Metrics != null ? deserializeAws_json1_1ResponseResourceMetricList(output.Metrics, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1MetricDimensionGroups = (output: any, context: __SerdeContext): MetricDimensionGroups => {
  return {
    Groups: output.Groups != null ? deserializeAws_json1_1DimensionGroupDetailList(output.Groups, context) : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

const deserializeAws_json1_1MetricDimensionsList = (output: any, context: __SerdeContext): MetricDimensionGroups[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDimensionGroups(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricKeyDataPoints = (output: any, context: __SerdeContext): MetricKeyDataPoints => {
  return {
    DataPoints:
      output.DataPoints != null ? deserializeAws_json1_1DataPointsList(output.DataPoints, context) : undefined,
    Key: output.Key != null ? deserializeAws_json1_1ResponseResourceMetricKey(output.Key, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MetricKeyDataPointsList = (output: any, context: __SerdeContext): MetricKeyDataPoints[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricKeyDataPoints(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricValuesList = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_1NotAuthorizedException = (output: any, context: __SerdeContext): NotAuthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResponsePartitionKey = (output: any, context: __SerdeContext): ResponsePartitionKey => {
  return {
    Dimensions: output.Dimensions != null ? deserializeAws_json1_1DimensionMap(output.Dimensions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResponsePartitionKeyList = (
  output: any,
  context: __SerdeContext
): ResponsePartitionKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResponsePartitionKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResponseResourceMetric = (output: any, context: __SerdeContext): ResponseResourceMetric => {
  return {
    Description: __expectString(output.Description),
    Metric: __expectString(output.Metric),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1ResponseResourceMetricKey = (
  output: any,
  context: __SerdeContext
): ResponseResourceMetricKey => {
  return {
    Dimensions: output.Dimensions != null ? deserializeAws_json1_1DimensionMap(output.Dimensions, context) : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

const deserializeAws_json1_1ResponseResourceMetricList = (
  output: any,
  context: __SerdeContext
): ResponseResourceMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResponseResourceMetric(entry, context);
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
