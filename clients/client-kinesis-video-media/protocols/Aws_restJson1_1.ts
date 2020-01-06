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

export async function serializeAws_restJson1_1GetMediaCommand(
  input: GetMediaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getMedia";
  let body: any = {};
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1GetMediaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetMediaCommandError(output, context);
  }
  const contents: GetMediaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMediaOutput",
    ContentType: undefined,
    Payload: undefined
  };
  if (output.headers["Content-Type"] !== undefined) {
    contents.ContentType = output.headers["Content-Type"];
  }
  const data: any = output.body;
  contents.Payload = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMediaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConnectionLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ConnectionLimitExceededException":
      response = await deserializeAws_restJson1_1ConnectionLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEndpointException":
    case "com.amazon.kinesis.video.v20170930#InvalidEndpointException":
      response = await deserializeAws_restJson1_1InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.aws.acuity.ats.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1ClientLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: ClientLimitExceededException = {
    __type: "ClientLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConnectionLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConnectionLimitExceededException> => {
  const contents: ConnectionLimitExceededException = {
    __type: "ConnectionLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidArgumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: InvalidArgumentException = {
    __type: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidEndpointExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const contents: InvalidEndpointException = {
    __type: "InvalidEndpointException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotAuthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    __type: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1StartSelector = (
  input: StartSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
