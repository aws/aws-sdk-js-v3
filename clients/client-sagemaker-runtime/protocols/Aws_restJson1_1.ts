import {
  InvokeEndpointCommandInput,
  InvokeEndpointCommandOutput
} from "../commands/InvokeEndpointCommand";
import {
  InternalFailure,
  ModelError,
  ServiceUnavailable,
  ValidationError
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

export async function serializeAws_restJson1_1InvokeEndpointCommand(
  input: InvokeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (input.Accept !== undefined) {
    headers["Accept"] = input.Accept.toString();
  }
  if (input.ContentType !== undefined) {
    headers["Content-Type"] = input.ContentType.toString();
  }
  if (input.CustomAttributes !== undefined) {
    headers[
      "X-Amzn-SageMaker-Custom-Attributes"
    ] = input.CustomAttributes.toString();
  }
  if (input.TargetModel !== undefined) {
    headers["X-Amzn-SageMaker-Target-Model"] = input.TargetModel.toString();
  }
  let resolvedPath = "/endpoints/{EndpointName}/invocations";
  if (input.EndpointName !== undefined) {
    const labelValue: any = input.EndpointName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EndpointName."
      );
    }
    resolvedPath = resolvedPath.replace("{EndpointName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: EndpointName.");
  }
  let body: any = {};
  if (input.Body !== undefined) {
    body = input.Body;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1InvokeEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1InvokeEndpointCommandError(
      output,
      context
    );
  }
  const contents: InvokeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InvokeEndpointOutput",
    Body: undefined,
    ContentType: undefined,
    CustomAttributes: undefined,
    InvokedProductionVariant: undefined
  };
  if (output.headers["Content-Type"] !== undefined) {
    contents.ContentType = output.headers["Content-Type"];
  }
  if (output.headers["X-Amzn-SageMaker-Custom-Attributes"] !== undefined) {
    contents.CustomAttributes =
      output.headers["X-Amzn-SageMaker-Custom-Attributes"];
  }
  if (output.headers["x-Amzn-Invoked-Production-Variant"] !== undefined) {
    contents.InvokedProductionVariant =
      output.headers["x-Amzn-Invoked-Production-Variant"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1InvokeEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailure":
    case "com.amazonaws.sagemaker.runtime#InternalFailure":
      response = await deserializeAws_restJson1_1InternalFailureResponse(
        output,
        context
      );
      break;
    case "ModelError":
    case "com.amazonaws.sagemaker.runtime#ModelError":
      response = await deserializeAws_restJson1_1ModelErrorResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailable":
    case "com.amazonaws.sagemaker.runtime#ServiceUnavailable":
      response = await deserializeAws_restJson1_1ServiceUnavailableResponse(
        output,
        context
      );
      break;
    case "ValidationError":
    case "com.amazonaws.sagemaker.runtime#ValidationError":
      response = await deserializeAws_restJson1_1ValidationErrorResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.sagemaker.runtime#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalFailureResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailure> => {
  const contents: InternalFailure = {
    __type: "InternalFailure",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ModelErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ModelError> => {
  const contents: ModelError = {
    __type: "ModelError",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    LogStreamArn: undefined,
    Message: undefined,
    OriginalMessage: undefined,
    OriginalStatusCode: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LogStreamArn !== undefined) {
    contents.LogStreamArn = data.LogStreamArn;
  }
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.OriginalMessage !== undefined) {
    contents.OriginalMessage = data.OriginalMessage;
  }
  if (data.OriginalStatusCode !== undefined) {
    contents.OriginalStatusCode = data.OriginalStatusCode;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailable> => {
  const contents: ServiceUnavailable = {
    __type: "ServiceUnavailable",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationError> => {
  const contents: ValidationError = {
    __type: "ValidationError",
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
