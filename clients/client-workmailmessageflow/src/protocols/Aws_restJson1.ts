// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput,
} from "../commands/GetRawMessageContentCommand";
import {
  PutRawMessageContentCommandInput,
  PutRawMessageContentCommandOutput,
} from "../commands/PutRawMessageContentCommand";
import {
  InvalidContentLocation,
  MessageFrozen,
  MessageRejected,
  RawMessageContent,
  ResourceNotFoundException,
  S3Reference,
} from "../models/models_0";
import { WorkMailMessageFlowServiceException as __BaseException } from "../models/WorkMailMessageFlowServiceException";

export const serializeAws_restJson1GetRawMessageContentCommand = async (
  input: GetRawMessageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/messages/{messageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "messageId", () => input.messageId!, "{messageId}", false);
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

export const serializeAws_restJson1PutRawMessageContentCommand = async (
  input: PutRawMessageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/messages/{messageId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "messageId", () => input.messageId!, "{messageId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.content != null && { content: serializeAws_restJson1RawMessageContent(input.content, context) }),
  });
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

export const deserializeAws_restJson1GetRawMessageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetRawMessageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRawMessageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.messageContent = data;
  return contents;
};

const deserializeAws_restJson1GetRawMessageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRawMessageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workmailmessageflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutRawMessageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRawMessageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRawMessageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutRawMessageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRawMessageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidContentLocation":
    case "com.amazonaws.workmailmessageflow#InvalidContentLocation":
      throw await deserializeAws_restJson1InvalidContentLocationResponse(parsedOutput, context);
    case "MessageFrozen":
    case "com.amazonaws.workmailmessageflow#MessageFrozen":
      throw await deserializeAws_restJson1MessageFrozenResponse(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.workmailmessageflow#MessageRejected":
      throw await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmailmessageflow#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const map = __map;
const deserializeAws_restJson1InvalidContentLocationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContentLocation> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidContentLocation({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MessageFrozenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageFrozen> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MessageFrozen({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MessageRejectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MessageRejected({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1RawMessageContent = (input: RawMessageContent, context: __SerdeContext): any => {
  return {
    ...(input.s3Reference != null && { s3Reference: serializeAws_restJson1S3Reference(input.s3Reference, context) }),
  };
};

const serializeAws_restJson1S3Reference = (input: S3Reference, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
    ...(input.objectVersion != null && { objectVersion: input.objectVersion }),
  };
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
