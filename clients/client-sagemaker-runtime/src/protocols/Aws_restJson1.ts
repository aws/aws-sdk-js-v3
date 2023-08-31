// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  InvokeEndpointAsyncCommandInput,
  InvokeEndpointAsyncCommandOutput,
} from "../commands/InvokeEndpointAsyncCommand";
import { InvokeEndpointCommandInput, InvokeEndpointCommandOutput } from "../commands/InvokeEndpointCommand";
import {
  InvokeEndpointWithResponseStreamCommandInput,
  InvokeEndpointWithResponseStreamCommandOutput,
} from "../commands/InvokeEndpointWithResponseStreamCommand";
import {
  InternalDependencyException,
  InternalFailure,
  InternalStreamFailure,
  ModelError,
  ModelNotReadyException,
  ModelStreamError,
  PayloadPart,
  ResponseStream,
  ServiceUnavailable,
  ValidationError,
} from "../models/models_0";
import { SageMakerRuntimeServiceException as __BaseException } from "../models/SageMakerRuntimeServiceException";

/**
 * serializeAws_restJson1InvokeEndpointCommand
 */
export const se_InvokeEndpointCommand = async (
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

/**
 * serializeAws_restJson1InvokeEndpointAsyncCommand
 */
export const se_InvokeEndpointAsyncCommand = async (
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

/**
 * serializeAws_restJson1InvokeEndpointWithResponseStreamCommand
 */
export const se_InvokeEndpointWithResponseStreamCommand = async (
  input: InvokeEndpointWithResponseStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.ContentType! || "application/octet-stream",
    "x-amzn-sagemaker-accept": input.Accept!,
    "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    "x-amzn-sagemaker-target-variant": input.TargetVariant!,
    "x-amzn-sagemaker-target-container-hostname": input.TargetContainerHostname!,
    "x-amzn-sagemaker-inference-id": input.InferenceId!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/endpoints/{EndpointName}/invocations-response-stream";
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

/**
 * deserializeAws_restJson1InvokeEndpointCommand
 */
export const de_InvokeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InvokeEndpointCommandError(output, context);
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

/**
 * deserializeAws_restJson1InvokeEndpointCommandError
 */
const de_InvokeEndpointCommandError = async (
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
      throw await de_InternalDependencyExceptionRes(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ModelError":
    case "com.amazonaws.sagemakerruntime#ModelError":
      throw await de_ModelErrorRes(parsedOutput, context);
    case "ModelNotReadyException":
    case "com.amazonaws.sagemakerruntime#ModelNotReadyException":
      throw await de_ModelNotReadyExceptionRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1InvokeEndpointAsyncCommand
 */
export const de_InvokeEndpointAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_InvokeEndpointAsyncCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    OutputLocation: [, output.headers["x-amzn-sagemaker-outputlocation"]],
    FailureLocation: [, output.headers["x-amzn-sagemaker-failurelocation"]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InferenceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeEndpointAsyncCommandError
 */
const de_InvokeEndpointAsyncCommandError = async (
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
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1InvokeEndpointWithResponseStreamCommand
 */
export const de_InvokeEndpointWithResponseStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeEndpointWithResponseStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InvokeEndpointWithResponseStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["x-amzn-sagemaker-content-type"]],
    InvokedProductionVariant: [, output.headers["x-amzn-invoked-production-variant"]],
    CustomAttributes: [, output.headers["x-amzn-sagemaker-custom-attributes"]],
  });
  const data: any = output.body;
  contents.Body = de_ResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeEndpointWithResponseStreamCommandError
 */
const de_InvokeEndpointWithResponseStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointWithResponseStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "InternalStreamFailure":
    case "com.amazonaws.sagemakerruntime#InternalStreamFailure":
      throw await de_InternalStreamFailureRes(parsedOutput, context);
    case "ModelError":
    case "com.amazonaws.sagemakerruntime#ModelError":
      throw await de_ModelErrorRes(parsedOutput, context);
    case "ModelStreamError":
    case "com.amazonaws.sagemakerruntime#ModelStreamError":
      throw await de_ModelStreamErrorRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1InternalDependencyExceptionRes
 */
const de_InternalDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalDependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureRes
 */
const de_InternalFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalFailure> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalStreamFailureRes
 */
const de_InternalStreamFailureRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalStreamFailure> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalStreamFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelErrorRes
 */
const de_ModelErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ModelError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    LogStreamArn: __expectString,
    Message: __expectString,
    OriginalMessage: __expectString,
    OriginalStatusCode: __expectInt32,
  });
  Object.assign(contents, doc);
  const exception = new ModelError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelNotReadyExceptionRes
 */
const de_ModelNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ModelNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ModelStreamErrorRes
 */
const de_ModelStreamErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ModelStreamError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ErrorCode: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ModelStreamError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableRes
 */
const de_ServiceUnavailableRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceUnavailable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationErrorRes
 */
const de_ValidationErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResponseStream
 */
const de_ResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<ResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["PayloadPart"] != null) {
      return {
        PayloadPart: await de_PayloadPart_event(event["PayloadPart"], context),
      };
    }
    if (event["ModelStreamError"] != null) {
      return {
        ModelStreamError: await de_ModelStreamError_event(event["ModelStreamError"], context),
      };
    }
    if (event["InternalStreamFailure"] != null) {
      return {
        InternalStreamFailure: await de_InternalStreamFailure_event(event["InternalStreamFailure"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_InternalStreamFailure_event = async (output: any, context: __SerdeContext): Promise<InternalStreamFailure> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalStreamFailureRes(parsedOutput, context);
};
const de_ModelStreamError_event = async (output: any, context: __SerdeContext): Promise<ModelStreamError> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ModelStreamErrorRes(parsedOutput, context);
};
const de_PayloadPart_event = async (output: any, context: __SerdeContext): Promise<PayloadPart> => {
  const contents: PayloadPart = {} as any;
  contents.Bytes = output.body;
  return contents;
};
const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

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
