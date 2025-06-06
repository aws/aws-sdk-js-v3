// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  isSerializableHeaderValue,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  StartFaceLivenessSessionCommandInput,
  StartFaceLivenessSessionCommandOutput,
} from "../commands/StartFaceLivenessSessionCommand";
import {
  AccessDeniedException,
  BoundingBox,
  ChallengeConfig,
  ChallengeEvent,
  ClientChallenge,
  ClientSessionInformationEvent,
  ColorDisplayed,
  ColorSequence,
  DisconnectionEvent,
  FaceMovementAndLightClientChallenge,
  FaceMovementAndLightServerChallenge,
  FaceMovementClientChallenge,
  FaceMovementServerChallenge,
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
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xarslsi]: input[_SI]!,
    [_xarslvw]: input[_VW]!,
    [_xarslvh]: input[_VH]!,
    [_xarslcv]: input[_CV]!,
  });
  b.bp("/start-face-liveness-session");
  let body: any;
  if (input.LivenessRequestStream !== undefined) {
    body = se_LivenessRequestStream(input.LivenessRequestStream, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1StartFaceLivenessSessionCommand
 */
export const de_StartFaceLivenessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartFaceLivenessSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_SI]: [, output.headers[_xarslsi]],
  });
  const data: any = output.body;
  contents.LivenessResponseStream = de_LivenessResponseStream(data, context);
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
    Code: __expectString,
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
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
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Code: __expectString,
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
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
    if (event["ChallengeEvent"] != null) {
      return {
        ChallengeEvent: await de_ChallengeEvent_event(event["ChallengeEvent"], context),
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
const de_ChallengeEvent_event = async (output: any, context: __SerdeContext): Promise<ChallengeEvent> => {
  const contents: ChallengeEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_DisconnectionEvent_event = async (output: any, context: __SerdeContext): Promise<DisconnectionEvent> => {
  const contents: DisconnectionEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
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
  return take(input, {
    Height: __serializeFloat,
    Left: __serializeFloat,
    Top: __serializeFloat,
    Width: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1ClientChallenge
 */
const se_ClientChallenge = (input: ClientChallenge, context: __SerdeContext): any => {
  return ClientChallenge.visit(input, {
    FaceMovementAndLightChallenge: (value) => ({
      FaceMovementAndLightChallenge: se_FaceMovementAndLightClientChallenge(value, context),
    }),
    FaceMovementChallenge: (value) => ({ FaceMovementChallenge: se_FaceMovementClientChallenge(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1ClientSessionInformationEvent
 */
const se_ClientSessionInformationEvent = (input: ClientSessionInformationEvent, context: __SerdeContext): any => {
  return take(input, {
    Challenge: (_) => se_ClientChallenge(_, context),
  });
};

// se_ColorComponentList omitted.

// se_ColorDisplayed omitted.

/**
 * serializeAws_restJson1FaceMovementAndLightClientChallenge
 */
const se_FaceMovementAndLightClientChallenge = (
  input: FaceMovementAndLightClientChallenge,
  context: __SerdeContext
): any => {
  return take(input, {
    ChallengeId: [],
    ColorDisplayed: _json,
    InitialFace: (_) => se_InitialFace(_, context),
    TargetFace: (_) => se_TargetFace(_, context),
    VideoEndTimestamp: [],
    VideoStartTimestamp: [],
  });
};

/**
 * serializeAws_restJson1FaceMovementClientChallenge
 */
const se_FaceMovementClientChallenge = (input: FaceMovementClientChallenge, context: __SerdeContext): any => {
  return take(input, {
    ChallengeId: [],
    InitialFace: (_) => se_InitialFace(_, context),
    TargetFace: (_) => se_TargetFace(_, context),
    VideoEndTimestamp: [],
    VideoStartTimestamp: [],
  });
};

// se_FreshnessColor omitted.

/**
 * serializeAws_restJson1InitialFace
 */
const se_InitialFace = (input: InitialFace, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    InitialFaceDetectedTimestamp: [],
  });
};

/**
 * serializeAws_restJson1TargetFace
 */
const se_TargetFace = (input: TargetFace, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    FaceDetectedInTargetPositionEndTimestamp: [],
    FaceDetectedInTargetPositionStartTimestamp: [],
  });
};

/**
 * serializeAws_restJson1VideoEvent
 */
const se_VideoEvent = (input: VideoEvent, context: __SerdeContext): any => {
  return take(input, {
    TimestampMillis: [],
    VideoChunk: context.base64Encoder,
  });
};

/**
 * deserializeAws_restJson1ChallengeConfig
 */
const de_ChallengeConfig = (output: any, context: __SerdeContext): ChallengeConfig => {
  return take(output, {
    BlazeFaceDetectionThreshold: __limitedParseFloat32,
    FaceDistanceThreshold: __limitedParseFloat32,
    FaceDistanceThresholdMax: __limitedParseFloat32,
    FaceDistanceThresholdMin: __limitedParseFloat32,
    FaceIouHeightThreshold: __limitedParseFloat32,
    FaceIouWidthThreshold: __limitedParseFloat32,
    OvalFitTimeout: __expectInt32,
    OvalHeightWidthRatio: __limitedParseFloat32,
    OvalIouHeightThreshold: __limitedParseFloat32,
    OvalIouThreshold: __limitedParseFloat32,
    OvalIouWidthThreshold: __limitedParseFloat32,
  }) as any;
};

// de_ChallengeEvent omitted.

// de_ColorComponentList omitted.

/**
 * deserializeAws_restJson1ColorSequence
 */
const de_ColorSequence = (output: any, context: __SerdeContext): ColorSequence => {
  return take(output, {
    DownscrollDuration: __limitedParseFloat32,
    FlatDisplayDuration: __limitedParseFloat32,
    FreshnessColor: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ColorSequences
 */
const de_ColorSequences = (output: any, context: __SerdeContext): ColorSequence[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColorSequence(entry, context);
    });
  return retVal;
};

// de_DisconnectionEvent omitted.

/**
 * deserializeAws_restJson1FaceMovementAndLightServerChallenge
 */
const de_FaceMovementAndLightServerChallenge = (
  output: any,
  context: __SerdeContext
): FaceMovementAndLightServerChallenge => {
  return take(output, {
    ChallengeConfig: (_: any) => de_ChallengeConfig(_, context),
    ColorSequences: (_: any) => de_ColorSequences(_, context),
    LightChallengeType: __expectString,
    OvalParameters: (_: any) => de_OvalParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FaceMovementServerChallenge
 */
const de_FaceMovementServerChallenge = (output: any, context: __SerdeContext): FaceMovementServerChallenge => {
  return take(output, {
    ChallengeConfig: (_: any) => de_ChallengeConfig(_, context),
    OvalParameters: (_: any) => de_OvalParameters(_, context),
  }) as any;
};

// de_FreshnessColor omitted.

/**
 * deserializeAws_restJson1OvalParameters
 */
const de_OvalParameters = (output: any, context: __SerdeContext): OvalParameters => {
  return take(output, {
    CenterX: __limitedParseFloat32,
    CenterY: __limitedParseFloat32,
    Height: __limitedParseFloat32,
    Width: __limitedParseFloat32,
  }) as any;
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
  if (output.FaceMovementChallenge != null) {
    return {
      FaceMovementChallenge: de_FaceMovementServerChallenge(output.FaceMovementChallenge, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ServerSessionInformationEvent
 */
const de_ServerSessionInformationEvent = (output: any, context: __SerdeContext): ServerSessionInformationEvent => {
  return take(output, {
    SessionInformation: (_: any) => de_SessionInformation(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SessionInformation
 */
const de_SessionInformation = (output: any, context: __SerdeContext): SessionInformation => {
  return take(output, {
    Challenge: (_: any) => de_ServerChallenge(__expectUnion(_), context),
  }) as any;
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

const _CV = "ChallengeVersions";
const _SI = "SessionId";
const _VH = "VideoHeight";
const _VW = "VideoWidth";
const _xarslcv = "x-amz-rekognition-streaming-liveness-challenge-versions";
const _xarslsi = "x-amz-rekognition-streaming-liveness-session-id";
const _xarslvh = "x-amz-rekognition-streaming-liveness-video-height";
const _xarslvw = "x-amz-rekognition-streaming-liveness-video-width";
