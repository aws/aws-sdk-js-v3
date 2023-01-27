// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  InvokeEndpointAsyncCommandInput,
  InvokeEndpointAsyncCommandOutput,
} from "../commands/InvokeEndpointAsyncCommand";
import { InvokeEndpointCommandInput, InvokeEndpointCommandOutput } from "../commands/InvokeEndpointCommand";
import {
  InternalDependencyException,
  InternalFailure,
  ModelError,
  ModelNotReadyException,
  ServiceUnavailable,
  ValidationError,
} from "../models/models_0";
import { SageMakerRuntimeServiceException as __BaseException } from "../models/SageMakerRuntimeServiceException";

export const serializeAws_restJson1InvokeEndpointCommand = async (
  input: InvokeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.ContentType! || "application/octet-stream",
    accept: input.Accept!,
    "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    "x-amzn-sagemaker-target-model": input.TargetModel!,
    "x-amzn-sagemaker-target-variant": input.TargetVariant!,
    "x-amzn-sagemaker-target-container-hostname": input.TargetContainerHostname!,
    "x-amzn-sagemaker-inference-id": input.InferenceId!,
    "x-amzn-sagemaker-enable-explanations": input.EnableExplanations!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/endpoints/{EndpointName}/invocations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EndpointName",
    () => input.EndpointName!,
    "{EndpointName}",
    false
  );
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
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-sagemaker-content-type": input.ContentType!,
    "x-amzn-sagemaker-accept": input.Accept!,
    "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    "x-amzn-sagemaker-inference-id": input.InferenceId!,
    "x-amzn-sagemaker-inputlocation": input.InputLocation!,
    "x-amzn-sagemaker-requestttlseconds": [
      () => isSerializableHeaderValue(input.RequestTTLSeconds),
      () => input.RequestTTLSeconds!.toString(),
    ],
    "x-amzn-sagemaker-invocationtimeoutseconds": [
      () => isSerializableHeaderValue(input.InvocationTimeoutSeconds),
      () => input.InvocationTimeoutSeconds!.toString(),
    ],
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/endpoints/{EndpointName}/async-invocations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EndpointName",
    () => input.EndpointName!,
    "{EndpointName}",
    false
  );
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
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
    InvokedProductionVariant: [, output.headers["x-amzn-invoked-production-variant"]],
    CustomAttributes: [, output.headers["x-amzn-sagemaker-custom-attributes"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return contents;
};

const deserializeAws_restJson1InvokeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalDependencyException":
    case "com.amazonaws.sagemakerruntime#InternalDependencyException":
      throw await deserializeAws_restJson1InternalDependencyExceptionResponse(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ModelError":
    case "com.amazonaws.sagemakerruntime#ModelError":
      throw await deserializeAws_restJson1ModelErrorResponse(parsedOutput, context);
    case "ModelNotReadyException":
    case "com.amazonaws.sagemakerruntime#ModelNotReadyException":
      throw await deserializeAws_restJson1ModelNotReadyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InvokeEndpointAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeEndpointAsyncCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    OutputLocation: [, output.headers["x-amzn-sagemaker-outputlocation"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InferenceId != null) {
    contents.InferenceId = __expectString(data.InferenceId);
  }
  return contents;
};

const deserializeAws_restJson1InvokeEndpointAsyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
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
const deserializeAws_restJson1InternalDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalDependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailure> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ModelErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.LogStreamArn != null) {
    contents.LogStreamArn = __expectString(data.LogStreamArn);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.OriginalMessage != null) {
    contents.OriginalMessage = __expectString(data.OriginalMessage);
  }
  if (data.OriginalStatusCode != null) {
    contents.OriginalStatusCode = __expectInt32(data.OriginalStatusCode);
  }
  const exception = new ModelError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ModelNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ModelNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
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
