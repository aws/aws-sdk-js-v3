// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { PostToConnectionCommandInput, PostToConnectionCommandOutput } from "../commands/PostToConnectionCommand";
import { ApiGatewayManagementApiServiceException as __BaseException } from "../models/ApiGatewayManagementApiServiceException";
import {
  ForbiddenException,
  GoneException,
  Identity,
  LimitExceededException,
  PayloadTooLargeException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/@connections/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetConnectionCommand
 */
export const se_GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/@connections/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PostToConnectionCommand
 */
export const se_PostToConnectionCommand = async (
  input: PostToConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/@connections/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
  let body: any;
  if (input.Data !== undefined) {
    body = input.Data;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      throw await de_GoneExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
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
 * deserializeAws_restJson1GetConnectionCommand
 */
export const de_GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectedAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `connectedAt`],
    Identity: [, (_) => de_Identity(_, context), `identity`],
    LastActiveAt: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `lastActiveAt`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectionCommandError
 */
const de_GetConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      throw await de_GoneExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
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
 * deserializeAws_restJson1PostToConnectionCommand
 */
export const de_PostToConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostToConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PostToConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PostToConnectionCommandError
 */
const de_PostToConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostToConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      throw await de_GoneExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.apigatewaymanagementapi#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GoneExceptionRes
 */
const de_GoneExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<GoneException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new GoneException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PayloadTooLargeExceptionRes
 */
const de_PayloadTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new PayloadTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1Identity
 */
const de_Identity = (output: any, context: __SerdeContext): Identity => {
  return take(output, {
    SourceIp: [, __expectString, `sourceIp`],
    UserAgent: [, __expectString, `userAgent`],
  }) as any;
};

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
