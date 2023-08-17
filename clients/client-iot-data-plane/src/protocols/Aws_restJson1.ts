// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput } from "../commands/DeleteThingShadowCommand";
import { GetRetainedMessageCommandInput, GetRetainedMessageCommandOutput } from "../commands/GetRetainedMessageCommand";
import { GetThingShadowCommandInput, GetThingShadowCommandOutput } from "../commands/GetThingShadowCommand";
import {
  ListNamedShadowsForThingCommandInput,
  ListNamedShadowsForThingCommandOutput,
} from "../commands/ListNamedShadowsForThingCommand";
import {
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput,
} from "../commands/ListRetainedMessagesCommand";
import { PublishCommandInput, PublishCommandOutput } from "../commands/PublishCommand";
import { UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput } from "../commands/UpdateThingShadowCommand";
import { IoTDataPlaneServiceException as __BaseException } from "../models/IoTDataPlaneServiceException";
import {
  ConflictException,
  InternalFailureException,
  InvalidRequestException,
  MethodNotAllowedException,
  RequestEntityTooLargeException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  UnauthorizedException,
  UnsupportedDocumentEncodingException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeleteThingShadowCommand
 */
export const se_DeleteThingShadowCommand = async (
  input: DeleteThingShadowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/shadow";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    name: [, input.shadowName!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetRetainedMessageCommand
 */
export const se_GetRetainedMessageCommand = async (
  input: GetRetainedMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/retainedMessage/{topic}";
  resolvedPath = __resolvedPath(resolvedPath, input, "topic", () => input.topic!, "{topic}", false);
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
 * serializeAws_restJson1GetThingShadowCommand
 */
export const se_GetThingShadowCommand = async (
  input: GetThingShadowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/shadow";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    name: [, input.shadowName!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListNamedShadowsForThingCommand
 */
export const se_ListNamedShadowsForThingCommand = async (
  input: ListNamedShadowsForThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/api/things/shadow/ListNamedShadowsForThing/{thingName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    pageSize: [() => input.pageSize !== void 0, () => input.pageSize!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListRetainedMessagesCommand
 */
export const se_ListRetainedMessagesCommand = async (
  input: ListRetainedMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/retainedMessage";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PublishCommand
 */
export const se_PublishCommand = async (
  input: PublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-amz-mqtt5-user-properties": [
      () => isSerializableHeaderValue(input.userProperties),
      () => context.base64Encoder(Buffer.from(__LazyJsonString.fromObject(input.userProperties!))),
    ],
    "x-amz-mqtt5-payload-format-indicator": input.payloadFormatIndicator!,
    "x-amz-mqtt5-correlation-data": input.correlationData!,
  });
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/topics/{topic}";
  resolvedPath = __resolvedPath(resolvedPath, input, "topic", () => input.topic!, "{topic}", false);
  const query: any = map({
    qos: [() => input.qos !== void 0, () => input.qos!.toString()],
    retain: [() => input.retain !== void 0, () => input.retain!.toString()],
    contentType: [, input.contentType!],
    responseTopic: [, input.responseTopic!],
    messageExpiry: [() => input.messageExpiry !== void 0, () => input.messageExpiry!.toString()],
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateThingShadowCommand
 */
export const se_UpdateThingShadowCommand = async (
  input: UpdateThingShadowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/shadow";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    name: [, input.shadowName!],
  });
  let body: any;
  if (input.payload !== undefined) {
    body = input.payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1DeleteThingShadowCommand
 */
export const de_DeleteThingShadowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThingShadowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteThingShadowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1DeleteThingShadowCommandError
 */
const de_DeleteThingShadowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThingShadowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdataplane#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotdataplane#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentEncodingException":
    case "com.amazonaws.iotdataplane#UnsupportedDocumentEncodingException":
      throw await de_UnsupportedDocumentEncodingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetRetainedMessageCommand
 */
export const de_GetRetainedMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetainedMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRetainedMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    lastModifiedTime: __expectLong,
    payload: context.base64Decoder,
    qos: __expectInt32,
    topic: __expectString,
    userProperties: context.base64Decoder,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRetainedMessageCommandError
 */
const de_GetRetainedMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetainedMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdataplane#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotdataplane#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetThingShadowCommand
 */
export const de_GetThingShadowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingShadowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetThingShadowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetThingShadowCommandError
 */
const de_GetThingShadowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThingShadowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdataplane#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotdataplane#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentEncodingException":
    case "com.amazonaws.iotdataplane#UnsupportedDocumentEncodingException":
      throw await de_UnsupportedDocumentEncodingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListNamedShadowsForThingCommand
 */
export const de_ListNamedShadowsForThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedShadowsForThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNamedShadowsForThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    results: _json,
    timestamp: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNamedShadowsForThingCommandError
 */
const de_ListNamedShadowsForThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedShadowsForThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdataplane#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotdataplane#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRetainedMessagesCommand
 */
export const de_ListRetainedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetainedMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRetainedMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    retainedTopics: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRetainedMessagesCommandError
 */
const de_ListRetainedMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetainedMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotdataplane#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PublishCommand
 */
export const de_PublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PublishCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PublishCommandError
 */
const de_PublishCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateThingShadowCommand
 */
export const de_UpdateThingShadowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingShadowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateThingShadowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1UpdateThingShadowCommandError
 */
const de_UpdateThingShadowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThingShadowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.iotdataplane#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotdataplane#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotdataplane#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.iotdataplane#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "RequestEntityTooLargeException":
    case "com.amazonaws.iotdataplane#RequestEntityTooLargeException":
      throw await de_RequestEntityTooLargeExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotdataplane#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotdataplane#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotdataplane#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentEncodingException":
    case "com.amazonaws.iotdataplane#UnsupportedDocumentEncodingException":
      throw await de_UnsupportedDocumentEncodingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MethodNotAllowedExceptionRes
 */
const de_MethodNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MethodNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestEntityTooLargeExceptionRes
 */
const de_RequestEntityTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestEntityTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestEntityTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedDocumentEncodingExceptionRes
 */
const de_UnsupportedDocumentEncodingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDocumentEncodingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedDocumentEncodingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// de_NamedShadowList omitted.

// de_RetainedMessageList omitted.

// de_RetainedMessageSummary omitted.

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
