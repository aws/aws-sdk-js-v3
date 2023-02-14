// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutAuditEventsCommandInput, PutAuditEventsCommandOutput } from "../commands/PutAuditEventsCommand";
import { CloudTrailDataServiceException as __BaseException } from "../models/CloudTrailDataServiceException";
import {
  AuditEvent,
  AuditEventResultEntry,
  ChannelInsufficientPermission,
  ChannelNotFound,
  ChannelUnsupportedSchema,
  DuplicatedAuditEventId,
  InvalidChannelARN,
  ResultErrorEntry,
  UnsupportedOperationException,
} from "../models/models_0";

export const serializeAws_restJson1PutAuditEventsCommand = async (
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
  body = JSON.stringify({
    ...(input.auditEvents != null && { auditEvents: serializeAws_restJson1AuditEvents(input.auditEvents, context) }),
  });
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

export const deserializeAws_restJson1PutAuditEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAuditEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAuditEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failed != null) {
    contents.failed = deserializeAws_restJson1ResultErrorEntries(data.failed, context);
  }
  if (data.successful != null) {
    contents.successful = deserializeAws_restJson1AuditEventResultEntries(data.successful, context);
  }
  return contents;
};

const deserializeAws_restJson1PutAuditEventsCommandError = async (
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
      throw await deserializeAws_restJson1ChannelInsufficientPermissionResponse(parsedOutput, context);
    case "ChannelNotFound":
    case "com.amazonaws.cloudtraildata#ChannelNotFound":
      throw await deserializeAws_restJson1ChannelNotFoundResponse(parsedOutput, context);
    case "ChannelUnsupportedSchema":
    case "com.amazonaws.cloudtraildata#ChannelUnsupportedSchema":
      throw await deserializeAws_restJson1ChannelUnsupportedSchemaResponse(parsedOutput, context);
    case "DuplicatedAuditEventId":
    case "com.amazonaws.cloudtraildata#DuplicatedAuditEventId":
      throw await deserializeAws_restJson1DuplicatedAuditEventIdResponse(parsedOutput, context);
    case "InvalidChannelARN":
    case "com.amazonaws.cloudtraildata#InvalidChannelARN":
      throw await deserializeAws_restJson1InvalidChannelARNResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtraildata#UnsupportedOperationException":
      throw await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1ChannelInsufficientPermissionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelInsufficientPermission> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ChannelInsufficientPermission({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ChannelNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ChannelNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ChannelUnsupportedSchemaResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelUnsupportedSchema> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ChannelUnsupportedSchema({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1DuplicatedAuditEventIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatedAuditEventId> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new DuplicatedAuditEventId({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidChannelARNResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidChannelARN> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidChannelARN({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AuditEvent = (input: AuditEvent, context: __SerdeContext): any => {
  return {
    ...(input.eventData != null && { eventData: input.eventData }),
    ...(input.eventDataChecksum != null && { eventDataChecksum: input.eventDataChecksum }),
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_restJson1AuditEvents = (input: AuditEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AuditEvent(entry, context);
    });
};

const deserializeAws_restJson1AuditEventResultEntries = (
  output: any,
  context: __SerdeContext
): AuditEventResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AuditEventResultEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AuditEventResultEntry = (output: any, context: __SerdeContext): AuditEventResultEntry => {
  return {
    eventID: __expectString(output.eventID),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1ResultErrorEntries = (output: any, context: __SerdeContext): ResultErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResultErrorEntry = (output: any, context: __SerdeContext): ResultErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
  } as any;
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
