// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RekognitionStreamingServiceException as __BaseException } from "./RekognitionStreamingServiceException";

/**
 * @public
 * <p>Occurs when the client isn't authorized to perform the action.</p>
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
 * <p>Identifies the bounding box around a given label, face, text, object of interest, or
 *       personal protective equipment. The left (x-coordinate) and top (y-coordinate) are coordinates
 *       representing the top and left sides of the bounding box. Note that the upper-left corner of
 *       the image is the origin (0,0). </p>
 *          <p>The top and left values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200).</p>
 *          <p>The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>
 */
export interface BoundingBox {
  /**
   * @public
   * <p>Width of the bounding box as a ratio of the overall image width.</p>
   */
  Width: number | undefined;

  /**
   * @public
   * <p>Height of the bounding box as a ratio of the overall image height.</p>
   */
  Height: number | undefined;

  /**
   * @public
   * <p>Left coordinate of the bounding box as a ratio of overall image width.</p>
   */
  Left: number | undefined;

  /**
   * @public
   * <p>Top coordinate of the bounding box as a ratio of overall image height.</p>
   */
  Top: number | undefined;
}

/**
 * @public
 * <p>Configuration options for Face Liveness challenges performed at the client side. </p>
 */
export interface ChallengeConfig {
  /**
   * @public
   * <p>Threshold for face detection done using blaze face.</p>
   */
  BlazeFaceDetectionThreshold?: number;

  /**
   * @public
   * <p>Threshold for the minimum distance that face can be from the camera before face oval
   *       match challenge starts.</p>
   */
  FaceDistanceThresholdMin?: number;

  /**
   * @public
   * <p>Threshold for face distance threshold face liveness challenge.</p>
   */
  FaceDistanceThreshold?: number;

  /**
   * @public
   * <p>Threshold for the maximum distance that face can be from the camera before face oval
   *       match challenge starts.</p>
   */
  FaceDistanceThresholdMax?: number;

  /**
   * @public
   * <p>Threshold for face oval match using IoU (Intersection over Union).</p>
   */
  OvalIouThreshold?: number;

  /**
   * @public
   * <p>Height to width ratio of oval used for face oval match.</p>
   */
  OvalHeightWidthRatio?: number;

  /**
   * @public
   * <p>Threshold for width during oval IOU (Intersection over Union) match.</p>
   */
  OvalIouWidthThreshold?: number;

  /**
   * @public
   * <p>Threshold for height during oval IOU (Intersection over Union) match.</p>
   */
  OvalIouHeightThreshold?: number;

  /**
   * @public
   * <p>Threshold for width during face IOU (Intersection over Union) match.</p>
   */
  FaceIouWidthThreshold?: number;

  /**
   * @public
   * <p> Threshold for height during face IOU (Intersection over Union) match.</p>
   */
  FaceIouHeightThreshold?: number;

  /**
   * @public
   * <p>Timeout limit in which the end-users need to fit in the oval, in miliseconds.</p>
   */
  OvalFitTimeout?: number;
}

/**
 * @public
 * <p>Represents the colors to be flashed to the end user, each color represented in RGB values.</p>
 */
export interface FreshnessColor {
  /**
   * @public
   * <p>RGB values for a color to be flashed to the end user.</p>
   */
  RGB: number[] | undefined;
}

/**
 * @public
 * <p>Contains information regarding <code>SequenceNumber</code>, <code>CurrentColor</code>,
 *         <code>PreviousColor</code>, and <code>CurrentColorStartTimestamp</code>.</p>
 */
export interface ColorDisplayed {
  /**
   * @public
   * <p> The current color being displayed on the screen (flat or downscrolled). It will contain a separate RGB list having 3 elements (each element can have values between 0 to 255). </p>
   */
  CurrentColor: FreshnessColor | undefined;

  /**
   * @public
   * <p>The previous color displayed on screen (flat or downscrolled). It will contain a separate RGB list having 3 elements (each element can have values between 0 to 255). </p>
   */
  PreviousColor?: FreshnessColor;

  /**
   * @public
   * <p>The order in which the current color was displayed on the screen.</p>
   */
  SequenceNumber: number | undefined;

  /**
   * @public
   * <p>Epoch timestamp of when the current color was displayed on the user screen.</p>
   */
  CurrentColorStartTimestamp: number | undefined;
}

/**
 * @public
 * <p> Contains bounding box of initial face position of the user on the device screen.
 *       Contains an epoch timestamp of when the user was detected in this position. Used for Face
 *       Liveness detection.</p>
 */
export interface InitialFace {
  /**
   * @public
   * <p>The bounding box for the initial face position of the user on the device screen.</p>
   */
  BoundingBox: BoundingBox | undefined;

  /**
   * @public
   * <p>Timestamp that a face was initially detected at.</p>
   */
  InitialFaceDetectedTimestamp: number | undefined;
}

/**
 * @public
 * <p>Contains bounding box of face position of the user on the device screen at target
 *       location constructed for the challenge. This is generated using the random offsets provided by
 *       the server to the client at session start. Also contains start and end epoch timestamp of when
 *       the user was detected in this position.</p>
 */
export interface TargetFace {
  /**
   * @public
   * <p>A bounding box for the target face.</p>
   */
  BoundingBox: BoundingBox | undefined;

  /**
   * @public
   * <p>Starting timestamp at which a face was detected in the target position.</p>
   */
  FaceDetectedInTargetPositionStartTimestamp: number | undefined;

  /**
   * @public
   * <p>Ending timestamp at which a face was detected in the target position.</p>
   */
  FaceDetectedInTargetPositionEndTimestamp: number | undefined;
}

/**
 * @public
 * <p>Holds information about the type of face movement and light challenges that need to be
 *       performed.</p>
 */
export interface FaceMovementAndLightClientChallenge {
  /**
   * @public
   * <p>An ID that uniquely identifies a challenge from a client.</p>
   */
  ChallengeId: string | undefined;

  /**
   * @public
   * <p>Epoch timestamp indicating start of video recording.</p>
   */
  VideoStartTimestamp?: number;

  /**
   * @public
   * <p>Epoch timestamp indicating end of video recording.</p>
   */
  VideoEndTimestamp?: number;

  /**
   * @public
   * <p>Contains the bounding box of the initial face position for the user on the device screen.
   *       Also contains an epoch timestamp of when the user was detected in this position. Used for Face
   *       Liveness detection.</p>
   */
  InitialFace?: InitialFace;

  /**
   * @public
   * <p>Contains the face position bounding box for the user on the device's screen, set at the
   *       target location constructed for the challenge. Generated using a precise oval location
   *       depending on the provided video </p>
   *          <p>dimensions in the input stream. Contains start and end epoch timestamp of when the user
   *       was detected in this position.</p>
   */
  TargetFace?: TargetFace;

  /**
   * @public
   * <p>Contains information regarding SequenceNumber, CurrentColor, PreviousColor, and CurrentColorStartTimestamp for a challenge.</p>
   */
  ColorDisplayed?: ColorDisplayed;
}

/**
 * @public
 * <p>Object containing information for Face Liveness challenges performed at the client
 *       side.</p>
 */
export type ClientChallenge = ClientChallenge.FaceMovementAndLightChallengeMember | ClientChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ClientChallenge {
  /**
   * @public
   * <p>Information about a face movement and light challenge type.</p>
   */
  export interface FaceMovementAndLightChallengeMember {
    FaceMovementAndLightChallenge: FaceMovementAndLightClientChallenge;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * <p>Any information that the client needs to send for the streaming session. For face movement challenge,
 *        it will contain information like initial face position and target face position.</p>
 */
export interface ClientSessionInformationEvent {
  /**
   * @public
   * <p>Contains information on FaceMovementAndLightChellenge, TargetFace, and ColorDisplayed, for a given Challenge.</p>
   */
  Challenge: ClientChallenge | undefined;
}

/**
 * @public
 * <p>A color sequence to be displayed on the user’s screen. </p>
 */
export interface ColorSequence {
  /**
   * @public
   * <p>Represents the colors in a given ColorSequence to be flashed to the end user, with each color represented in RGB values.</p>
   */
  FreshnessColor: FreshnessColor | undefined;

  /**
   * @public
   * <p>Duration in milliseconds for which a given color in the color sequence will down-scroll before taking over full screen.</p>
   */
  DownscrollDuration: number | undefined;

  /**
   * @public
   * <p>Duration in milliseconds for which a given flat color in the color sequence will be displayed on the full screen.</p>
   */
  FlatDisplayDuration: number | undefined;
}

/**
 * @public
 * <p>Contains information regarding if a disconnection event took place
 *       during the Face Liveness session. Disconnection events may indicate processing is complete at the server side.</p>
 */
export interface DisconnectionEvent {
  /**
   * @public
   * <p>The timestamp that a disconnection event took place at.</p>
   */
  TimestampMillis: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LightChallengeType = {
  SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * @public
 */
export type LightChallengeType = (typeof LightChallengeType)[keyof typeof LightChallengeType];

/**
 * @public
 * <p>Oval parameters need for oval display to complete oval match challenge.</p>
 */
export interface OvalParameters {
  /**
   * @public
   * <p>Width of the oval</p>
   */
  Width: number | undefined;

  /**
   * @public
   * <p>Height of the oval</p>
   */
  Height: number | undefined;

  /**
   * @public
   * <p>X-axis co-ordinate of  for center of oval</p>
   */
  CenterX: number | undefined;

  /**
   * @public
   * <p>Y-axis co-ordinate of  for center of oval</p>
   */
  CenterY: number | undefined;
}

/**
 * @public
 * <p>Contains information regarding the <code>OvalParameters</code> and
 *         <code>LightChallengeType</code> for a challenge.</p>
 */
export interface FaceMovementAndLightServerChallenge {
  /**
   * @public
   * <p>The parameters needed for an oval to display and to complete oval match challenge.</p>
   */
  OvalParameters: OvalParameters | undefined;

  /**
   * @public
   * <p>Information on the type of colored light challenge.</p>
   */
  LightChallengeType: LightChallengeType | undefined;

  /**
   * @public
   * <p>Configurations for attributes of the Face Liveness movement and light challenges.</p>
   */
  ChallengeConfig: ChallengeConfig | undefined;

  /**
   * @public
   * <p>Used to generate a list of color sequences to be displayed on a user's screen.</p>
   */
  ColorSequences: ColorSequence[] | undefined;
}

/**
 * @public
 * <p>Unexpected error during processing of request.</p>
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
 * <p>Contains the video chunk blob.</p>
 */
export interface VideoEvent {
  /**
   * @public
   * <p>The video chunk for a video event.</p>
   */
  VideoChunk?: Uint8Array;

  /**
   * @public
   * <p>Milisecond timestamp for a video chunk in a video event.</p>
   */
  TimestampMillis?: number;
}

/**
 * @public
 * <p>Contains information regarding video events and client session details for a Face Liveness verification request stream.</p>
 */
export type LivenessRequestStream =
  | LivenessRequestStream.ClientSessionInformationEventMember
  | LivenessRequestStream.VideoEventMember
  | LivenessRequestStream.$UnknownMember;

/**
 * @public
 */
export namespace LivenessRequestStream {
  /**
   * @public
   * <p>Contains video events for a Face Liveness request stream.</p>
   */
  export interface VideoEventMember {
    VideoEvent: VideoEvent;
    ClientSessionInformationEvent?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Information event for the client session for a given Face Liveness request stream.</p>
   */
  export interface ClientSessionInformationEventMember {
    VideoEvent?: never;
    ClientSessionInformationEvent: ClientSessionInformationEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * <p>Information on the challenge sent by the server.</p>
 */
export type ServerChallenge = ServerChallenge.FaceMovementAndLightChallengeMember | ServerChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ServerChallenge {
  /**
   * @public
   * <p>Paramteters and configuration information for the face movement and light sequence challenges.</p>
   */
  export interface FaceMovementAndLightChallengeMember {
    FaceMovementAndLightChallenge: FaceMovementAndLightServerChallenge;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * <p>Information required for the streaming session.</p>
 */
export interface SessionInformation {
  /**
   * @public
   * <p>Object containing information of Face Liveness challenge to be performed by the client. The information is used to construct the challenges at the client's SDK.</p>
   */
  Challenge: ServerChallenge | undefined;
}

/**
 * @public
 * <p>Event containing session information for the server.</p>
 */
export interface ServerSessionInformationEvent {
  /**
   * @public
   * <p>Contains the session information sent by the server..</p>
   */
  SessionInformation: SessionInformation | undefined;
}

/**
 * @public
 * <p>Occurs when a request would cause a service quota to be exceeded.</p>
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
 * <p>Service-wide throttling to recover from an operational event or service is not able to scale.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 * <p>A request was denied due to request throttling. Occurs when too many requests were made by a user
 *        (exceeding their service quota), the service isn't able to scale, or a service-wide throttling was done to recover from an operational event.</p>
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
 * <p>The input fails to satisfy the constraints specified by the service. Potential reasons
 *       inlcude: video quality or size is invalid, video container format not supported, video does
 *       not have enough information - no person detected in video, request couldn't be parsed or is
 *       invalid, session has expired or is invalid, S3 bucket is invalid/in another AWS region, KMS
 *       Key is invalid.</p>
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
 * <p>Contains information event details and exception information for a Face Liveness verification response stream.</p>
 */
export type LivenessResponseStream =
  | LivenessResponseStream.DisconnectionEventMember
  | LivenessResponseStream.InternalServerExceptionMember
  | LivenessResponseStream.ServerSessionInformationEventMember
  | LivenessResponseStream.ServiceQuotaExceededExceptionMember
  | LivenessResponseStream.ServiceUnavailableExceptionMember
  | LivenessResponseStream.ThrottlingExceptionMember
  | LivenessResponseStream.ValidationExceptionMember
  | LivenessResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace LivenessResponseStream {
  /**
   * @public
   * <p>Details for a server session information event.</p>
   */
  export interface ServerSessionInformationEventMember {
    ServerSessionInformationEvent: ServerSessionInformationEvent;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Notification that disconnection event has occurred to a Face Liveness session.</p>
   */
  export interface DisconnectionEventMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent: DisconnectionEvent;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Notification that a ValidationException occurred during a Face Liveness session.</p>
   */
  export interface ValidationExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException: ValidationException;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Notification that an InternalServerException occurred during a Face Liveness session.</p>
   */
  export interface InternalServerExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException: InternalServerException;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Notification that a ThrottlingException occurred during a Face Liveness session.</p>
   */
  export interface ThrottlingExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException: ThrottlingException;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Notification that a ServiceQuotaExceededException occurred during a Face Liveness session.</p>
   */
  export interface ServiceQuotaExceededExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException: ServiceQuotaExceededException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Notification that a ServiceUnavailableException occurred during a Face Liveness session.</p>
   */
  export interface ServiceUnavailableExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ServerSessionInformationEvent: (value: ServerSessionInformationEvent) => T;
    DisconnectionEvent: (value: DisconnectionEvent) => T;
    ValidationException: (value: ValidationException) => T;
    InternalServerException: (value: InternalServerException) => T;
    ThrottlingException: (value: ThrottlingException) => T;
    ServiceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
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
    if (value.ServiceUnavailableException !== undefined)
      return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Occurs when the given <code>sessionId</code> is not found.</p>
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
  /**
   * @public
   * <p>A unique 128-bit UUID. Used to uniquely identify the session and also acta as an
   *       idempotency token for all operations associated with the session.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>The width of the video object included in a request to start a Face Liveness
   *       session.</p>
   */
  VideoWidth: string | undefined;

  /**
   * @public
   * <p>The height of the video object included in a request to start a Face Liveness
   *       session.</p>
   */
  VideoHeight: string | undefined;

  /**
   * @public
   * <p>String containing comma separated list of challenge versions supported by client.</p>
   */
  ChallengeVersions: string | undefined;

  /**
   * @public
   * <p>Information regarding the request stream for a Face Liveness session.</p>
   */
  LivenessRequestStream?: AsyncIterable<LivenessRequestStream>;
}

/**
 * @public
 */
export interface StartFaceLivenessSessionResponse {
  /**
   * @public
   * <p>The ID that identifies a Face Liveness session.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>Information regarding the response stream for a Face Liveness session.</p>
   */
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
  if (obj.ServiceUnavailableException !== undefined)
    return { ServiceUnavailableException: obj.ServiceUnavailableException };
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
