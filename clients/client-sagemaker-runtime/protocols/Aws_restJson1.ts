import {
  InvokeEndpointAsyncCommandInput,
  InvokeEndpointAsyncCommandOutput,
} from "../commands/InvokeEndpointAsyncCommand";
import { InvokeEndpointCommandInput, InvokeEndpointCommandOutput } from "../commands/InvokeEndpointCommand";
import { InternalFailure, ModelError, ServiceUnavailable, ValidationError } from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1InvokeEndpointCommand = async (
  input: InvokeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.Accept) && { accept: input.Accept! }),
    ...(isSerializableHeaderValue(input.CustomAttributes) && {
      "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    }),
    ...(isSerializableHeaderValue(input.TargetModel) && { "x-amzn-sagemaker-target-model": input.TargetModel! }),
    ...(isSerializableHeaderValue(input.TargetVariant) && { "x-amzn-sagemaker-target-variant": input.TargetVariant! }),
    ...(isSerializableHeaderValue(input.TargetContainerHostname) && {
      "x-amzn-sagemaker-target-container-hostname": input.TargetContainerHostname!,
    }),
    ...(isSerializableHeaderValue(input.InferenceId) && { "x-amzn-sagemaker-inference-id": input.InferenceId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/endpoints/{EndpointName}/invocations";
  if (input.EndpointName !== undefined) {
    const labelValue: string = input.EndpointName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointName.");
    }
    resolvedPath = resolvedPath.replace("{EndpointName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointName.");
  }
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
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

export const serializeAws_restJson1InvokeEndpointAsyncCommand = async (
  input: InvokeEndpointAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ContentType) && { "x-amzn-sagemaker-content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.Accept) && { "x-amzn-sagemaker-accept": input.Accept! }),
    ...(isSerializableHeaderValue(input.CustomAttributes) && {
      "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    }),
    ...(isSerializableHeaderValue(input.InferenceId) && { "x-amzn-sagemaker-inference-id": input.InferenceId! }),
    ...(isSerializableHeaderValue(input.InputLocation) && { "x-amzn-sagemaker-inputlocation": input.InputLocation! }),
    ...(isSerializableHeaderValue(input.RequestTTLSeconds) && {
      "x-amzn-sagemaker-requestttlseconds": input.RequestTTLSeconds!.toString(),
    }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/endpoints/{EndpointName}/async-invocations";
  if (input.EndpointName !== undefined) {
    const labelValue: string = input.EndpointName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointName.");
    }
    resolvedPath = resolvedPath.replace("{EndpointName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointName.");
  }
  let body: any;
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

export const deserializeAws_restJson1InvokeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeEndpointCommandError(output, context);
  }
  const contents: InvokeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Body: undefined,
    ContentType: undefined,
    CustomAttributes: undefined,
    InvokedProductionVariant: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["x-amzn-invoked-production-variant"] !== undefined) {
    contents.InvokedProductionVariant = output.headers["x-amzn-invoked-production-variant"];
  }
  if (output.headers["x-amzn-sagemaker-custom-attributes"] !== undefined) {
    contents.CustomAttributes = output.headers["x-amzn-sagemaker-custom-attributes"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      response = {
        ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ModelError":
    case "com.amazonaws.sagemakerruntime#ModelError":
      response = {
        ...(await deserializeAws_restJson1ModelErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      response = {
        ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1InvokeEndpointAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeEndpointAsyncCommandError(output, context);
  }
  const contents: InvokeEndpointAsyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    InferenceId: undefined,
    OutputLocation: undefined,
  };
  if (output.headers["x-amzn-sagemaker-outputlocation"] !== undefined) {
    contents.OutputLocation = output.headers["x-amzn-sagemaker-outputlocation"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.InferenceId !== undefined && data.InferenceId !== null) {
    contents.InferenceId = __expectString(data.InferenceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeEndpointAsyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      response = {
        ...(await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      response = {
        ...(await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context)),
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

const deserializeAws_restJson1InternalFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailure> => {
  const contents: InternalFailure = {
    name: "InternalFailure",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ModelErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelError> => {
  const contents: ModelError = {
    name: "ModelError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LogStreamArn: undefined,
    Message: undefined,
    OriginalMessage: undefined,
    OriginalStatusCode: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.LogStreamArn !== undefined && data.LogStreamArn !== null) {
    contents.LogStreamArn = __expectString(data.LogStreamArn);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.OriginalMessage !== undefined && data.OriginalMessage !== null) {
    contents.OriginalMessage = __expectString(data.OriginalMessage);
  }
  if (data.OriginalStatusCode !== undefined && data.OriginalStatusCode !== null) {
    contents.OriginalStatusCode = __expectInt(data.OriginalStatusCode);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailable> => {
  const contents: ServiceUnavailable = {
    name: "ServiceUnavailable",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationError> => {
  const contents: ValidationError = {
    name: "ValidationError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
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
