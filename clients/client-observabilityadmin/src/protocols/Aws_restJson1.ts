// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  GetTelemetryEvaluationStatusCommandInput,
  GetTelemetryEvaluationStatusCommandOutput,
} from "../commands/GetTelemetryEvaluationStatusCommand";
import {
  GetTelemetryEvaluationStatusForOrganizationCommandInput,
  GetTelemetryEvaluationStatusForOrganizationCommandOutput,
} from "../commands/GetTelemetryEvaluationStatusForOrganizationCommand";
import {
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput,
} from "../commands/ListResourceTelemetryCommand";
import {
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput,
} from "../commands/ListResourceTelemetryForOrganizationCommand";
import {
  StartTelemetryEvaluationCommandInput,
  StartTelemetryEvaluationCommandOutput,
} from "../commands/StartTelemetryEvaluationCommand";
import {
  StartTelemetryEvaluationForOrganizationCommandInput,
  StartTelemetryEvaluationForOrganizationCommandOutput,
} from "../commands/StartTelemetryEvaluationForOrganizationCommand";
import {
  StopTelemetryEvaluationCommandInput,
  StopTelemetryEvaluationCommandOutput,
} from "../commands/StopTelemetryEvaluationCommand";
import {
  StopTelemetryEvaluationForOrganizationCommandInput,
  StopTelemetryEvaluationForOrganizationCommandOutput,
} from "../commands/StopTelemetryEvaluationForOrganizationCommand";
import {
  AccessDeniedException,
  InternalServerException,
  ResourceType,
  TelemetryState,
  TelemetryType,
  ValidationException,
} from "../models/models_0";
import { ObservabilityAdminServiceException as __BaseException } from "../models/ObservabilityAdminServiceException";

/**
 * serializeAws_restJson1GetTelemetryEvaluationStatusCommand
 */
export const se_GetTelemetryEvaluationStatusCommand = async (
  input: GetTelemetryEvaluationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTelemetryEvaluationStatus");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTelemetryEvaluationStatusForOrganizationCommand
 */
export const se_GetTelemetryEvaluationStatusForOrganizationCommand = async (
  input: GetTelemetryEvaluationStatusForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTelemetryEvaluationStatusForOrganization");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceTelemetryCommand
 */
export const se_ListResourceTelemetryCommand = async (
  input: ListResourceTelemetryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListResourceTelemetry");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ResourceIdentifierPrefix: [],
      ResourceTags: (_) => _json(_),
      ResourceTypes: (_) => _json(_),
      TelemetryConfigurationState: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceTelemetryForOrganizationCommand
 */
export const se_ListResourceTelemetryForOrganizationCommand = async (
  input: ListResourceTelemetryForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListResourceTelemetryForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIdentifiers: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      ResourceIdentifierPrefix: [],
      ResourceTags: (_) => _json(_),
      ResourceTypes: (_) => _json(_),
      TelemetryConfigurationState: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTelemetryEvaluationCommand
 */
export const se_StartTelemetryEvaluationCommand = async (
  input: StartTelemetryEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StartTelemetryEvaluation");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTelemetryEvaluationForOrganizationCommand
 */
export const se_StartTelemetryEvaluationForOrganizationCommand = async (
  input: StartTelemetryEvaluationForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StartTelemetryEvaluationForOrganization");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopTelemetryEvaluationCommand
 */
export const se_StopTelemetryEvaluationCommand = async (
  input: StopTelemetryEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StopTelemetryEvaluation");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopTelemetryEvaluationForOrganizationCommand
 */
export const se_StopTelemetryEvaluationForOrganizationCommand = async (
  input: StopTelemetryEvaluationForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StopTelemetryEvaluationForOrganization");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetTelemetryEvaluationStatusCommand
 */
export const de_GetTelemetryEvaluationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryEvaluationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailureReason: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTelemetryEvaluationStatusForOrganizationCommand
 */
export const de_GetTelemetryEvaluationStatusForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailureReason: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceTelemetryCommand
 */
export const de_ListResourceTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTelemetryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TelemetryConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceTelemetryForOrganizationCommand
 */
export const de_ListResourceTelemetryForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTelemetryForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TelemetryConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTelemetryEvaluationCommand
 */
export const de_StartTelemetryEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTelemetryEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartTelemetryEvaluationForOrganizationCommand
 */
export const de_StartTelemetryEvaluationForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTelemetryEvaluationForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopTelemetryEvaluationCommand
 */
export const de_StopTelemetryEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTelemetryEvaluationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopTelemetryEvaluationForOrganizationCommand
 */
export const de_StopTelemetryEvaluationForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTelemetryEvaluationForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.observabilityadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.observabilityadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.observabilityadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({
    [_aET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    [_aET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountIdentifiers omitted.

// se_ResourceTypes omitted.

// se_TagMapInput omitted.

// se_TelemetryConfigurationState omitted.

// de_TagMapOutput omitted.

// de_TelemetryConfiguration omitted.

// de_TelemetryConfigurations omitted.

// de_TelemetryConfigurationState omitted.

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

const _aET = "amznErrorType";
const _xae = "x-amzn-errortype";
