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

import {
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
} from "../commands/BatchCreateAttendeeCommand";
import {
  BatchUpdateAttendeeCapabilitiesExceptCommandInput,
  BatchUpdateAttendeeCapabilitiesExceptCommandOutput,
} from "../commands/BatchUpdateAttendeeCapabilitiesExceptCommand";
import { CreateAttendeeCommandInput, CreateAttendeeCommandOutput } from "../commands/CreateAttendeeCommand";
import { CreateMeetingCommandInput, CreateMeetingCommandOutput } from "../commands/CreateMeetingCommand";
import {
  CreateMeetingWithAttendeesCommandInput,
  CreateMeetingWithAttendeesCommandOutput,
} from "../commands/CreateMeetingWithAttendeesCommand";
import { DeleteAttendeeCommandInput, DeleteAttendeeCommandOutput } from "../commands/DeleteAttendeeCommand";
import { DeleteMeetingCommandInput, DeleteMeetingCommandOutput } from "../commands/DeleteMeetingCommand";
import { GetAttendeeCommandInput, GetAttendeeCommandOutput } from "../commands/GetAttendeeCommand";
import { GetMeetingCommandInput, GetMeetingCommandOutput } from "../commands/GetMeetingCommand";
import { ListAttendeesCommandInput, ListAttendeesCommandOutput } from "../commands/ListAttendeesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
} from "../commands/StartMeetingTranscriptionCommand";
import {
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
} from "../commands/StopMeetingTranscriptionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAttendeeCapabilitiesCommandInput,
  UpdateAttendeeCapabilitiesCommandOutput,
} from "../commands/UpdateAttendeeCapabilitiesCommand";
import { ChimeSDKMeetingsServiceException as __BaseException } from "../models/ChimeSDKMeetingsServiceException";
import {
  AttendeeCapabilities,
  AttendeeFeatures,
  AttendeeIdItem,
  AudioFeatures,
  BadRequestException,
  ConflictException,
  ContentFeatures,
  CreateAttendeeRequestItem,
  EngineTranscribeMedicalSettings,
  EngineTranscribeSettings,
  ForbiddenException,
  LimitExceededException,
  MeetingFeaturesConfiguration,
  NotFoundException,
  NotificationsConfiguration,
  ResourceNotFoundException,
  ServiceFailureException,
  ServiceUnavailableException,
  Tag,
  ThrottlingException,
  TooManyTagsException,
  TranscriptionConfiguration,
  UnauthorizedException,
  UnprocessableEntityException,
  VideoFeatures,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchCreateAttendeeCommand
 */
export const se_BatchCreateAttendeeCommand = async (
  input: BatchCreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "batch-create"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attendees: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand
 */
export const se_BatchUpdateAttendeeCapabilitiesExceptCommand = async (
  input: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees/capabilities");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "batch-update-except"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      ExcludedAttendeeIds: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAttendeeCommand
 */
export const se_CreateAttendeeCommand = async (
  input: CreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      ExternalUserId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMeetingCommand
 */
export const se_CreateMeetingCommand = async (
  input: CreateMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExternalMeetingId: [],
      MediaRegion: [],
      MeetingFeatures: (_) => _json(_),
      MeetingHostId: [],
      NotificationsConfiguration: (_) => _json(_),
      PrimaryMeetingId: [],
      Tags: (_) => _json(_),
      TenantIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMeetingWithAttendeesCommand
 */
export const se_CreateMeetingWithAttendeesCommand = async (
  input: CreateMeetingWithAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings");
  const query: any = map({
    [_o]: [, "create-attendees"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Attendees: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExternalMeetingId: [],
      MediaRegion: [],
      MeetingFeatures: (_) => _json(_),
      MeetingHostId: [],
      NotificationsConfiguration: (_) => _json(_),
      PrimaryMeetingId: [],
      Tags: (_) => _json(_),
      TenantIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAttendeeCommand
 */
export const se_DeleteAttendeeCommand = async (
  input: DeleteAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMeetingCommand
 */
export const se_DeleteMeetingCommand = async (
  input: DeleteMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAttendeeCommand
 */
export const se_GetAttendeeCommand = async (
  input: GetAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMeetingCommand
 */
export const se_GetMeetingCommand = async (
  input: GetMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttendeesCommand
 */
export const se_ListAttendeesCommand = async (
  input: ListAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/attendees");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_RARN]!, `ResourceARN`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMeetingTranscriptionCommand
 */
export const se_StartMeetingTranscriptionCommand = async (
  input: StartMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/transcription");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "start"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      TranscriptionConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopMeetingTranscriptionCommand
 */
export const se_StopMeetingTranscriptionCommand = async (
  input: StopMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/meetings/{MeetingId}/transcription");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  const query: any = map({
    [_o]: [, "stop"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAttendeeCapabilitiesCommand
 */
export const se_UpdateAttendeeCapabilitiesCommand = async (
  input: UpdateAttendeeCapabilitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/meetings/{MeetingId}/attendees/{AttendeeId}/capabilities");
  b.p("MeetingId", () => input.MeetingId!, "{MeetingId}", false);
  b.p("AttendeeId", () => input.AttendeeId!, "{AttendeeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchCreateAttendeeCommand
 */
export const de_BatchCreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendees: _json,
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand
 */
export const de_BatchUpdateAttendeeCapabilitiesExceptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateAttendeeCapabilitiesExceptCommandOutput> => {
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
 * deserializeAws_restJson1CreateAttendeeCommand
 */
export const de_CreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendee: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeetingCommand
 */
export const de_CreateMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Meeting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMeetingWithAttendeesCommand
 */
export const de_CreateMeetingWithAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingWithAttendeesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendees: _json,
    Errors: _json,
    Meeting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttendeeCommand
 */
export const de_DeleteAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMeetingCommand
 */
export const de_DeleteMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAttendeeCommand
 */
export const de_GetAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendee: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMeetingCommand
 */
export const de_GetMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMeetingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Meeting: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttendeesCommand
 */
export const de_ListAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendees: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMeetingTranscriptionCommand
 */
export const de_StartMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMeetingTranscriptionCommandOutput> => {
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
 * deserializeAws_restJson1StopMeetingTranscriptionCommand
 */
export const de_StopMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMeetingTranscriptionCommandOutput> => {
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAttendeeCapabilitiesCommand
 */
export const de_UpdateAttendeeCapabilitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAttendeeCapabilitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attendee: _json,
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
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chimesdkmeetings#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkmeetings#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.chimesdkmeetings#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chimesdkmeetings#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkmeetings#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.chimesdkmeetings#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.chimesdkmeetings#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
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
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
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
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({
    [_RAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
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
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
    RequestId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AttendeeCapabilities omitted.

// se_AttendeeFeatures omitted.

// se_AttendeeIdItem omitted.

// se_AttendeeIdsList omitted.

// se_AudioFeatures omitted.

// se_ContentFeatures omitted.

// se_CreateAttendeeRequestItem omitted.

// se_CreateAttendeeRequestItemList omitted.

// se_CreateMeetingWithAttendeesRequestItemList omitted.

// se_EngineTranscribeMedicalSettings omitted.

// se_EngineTranscribeSettings omitted.

// se_MeetingFeaturesConfiguration omitted.

// se_NotificationsConfiguration omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TenantIdList omitted.

// se_TranscriptionConfiguration omitted.

// se_VideoFeatures omitted.

// de_Attendee omitted.

// de_AttendeeCapabilities omitted.

// de_AttendeeFeatures omitted.

// de_AttendeeList omitted.

// de_AudioFeatures omitted.

// de_BatchCreateAttendeeErrorList omitted.

// de_ContentFeatures omitted.

// de_CreateAttendeeError omitted.

// de_MediaPlacement omitted.

// de_Meeting omitted.

// de_MeetingFeaturesConfiguration omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TenantIdList omitted.

// de_VideoFeatures omitted.

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

const _MR = "MaxResults";
const _NT = "NextToken";
const _RARN = "ResourceARN";
const _RAS = "RetryAfterSeconds";
const _a = "arn";
const _mr = "max-results";
const _nt = "next-token";
const _o = "operation";
const _ra = "retry-after";
