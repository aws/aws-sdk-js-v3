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
  AccessDeniedException,
  BoundingBox,
  ChallengeConfig,
  ClientChallenge,
  ClientSessionInformationEvent,
  ColorDisplayed,
  ColorSequence,
  DisconnectionEvent,
  FaceMovementAndLightClientChallenge,
  FaceMovementAndLightServerChallenge,
  FreshnessColor,
  InitialFace,
  InternalServerException,
  LivenessRequestStream,
  LivenessResponseStream,
  OvalParameters,
  ServerChallenge,
  ServerSessionInformationEvent,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SessionInformation,
  SessionNotFoundException,
  TargetFace,
  ThrottlingException,
  ValidationException,
  VideoEvent,
} from "../models/models_0";
import { RekognitionStreamingServiceException as __BaseException } from "../models/RekognitionStreamingServiceException";

/**
 * serializeAws_restJson1StartFaceLivenessSessionCommand
 */
export const se_StartFaceLivenessSessionCommand = async (
  input: StartFaceLivenessSessionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-rekognition-streaming-liveness-session-id": input.SessionId!,
    "x-amz-rekognition-streaming-liveness-video-width": input.VideoWidth!,
    "x-amz-rekognition-streaming-liveness-video-height": input.VideoHeight!,
    "x-amz-rekognition-streaming-liveness-challenge-versions": input.ChallengeVersions!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-face-liveness-session";
  let body: any;
  if (input.LivenessRequestStream !== undefined) {
    body = se_LivenessRequestStream(input.LivenessRequestStream, context);
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
 * deserializeAws_restJson1StartFaceLivenessSessionCommand
 */
export const de_StartFaceLivenessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartFaceLivenessSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartFaceLivenessSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    SessionId: [, output.headers["x-amz-rekognition-streaming-liveness-session-id"]],
  });
  const data: any = output.body;
  contents.LivenessResponseStream = de_LivenessResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartFaceLivenessSessionCommandError
 */
const de_StartFaceLivenessSessionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rekognitionstreaming#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rekognitionstreaming#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.rekognitionstreaming#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "SessionNotFoundException":
    case "com.amazonaws.rekognitionstreaming#SessionNotFoundException":
      throw await de_SessionNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rekognitionstreaming#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rekognitionstreaming#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
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

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SessionNotFoundExceptionRes
 */
const de_SessionNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
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

/**
 * serializeAws_restJson1LivenessRequestStream
 */
const se_LivenessRequestStream = (input: any, context: __SerdeContext & __EventStreamSerdeContext): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    LivenessRequestStream.visit(event, {
      VideoEvent: (value) => se_VideoEvent_event(value, context),
      ClientSessionInformationEvent: (value) => se_ClientSessionInformationEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const se_ClientSessionInformationEvent_event = (
  input: ClientSessionInformationEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "ClientSessionInformationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_ClientSessionInformationEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_VideoEvent_event = (input: VideoEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "VideoEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_VideoEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
/**
 * deserializeAws_restJson1LivenessResponseStream
 */
const de_LivenessResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<LivenessResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["ServerSessionInformationEvent"] != null) {
      return {
        ServerSessionInformationEvent: await de_ServerSessionInformationEvent_event(
          event["ServerSessionInformationEvent"],
          context
        ),
      };
    }
    if (event["DisconnectionEvent"] != null) {
      return {
        DisconnectionEvent: await de_DisconnectionEvent_event(event["DisconnectionEvent"], context),
      };
    }
    if (event["ValidationException"] != null) {
      return {
        ValidationException: await de_ValidationException_event(event["ValidationException"], context),
      };
    }
    if (event["InternalServerException"] != null) {
      return {
        InternalServerException: await de_InternalServerException_event(event["InternalServerException"], context),
      };
    }
    if (event["ThrottlingException"] != null) {
      return {
        ThrottlingException: await de_ThrottlingException_event(event["ThrottlingException"], context),
      };
    }
    if (event["ServiceQuotaExceededException"] != null) {
      return {
        ServiceQuotaExceededException: await de_ServiceQuotaExceededException_event(
          event["ServiceQuotaExceededException"],
          context
        ),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await de_ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const de_DisconnectionEvent_event = async (output: any, context: __SerdeContext): Promise<DisconnectionEvent> => {
  const contents: DisconnectionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_DisconnectionEvent(data, context));
  return contents;
};
const de_InternalServerException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalServerExceptionRes(parsedOutput, context);
};
const de_ServerSessionInformationEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServerSessionInformationEvent> => {
  const contents: ServerSessionInformationEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_ServerSessionInformationEvent(data, context));
  return contents;
};
const de_ServiceQuotaExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
};
const de_ServiceUnavailableException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ServiceUnavailableExceptionRes(parsedOutput, context);
};
const de_ThrottlingException_event = async (output: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
};
const de_ValidationException_event = async (output: any, context: __SerdeContext): Promise<ValidationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ValidationExceptionRes(parsedOutput, context);
};
/**
 * serializeAws_restJson1BoundingBox
 */
const se_BoundingBox = (input: BoundingBox, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { Height: __serializeFloat(input.Height) }),
    ...(input.Left != null && { Left: __serializeFloat(input.Left) }),
    ...(input.Top != null && { Top: __serializeFloat(input.Top) }),
    ...(input.Width != null && { Width: __serializeFloat(input.Width) }),
  };
};

/**
 * serializeAws_restJson1ClientChallenge
 */
const se_ClientChallenge = (input: ClientChallenge, context: __SerdeContext): any => {
  return ClientChallenge.visit(input, {
    FaceMovementAndLightChallenge: (value) => ({
      FaceMovementAndLightChallenge: se_FaceMovementAndLightClientChallenge(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ClientSessionInformationEvent
 */
const se_ClientSessionInformationEvent = (input: ClientSessionInformationEvent, context: __SerdeContext): any => {
  return {
    ...(input.Challenge != null && { Challenge: se_ClientChallenge(input.Challenge, context) }),
  };
};

/**
 * serializeAws_restJson1ColorComponentList
 */
const se_ColorComponentList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ColorDisplayed
 */
const se_ColorDisplayed = (input: ColorDisplayed, context: __SerdeContext): any => {
  return {
    ...(input.CurrentColor != null && { CurrentColor: se_FreshnessColor(input.CurrentColor, context) }),
    ...(input.CurrentColorStartTimestamp != null && { CurrentColorStartTimestamp: input.CurrentColorStartTimestamp }),
    ...(input.PreviousColor != null && { PreviousColor: se_FreshnessColor(input.PreviousColor, context) }),
    ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
  };
};

/**
 * serializeAws_restJson1FaceMovementAndLightClientChallenge
 */
const se_FaceMovementAndLightClientChallenge = (
  input: FaceMovementAndLightClientChallenge,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChallengeId != null && { ChallengeId: input.ChallengeId }),
    ...(input.ColorDisplayed != null && { ColorDisplayed: se_ColorDisplayed(input.ColorDisplayed, context) }),
    ...(input.InitialFace != null && { InitialFace: se_InitialFace(input.InitialFace, context) }),
    ...(input.TargetFace != null && { TargetFace: se_TargetFace(input.TargetFace, context) }),
    ...(input.VideoEndTimestamp != null && { VideoEndTimestamp: input.VideoEndTimestamp }),
    ...(input.VideoStartTimestamp != null && { VideoStartTimestamp: input.VideoStartTimestamp }),
  };
};

/**
 * serializeAws_restJson1FreshnessColor
 */
const se_FreshnessColor = (input: FreshnessColor, context: __SerdeContext): any => {
  return {
    ...(input.RGB != null && { RGB: se_ColorComponentList(input.RGB, context) }),
  };
};

/**
 * serializeAws_restJson1InitialFace
 */
const se_InitialFace = (input: InitialFace, context: __SerdeContext): any => {
  return {
    ...(input.BoundingBox != null && { BoundingBox: se_BoundingBox(input.BoundingBox, context) }),
    ...(input.InitialFaceDetectedTimestamp != null && {
      InitialFaceDetectedTimestamp: input.InitialFaceDetectedTimestamp,
    }),
  };
};

/**
 * serializeAws_restJson1TargetFace
 */
const se_TargetFace = (input: TargetFace, context: __SerdeContext): any => {
  return {
    ...(input.BoundingBox != null && { BoundingBox: se_BoundingBox(input.BoundingBox, context) }),
    ...(input.FaceDetectedInTargetPositionEndTimestamp != null && {
      FaceDetectedInTargetPositionEndTimestamp: input.FaceDetectedInTargetPositionEndTimestamp,
    }),
    ...(input.FaceDetectedInTargetPositionStartTimestamp != null && {
      FaceDetectedInTargetPositionStartTimestamp: input.FaceDetectedInTargetPositionStartTimestamp,
    }),
  };
};

/**
 * serializeAws_restJson1VideoEvent
 */
const se_VideoEvent = (input: VideoEvent, context: __SerdeContext): any => {
  return {
    ...(input.TimestampMillis != null && { TimestampMillis: input.TimestampMillis }),
    ...(input.VideoChunk != null && { VideoChunk: context.base64Encoder(input.VideoChunk) }),
  };
};

/**
 * deserializeAws_restJson1ChallengeConfig
 */
const de_ChallengeConfig = (output: any, context: __SerdeContext): ChallengeConfig => {
  return {
    BlazeFaceDetectionThreshold: __limitedParseFloat32(output.BlazeFaceDetectionThreshold),
    FaceDistanceThreshold: __limitedParseFloat32(output.FaceDistanceThreshold),
    FaceDistanceThresholdMax: __limitedParseFloat32(output.FaceDistanceThresholdMax),
    FaceDistanceThresholdMin: __limitedParseFloat32(output.FaceDistanceThresholdMin),
    FaceIouHeightThreshold: __limitedParseFloat32(output.FaceIouHeightThreshold),
    FaceIouWidthThreshold: __limitedParseFloat32(output.FaceIouWidthThreshold),
    OvalHeightWidthRatio: __limitedParseFloat32(output.OvalHeightWidthRatio),
    OvalIouHeightThreshold: __limitedParseFloat32(output.OvalIouHeightThreshold),
    OvalIouThreshold: __limitedParseFloat32(output.OvalIouThreshold),
    OvalIouWidthThreshold: __limitedParseFloat32(output.OvalIouWidthThreshold),
  } as any;
};

/**
 * deserializeAws_restJson1ColorComponentList
 */
const de_ColorComponentList = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_restJson1ColorSequence
 */
const de_ColorSequence = (output: any, context: __SerdeContext): ColorSequence => {
  return {
    DownscrollDuration: __limitedParseFloat32(output.DownscrollDuration),
    FlatDisplayDuration: __limitedParseFloat32(output.FlatDisplayDuration),
    FreshnessColor: output.FreshnessColor != null ? de_FreshnessColor(output.FreshnessColor, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ColorSequences
 */
const de_ColorSequences = (output: any, context: __SerdeContext): ColorSequence[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColorSequence(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DisconnectionEvent
 */
const de_DisconnectionEvent = (output: any, context: __SerdeContext): DisconnectionEvent => {
  return {
    TimestampMillis: __expectLong(output.TimestampMillis),
  } as any;
};

/**
 * deserializeAws_restJson1FaceMovementAndLightServerChallenge
 */
const de_FaceMovementAndLightServerChallenge = (
  output: any,
  context: __SerdeContext
): FaceMovementAndLightServerChallenge => {
  return {
    ChallengeConfig: output.ChallengeConfig != null ? de_ChallengeConfig(output.ChallengeConfig, context) : undefined,
    ColorSequences: output.ColorSequences != null ? de_ColorSequences(output.ColorSequences, context) : undefined,
    LightChallengeType: __expectString(output.LightChallengeType),
    OvalParameters: output.OvalParameters != null ? de_OvalParameters(output.OvalParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FreshnessColor
 */
const de_FreshnessColor = (output: any, context: __SerdeContext): FreshnessColor => {
  return {
    RGB: output.RGB != null ? de_ColorComponentList(output.RGB, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OvalParameters
 */
const de_OvalParameters = (output: any, context: __SerdeContext): OvalParameters => {
  return {
    CenterX: __limitedParseFloat32(output.CenterX),
    CenterY: __limitedParseFloat32(output.CenterY),
    Height: __limitedParseFloat32(output.Height),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

/**
 * deserializeAws_restJson1ServerChallenge
 */
const de_ServerChallenge = (output: any, context: __SerdeContext): ServerChallenge => {
  if (output.FaceMovementAndLightChallenge != null) {
    return {
      FaceMovementAndLightChallenge: de_FaceMovementAndLightServerChallenge(
        output.FaceMovementAndLightChallenge,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ServerSessionInformationEvent
 */
const de_ServerSessionInformationEvent = (output: any, context: __SerdeContext): ServerSessionInformationEvent => {
  return {
    SessionInformation:
      output.SessionInformation != null ? de_SessionInformation(output.SessionInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SessionInformation
 */
const de_SessionInformation = (output: any, context: __SerdeContext): SessionInformation => {
  return {
    Challenge: output.Challenge != null ? de_ServerChallenge(__expectUnion(output.Challenge), context) : undefined,
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
