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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1GetRawMessageContentCommand = async (
  input: GetRawMessageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/messages/{messageId}";
  if (input.messageId !== undefined) {
    const labelValue: string = input.messageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: messageId.");
    }
    resolvedPath = resolvedPath.replace("{messageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: messageId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/messages/{messageId}";
  if (input.messageId !== undefined) {
    const labelValue: string = input.messageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: messageId.");
    }
    resolvedPath = resolvedPath.replace("{messageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: messageId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.content !== undefined &&
      input.content !== null && { content: serializeAws_restJson1RawMessageContent(input.content, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  context: __SerdeContext
): Promise<GetRawMessageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRawMessageContentCommandError(output, context);
  }
  const contents: GetRawMessageContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    messageContent: undefined,
  };
  const data: any = output.body;
  contents.messageContent = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRawMessageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRawMessageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workmailmessageflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutRawMessageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRawMessageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRawMessageContentCommandError(output, context);
  }
  const contents: PutRawMessageContentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutRawMessageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRawMessageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidContentLocation":
    case "com.amazonaws.workmailmessageflow#InvalidContentLocation":
      response = {
        ...(await deserializeAws_restJson1InvalidContentLocationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageFrozen":
    case "com.amazonaws.workmailmessageflow#MessageFrozen":
      response = {
        ...(await deserializeAws_restJson1MessageFrozenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MessageRejected":
    case "com.amazonaws.workmailmessageflow#MessageRejected":
      response = {
        ...(await deserializeAws_restJson1MessageRejectedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.workmailmessageflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1InvalidContentLocationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContentLocation> => {
  const contents: InvalidContentLocation = {
    name: "InvalidContentLocation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1MessageFrozenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageFrozen> => {
  const contents: MessageFrozen = {
    name: "MessageFrozen",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1MessageRejectedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageRejected> => {
  const contents: MessageRejected = {
    name: "MessageRejected",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1RawMessageContent = (input: RawMessageContent, context: __SerdeContext): any => {
  return {
    ...(input.s3Reference !== undefined &&
      input.s3Reference !== null && { s3Reference: serializeAws_restJson1S3Reference(input.s3Reference, context) }),
  };
};

const serializeAws_restJson1S3Reference = (input: S3Reference, context: __SerdeContext): any => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.objectVersion !== undefined && input.objectVersion !== null && { objectVersion: input.objectVersion }),
  };
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
