// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { PutItemsCommandInput, PutItemsCommandOutput } from "../commands/PutItemsCommand";
import { PutUsersCommandInput, PutUsersCommandOutput } from "../commands/PutUsersCommand";
import {
  Event,
  InvalidInputException,
  Item,
  ResourceInUseException,
  ResourceNotFoundException,
  User,
} from "../models/models_0";
import { PersonalizeEventsServiceException as __BaseException } from "../models/PersonalizeEventsServiceException";

export const serializeAws_restJson1PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/events";
  let body: any;
  body = JSON.stringify({
    ...(input.eventList !== undefined &&
      input.eventList !== null && { eventList: serializeAws_restJson1EventList(input.eventList, context) }),
    ...(input.sessionId !== undefined && input.sessionId !== null && { sessionId: input.sessionId }),
    ...(input.trackingId !== undefined && input.trackingId !== null && { trackingId: input.trackingId }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
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

export const serializeAws_restJson1PutItemsCommand = async (
  input: PutItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/items";
  let body: any;
  body = JSON.stringify({
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    ...(input.items !== undefined &&
      input.items !== null && { items: serializeAws_restJson1ItemList(input.items, context) }),
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

export const serializeAws_restJson1PutUsersCommand = async (
  input: PutUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users";
  let body: any;
  body = JSON.stringify({
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    ...(input.users !== undefined &&
      input.users !== null && { users: serializeAws_restJson1UserList(input.users, context) }),
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

export const deserializeAws_restJson1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEventsCommandError(output, context);
  }
  const contents: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeevents#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutItemsCommandError(output, context);
  }
  const contents: PutItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeevents#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalizeevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutUsersCommandError(output, context);
  }
  const contents: PutUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalizeevents#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalizeevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalizeevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.eventId !== undefined && input.eventId !== null && { eventId: input.eventId }),
    ...(input.eventType !== undefined && input.eventType !== null && { eventType: input.eventType }),
    ...(input.eventValue !== undefined &&
      input.eventValue !== null && { eventValue: __serializeFloat(input.eventValue) }),
    ...(input.impression !== undefined &&
      input.impression !== null && { impression: serializeAws_restJson1Impression(input.impression, context) }),
    ...(input.itemId !== undefined && input.itemId !== null && { itemId: input.itemId }),
    ...(input.properties !== undefined &&
      input.properties !== null && { properties: __LazyJsonString.fromObject(input.properties) }),
    ...(input.recommendationId !== undefined &&
      input.recommendationId !== null && { recommendationId: input.recommendationId }),
    ...(input.sentAt !== undefined && input.sentAt !== null && { sentAt: Math.round(input.sentAt.getTime() / 1000) }),
  };
};

const serializeAws_restJson1EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Event(entry, context);
    });
};

const serializeAws_restJson1Impression = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Item = (input: Item, context: __SerdeContext): any => {
  return {
    ...(input.itemId !== undefined && input.itemId !== null && { itemId: input.itemId }),
    ...(input.properties !== undefined &&
      input.properties !== null && { properties: __LazyJsonString.fromObject(input.properties) }),
  };
};

const serializeAws_restJson1ItemList = (input: Item[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Item(entry, context);
    });
};

const serializeAws_restJson1User = (input: User, context: __SerdeContext): any => {
  return {
    ...(input.properties !== undefined &&
      input.properties !== null && { properties: __LazyJsonString.fromObject(input.properties) }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  };
};

const serializeAws_restJson1UserList = (input: User[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1User(entry, context);
    });
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
