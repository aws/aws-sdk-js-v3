import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { PostToConnectionCommandInput, PostToConnectionCommandOutput } from "../commands/PostToConnectionCommand";
import {
  ForbiddenException,
  GoneException,
  Identity,
  LimitExceededException,
  PayloadTooLargeException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
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

export const serializeAws_restJson1GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
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

export const serializeAws_restJson1PostToConnectionCommand = async (
  input: PostToConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
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

export const deserializeAws_restJson1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectionCommandError(output, context);
  }
  const contents: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectionCommandError(output, context);
  }
  const contents: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectedAt: undefined,
    Identity: undefined,
    LastActiveAt: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.connectedAt !== undefined && data.connectedAt !== null) {
    contents.ConnectedAt = __expectNonNull(__parseRfc3339DateTime(data.connectedAt));
  }
  if (data.identity !== undefined && data.identity !== null) {
    contents.Identity = deserializeAws_restJson1Identity(data.identity, context);
  }
  if (data.lastActiveAt !== undefined && data.lastActiveAt !== null) {
    contents.LastActiveAt = __expectNonNull(__parseRfc3339DateTime(data.lastActiveAt));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PostToConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostToConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PostToConnectionCommandError(output, context);
  }
  const contents: PostToConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PostToConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostToConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.apigatewaymanagementapi#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1GoneExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GoneException> => {
  const contents: GoneException = {
    name: "GoneException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: PayloadTooLargeException = {
    name: "PayloadTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    SourceIp: __expectString(output.sourceIp),
    UserAgent: __expectString(output.userAgent),
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
