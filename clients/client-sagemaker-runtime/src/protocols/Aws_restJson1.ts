// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  isSerializableHeaderValue,
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
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_CT] || "application/octet-stream",
    [_a]: input[_A]!,
    [_xasca]: input[_CA]!,
    [_xastm]: input[_TM]!,
    [_xastv]: input[_TV]!,
    [_xastch]: input[_TCH]!,
    [_xasii]: input[_II]!,
    [_xasee]: input[_EE]!,
    [_xasic]: input[_ICN]!,
    [_xassi]: input[_SI]!,
  });
  b.bp("/endpoints/{EndpointName}/invocations");
  b.p("EndpointName", () => input.EndpointName!, "{EndpointName}", false);
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeEndpointAsyncCommand
 */
export const se_InvokeEndpointAsyncCommand = async (
  input: InvokeEndpointAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xasct]: input[_CT]!,
    [_xasa]: input[_A]!,
    [_xasca]: input[_CA]!,
    [_xasii]: input[_II]!,
    [_xasi]: input[_IL]!,
    [_xasr]: [() => isSerializableHeaderValue(input[_RTTLS]), () => input[_RTTLS]!.toString()],
    [_xasi_]: [() => isSerializableHeaderValue(input[_ITS]), () => input[_ITS]!.toString()],
  });
  b.bp("/endpoints/{EndpointName}/async-invocations");
  b.p("EndpointName", () => input.EndpointName!, "{EndpointName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeEndpointWithResponseStreamCommand
 */
export const se_InvokeEndpointWithResponseStreamCommand = async (
  input: InvokeEndpointWithResponseStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_CT] || "application/octet-stream",
    [_xasa]: input[_A]!,
    [_xasca]: input[_CA]!,
    [_xastv]: input[_TV]!,
    [_xastch]: input[_TCH]!,
    [_xasii]: input[_II]!,
    [_xasic]: input[_ICN]!,
    [_xassi]: input[_SI]!,
  });
  b.bp("/endpoints/{EndpointName}/invocations-response-stream");
  b.p("EndpointName", () => input.EndpointName!, "{EndpointName}", false);
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1InvokeEndpointCommand
 */
export const de_InvokeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_IPV]: [, output.headers[_xaipv]],
    [_CA]: [, output.headers[_xasca]],
    [_NSI]: [, output.headers[_xasnsi]],
    [_CSI]: [, output.headers[_xascsi]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return contents;
};

/**
 * deserializeAws_restJson1InvokeEndpointAsyncCommand
 */
export const de_InvokeEndpointAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_OL]: [, output.headers[_xaso]],
    [_FL]: [, output.headers[_xasf]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InferenceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeEndpointWithResponseStreamCommand
 */
export const de_InvokeEndpointWithResponseStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeEndpointWithResponseStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_xasct]],
    [_IPV]: [, output.headers[_xaipv]],
    [_CA]: [, output.headers[_xasca]],
  });
  const data: any = output.body;
  contents.Body = de_ResponseStream(data, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InternalStreamFailure":
    case "com.amazonaws.sagemakerruntime#InternalStreamFailure":
      throw await de_InternalStreamFailureRes(parsedOutput, context);
    case "ModelStreamError":
    case "com.amazonaws.sagemakerruntime#ModelStreamError":
      throw await de_ModelStreamErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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

const _A = "Accept";
const _CA = "CustomAttributes";
const _CSI = "ClosedSessionId";
const _CT = "ContentType";
const _EE = "EnableExplanations";
const _FL = "FailureLocation";
const _ICN = "InferenceComponentName";
const _II = "InferenceId";
const _IL = "InputLocation";
const _IPV = "InvokedProductionVariant";
const _ITS = "InvocationTimeoutSeconds";
const _NSI = "NewSessionId";
const _OL = "OutputLocation";
const _RTTLS = "RequestTTLSeconds";
const _SI = "SessionId";
const _TCH = "TargetContainerHostname";
const _TM = "TargetModel";
const _TV = "TargetVariant";
const _a = "accept";
const _ct = "content-type";
const _xaipv = "x-amzn-invoked-production-variant";
const _xasa = "x-amzn-sagemaker-accept";
const _xasca = "x-amzn-sagemaker-custom-attributes";
const _xascsi = "x-amzn-sagemaker-closed-session-id";
const _xasct = "x-amzn-sagemaker-content-type";
const _xasee = "x-amzn-sagemaker-enable-explanations";
const _xasf = "x-amzn-sagemaker-failurelocation";
const _xasi = "x-amzn-sagemaker-inputlocation";
const _xasi_ = "x-amzn-sagemaker-invocationtimeoutseconds";
const _xasic = "x-amzn-sagemaker-inference-component";
const _xasii = "x-amzn-sagemaker-inference-id";
const _xasnsi = "x-amzn-sagemaker-new-session-id";
const _xaso = "x-amzn-sagemaker-outputlocation";
const _xasr = "x-amzn-sagemaker-requestttlseconds";
const _xassi = "x-amzn-sagemaker-session-id";
const _xastch = "x-amzn-sagemaker-target-container-hostname";
const _xastm = "x-amzn-sagemaker-target-model";
const _xastv = "x-amzn-sagemaker-target-variant";
