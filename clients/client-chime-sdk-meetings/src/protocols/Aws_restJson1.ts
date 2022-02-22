import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchCreateAttendeeCommandInput,
  BatchCreateAttendeeCommandOutput,
} from "../commands/BatchCreateAttendeeCommand";
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
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
} from "../commands/StartMeetingTranscriptionCommand";
import {
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
} from "../commands/StopMeetingTranscriptionCommand";
import { ChimeSDKMeetingsServiceException as __BaseException } from "../models/ChimeSDKMeetingsServiceException";
import {
  Attendee,
  AudioFeatures,
  BadRequestException,
  CreateAttendeeError,
  CreateAttendeeRequestItem,
  EngineTranscribeMedicalSettings,
  EngineTranscribeSettings,
  ForbiddenException,
  LimitExceededException,
  MediaPlacement,
  Meeting,
  MeetingFeaturesConfiguration,
  NotFoundException,
  NotificationsConfiguration,
  ServiceUnavailableException,
  TranscriptionConfiguration,
  UnauthorizedException,
  UnprocessableEntityException,
} from "../models/models_0";

export const serializeAws_restJson1BatchCreateAttendeeCommand = async (
  input: BatchCreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/attendees";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  const query: any = {
    operation: "batch-create",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Attendees !== undefined &&
      input.Attendees !== null && {
        Attendees: serializeAws_restJson1CreateAttendeeRequestItemList(input.Attendees, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1CreateAttendeeCommand = async (
  input: CreateAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/attendees";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ExternalUserId !== undefined &&
      input.ExternalUserId !== null && { ExternalUserId: input.ExternalUserId }),
  });
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

export const serializeAws_restJson1CreateMeetingCommand = async (
  input: CreateMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExternalMeetingId !== undefined &&
      input.ExternalMeetingId !== null && { ExternalMeetingId: input.ExternalMeetingId }),
    ...(input.MediaRegion !== undefined && input.MediaRegion !== null && { MediaRegion: input.MediaRegion }),
    ...(input.MeetingFeatures !== undefined &&
      input.MeetingFeatures !== null && {
        MeetingFeatures: serializeAws_restJson1MeetingFeaturesConfiguration(input.MeetingFeatures, context),
      }),
    ...(input.MeetingHostId !== undefined && input.MeetingHostId !== null && { MeetingHostId: input.MeetingHostId }),
    ...(input.NotificationsConfiguration !== undefined &&
      input.NotificationsConfiguration !== null && {
        NotificationsConfiguration: serializeAws_restJson1NotificationsConfiguration(
          input.NotificationsConfiguration,
          context
        ),
      }),
  });
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

export const serializeAws_restJson1CreateMeetingWithAttendeesCommand = async (
  input: CreateMeetingWithAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings";
  const query: any = {
    operation: "create-attendees",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Attendees !== undefined &&
      input.Attendees !== null && {
        Attendees: serializeAws_restJson1CreateMeetingWithAttendeesRequestItemList(input.Attendees, context),
      }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExternalMeetingId !== undefined &&
      input.ExternalMeetingId !== null && { ExternalMeetingId: input.ExternalMeetingId }),
    ...(input.MediaRegion !== undefined && input.MediaRegion !== null && { MediaRegion: input.MediaRegion }),
    ...(input.MeetingFeatures !== undefined &&
      input.MeetingFeatures !== null && {
        MeetingFeatures: serializeAws_restJson1MeetingFeaturesConfiguration(input.MeetingFeatures, context),
      }),
    ...(input.MeetingHostId !== undefined && input.MeetingHostId !== null && { MeetingHostId: input.MeetingHostId }),
    ...(input.NotificationsConfiguration !== undefined &&
      input.NotificationsConfiguration !== null && {
        NotificationsConfiguration: serializeAws_restJson1NotificationsConfiguration(
          input.NotificationsConfiguration,
          context
        ),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteAttendeeCommand = async (
  input: DeleteAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  if (input.AttendeeId !== undefined) {
    const labelValue: string = input.AttendeeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttendeeId.");
    }
    resolvedPath = resolvedPath.replace("{AttendeeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttendeeId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMeetingCommand = async (
  input: DeleteMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAttendeeCommand = async (
  input: GetAttendeeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/meetings/{MeetingId}/attendees/{AttendeeId}";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  if (input.AttendeeId !== undefined) {
    const labelValue: string = input.AttendeeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttendeeId.");
    }
    resolvedPath = resolvedPath.replace("{AttendeeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttendeeId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMeetingCommand = async (
  input: GetMeetingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListAttendeesCommand = async (
  input: ListAttendeesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/attendees";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1StartMeetingTranscriptionCommand = async (
  input: StartMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/transcription";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  const query: any = {
    operation: "start",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.TranscriptionConfiguration !== undefined &&
      input.TranscriptionConfiguration !== null && {
        TranscriptionConfiguration: serializeAws_restJson1TranscriptionConfiguration(
          input.TranscriptionConfiguration,
          context
        ),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1StopMeetingTranscriptionCommand = async (
  input: StopMeetingTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/meetings/{MeetingId}/transcription";
  if (input.MeetingId !== undefined) {
    const labelValue: string = input.MeetingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MeetingId.");
    }
    resolvedPath = resolvedPath.replace("{MeetingId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MeetingId.");
  }
  const query: any = {
    operation: "stop",
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1BatchCreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateAttendeeCommandError(output, context);
  }
  const contents: BatchCreateAttendeeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attendees: undefined,
    Errors: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendees !== undefined && data.Attendees !== null) {
    contents.Attendees = deserializeAws_restJson1AttendeeList(data.Attendees, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchCreateAttendeeErrorList(data.Errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchCreateAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chimesdkmeetings#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAttendeeCommandError(output, context);
  }
  const contents: CreateAttendeeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attendee: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendee !== undefined && data.Attendee !== null) {
    contents.Attendee = deserializeAws_restJson1Attendee(data.Attendee, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chimesdkmeetings#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chimesdkmeetings#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeetingCommandError(output, context);
  }
  const contents: CreateMeetingCommandOutput = {
    $metadata: deserializeMetadata(output),
    Meeting: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Meeting !== undefined && data.Meeting !== null) {
    contents.Meeting = deserializeAws_restJson1Meeting(data.Meeting, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chimesdkmeetings#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateMeetingWithAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingWithAttendeesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMeetingWithAttendeesCommandError(output, context);
  }
  const contents: CreateMeetingWithAttendeesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attendees: undefined,
    Errors: undefined,
    Meeting: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendees !== undefined && data.Attendees !== null) {
    contents.Attendees = deserializeAws_restJson1AttendeeList(data.Attendees, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchCreateAttendeeErrorList(data.Errors, context);
  }
  if (data.Meeting !== undefined && data.Meeting !== null) {
    contents.Meeting = deserializeAws_restJson1Meeting(data.Meeting, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMeetingWithAttendeesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeetingWithAttendeesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chimesdkmeetings#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttendeeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAttendeeCommandError(output, context);
  }
  const contents: DeleteAttendeeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeetingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMeetingCommandError(output, context);
  }
  const contents: DeleteMeetingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetAttendeeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttendeeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAttendeeCommandError(output, context);
  }
  const contents: GetAttendeeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attendee: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendee !== undefined && data.Attendee !== null) {
    contents.Attendee = deserializeAws_restJson1Attendee(data.Attendee, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAttendeeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttendeeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetMeetingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMeetingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMeetingCommandError(output, context);
  }
  const contents: GetMeetingCommandOutput = {
    $metadata: deserializeMetadata(output),
    Meeting: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Meeting !== undefined && data.Meeting !== null) {
    contents.Meeting = deserializeAws_restJson1Meeting(data.Meeting, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMeetingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMeetingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListAttendeesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAttendeesCommandError(output, context);
  }
  const contents: ListAttendeesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Attendees: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Attendees !== undefined && data.Attendees !== null) {
    contents.Attendees = deserializeAws_restJson1AttendeeList(data.Attendees, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAttendeesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttendeesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMeetingTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMeetingTranscriptionCommandError(output, context);
  }
  const contents: StartMeetingTranscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartMeetingTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMeetingTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chimesdkmeetings#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chimesdkmeetings#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StopMeetingTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMeetingTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopMeetingTranscriptionCommandError(output, context);
  }
  const contents: StopMeetingTranscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopMeetingTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMeetingTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkmeetings#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkmeetings#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkmeetings#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkmeetings#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chimesdkmeetings#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chimesdkmeetings#UnprocessableEntityException":
      throw await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = parsedOutput.headers["retry-after"];
  }
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestId !== undefined && data.RequestId !== null) {
    contents.RequestId = __expectString(data.RequestId);
  }
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AudioFeatures = (input: AudioFeatures, context: __SerdeContext): any => {
  return {
    ...(input.EchoReduction !== undefined && input.EchoReduction !== null && { EchoReduction: input.EchoReduction }),
  };
};

const serializeAws_restJson1CreateAttendeeRequestItem = (
  input: CreateAttendeeRequestItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExternalUserId !== undefined &&
      input.ExternalUserId !== null && { ExternalUserId: input.ExternalUserId }),
  };
};

const serializeAws_restJson1CreateAttendeeRequestItemList = (
  input: CreateAttendeeRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateAttendeeRequestItem(entry, context);
    });
};

const serializeAws_restJson1CreateMeetingWithAttendeesRequestItemList = (
  input: CreateAttendeeRequestItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateAttendeeRequestItem(entry, context);
    });
};

const serializeAws_restJson1EngineTranscribeMedicalSettings = (
  input: EngineTranscribeMedicalSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType !== undefined &&
      input.ContentIdentificationType !== null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    ...(input.Specialty !== undefined && input.Specialty !== null && { Specialty: input.Specialty }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_restJson1EngineTranscribeSettings = (
  input: EngineTranscribeSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentIdentificationType !== undefined &&
      input.ContentIdentificationType !== null && { ContentIdentificationType: input.ContentIdentificationType }),
    ...(input.ContentRedactionType !== undefined &&
      input.ContentRedactionType !== null && { ContentRedactionType: input.ContentRedactionType }),
    ...(input.EnablePartialResultsStabilization !== undefined &&
      input.EnablePartialResultsStabilization !== null && {
        EnablePartialResultsStabilization: input.EnablePartialResultsStabilization,
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.LanguageModelName !== undefined &&
      input.LanguageModelName !== null && { LanguageModelName: input.LanguageModelName }),
    ...(input.PartialResultsStability !== undefined &&
      input.PartialResultsStability !== null && { PartialResultsStability: input.PartialResultsStability }),
    ...(input.PiiEntityTypes !== undefined &&
      input.PiiEntityTypes !== null && { PiiEntityTypes: input.PiiEntityTypes }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    ...(input.VocabularyFilterMethod !== undefined &&
      input.VocabularyFilterMethod !== null && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName !== undefined &&
      input.VocabularyFilterName !== null && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName !== undefined &&
      input.VocabularyName !== null && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_restJson1MeetingFeaturesConfiguration = (
  input: MeetingFeaturesConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Audio !== undefined &&
      input.Audio !== null && { Audio: serializeAws_restJson1AudioFeatures(input.Audio, context) }),
  };
};

const serializeAws_restJson1NotificationsConfiguration = (
  input: NotificationsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LambdaFunctionArn !== undefined &&
      input.LambdaFunctionArn !== null && { LambdaFunctionArn: input.LambdaFunctionArn }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SqsQueueArn !== undefined && input.SqsQueueArn !== null && { SqsQueueArn: input.SqsQueueArn }),
  };
};

const serializeAws_restJson1TranscriptionConfiguration = (
  input: TranscriptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EngineTranscribeMedicalSettings !== undefined &&
      input.EngineTranscribeMedicalSettings !== null && {
        EngineTranscribeMedicalSettings: serializeAws_restJson1EngineTranscribeMedicalSettings(
          input.EngineTranscribeMedicalSettings,
          context
        ),
      }),
    ...(input.EngineTranscribeSettings !== undefined &&
      input.EngineTranscribeSettings !== null && {
        EngineTranscribeSettings: serializeAws_restJson1EngineTranscribeSettings(
          input.EngineTranscribeSettings,
          context
        ),
      }),
  };
};

const deserializeAws_restJson1Attendee = (output: any, context: __SerdeContext): Attendee => {
  return {
    AttendeeId: __expectString(output.AttendeeId),
    ExternalUserId: __expectString(output.ExternalUserId),
    JoinToken: __expectString(output.JoinToken),
  } as any;
};

const deserializeAws_restJson1AttendeeList = (output: any, context: __SerdeContext): Attendee[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Attendee(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AudioFeatures = (output: any, context: __SerdeContext): AudioFeatures => {
  return {
    EchoReduction: __expectString(output.EchoReduction),
  } as any;
};

const deserializeAws_restJson1BatchCreateAttendeeErrorList = (
  output: any,
  context: __SerdeContext
): CreateAttendeeError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CreateAttendeeError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CreateAttendeeError = (output: any, context: __SerdeContext): CreateAttendeeError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExternalUserId: __expectString(output.ExternalUserId),
  } as any;
};

const deserializeAws_restJson1MediaPlacement = (output: any, context: __SerdeContext): MediaPlacement => {
  return {
    AudioFallbackUrl: __expectString(output.AudioFallbackUrl),
    AudioHostUrl: __expectString(output.AudioHostUrl),
    EventIngestionUrl: __expectString(output.EventIngestionUrl),
    ScreenDataUrl: __expectString(output.ScreenDataUrl),
    ScreenSharingUrl: __expectString(output.ScreenSharingUrl),
    ScreenViewingUrl: __expectString(output.ScreenViewingUrl),
    SignalingUrl: __expectString(output.SignalingUrl),
    TurnControlUrl: __expectString(output.TurnControlUrl),
  } as any;
};

const deserializeAws_restJson1Meeting = (output: any, context: __SerdeContext): Meeting => {
  return {
    ExternalMeetingId: __expectString(output.ExternalMeetingId),
    MediaPlacement:
      output.MediaPlacement !== undefined && output.MediaPlacement !== null
        ? deserializeAws_restJson1MediaPlacement(output.MediaPlacement, context)
        : undefined,
    MediaRegion: __expectString(output.MediaRegion),
    MeetingFeatures:
      output.MeetingFeatures !== undefined && output.MeetingFeatures !== null
        ? deserializeAws_restJson1MeetingFeaturesConfiguration(output.MeetingFeatures, context)
        : undefined,
    MeetingHostId: __expectString(output.MeetingHostId),
    MeetingId: __expectString(output.MeetingId),
  } as any;
};

const deserializeAws_restJson1MeetingFeaturesConfiguration = (
  output: any,
  context: __SerdeContext
): MeetingFeaturesConfiguration => {
  return {
    Audio:
      output.Audio !== undefined && output.Audio !== null
        ? deserializeAws_restJson1AudioFeatures(output.Audio, context)
        : undefined,
  } as any;
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
