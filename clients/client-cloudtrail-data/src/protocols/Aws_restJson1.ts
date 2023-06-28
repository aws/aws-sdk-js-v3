// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { PutAuditEventsCommandInput, PutAuditEventsCommandOutput } from "../commands/PutAuditEventsCommand";
import { CloudTrailDataServiceException as __BaseException } from "../models/CloudTrailDataServiceException";
import {
  AuditEvent,
  ChannelInsufficientPermission,
  ChannelNotFound,
  ChannelUnsupportedSchema,
  DuplicatedAuditEventId,
  InvalidChannelARN,
  UnsupportedOperationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1PutAuditEventsCommand
 */
export const se_PutAuditEventsCommand = async (
  input: PutAuditEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutAuditEvents";
  const query: any = map({
    channelArn: [, __expectNonNull(input.channelArn!, `channelArn`)],
    externalId: [, input.externalId!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      auditEvents: (_) => _json(_),
    })
  );
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
 * deserializeAws_restJson1PutAuditEventsCommand
 */
export const de_PutAuditEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAuditEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAuditEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failed: _json,
    successful: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAuditEventsCommandError
 */
const de_PutAuditEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAuditEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelInsufficientPermission":
    case "com.amazonaws.cloudtraildata#ChannelInsufficientPermission":
      throw await de_ChannelInsufficientPermissionRes(parsedOutput, context);
    case "ChannelNotFound":
    case "com.amazonaws.cloudtraildata#ChannelNotFound":
      throw await de_ChannelNotFoundRes(parsedOutput, context);
    case "ChannelUnsupportedSchema":
    case "com.amazonaws.cloudtraildata#ChannelUnsupportedSchema":
      throw await de_ChannelUnsupportedSchemaRes(parsedOutput, context);
    case "DuplicatedAuditEventId":
    case "com.amazonaws.cloudtraildata#DuplicatedAuditEventId":
      throw await de_DuplicatedAuditEventIdRes(parsedOutput, context);
    case "InvalidChannelARN":
    case "com.amazonaws.cloudtraildata#InvalidChannelARN":
      throw await de_InvalidChannelARNRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtraildata#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ChannelInsufficientPermissionRes
 */
const de_ChannelInsufficientPermissionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelInsufficientPermission> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelInsufficientPermission({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ChannelNotFoundRes
 */
const de_ChannelNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ChannelNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ChannelUnsupportedSchemaRes
 */
const de_ChannelUnsupportedSchemaRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelUnsupportedSchema> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelUnsupportedSchema({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DuplicatedAuditEventIdRes
 */
const de_DuplicatedAuditEventIdRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatedAuditEventId> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DuplicatedAuditEventId({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidChannelARNRes
 */
const de_InvalidChannelARNRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidChannelARN> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidChannelARN({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AuditEvent omitted.

// se_AuditEvents omitted.

// de_AuditEventResultEntries omitted.

// de_AuditEventResultEntry omitted.

// de_ResultErrorEntries omitted.

// de_ResultErrorEntry omitted.

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
