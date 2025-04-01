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

import { GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput } from "../commands/GetIceServerConfigCommand";
import {
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
} from "../commands/SendAlexaOfferToMasterCommand";
import { KinesisVideoSignalingServiceException as __BaseException } from "../models/KinesisVideoSignalingServiceException";
import {
  ClientLimitExceededException,
  InvalidArgumentException,
  InvalidClientException,
  NotAuthorizedException,
  ResourceNotFoundException,
  SessionExpiredException,
} from "../models/models_0";

/**
 * serializeAws_restJson1GetIceServerConfigCommand
 */
export const se_GetIceServerConfigCommand = async (
  input: GetIceServerConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/get-ice-server-config");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelARN: [],
      ClientId: [],
      Service: [],
      Username: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendAlexaOfferToMasterCommand
 */
export const se_SendAlexaOfferToMasterCommand = async (
  input: SendAlexaOfferToMasterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/send-alexa-offer-to-master");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelARN: [],
      MessagePayload: [],
      SenderClientId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetIceServerConfigCommand
 */
export const de_GetIceServerConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIceServerConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IceServerList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendAlexaOfferToMasterCommand
 */
export const de_SendAlexaOfferToMasterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendAlexaOfferToMasterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Answer: __expectString,
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
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideosignaling#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidClientException":
    case "com.amazonaws.kinesisvideosignaling#InvalidClientException":
      throw await de_InvalidClientExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideosignaling#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SessionExpiredException":
    case "com.amazonaws.kinesisvideosignaling#SessionExpiredException":
      throw await de_SessionExpiredExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ClientLimitExceededExceptionRes
 */
const de_ClientLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ClientLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidClientExceptionRes
 */
const de_InvalidClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SessionExpiredExceptionRes
 */
const de_SessionExpiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionExpiredException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SessionExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// de_IceServer omitted.

// de_IceServerList omitted.

// de_Uris omitted.

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
