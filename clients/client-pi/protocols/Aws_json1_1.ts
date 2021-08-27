import {
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
} from "../commands/DescribeDimensionKeysCommand";
import {
  GetDimensionKeyDetailsCommandInput,
  GetDimensionKeyDetailsCommandOutput,
} from "../commands/GetDimensionKeyDetailsCommand";
import { GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput } from "../commands/GetResourceMetricsCommand";
import {
  DataPoint,
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DimensionGroup,
  DimensionKeyDescription,
  DimensionKeyDetail,
  GetDimensionKeyDetailsRequest,
  GetDimensionKeyDetailsResponse,
  GetResourceMetricsRequest,
  GetResourceMetricsResponse,
  InternalServiceError,
  InvalidArgumentException,
  MetricKeyDataPoints,
  MetricQuery,
  NotAuthorizedException,
  ResponsePartitionKey,
  ResponseResourceMetricKey,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectString as __expectString, limitedParseFloat as __limitedParseFloat } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(body, context);
  const contents: InternalServiceError = {
    name: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(body, context);
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotAuthorizedException(body, context);
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1DescribeDimensionKeysRequest = (
  input: DescribeDimensionKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) }),
    ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PartitionBy !== undefined &&
      input.PartitionBy !== null && { PartitionBy: serializeAws_json1_1DimensionGroup(input.PartitionBy, context) }),
    ...(input.PeriodInSeconds !== undefined &&
      input.PeriodInSeconds !== null && { PeriodInSeconds: input.PeriodInSeconds }),
    ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DimensionGroup = (input: DimensionGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1RequestStringList(input.Dimensions, context) }),
    ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1GetDimensionKeyDetailsRequest = (
  input: GetDimensionKeyDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
    ...(input.GroupIdentifier !== undefined &&
      input.GroupIdentifier !== null && { GroupIdentifier: input.GroupIdentifier }),
    ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
    ...(input.RequestedDimensions !== undefined &&
      input.RequestedDimensions !== null && {
        RequestedDimensions: serializeAws_json1_1RequestedDimensionList(input.RequestedDimensions, context),
      }),
    ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
  };
};

const serializeAws_json1_1GetResourceMetricsRequest = (
  input: GetResourceMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.Identifier !== undefined && input.Identifier !== null && { Identifier: input.Identifier }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MetricQueries !== undefined &&
      input.MetricQueries !== null && {
        MetricQueries: serializeAws_json1_1MetricQueryList(input.MetricQueries, context),
      }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PeriodInSeconds !== undefined &&
      input.PeriodInSeconds !== null && { PeriodInSeconds: input.PeriodInSeconds }),
    ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1MetricQuery = (input: MetricQuery, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context) }),
    ...(input.GroupBy !== undefined &&
      input.GroupBy !== null && { GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context) }),
    ...(input.Metric !== undefined && input.Metric !== null && { Metric: input.Metric }),
  };
};

const serializeAws_json1_1MetricQueryFilterMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1MetricQueryList = (input: MetricQuery[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MetricQuery(entry, context);
    });
};

const serializeAws_json1_1RequestedDimensionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RequestStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1DataPoint = (output: any, context: __SerdeContext): DataPoint => {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Value: __limitedParseFloat(output.Value),
  } as any;
};

const deserializeAws_json1_1DataPointsList = (output: any, context: __SerdeContext): DataPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataPoint(entry, context);
    });
};

const deserializeAws_json1_1DescribeDimensionKeysResponse = (
  output: any,
  context: __SerdeContext
): DescribeDimensionKeysResponse => {
  return {
    AlignedEndTime:
      output.AlignedEndTime !== undefined && output.AlignedEndTime !== null
        ? new Date(Math.round(output.AlignedEndTime * 1000))
        : undefined,
    AlignedStartTime:
      output.AlignedStartTime !== undefined && output.AlignedStartTime !== null
        ? new Date(Math.round(output.AlignedStartTime * 1000))
        : undefined,
    Keys:
      output.Keys !== undefined && output.Keys !== null
        ? deserializeAws_json1_1DimensionKeyDescriptionList(output.Keys, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    PartitionKeys:
      output.PartitionKeys !== undefined && output.PartitionKeys !== null
        ? deserializeAws_json1_1ResponsePartitionKeyList(output.PartitionKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DimensionKeyDescription = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
        : undefined,
    Partitions:
      output.Partitions !== undefined && output.Partitions !== null
        ? deserializeAws_json1_1MetricValuesList(output.Partitions, context)
        : undefined,
    Total: __limitedParseFloat(output.Total),
  } as any;
};

const deserializeAws_json1_1DimensionKeyDescriptionList = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionKeyDescription(entry, context);
    });
};

const deserializeAws_json1_1DimensionKeyDetail = (output: any, context: __SerdeContext): DimensionKeyDetail => {
  return {
    Dimension: __expectString(output.Dimension),
    Status: __expectString(output.Status),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1DimensionKeyDetailList = (output: any, context: __SerdeContext): DimensionKeyDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DimensionKeyDetail(entry, context);
    });
};

const deserializeAws_json1_1DimensionMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1GetDimensionKeyDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetDimensionKeyDetailsResponse => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionKeyDetailList(output.Dimensions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetResourceMetricsResponse => {
  return {
    AlignedEndTime:
      output.AlignedEndTime !== undefined && output.AlignedEndTime !== null
        ? new Date(Math.round(output.AlignedEndTime * 1000))
        : undefined,
    AlignedStartTime:
      output.AlignedStartTime !== undefined && output.AlignedStartTime !== null
        ? new Date(Math.round(output.AlignedStartTime * 1000))
        : undefined,
    Identifier: __expectString(output.Identifier),
    MetricList:
      output.MetricList !== undefined && output.MetricList !== null
        ? deserializeAws_json1_1MetricKeyDataPointsList(output.MetricList, context)
        : undefined,
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

const deserializeAws_json1_1MetricKeyDataPoints = (output: any, context: __SerdeContext): MetricKeyDataPoints => {
  return {
    DataPoints:
      output.DataPoints !== undefined && output.DataPoints !== null
        ? deserializeAws_json1_1DataPointsList(output.DataPoints, context)
        : undefined,
    Key:
      output.Key !== undefined && output.Key !== null
        ? deserializeAws_json1_1ResponseResourceMetricKey(output.Key, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricKeyDataPointsList = (output: any, context: __SerdeContext): MetricKeyDataPoints[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricKeyDataPoints(entry, context);
    });
};

const deserializeAws_json1_1MetricValuesList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseFloat(entry) as any;
    });
};

const deserializeAws_json1_1NotAuthorizedException = (output: any, context: __SerdeContext): NotAuthorizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResponsePartitionKey = (output: any, context: __SerdeContext): ResponsePartitionKey => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResponsePartitionKeyList = (
  output: any,
  context: __SerdeContext
): ResponsePartitionKey[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResponsePartitionKey(entry, context);
    });
};

const deserializeAws_json1_1ResponseResourceMetricKey = (
  output: any,
  context: __SerdeContext
): ResponseResourceMetricKey => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
        : undefined,
    Metric: __expectString(output.Metric),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
