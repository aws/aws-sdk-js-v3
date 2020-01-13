import {
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput
} from "../commands/GetRawMessageContentCommand";
import { ResourceNotFoundException } from "../models/index";
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

export async function serializeAws_restJson1_1GetRawMessageContentCommand(
  input: GetRawMessageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/messages/{messageId}";
  if (input.messageId !== undefined) {
    const labelValue: any = input.messageId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: messageId.");
    }
    resolvedPath = resolvedPath.replace("{messageId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: messageId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function deserializeAws_restJson1_1GetRawMessageContentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRawMessageContentCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetRawMessageContentCommandError(
      output,
      context
    );
  }
  const contents: GetRawMessageContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRawMessageContentResponse",
    messageContent: undefined
  };
  const data: any = output.body;
  contents.messageContent = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRawMessageContentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRawMessageContentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workmailmessageflow.service#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.workmailmessageflow.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
