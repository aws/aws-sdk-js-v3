import {
  GetMediaCommandInput,
  GetMediaCommandOutput
} from "../commands/GetMediaCommand";
import {
  ClientLimitExceededException,
  ConnectionLimitExceededException,
  InvalidArgumentException,
  InvalidEndpointException,
  NotAuthorizedException,
  ResourceNotFoundException,
  StartSelector
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

export const serializeAws_restJson1_1GetMediaCommand = async (
  input: GetMediaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getMedia";
  let body: any;
  const bodyParams: any = {};
  if (input.StartSelector !== undefined) {
    bodyParams["StartSelector"] = serializeAws_restJson1_1StartSelector(
      input.StartSelector,
      context
    );
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  body = JSON.stringify(bodyParams);
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

export const deserializeAws_restJson1_1GetMediaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMediaCommandError(output, context);
  }
  const contents: GetMediaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMediaOutput",
    ContentType: undefined,
    Payload: undefined
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = output.body;
  contents.Payload = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetMediaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConnectionLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ConnectionLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ConnectionLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazon.kinesis.video.v20170930#InvalidEndpointException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_restJson1_1ClientLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1_1ConnectionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConnectionLimitExceededException> => {
  const contents: ConnectionLimitExceededException = {
    name: "ConnectionLimitExceededException",
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

const deserializeAws_restJson1_1InvalidArgumentExceptionResponse = async (
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

const deserializeAws_restJson1_1InvalidEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const contents: InvalidEndpointException = {
    name: "InvalidEndpointException",
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

const deserializeAws_restJson1_1NotAuthorizedExceptionResponse = async (
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

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
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

const serializeAws_restJson1_1StartSelector = (
  input: StartSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AfterFragmentNumber !== undefined) {
    bodyParams["AfterFragmentNumber"] = input.AfterFragmentNumber;
  }
  if (input.ContinuationToken !== undefined) {
    bodyParams["ContinuationToken"] = input.ContinuationToken;
  }
  if (input.StartSelectorType !== undefined) {
    bodyParams["StartSelectorType"] = input.StartSelectorType;
  }
  if (input.StartTimestamp !== undefined) {
    bodyParams["StartTimestamp"] = Math.round(
      input.StartTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
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
