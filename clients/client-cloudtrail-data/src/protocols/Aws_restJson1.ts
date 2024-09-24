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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { PutAuditEventsCommandInput, PutAuditEventsCommandOutput } from "../commands/PutAuditEventsCommand";
import { CloudTrailDataServiceException as __BaseException } from "../models/CloudTrailDataServiceException";
import {
  AuditEvent,
  ChannelInsufficientPermission,
  ChannelNotFound,
  ChannelUnsupportedSchema,
  DuplicatedAuditEventId,
  InvalidChannelARN,
  UnsupportedOperationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1PutAuditEventsCommand
 */
export const se_PutAuditEventsCommand = async (
  input: PutAuditEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutAuditEvents");
  const query: any = map({
    [_cA]: [, __expectNonNull(input[_cA]!, `channelArn`)],
    [_eI]: [, input[_eI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      auditEvents: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1PutAuditEventsCommand
 */
export const de_PutAuditEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAuditEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failed: _json,
    successful: _json,
  });
  Object.assign(contents, doc);
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
    case "ChannelInsufficientPermission":
    case "com.amazonaws.cloudtraildata#ChannelInsufficientPermission":
      throw await de_ChannelInsufficientPermissionRes(parsedOutput, context);
    case "ChannelNotFound":
    case "com.amazonaws.cloudtraildata#ChannelNotFound":
      throw await de_ChannelNotFoundRes(parsedOutput, context);
    case "ChannelUnsupportedSchema":
    case "com.amazonaws.cloudtraildata#ChannelUnsupportedSchema":
      throw await de_ChannelUnsupportedSchemaRes(parsedOutput, context);
    case "DuplicatedAuditEventId":
    case "com.amazonaws.cloudtraildata#DuplicatedAuditEventId":
      throw await de_DuplicatedAuditEventIdRes(parsedOutput, context);
    case "InvalidChannelARN":
    case "com.amazonaws.cloudtraildata#InvalidChannelARN":
      throw await de_InvalidChannelARNRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtraildata#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ChannelInsufficientPermissionRes
 */
const de_ChannelInsufficientPermissionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelInsufficientPermission> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelInsufficientPermission({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ChannelNotFoundRes
 */
const de_ChannelNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ChannelNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ChannelUnsupportedSchemaRes
 */
const de_ChannelUnsupportedSchemaRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelUnsupportedSchema> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelUnsupportedSchema({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DuplicatedAuditEventIdRes
 */
const de_DuplicatedAuditEventIdRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatedAuditEventId> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DuplicatedAuditEventId({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidChannelARNRes
 */
const de_InvalidChannelARNRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidChannelARN> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidChannelARN({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AuditEvent omitted.

// se_AuditEvents omitted.

// de_AuditEventResultEntries omitted.

// de_AuditEventResultEntry omitted.

// de_ResultErrorEntries omitted.

// de_ResultErrorEntry omitted.

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

const _cA = "channelArn";
const _eI = "externalId";
