// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloseTunnelCommandInput, CloseTunnelCommandOutput } from "../commands/CloseTunnelCommand";
import { DescribeTunnelCommandInput, DescribeTunnelCommandOutput } from "../commands/DescribeTunnelCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand";
import { OpenTunnelCommandInput, OpenTunnelCommandOutput } from "../commands/OpenTunnelCommand";
import {
  RotateTunnelAccessTokenCommandInput,
  RotateTunnelAccessTokenCommandOutput,
} from "../commands/RotateTunnelAccessTokenCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { IoTSecureTunnelingServiceException as __BaseException } from "../models/IoTSecureTunnelingServiceException";
import {
  CloseTunnelRequest,
  ConnectionState,
  DescribeTunnelRequest,
  DescribeTunnelResponse,
  DestinationConfig,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTunnelsRequest,
  ListTunnelsResponse,
  OpenTunnelRequest,
  ResourceNotFoundException,
  RotateTunnelAccessTokenRequest,
  Tag,
  TagResourceRequest,
  TimeoutConfig,
  Tunnel,
  TunnelSummary,
  UntagResourceRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1CloseTunnelCommand
 */
export const se_CloseTunnelCommand = async (
  input: CloseTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CloseTunnel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTunnelCommand
 */
export const se_DescribeTunnelCommand = async (
  input: DescribeTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTunnel");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1ListTunnelsCommand
 */
export const se_ListTunnelsCommand = async (
  input: ListTunnelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTunnels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1OpenTunnelCommand
 */
export const se_OpenTunnelCommand = async (
  input: OpenTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OpenTunnel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RotateTunnelAccessTokenCommand
 */
export const se_RotateTunnelAccessTokenCommand = async (
  input: RotateTunnelAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RotateTunnelAccessToken");
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
 * deserializeAws_json1_1CloseTunnelCommand
 */
export const de_CloseTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CloseTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CloseTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CloseTunnelCommandError
 */
const de_CloseTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeTunnelCommand
 */
export const de_DescribeTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTunnelResponse(data, context);
  const response: DescribeTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTunnelCommandError
 */
const de_DescribeTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTunnelsCommand
 */
export const de_ListTunnelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTunnelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTunnelsResponse(data, context);
  const response: ListTunnelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTunnelsCommandError
 */
const de_ListTunnelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1OpenTunnelCommand
 */
export const de_OpenTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OpenTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: OpenTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1OpenTunnelCommandError
 */
const de_OpenTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iotsecuretunneling#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RotateTunnelAccessTokenCommand
 */
export const de_RotateTunnelAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateTunnelAccessTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RotateTunnelAccessTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RotateTunnelAccessTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RotateTunnelAccessTokenCommandError
 */
const de_RotateTunnelAccessTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateTunnelAccessTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
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
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
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
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

// se_CloseTunnelRequest omitted.

// se_DescribeTunnelRequest omitted.

// se_DestinationConfig omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTunnelsRequest omitted.

// se_OpenTunnelRequest omitted.

// se_RotateTunnelAccessTokenRequest omitted.

// se_ServiceList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TimeoutConfig omitted.

// se_UntagResourceRequest omitted.

// de_CloseTunnelResponse omitted.

/**
 * deserializeAws_json1_1ConnectionState
 */
const de_ConnectionState = (output: any, context: __SerdeContext): ConnectionState => {
  return take(output, {
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTunnelResponse
 */
const de_DescribeTunnelResponse = (output: any, context: __SerdeContext): DescribeTunnelResponse => {
  return take(output, {
    tunnel: (_: any) => de_Tunnel(_, context),
  }) as any;
};

// de_DestinationConfig omitted.

// de_LimitExceededException omitted.

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListTunnelsResponse
 */
const de_ListTunnelsResponse = (output: any, context: __SerdeContext): ListTunnelsResponse => {
  return take(output, {
    nextToken: __expectString,
    tunnelSummaries: (_: any) => de_TunnelSummaryList(_, context),
  }) as any;
};

// de_OpenTunnelResponse omitted.

// de_ResourceNotFoundException omitted.

// de_RotateTunnelAccessTokenResponse omitted.

// de_ServiceList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TimeoutConfig omitted.

/**
 * deserializeAws_json1_1Tunnel
 */
const de_Tunnel = (output: any, context: __SerdeContext): Tunnel => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    destinationConfig: _json,
    destinationConnectionState: (_: any) => de_ConnectionState(_, context),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sourceConnectionState: (_: any) => de_ConnectionState(_, context),
    status: __expectString,
    tags: _json,
    timeoutConfig: _json,
    tunnelArn: __expectString,
    tunnelId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TunnelSummary
 */
const de_TunnelSummary = (output: any, context: __SerdeContext): TunnelSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    tunnelArn: __expectString,
    tunnelId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TunnelSummaryList
 */
const de_TunnelSummaryList = (output: any, context: __SerdeContext): TunnelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TunnelSummary(entry, context);
    });
  return retVal;
};

// de_UntagResourceResponse omitted.

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
    "x-amz-target": `IoTSecuredTunneling.${operation}`,
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
