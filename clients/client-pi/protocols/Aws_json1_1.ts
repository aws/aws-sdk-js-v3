import {
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput
} from "../commands/DescribeDimensionKeysCommand";
import {
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput
} from "../commands/GetResourceMetricsCommand";
import {
  DataPoint,
  DescribeDimensionKeysRequest,
  DescribeDimensionKeysResponse,
  DimensionGroup,
  DimensionKeyDescription,
  GetResourceMetricsRequest,
  GetResourceMetricsResponse,
  InternalServiceError,
  InvalidArgumentException,
  MetricKeyDataPoints,
  MetricQuery,
  NotAuthorizedException,
  ResponsePartitionKey,
  ResponseResourceMetricKey
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1DescribeDimensionKeysCommand = async (
  input: DescribeDimensionKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PerformanceInsightsv20180227.DescribeDimensionKeys"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDimensionKeysRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourceMetricsCommand = async (
  input: GetResourceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "PerformanceInsightsv20180227.GetResourceMetrics"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResourceMetricsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeDimensionKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDimensionKeysCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDimensionKeysResponse(data, context);
  const response: DescribeDimensionKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDimensionKeysResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDimensionKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDimensionKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResourceMetricsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceMetricsResponse(data, context);
  const response: GetResourceMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourceMetricsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.pi#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.pi#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.pi#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1InternalServiceError(
    body,
    context
  );
  const contents: InternalServiceError = {
    name: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(
    body,
    context
  );
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotAuthorizedException(
    body,
    context
  );
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1DescribeDimensionKeysRequest = (
  input: DescribeDimensionKeysRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context)
    }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context)
    }),
    ...(input.Identifier !== undefined && { Identifier: input.Identifier }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Metric !== undefined && { Metric: input.Metric }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PartitionBy !== undefined && {
      PartitionBy: serializeAws_json1_1DimensionGroup(
        input.PartitionBy,
        context
      )
    }),
    ...(input.PeriodInSeconds !== undefined && {
      PeriodInSeconds: input.PeriodInSeconds
    }),
    ...(input.ServiceType !== undefined && { ServiceType: input.ServiceType }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1DimensionGroup = (
  input: DimensionGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_json1_1StringList(input.Dimensions, context)
    }),
    ...(input.Group !== undefined && { Group: input.Group }),
    ...(input.Limit !== undefined && { Limit: input.Limit })
  };
};

const serializeAws_json1_1GetResourceMetricsRequest = (
  input: GetResourceMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.Identifier !== undefined && { Identifier: input.Identifier }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.MetricQueries !== undefined && {
      MetricQueries: serializeAws_json1_1MetricQueryList(
        input.MetricQueries,
        context
      )
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PeriodInSeconds !== undefined && {
      PeriodInSeconds: input.PeriodInSeconds
    }),
    ...(input.ServiceType !== undefined && { ServiceType: input.ServiceType }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1MetricQuery = (
  input: MetricQuery,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1MetricQueryFilterMap(input.Filter, context)
    }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1DimensionGroup(input.GroupBy, context)
    }),
    ...(input.Metric !== undefined && { Metric: input.Metric })
  };
};

const serializeAws_json1_1MetricQueryFilterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1MetricQueryList = (
  input: MetricQuery[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1MetricQuery(entry, context));
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1DataPoint = (
  output: any,
  context: __SerdeContext
): DataPoint => {
  return {
    __type: "DataPoint",
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1DataPointsList = (
  output: any,
  context: __SerdeContext
): DataPoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataPoint(entry, context)
  );
};

const deserializeAws_json1_1DescribeDimensionKeysResponse = (
  output: any,
  context: __SerdeContext
): DescribeDimensionKeysResponse => {
  return {
    __type: "DescribeDimensionKeysResponse",
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
        ? deserializeAws_json1_1DimensionKeyDescriptionList(
            output.Keys,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    PartitionKeys:
      output.PartitionKeys !== undefined && output.PartitionKeys !== null
        ? deserializeAws_json1_1ResponsePartitionKeyList(
            output.PartitionKeys,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DimensionKeyDescription = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription => {
  return {
    __type: "DimensionKeyDescription",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
        : undefined,
    Partitions:
      output.Partitions !== undefined && output.Partitions !== null
        ? deserializeAws_json1_1MetricValuesList(output.Partitions, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? output.Total
        : undefined
  } as any;
};

const deserializeAws_json1_1DimensionKeyDescriptionList = (
  output: any,
  context: __SerdeContext
): DimensionKeyDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DimensionKeyDescription(entry, context)
  );
};

const deserializeAws_json1_1DimensionMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1GetResourceMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetResourceMetricsResponse => {
  return {
    __type: "GetResourceMetricsResponse",
    AlignedEndTime:
      output.AlignedEndTime !== undefined && output.AlignedEndTime !== null
        ? new Date(Math.round(output.AlignedEndTime * 1000))
        : undefined,
    AlignedStartTime:
      output.AlignedStartTime !== undefined && output.AlignedStartTime !== null
        ? new Date(Math.round(output.AlignedStartTime * 1000))
        : undefined,
    Identifier:
      output.Identifier !== undefined && output.Identifier !== null
        ? output.Identifier
        : undefined,
    MetricList:
      output.MetricList !== undefined && output.MetricList !== null
        ? deserializeAws_json1_1MetricKeyDataPointsList(
            output.MetricList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  return {
    __type: "InternalServiceError",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    __type: "InvalidArgumentException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricKeyDataPoints = (
  output: any,
  context: __SerdeContext
): MetricKeyDataPoints => {
  return {
    __type: "MetricKeyDataPoints",
    DataPoints:
      output.DataPoints !== undefined && output.DataPoints !== null
        ? deserializeAws_json1_1DataPointsList(output.DataPoints, context)
        : undefined,
    Key:
      output.Key !== undefined && output.Key !== null
        ? deserializeAws_json1_1ResponseResourceMetricKey(output.Key, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricKeyDataPointsList = (
  output: any,
  context: __SerdeContext
): MetricKeyDataPoints[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricKeyDataPoints(entry, context)
  );
};

const deserializeAws_json1_1MetricValuesList = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1NotAuthorizedException = (
  output: any,
  context: __SerdeContext
): NotAuthorizedException => {
  return {
    __type: "NotAuthorizedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResponsePartitionKey = (
  output: any,
  context: __SerdeContext
): ResponsePartitionKey => {
  return {
    __type: "ResponsePartitionKey",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ResponsePartitionKeyList = (
  output: any,
  context: __SerdeContext
): ResponsePartitionKey[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResponsePartitionKey(entry, context)
  );
};

const deserializeAws_json1_1ResponseResourceMetricKey = (
  output: any,
  context: __SerdeContext
): ResponseResourceMetricKey => {
  return {
    __type: "ResponseResourceMetricKey",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionMap(output.Dimensions, context)
        : undefined,
    Metric:
      output.Metric !== undefined && output.Metric !== null
        ? output.Metric
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
