// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { RekognitionStreamingServiceException as __BaseException } from "./RekognitionStreamingServiceException";

/**
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface BoundingBox {
  Width: number | undefined;
  Height: number | undefined;
  Left: number | undefined;
  Top: number | undefined;
}

/**
 * @public
 */
export interface FreshnessColor {
  RGB: number[] | undefined;
}

/**
 * @public
 */
export interface ColorDisplayed {
  CurrentColor: FreshnessColor | undefined;
  PreviousColor?: FreshnessColor;
  SequenceNumber: number | undefined;
  CurrentColorStartTimestamp: number | undefined;
}

/**
 * @public
 */
export interface InitialFace {
  BoundingBox: BoundingBox | undefined;
  InitialFaceDetectedTimestamp: number | undefined;
}

/**
 * @public
 */
export interface TargetFace {
  BoundingBox: BoundingBox | undefined;
  FaceDetectedInTargetPositionStartTimestamp: number | undefined;
  FaceDetectedInTargetPositionEndTimestamp: number | undefined;
}

/**
 * @public
 */
export interface FaceMovementAndLightClientChallenge {
  ChallengeId: string | undefined;
  VideoStartTimestamp?: number;
  InitialFace?: InitialFace;
  TargetFace?: TargetFace;
  ColorDisplayed?: ColorDisplayed;
}

/**
 * @public
 */
export type ClientChallenge = ClientChallenge.FaceMovementAndLightChallengeMember | ClientChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ClientChallenge {
  export interface FaceMovementAndLightChallengeMember {
    FaceMovementAndLightChallenge: FaceMovementAndLightClientChallenge;
    $unknown?: never;
  }

  export interface $UnknownMember {
    FaceMovementAndLightChallenge?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    FaceMovementAndLightChallenge: (value: FaceMovementAndLightClientChallenge) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ClientChallenge, visitor: Visitor<T>): T => {
    if (value.FaceMovementAndLightChallenge !== undefined)
      return visitor.FaceMovementAndLightChallenge(value.FaceMovementAndLightChallenge);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface DeviceInformation {
  VideoHeight: number | undefined;
  VideoWidth: number | undefined;
  ClientSDKVersion: string | undefined;
}

/**
 * @public
 */
export interface ClientSessionInformationEvent {
  DeviceInformation: DeviceInformation | undefined;
  Challenge: ClientChallenge | undefined;
}

/**
 * @public
 */
export interface ColorSequence {
  FreshnessColor: FreshnessColor | undefined;
  DownscrollDuration: number | undefined;
  FlatDisplayDuration: number | undefined;
}

/**
 * @public
 */
export interface DisconnectionEvent {
  TimestampMillis: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LightChallengeType = {
  SEQUENTIAL: "SEQUENTIAL",
  SIMULTANEOUS: "SIMULTANEOUS",
} as const;

/**
 * @public
 */
export type LightChallengeType = (typeof LightChallengeType)[keyof typeof LightChallengeType];

/**
 * @public
 */
export interface OvalScaleFactors {
  Width: number | undefined;
  CenterX: number | undefined;
  CenterY: number | undefined;
}

/**
 * @public
 */
export interface FaceMovementAndLightServerChallenge {
  OvalScaleFactors: OvalScaleFactors | undefined;
  LightChallengeType: LightChallengeType | string | undefined;
  ColorSequences: ColorSequence[] | undefined;
}

/**
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface VideoEvent {
  VideoChunk?: Uint8Array;
  TimestampMillis?: number;
}

/**
 * @public
 */
export type LivenessRequestStream =
  | LivenessRequestStream.ClientSessionInformationEventMember
  | LivenessRequestStream.VideoEventMember
  | LivenessRequestStream.$UnknownMember;

/**
 * @public
 */
export namespace LivenessRequestStream {
  export interface VideoEventMember {
    VideoEvent: VideoEvent;
    ClientSessionInformationEvent?: never;
    $unknown?: never;
  }

  export interface ClientSessionInformationEventMember {
    VideoEvent?: never;
    ClientSessionInformationEvent: ClientSessionInformationEvent;
    $unknown?: never;
  }

  export interface $UnknownMember {
    VideoEvent?: never;
    ClientSessionInformationEvent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    VideoEvent: (value: VideoEvent) => T;
    ClientSessionInformationEvent: (value: ClientSessionInformationEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LivenessRequestStream, visitor: Visitor<T>): T => {
    if (value.VideoEvent !== undefined) return visitor.VideoEvent(value.VideoEvent);
    if (value.ClientSessionInformationEvent !== undefined)
      return visitor.ClientSessionInformationEvent(value.ClientSessionInformationEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export type ServerChallenge = ServerChallenge.FaceMovementAndLightChallengeMember | ServerChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ServerChallenge {
  export interface FaceMovementAndLightChallengeMember {
    FaceMovementAndLightChallenge: FaceMovementAndLightServerChallenge;
    $unknown?: never;
  }

  export interface $UnknownMember {
    FaceMovementAndLightChallenge?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    FaceMovementAndLightChallenge: (value: FaceMovementAndLightServerChallenge) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ServerChallenge, visitor: Visitor<T>): T => {
    if (value.FaceMovementAndLightChallenge !== undefined)
      return visitor.FaceMovementAndLightChallenge(value.FaceMovementAndLightChallenge);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface SessionInformation {
  Challenge: ServerChallenge | undefined;
}

/**
 * @public
 */
export interface ServerSessionInformationEvent {
  SessionInformation: SessionInformation | undefined;
}

/**
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export type LivenessResponseStream =
  | LivenessResponseStream.DisconnectionEventMember
  | LivenessResponseStream.InternalServerExceptionMember
  | LivenessResponseStream.ServerSessionInformationEventMember
  | LivenessResponseStream.ServiceQuotaExceededExceptionMember
  | LivenessResponseStream.ThrottlingExceptionMember
  | LivenessResponseStream.ValidationExceptionMember
  | LivenessResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace LivenessResponseStream {
  export interface ServerSessionInformationEventMember {
    ServerSessionInformationEvent: ServerSessionInformationEvent;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    $unknown?: never;
  }

  export interface DisconnectionEventMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent: DisconnectionEvent;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    $unknown?: never;
  }

  export interface ValidationExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException: ValidationException;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    $unknown?: never;
  }

  export interface InternalServerExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException: InternalServerException;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    $unknown?: never;
  }

  export interface ThrottlingExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException: ThrottlingException;
    ServiceQuotaExceededException?: never;
    $unknown?: never;
  }

  export interface ServiceQuotaExceededExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException: ServiceQuotaExceededException;
    $unknown?: never;
  }

  export interface $UnknownMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ServerSessionInformationEvent: (value: ServerSessionInformationEvent) => T;
    DisconnectionEvent: (value: DisconnectionEvent) => T;
    ValidationException: (value: ValidationException) => T;
    InternalServerException: (value: InternalServerException) => T;
    ThrottlingException: (value: ThrottlingException) => T;
    ServiceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LivenessResponseStream, visitor: Visitor<T>): T => {
    if (value.ServerSessionInformationEvent !== undefined)
      return visitor.ServerSessionInformationEvent(value.ServerSessionInformationEvent);
    if (value.DisconnectionEvent !== undefined) return visitor.DisconnectionEvent(value.DisconnectionEvent);
    if (value.ValidationException !== undefined) return visitor.ValidationException(value.ValidationException);
    if (value.InternalServerException !== undefined)
      return visitor.InternalServerException(value.InternalServerException);
    if (value.ThrottlingException !== undefined) return visitor.ThrottlingException(value.ThrottlingException);
    if (value.ServiceQuotaExceededException !== undefined)
      return visitor.ServiceQuotaExceededException(value.ServiceQuotaExceededException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export class SessionNotFoundException extends __BaseException {
  readonly name: "SessionNotFoundException" = "SessionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionNotFoundException, __BaseException>) {
    super({
      name: "SessionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface StartFaceLivenessSessionRequest {
  SessionId: string | undefined;
  ClientSDKVersion: string | undefined;
  LivenessRequestStream?: AsyncIterable<LivenessRequestStream>;
}

/**
 * @public
 */
export interface StartFaceLivenessSessionResponse {
  SessionId: string | undefined;
  LivenessResponseStream?: AsyncIterable<LivenessResponseStream>;
}

/**
 * @public
 */
export interface StartStreamingLivenessSessionRequest {
  SessionId: string | undefined;
  ClientSDKVersion: string | undefined;
  LivenessRequestStream?: AsyncIterable<LivenessRequestStream>;
}

/**
 * @public
 */
export interface StartStreamingLivenessSessionResponse {
  SessionId: string | undefined;
  LivenessResponseStream?: AsyncIterable<LivenessResponseStream>;
}

/**
 * @internal
 */
export const LivenessRequestStreamFilterSensitiveLog = (obj: LivenessRequestStream): any => {
  if (obj.VideoEvent !== undefined) return { VideoEvent: obj.VideoEvent };
  if (obj.ClientSessionInformationEvent !== undefined)
    return { ClientSessionInformationEvent: obj.ClientSessionInformationEvent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const LivenessResponseStreamFilterSensitiveLog = (obj: LivenessResponseStream): any => {
  if (obj.ServerSessionInformationEvent !== undefined)
    return { ServerSessionInformationEvent: obj.ServerSessionInformationEvent };
  if (obj.DisconnectionEvent !== undefined) return { DisconnectionEvent: obj.DisconnectionEvent };
  if (obj.ValidationException !== undefined) return { ValidationException: obj.ValidationException };
  if (obj.InternalServerException !== undefined) return { InternalServerException: obj.InternalServerException };
  if (obj.ThrottlingException !== undefined) return { ThrottlingException: obj.ThrottlingException };
  if (obj.ServiceQuotaExceededException !== undefined)
    return { ServiceQuotaExceededException: obj.ServiceQuotaExceededException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StartFaceLivenessSessionRequestFilterSensitiveLog = (obj: StartFaceLivenessSessionRequest): any => ({
  ...obj,
  ...(obj.LivenessRequestStream && { LivenessRequestStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartFaceLivenessSessionResponseFilterSensitiveLog = (obj: StartFaceLivenessSessionResponse): any => ({
  ...obj,
  ...(obj.LivenessResponseStream && { LivenessResponseStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartStreamingLivenessSessionRequestFilterSensitiveLog = (
  obj: StartStreamingLivenessSessionRequest
): any => ({
  ...obj,
  ...(obj.LivenessRequestStream && { LivenessRequestStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const StartStreamingLivenessSessionResponseFilterSensitiveLog = (
  obj: StartStreamingLivenessSessionResponse
): any => ({
  ...obj,
  ...(obj.LivenessResponseStream && { LivenessResponseStream: "STREAMING_CONTENT" }),
});
