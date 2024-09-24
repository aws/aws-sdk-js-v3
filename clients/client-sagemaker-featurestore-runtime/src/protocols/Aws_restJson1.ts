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
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BatchGetRecordCommandInput, BatchGetRecordCommandOutput } from "../commands/BatchGetRecordCommand";
import { DeleteRecordCommandInput, DeleteRecordCommandOutput } from "../commands/DeleteRecordCommand";
import { GetRecordCommandInput, GetRecordCommandOutput } from "../commands/GetRecordCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import {
  AccessForbidden,
  BatchGetRecordIdentifier,
  FeatureValue,
  InternalFailure,
  ResourceNotFound,
  ServiceUnavailable,
  TargetStore,
  TtlDuration,
  ValidationError,
} from "../models/models_0";
import { SageMakerFeatureStoreRuntimeServiceException as __BaseException } from "../models/SageMakerFeatureStoreRuntimeServiceException";

/**
 * serializeAws_restJson1BatchGetRecordCommand
 */
export const se_BatchGetRecordCommand = async (
  input: BatchGetRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchGetRecord");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ExpirationTimeResponse: [],
      Identifiers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRecordCommand
 */
export const se_DeleteRecordCommand = async (
  input: DeleteRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/FeatureGroup/{FeatureGroupName}");
  b.p("FeatureGroupName", () => input.FeatureGroupName!, "{FeatureGroupName}", false);
  const query: any = map({
    [_RIVAS]: [, __expectNonNull(input[_RIVAS]!, `RecordIdentifierValueAsString`)],
    [_ET]: [, __expectNonNull(input[_ET]!, `EventTime`)],
    [_TS]: [() => input.TargetStores !== void 0, () => input[_TS]! || []],
    [_DM]: [, input[_DM]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecordCommand
 */
export const se_GetRecordCommand = async (
  input: GetRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/FeatureGroup/{FeatureGroupName}");
  b.p("FeatureGroupName", () => input.FeatureGroupName!, "{FeatureGroupName}", false);
  const query: any = map({
    [_RIVAS]: [, __expectNonNull(input[_RIVAS]!, `RecordIdentifierValueAsString`)],
    [_FNe]: [() => input.FeatureNames !== void 0, () => input[_FN]! || []],
    [_ETR]: [, input[_ETR]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRecordCommand
 */
export const se_PutRecordCommand = async (
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/FeatureGroup/{FeatureGroupName}");
  b.p("FeatureGroupName", () => input.FeatureGroupName!, "{FeatureGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Record: (_) => _json(_),
      TargetStores: (_) => _json(_),
      TtlDuration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetRecordCommand
 */
export const de_BatchGetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    Records: _json,
    UnprocessedIdentifiers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecordCommand
 */
export const de_DeleteRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordCommandOutput> => {
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
 * deserializeAws_restJson1GetRecordCommand
 */
export const de_GetRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExpiresAt: __expectString,
    Record: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRecordCommand
 */
export const de_PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
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
    case "AccessForbidden":
    case "com.amazonaws.sagemakerfeaturestoreruntime#AccessForbidden":
      throw await de_AccessForbiddenRes(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerfeaturestoreruntime#InternalFailure":
      throw await de_InternalFailureRes(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ServiceUnavailable":
      throw await de_ServiceUnavailableRes(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ValidationError":
      throw await de_ValidationErrorRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemakerfeaturestoreruntime#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessForbiddenRes
 */
const de_AccessForbiddenRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessForbidden> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessForbidden({
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
 * deserializeAws_restJson1ResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFound({
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

// se_BatchGetRecordIdentifier omitted.

// se_BatchGetRecordIdentifiers omitted.

// se_FeatureNames omitted.

// se_FeatureValue omitted.

// se_Record omitted.

// se_RecordIdentifiers omitted.

// se_TargetStores omitted.

// se_TtlDuration omitted.

// se_ValueAsStringList omitted.

// de_BatchGetRecordError omitted.

// de_BatchGetRecordErrors omitted.

// de_BatchGetRecordIdentifier omitted.

// de_BatchGetRecordResultDetail omitted.

// de_BatchGetRecordResultDetails omitted.

// de_FeatureNames omitted.

// de_FeatureValue omitted.

// de_Record omitted.

// de_RecordIdentifiers omitted.

// de_UnprocessedIdentifiers omitted.

// de_ValueAsStringList omitted.

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

const _DM = "DeletionMode";
const _ET = "EventTime";
const _ETR = "ExpirationTimeResponse";
const _FN = "FeatureNames";
const _FNe = "FeatureName";
const _RIVAS = "RecordIdentifierValueAsString";
const _TS = "TargetStores";
