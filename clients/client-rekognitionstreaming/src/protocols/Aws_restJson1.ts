// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
} from "../commands/StartFaceLivenessSessionCommand";
import {
  StartStreamingLivenessSessionCommandInput,
  StartStreamingLivenessSessionCommandOutput,
} from "../commands/StartStreamingLivenessSessionCommand";
import {
  AccessDeniedException,
  BoundingBox,
  ClientChallenge,
  ClientSessionInformationEvent,
  ColorDisplayed,
  ColorSequence,
  DeviceInformation,
  DisconnectionEvent,
  FaceMovementAndLightClientChallenge,
  FaceMovementAndLightServerChallenge,
  FreshnessColor,
  InitialFace,
  InternalServerException,
  LivenessRequestStream,
  LivenessResponseStream,
  OvalScaleFactors,
  ServerChallenge,
  ServerSessionInformationEvent,
  ServiceQuotaExceededException,
  SessionInformation,
  SessionNotFoundException,
  TargetFace,
  ThrottlingException,
  ValidationException,
  VideoEvent,
} from "../models/models_0";
import { RekognitionStreamingServiceException as __BaseException } from "../models/RekognitionStreamingServiceException";

export const serializeAws_restJson1StartFaceLivenessSessionCommand = async (
  input: StartFaceLivenessSessionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-rekognition-streaming-liveness-session-id": input.SessionId!,
    "x-amz-rekognition-streaming-liveness-client-sdk-version": input.ClientSDKVersion!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-face-liveness-session";
  let body: any;
  if (input.LivenessRequestStream !== undefined) {
    body = serializeAws_restJson1LivenessRequestStream(input.LivenessRequestStream, context);
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

export const serializeAws_restJson1StartStreamingLivenessSessionCommand = async (
  input: StartStreamingLivenessSessionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-rekognition-streaming-liveness-session-id": input.SessionId!,
    "x-amz-rekognition-streaming-liveness-client-sdk-version": input.ClientSDKVersion!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-streaming-liveness-session";
  let body: any;
  if (input.LivenessRequestStream !== undefined) {
    body = serializeAws_restJson1LivenessRequestStream(input.LivenessRequestStream, context);
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

export const deserializeAws_restJson1StartFaceLivenessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartFaceLivenessSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFaceLivenessSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    SessionId: [, output.headers["x-amz-rekognition-streaming-liveness-session-id"]],
  });
  const data: any = output.body;
  contents.LivenessResponseStream = deserializeAws_restJson1LivenessResponseStream(data, context);
  return contents;
};

const deserializeAws_restJson1StartFaceLivenessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFaceLivenessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionstreaming#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rekognitionstreaming#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognitionstreaming#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "SessionNotFoundException":
    case "com.amazonaws.rekognitionstreaming#SessionNotFoundException":
      throw await deserializeAws_restJson1SessionNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognitionstreaming#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rekognitionstreaming#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartStreamingLivenessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartStreamingLivenessSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartStreamingLivenessSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    SessionId: [, output.headers["x-amz-rekognition-streaming-liveness-session-id"]],
  });
  const data: any = output.body;
  contents.LivenessResponseStream = deserializeAws_restJson1LivenessResponseStream(data, context);
  return contents;
};

const deserializeAws_restJson1StartStreamingLivenessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamingLivenessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rekognitionstreaming#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rekognitionstreaming#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognitionstreaming#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "SessionNotFoundException":
    case "com.amazonaws.rekognitionstreaming#SessionNotFoundException":
      throw await deserializeAws_restJson1SessionNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognitionstreaming#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rekognitionstreaming#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SessionNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SessionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1LivenessRequestStream = (
  input: any,
  context: __SerdeContext & __EventStreamSerdeContext
): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    LivenessRequestStream.visit(event, {
      VideoEvent: (value) => serializeAws_restJson1VideoEvent_event(value, context),
      ClientSessionInformationEvent: (value) =>
        serializeAws_restJson1ClientSessionInformationEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const serializeAws_restJson1ClientSessionInformationEvent_event = (
  input: ClientSessionInformationEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "ClientSessionInformationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1ClientSessionInformationEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const serializeAws_restJson1VideoEvent_event = (input: VideoEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "VideoEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = serializeAws_restJson1VideoEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const deserializeAws_restJson1LivenessResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<LivenessResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["ServerSessionInformationEvent"] != null) {
      return {
        ServerSessionInformationEvent: await deserializeAws_restJson1ServerSessionInformationEvent_event(
          event["ServerSessionInformationEvent"],
          context
        ),
      };
    }
    if (event["DisconnectionEvent"] != null) {
      return {
        DisconnectionEvent: await deserializeAws_restJson1DisconnectionEvent_event(
          event["DisconnectionEvent"],
          context
        ),
      };
    }
    if (event["ValidationException"] != null) {
      return {
        ValidationException: await deserializeAws_restJson1ValidationException_event(
          event["ValidationException"],
          context
        ),
      };
    }
    if (event["InternalServerException"] != null) {
      return {
        InternalServerException: await deserializeAws_restJson1InternalServerException_event(
          event["InternalServerException"],
          context
        ),
      };
    }
    if (event["ThrottlingException"] != null) {
      return {
        ThrottlingException: await deserializeAws_restJson1ThrottlingException_event(
          event["ThrottlingException"],
          context
        ),
      };
    }
    if (event["ServiceQuotaExceededException"] != null) {
      return {
        ServiceQuotaExceededException: await deserializeAws_restJson1ServiceQuotaExceededException_event(
          event["ServiceQuotaExceededException"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const deserializeAws_restJson1DisconnectionEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<DisconnectionEvent> => {
  const contents: DisconnectionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1DisconnectionEvent(data, context));
  return contents;
};
const deserializeAws_restJson1InternalServerException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ServerSessionInformationEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServerSessionInformationEvent> => {
  const contents: ServerSessionInformationEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1ServerSessionInformationEvent(data, context));
  return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ThrottlingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ValidationException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
};
const serializeAws_restJson1BoundingBox = (input: BoundingBox, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { Height: __serializeFloat(input.Height) }),
    ...(input.Left != null && { Left: __serializeFloat(input.Left) }),
    ...(input.Top != null && { Top: __serializeFloat(input.Top) }),
    ...(input.Width != null && { Width: __serializeFloat(input.Width) }),
  };
};

const serializeAws_restJson1ClientChallenge = (input: ClientChallenge, context: __SerdeContext): any => {
  return ClientChallenge.visit(input, {
    FaceMovementAndLightChallenge: (value) => ({
      FaceMovementAndLightChallenge: serializeAws_restJson1FaceMovementAndLightClientChallenge(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ClientSessionInformationEvent = (
  input: ClientSessionInformationEvent,
  context: __SerdeContext
): any => {
  return {
    ...(input.Challenge != null && { Challenge: serializeAws_restJson1ClientChallenge(input.Challenge, context) }),
    ...(input.DeviceInformation != null && {
      DeviceInformation: serializeAws_restJson1DeviceInformation(input.DeviceInformation, context),
    }),
  };
};

const serializeAws_restJson1ColorComponentList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ColorDisplayed = (input: ColorDisplayed, context: __SerdeContext): any => {
  return {
    ...(input.CurrentColor != null && {
      CurrentColor: serializeAws_restJson1FreshnessColor(input.CurrentColor, context),
    }),
    ...(input.CurrentColorStartTimestamp != null && { CurrentColorStartTimestamp: input.CurrentColorStartTimestamp }),
    ...(input.PreviousColor != null && {
      PreviousColor: serializeAws_restJson1FreshnessColor(input.PreviousColor, context),
    }),
    ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
  };
};

const serializeAws_restJson1DeviceInformation = (input: DeviceInformation, context: __SerdeContext): any => {
  return {
    ...(input.ClientSDKVersion != null && { ClientSDKVersion: input.ClientSDKVersion }),
    ...(input.VideoHeight != null && { VideoHeight: __serializeFloat(input.VideoHeight) }),
    ...(input.VideoWidth != null && { VideoWidth: __serializeFloat(input.VideoWidth) }),
  };
};

const serializeAws_restJson1FaceMovementAndLightClientChallenge = (
  input: FaceMovementAndLightClientChallenge,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChallengeId != null && { ChallengeId: input.ChallengeId }),
    ...(input.ColorDisplayed != null && {
      ColorDisplayed: serializeAws_restJson1ColorDisplayed(input.ColorDisplayed, context),
    }),
    ...(input.InitialFace != null && { InitialFace: serializeAws_restJson1InitialFace(input.InitialFace, context) }),
    ...(input.TargetFace != null && { TargetFace: serializeAws_restJson1TargetFace(input.TargetFace, context) }),
    ...(input.VideoStartTimestamp != null && { VideoStartTimestamp: input.VideoStartTimestamp }),
  };
};

const serializeAws_restJson1FreshnessColor = (input: FreshnessColor, context: __SerdeContext): any => {
  return {
    ...(input.RGB != null && { RGB: serializeAws_restJson1ColorComponentList(input.RGB, context) }),
  };
};

const serializeAws_restJson1InitialFace = (input: InitialFace, context: __SerdeContext): any => {
  return {
    ...(input.BoundingBox != null && { BoundingBox: serializeAws_restJson1BoundingBox(input.BoundingBox, context) }),
    ...(input.InitialFaceDetectedTimestamp != null && {
      InitialFaceDetectedTimestamp: input.InitialFaceDetectedTimestamp,
    }),
  };
};

const serializeAws_restJson1TargetFace = (input: TargetFace, context: __SerdeContext): any => {
  return {
    ...(input.BoundingBox != null && { BoundingBox: serializeAws_restJson1BoundingBox(input.BoundingBox, context) }),
    ...(input.FaceDetectedInTargetPositionEndTimestamp != null && {
      FaceDetectedInTargetPositionEndTimestamp: input.FaceDetectedInTargetPositionEndTimestamp,
    }),
    ...(input.FaceDetectedInTargetPositionStartTimestamp != null && {
      FaceDetectedInTargetPositionStartTimestamp: input.FaceDetectedInTargetPositionStartTimestamp,
    }),
  };
};

const serializeAws_restJson1VideoEvent = (input: VideoEvent, context: __SerdeContext): any => {
  return {
    ...(input.TimestampMillis != null && { TimestampMillis: input.TimestampMillis }),
    ...(input.VideoChunk != null && { VideoChunk: context.base64Encoder(input.VideoChunk) }),
  };
};

const deserializeAws_restJson1ColorComponentList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ColorSequence = (output: any, context: __SerdeContext): ColorSequence => {
  return {
    DownscrollDuration: __limitedParseFloat32(output.DownscrollDuration),
    FlatDisplayDuration: __limitedParseFloat32(output.FlatDisplayDuration),
    FreshnessColor:
      output.FreshnessColor != null
        ? deserializeAws_restJson1FreshnessColor(output.FreshnessColor, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColorSequences = (output: any, context: __SerdeContext): ColorSequence[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColorSequence(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DisconnectionEvent = (output: any, context: __SerdeContext): DisconnectionEvent => {
  return {
    TimestampMillis: __expectLong(output.TimestampMillis),
  } as any;
};

const deserializeAws_restJson1FaceMovementAndLightServerChallenge = (
  output: any,
  context: __SerdeContext
): FaceMovementAndLightServerChallenge => {
  return {
    ColorSequences:
      output.ColorSequences != null
        ? deserializeAws_restJson1ColorSequences(output.ColorSequences, context)
        : undefined,
    LightChallengeType: __expectString(output.LightChallengeType),
    OvalScaleFactors:
      output.OvalScaleFactors != null
        ? deserializeAws_restJson1OvalScaleFactors(output.OvalScaleFactors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FreshnessColor = (output: any, context: __SerdeContext): FreshnessColor => {
  return {
    RGB: output.RGB != null ? deserializeAws_restJson1ColorComponentList(output.RGB, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OvalScaleFactors = (output: any, context: __SerdeContext): OvalScaleFactors => {
  return {
    CenterX: __limitedParseFloat32(output.CenterX),
    CenterY: __limitedParseFloat32(output.CenterY),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

const deserializeAws_restJson1ServerChallenge = (output: any, context: __SerdeContext): ServerChallenge => {
  if (output.FaceMovementAndLightChallenge != null) {
    return {
      FaceMovementAndLightChallenge: deserializeAws_restJson1FaceMovementAndLightServerChallenge(
        output.FaceMovementAndLightChallenge,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ServerSessionInformationEvent = (
  output: any,
  context: __SerdeContext
): ServerSessionInformationEvent => {
  return {
    SessionInformation:
      output.SessionInformation != null
        ? deserializeAws_restJson1SessionInformation(output.SessionInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SessionInformation = (output: any, context: __SerdeContext): SessionInformation => {
  return {
    Challenge:
      output.Challenge != null
        ? deserializeAws_restJson1ServerChallenge(__expectUnion(output.Challenge), context)
        : undefined,
  } as any;
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
