import {
  GetIceServerConfigCommandInput,
  GetIceServerConfigCommandOutput
} from "../commands/GetIceServerConfigCommand";
import {
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput
} from "../commands/SendAlexaOfferToMasterCommand";
import {
  ClientLimitExceededException,
  IceServer,
  InvalidArgumentException,
  InvalidClientException,
  NotAuthorizedException,
  ResourceNotFoundException,
  SessionExpiredException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1GetIceServerConfigCommand = async (
  input: GetIceServerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/get-ice-server-config";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN !== undefined && { ChannelARN: input.ChannelARN }),
    ...(input.ClientId !== undefined && { ClientId: input.ClientId }),
    ...(input.Service !== undefined && { Service: input.Service }),
    ...(input.Username !== undefined && { Username: input.Username })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1SendAlexaOfferToMasterCommand = async (
  input: SendAlexaOfferToMasterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/send-alexa-offer-to-master";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN !== undefined && { ChannelARN: input.ChannelARN }),
    ...(input.MessagePayload !== undefined && {
      MessagePayload: input.MessagePayload
    }),
    ...(input.SenderClientId !== undefined && {
      SenderClientId: input.SenderClientId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1GetIceServerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIceServerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetIceServerConfigCommandError(
      output,
      context
    );
  }
  const contents: GetIceServerConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIceServerConfigResponse",
    IceServerList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IceServerList !== undefined && data.IceServerList !== null) {
    contents.IceServerList = deserializeAws_restJson1IceServerList(
      data.IceServerList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIceServerConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIceServerConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientException":
    case "com.amazonaws.kinesisvideosignaling#InvalidClientException":
      response = {
        ...(await deserializeAws_restJson1InvalidClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SessionExpiredException":
    case "com.amazonaws.kinesisvideosignaling#SessionExpiredException":
      response = {
        ...(await deserializeAws_restJson1SessionExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SendAlexaOfferToMasterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAlexaOfferToMasterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SendAlexaOfferToMasterCommandError(
      output,
      context
    );
  }
  const contents: SendAlexaOfferToMasterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendAlexaOfferToMasterResponse",
    Answer: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Answer !== undefined && data.Answer !== null) {
    contents.Answer = data.Answer;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendAlexaOfferToMasterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAlexaOfferToMasterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: ClientLimitExceededException = {
    name: "ClientLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientException> => {
  const contents: InvalidClientException = {
    name: "InvalidClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1SessionExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionExpiredException> => {
  const contents: SessionExpiredException = {
    name: "SessionExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1IceServer = (
  output: any,
  context: __SerdeContext
): IceServer => {
  return {
    __type: "IceServer",
    Password:
      output.Password !== undefined && output.Password !== null
        ? output.Password
        : undefined,
    Ttl:
      output.Ttl !== undefined && output.Ttl !== null ? output.Ttl : undefined,
    Uris:
      output.Uris !== undefined && output.Uris !== null
        ? deserializeAws_restJson1Uris(output.Uris, context)
        : undefined,
    Username:
      output.Username !== undefined && output.Username !== null
        ? output.Username
        : undefined
  } as any;
};

const deserializeAws_restJson1IceServerList = (
  output: any,
  context: __SerdeContext
): IceServer[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1IceServer(entry, context)
  );
};

const deserializeAws_restJson1Uris = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
