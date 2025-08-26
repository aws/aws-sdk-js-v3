// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
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
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CancelParticipantAuthenticationCommandInput,
  CancelParticipantAuthenticationCommandOutput,
} from "../commands/CancelParticipantAuthenticationCommand";
import {
  CompleteAttachmentUploadCommandInput,
  CompleteAttachmentUploadCommandOutput,
} from "../commands/CompleteAttachmentUploadCommand";
import {
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
} from "../commands/CreateParticipantConnectionCommand";
import { DescribeViewCommandInput, DescribeViewCommandOutput } from "../commands/DescribeViewCommand";
import {
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "../commands/DisconnectParticipantCommand";
import { GetAttachmentCommandInput, GetAttachmentCommandOutput } from "../commands/GetAttachmentCommand";
import {
  GetAuthenticationUrlCommandInput,
  GetAuthenticationUrlCommandOutput,
} from "../commands/GetAuthenticationUrlCommand";
import { GetTranscriptCommandInput, GetTranscriptCommandOutput } from "../commands/GetTranscriptCommand";
import { SendEventCommandInput, SendEventCommandOutput } from "../commands/SendEventCommand";
import { SendMessageCommandInput, SendMessageCommandOutput } from "../commands/SendMessageCommand";
import {
  StartAttachmentUploadCommandInput,
  StartAttachmentUploadCommandOutput,
} from "../commands/StartAttachmentUploadCommand";
import { ConnectParticipantServiceException as __BaseException } from "../models/ConnectParticipantServiceException";
import {
  AccessDeniedException,
  ConflictException,
  ConnectionType,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StartPosition,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelParticipantAuthenticationCommand
 */
export const se_CancelParticipantAuthenticationCommand = async (
  input: CancelParticipantAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/cancel-authentication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CompleteAttachmentUploadCommand
 */
export const se_CompleteAttachmentUploadCommand = async (
  input: CompleteAttachmentUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/complete-attachment-upload");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttachmentIds: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateParticipantConnectionCommand
 */
export const se_CreateParticipantConnectionCommand = async (
  input: CreateParticipantConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_PT]!,
  });
  b.bp("/participant/connection");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectParticipant: [],
      Type: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeViewCommand
 */
export const se_DescribeViewCommand = async (
  input: DescribeViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/views/{ViewToken}");
  b.p("ViewToken", () => input.ViewToken!, "{ViewToken}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisconnectParticipantCommand
 */
export const se_DisconnectParticipantCommand = async (
  input: DisconnectParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/disconnect");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAttachmentCommand
 */
export const se_GetAttachmentCommand = async (
  input: GetAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/attachment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttachmentId: [],
      UrlExpiryInSeconds: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAuthenticationUrlCommand
 */
export const se_GetAuthenticationUrlCommand = async (
  input: GetAuthenticationUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/authentication-url");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RedirectUri: [],
      SessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTranscriptCommand
 */
export const se_GetTranscriptCommand = async (
  input: GetTranscriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/transcript");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactId: [],
      MaxResults: [],
      NextToken: [],
      ScanDirection: [],
      SortOrder: [],
      StartPosition: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendEventCommand
 */
export const se_SendEventCommand = async (
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/event");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      ContentType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendMessageCommand
 */
export const se_SendMessageCommand = async (
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/message");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Content: [],
      ContentType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAttachmentUploadCommand
 */
export const se_StartAttachmentUploadCommand = async (
  input: StartAttachmentUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xab]: input[_CT]!,
  });
  b.bp("/participant/start-attachment-upload");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AttachmentName: [],
      AttachmentSizeInBytes: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ContentType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelParticipantAuthenticationCommand
 */
export const de_CancelParticipantAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelParticipantAuthenticationCommandOutput> => {
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
 * deserializeAws_restJson1CompleteAttachmentUploadCommand
 */
export const de_CompleteAttachmentUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteAttachmentUploadCommandOutput> => {
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
 * deserializeAws_restJson1CreateParticipantConnectionCommand
 */
export const de_CreateParticipantConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionCredentials: _json,
    WebRTCConnection: _json,
    Websocket: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeViewCommand
 */
export const de_DescribeViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    View: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisconnectParticipantCommand
 */
export const de_DisconnectParticipantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> => {
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
 * deserializeAws_restJson1GetAttachmentCommand
 */
export const de_GetAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttachmentSizeInBytes: __expectLong,
    Url: __expectString,
    UrlExpiry: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAuthenticationUrlCommand
 */
export const de_GetAuthenticationUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthenticationUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthenticationUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTranscriptCommand
 */
export const de_GetTranscriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitialContactId: __expectString,
    NextToken: __expectString,
    Transcript: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendEventCommand
 */
export const de_SendEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AbsoluteTime: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendMessageCommand
 */
export const de_SendMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AbsoluteTime: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartAttachmentUploadCommand
 */
export const de_StartAttachmentUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAttachmentUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AttachmentId: __expectString,
    UploadMetadata: _json,
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
    case "AccessDeniedException":
    case "com.amazonaws.connectparticipant#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectparticipant#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectparticipant#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectparticipant#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectparticipant#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectparticipant#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectparticipant#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  const contents: any = map({});
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
  const contents: any = map({});
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
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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

// se_AttachmentIdList omitted.

// se_ConnectionTypeList omitted.

// se_StartPosition omitted.

// de_AttachmentItem omitted.

// de_Attachments omitted.

// de_Attendee omitted.

// de_AudioFeatures omitted.

// de_ConnectionCredentials omitted.

// de_Item omitted.

// de_MeetingFeaturesConfiguration omitted.

// de_MessageMetadata omitted.

// de_Receipt omitted.

// de_Receipts omitted.

// de_Transcript omitted.

// de_UploadMetadata omitted.

// de_UploadMetadataSignedHeaders omitted.

// de_View omitted.

// de_ViewActions omitted.

// de_ViewContent omitted.

// de_WebRTCConnection omitted.

// de_WebRTCMediaPlacement omitted.

// de_WebRTCMeeting omitted.

// de_Websocket omitted.

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

const _CT = "ConnectionToken";
const _PT = "ParticipantToken";
const _xab = "x-amz-bearer";
