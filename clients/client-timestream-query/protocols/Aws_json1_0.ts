import { CancelQueryCommandInput, CancelQueryCommandOutput } from "../commands/CancelQueryCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import {
  AccessDeniedException,
  CancelQueryRequest,
  CancelQueryResponse,
  ColumnInfo,
  ConflictException,
  Datum,
  DescribeEndpointsRequest,
  DescribeEndpointsResponse,
  Endpoint,
  InternalServerException,
  InvalidEndpointException,
  QueryExecutionException,
  QueryRequest,
  QueryResponse,
  QueryStatus,
  Row,
  ThrottlingException,
  TimeSeriesDataPoint,
  Type,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_0CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.CancelQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0QueryCommand = async (
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.Query",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0QueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CancelQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelQueryResponse(data, context);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0QueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0QueryResponse(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0QueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.timestreamquery#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QueryExecutionException":
    case "com.amazonaws.timestreamquery#QueryExecutionException":
      response = {
        ...(await deserializeAws_json1_0QueryExecutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidEndpointException(body, context);
  const contents: InvalidEndpointException = {
    name: "InvalidEndpointException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0QueryExecutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0QueryExecutionException(body, context);
  const contents: QueryExecutionException = {
    name: "QueryExecutionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0CancelQueryRequest = (input: CancelQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
  };
};

const serializeAws_json1_0DescribeEndpointsRequest = (
  input: DescribeEndpointsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.MaxRows !== undefined && input.MaxRows !== null && { MaxRows: input.MaxRows }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CancelQueryResponse = (output: any, context: __SerdeContext): CancelQueryResponse => {
  return {
    CancellationMessage: __expectString(output.CancellationMessage),
  } as any;
};

const deserializeAws_json1_0ColumnInfo = (output: any, context: __SerdeContext): ColumnInfo => {
  return {
    Name: __expectString(output.Name),
    Type:
      output.Type !== undefined && output.Type !== null ? deserializeAws_json1_0Type(output.Type, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ColumnInfo(entry, context);
    });
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0Datum = (output: any, context: __SerdeContext): Datum => {
  return {
    ArrayValue:
      output.ArrayValue !== undefined && output.ArrayValue !== null
        ? deserializeAws_json1_0DatumList(output.ArrayValue, context)
        : undefined,
    NullValue: __expectBoolean(output.NullValue),
    RowValue:
      output.RowValue !== undefined && output.RowValue !== null
        ? deserializeAws_json1_0Row(output.RowValue, context)
        : undefined,
    ScalarValue: __expectString(output.ScalarValue),
    TimeSeriesValue:
      output.TimeSeriesValue !== undefined && output.TimeSeriesValue !== null
        ? deserializeAws_json1_0TimeSeriesDataPointList(output.TimeSeriesValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DatumList = (output: any, context: __SerdeContext): Datum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Datum(entry, context);
    });
};

const deserializeAws_json1_0DescribeEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointsResponse => {
  return {
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_json1_0Endpoints(output.Endpoints, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    CachePeriodInMinutes: __expectInt(output.CachePeriodInMinutes),
  } as any;
};

const deserializeAws_json1_0Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Endpoint(entry, context);
    });
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidEndpointException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0QueryExecutionException = (
  output: any,
  context: __SerdeContext
): QueryExecutionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0QueryResponse = (output: any, context: __SerdeContext): QueryResponse => {
  return {
    ColumnInfo:
      output.ColumnInfo !== undefined && output.ColumnInfo !== null
        ? deserializeAws_json1_0ColumnInfoList(output.ColumnInfo, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    QueryId: __expectString(output.QueryId),
    QueryStatus:
      output.QueryStatus !== undefined && output.QueryStatus !== null
        ? deserializeAws_json1_0QueryStatus(output.QueryStatus, context)
        : undefined,
    Rows:
      output.Rows !== undefined && output.Rows !== null
        ? deserializeAws_json1_0RowList(output.Rows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0QueryStatus = (output: any, context: __SerdeContext): QueryStatus => {
  return {
    CumulativeBytesMetered: __expectInt(output.CumulativeBytesMetered),
    CumulativeBytesScanned: __expectInt(output.CumulativeBytesScanned),
    ProgressPercentage: __limitedParseFloat(output.ProgressPercentage),
  } as any;
};

const deserializeAws_json1_0Row = (output: any, context: __SerdeContext): Row => {
  return {
    Data:
      output.Data !== undefined && output.Data !== null
        ? deserializeAws_json1_0DatumList(output.Data, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RowList = (output: any, context: __SerdeContext): Row[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Row(entry, context);
    });
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0TimeSeriesDataPoint = (output: any, context: __SerdeContext): TimeSeriesDataPoint => {
  return {
    Time: __expectString(output.Time),
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_0Datum(output.Value, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0TimeSeriesDataPointList = (output: any, context: __SerdeContext): TimeSeriesDataPoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0TimeSeriesDataPoint(entry, context);
    });
};

const deserializeAws_json1_0Type = (output: any, context: __SerdeContext): Type => {
  return {
    ArrayColumnInfo:
      output.ArrayColumnInfo !== undefined && output.ArrayColumnInfo !== null
        ? deserializeAws_json1_0ColumnInfo(output.ArrayColumnInfo, context)
        : undefined,
    RowColumnInfo:
      output.RowColumnInfo !== undefined && output.RowColumnInfo !== null
        ? deserializeAws_json1_0ColumnInfoList(output.RowColumnInfo, context)
        : undefined,
    ScalarType: __expectString(output.ScalarType),
    TimeSeriesMeasureValueColumnInfo:
      output.TimeSeriesMeasureValueColumnInfo !== undefined && output.TimeSeriesMeasureValueColumnInfo !== null
        ? deserializeAws_json1_0ColumnInfo(output.TimeSeriesMeasureValueColumnInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
