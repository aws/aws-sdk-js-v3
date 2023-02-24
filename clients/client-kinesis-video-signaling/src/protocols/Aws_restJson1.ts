// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput } from "../commands/GetIceServerConfigCommand";
import {
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
} from "../commands/SendAlexaOfferToMasterCommand";
import { KinesisVideoSignalingServiceException as __BaseException } from "../models/KinesisVideoSignalingServiceException";
import {
  ClientLimitExceededException,
  IceServer,
  InvalidArgumentException,
  InvalidClientException,
  NotAuthorizedException,
  ResourceNotFoundException,
  SessionExpiredException,
} from "../models/models_0";

export const serializeAws_restJson1GetIceServerConfigCommand = async (
  input: GetIceServerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/get-ice-server-config";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.Service != null && { Service: input.Service }),
    ...(input.Username != null && { Username: input.Username }),
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

export const serializeAws_restJson1SendAlexaOfferToMasterCommand = async (
  input: SendAlexaOfferToMasterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/send-alexa-offer-to-master";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.MessagePayload != null && { MessagePayload: input.MessagePayload }),
    ...(input.SenderClientId != null && { SenderClientId: input.SenderClientId }),
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

export const deserializeAws_restJson1GetIceServerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIceServerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIceServerConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IceServerList != null) {
    contents.IceServerList = deserializeAws_restJson1IceServerList(data.IceServerList, context);
  }
  return contents;
};

const deserializeAws_restJson1GetIceServerConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIceServerConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.kinesisvideosignaling#InvalidClientException":
      throw await deserializeAws_restJson1InvalidClientExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "SessionExpiredException":
    case "com.amazonaws.kinesisvideosignaling#SessionExpiredException":
      throw await deserializeAws_restJson1SessionExpiredExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendAlexaOfferToMasterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAlexaOfferToMasterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendAlexaOfferToMasterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Answer != null) {
    contents.Answer = __expectString(data.Answer);
  }
  return contents;
};

const deserializeAws_restJson1SendAlexaOfferToMasterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAlexaOfferToMasterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
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
const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ClientLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotAuthorizedException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SessionExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionExpiredException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new SessionExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IceServer = (output: any, context: __SerdeContext): IceServer => {
  return {
    Password: __expectString(output.Password),
    Ttl: __expectInt32(output.Ttl),
    Uris: output.Uris != null ? deserializeAws_restJson1Uris(output.Uris, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_restJson1IceServerList = (output: any, context: __SerdeContext): IceServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IceServer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Uris = (output: any, context: __SerdeContext): string[] => {
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
