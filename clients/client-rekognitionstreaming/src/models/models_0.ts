// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RekognitionStreamingServiceException as __BaseException } from "./RekognitionStreamingServiceException";

/**
 * <p>Occurs when the client isn't authorized to perform the action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Identifies the bounding box around a given label, face, text, object of interest, or
 *       personal protective equipment. The left (x-coordinate) and top (y-coordinate) are coordinates
 *       representing the top and left sides of the bounding box. Note that the upper-left corner of
 *       the image is the origin (0,0). </p>
 *          <p>The top and left values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200).</p>
 *          <p>The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. </p>
 * @public
 */
export interface BoundingBox {
  /**
   * <p>Width of the bounding box as a ratio of the overall image width.</p>
   * @public
   */
  Width: number | undefined;

  /**
   * <p>Height of the bounding box as a ratio of the overall image height.</p>
   * @public
   */
  Height: number | undefined;

  /**
   * <p>Left coordinate of the bounding box as a ratio of overall image width.</p>
   * @public
   */
  Left: number | undefined;

  /**
   * <p>Top coordinate of the bounding box as a ratio of overall image height.</p>
   * @public
   */
  Top: number | undefined;
}

/**
 * <p>Configuration options for Face Liveness challenges performed at the client side. </p>
 * @public
 */
export interface ChallengeConfig {
  /**
   * <p>Threshold for face detection done using blaze face.</p>
   * @public
   */
  BlazeFaceDetectionThreshold?: number | undefined;

  /**
   * <p>Threshold for the minimum distance that face can be from the camera before face oval
   *       match challenge starts.</p>
   * @public
   */
  FaceDistanceThresholdMin?: number | undefined;

  /**
   * <p>Threshold for face distance threshold face liveness challenge.</p>
   * @public
   */
  FaceDistanceThreshold?: number | undefined;

  /**
   * <p>Threshold for the maximum distance that face can be from the camera before face oval
   *       match challenge starts.</p>
   * @public
   */
  FaceDistanceThresholdMax?: number | undefined;

  /**
   * <p>Threshold for face oval match using IoU (Intersection over Union).</p>
   * @public
   */
  OvalIouThreshold?: number | undefined;

  /**
   * <p>Height to width ratio of oval used for face oval match.</p>
   * @public
   */
  OvalHeightWidthRatio?: number | undefined;

  /**
   * <p>Threshold for width during oval IOU (Intersection over Union) match.</p>
   * @public
   */
  OvalIouWidthThreshold?: number | undefined;

  /**
   * <p>Threshold for height during oval IOU (Intersection over Union) match.</p>
   * @public
   */
  OvalIouHeightThreshold?: number | undefined;

  /**
   * <p>Threshold for width during face IOU (Intersection over Union) match.</p>
   * @public
   */
  FaceIouWidthThreshold?: number | undefined;

  /**
   * <p> Threshold for height during face IOU (Intersection over Union) match.</p>
   * @public
   */
  FaceIouHeightThreshold?: number | undefined;

  OvalFitTimeout?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ChallengeType = {
  FACE_MOVEMENT_AND_LIGHT_CHALLENGE: "FaceMovementAndLightChallenge",
  FACE_MOVEMENT_CHALLENGE: "FaceMovementChallenge",
} as const;

/**
 * @public
 */
export type ChallengeType = (typeof ChallengeType)[keyof typeof ChallengeType];

/**
 * @public
 */
export interface ChallengeEvent {
  Version: string | undefined;
  Type: ChallengeType | undefined;
}

/**
 * <p>Represents the colors to be flashed to the end user, each color represented in RGB values.</p>
 * @public
 */
export interface FreshnessColor {
  /**
   * <p>RGB values for a color to be flashed to the end user.</p>
   * @public
   */
  RGB: number[] | undefined;
}

/**
 * <p>Contains information regarding <code>SequenceNumber</code>, <code>CurrentColor</code>,
 *         <code>PreviousColor</code>, and <code>CurrentColorStartTimestamp</code>.</p>
 * @public
 */
export interface ColorDisplayed {
  /**
   * <p> The current color being displayed on the screen (flat or downscrolled). It will contain a separate RGB list having 3 elements (each element can have values between 0 to 255). </p>
   * @public
   */
  CurrentColor: FreshnessColor | undefined;

  /**
   * <p>The previous color displayed on screen (flat or downscrolled). It will contain a separate RGB list having 3 elements (each element can have values between 0 to 255). </p>
   * @public
   */
  PreviousColor?: FreshnessColor | undefined;

  /**
   * <p>The order in which the current color was displayed on the screen.</p>
   * @public
   */
  SequenceNumber: number | undefined;

  /**
   * <p>Epoch timestamp of when the current color was displayed on the user screen.</p>
   * @public
   */
  CurrentColorStartTimestamp: number | undefined;
}

/**
 * <p> Contains bounding box of initial face position of the user on the device screen.
 *       Contains an epoch timestamp of when the user was detected in this position. Used for Face
 *       Liveness detection.</p>
 * @public
 */
export interface InitialFace {
  /**
   * <p>The bounding box for the initial face position of the user on the device screen.</p>
   * @public
   */
  BoundingBox: BoundingBox | undefined;

  /**
   * <p>Timestamp that a face was initially detected at.</p>
   * @public
   */
  InitialFaceDetectedTimestamp: number | undefined;
}

/**
 * <p>Contains bounding box of face position of the user on the device screen at target
 *       location constructed for the challenge. This is generated using the random offsets provided by
 *       the server to the client at session start. Also contains start and end epoch timestamp of when
 *       the user was detected in this position.</p>
 * @public
 */
export interface TargetFace {
  /**
   * <p>A bounding box for the target face.</p>
   * @public
   */
  BoundingBox: BoundingBox | undefined;

  /**
   * <p>Starting timestamp at which a face was detected in the target position.</p>
   * @public
   */
  FaceDetectedInTargetPositionStartTimestamp: number | undefined;

  /**
   * <p>Ending timestamp at which a face was detected in the target position.</p>
   * @public
   */
  FaceDetectedInTargetPositionEndTimestamp: number | undefined;
}

/**
 * <p>Holds information about the type of face movement and light challenges that need to be
 *       performed.</p>
 * @public
 */
export interface FaceMovementAndLightClientChallenge {
  /**
   * <p>An ID that uniquely identifies a challenge from a client.</p>
   * @public
   */
  ChallengeId: string | undefined;

  /**
   * <p>Epoch timestamp indicating start of video recording.</p>
   * @public
   */
  VideoStartTimestamp?: number | undefined;

  /**
   * <p>Epoch timestamp indicating end of video recording.</p>
   * @public
   */
  VideoEndTimestamp?: number | undefined;

  /**
   * <p>Contains the bounding box of the initial face position for the user on the device screen.
   *       Also contains an epoch timestamp of when the user was detected in this position. Used for Face
   *       Liveness detection.</p>
   * @public
   */
  InitialFace?: InitialFace | undefined;

  /**
   * <p>Contains the face position bounding box for the user on the device's screen, set at the
   *       target location constructed for the challenge. Generated using a precise oval location
   *       depending on the provided video </p>
   *          <p>dimensions in the input stream. Contains start and end epoch timestamp of when the user
   *       was detected in this position.</p>
   * @public
   */
  TargetFace?: TargetFace | undefined;

  /**
   * <p>Contains information regarding SequenceNumber, CurrentColor, PreviousColor, and CurrentColorStartTimestamp for a challenge.</p>
   * @public
   */
  ColorDisplayed?: ColorDisplayed | undefined;
}

/**
 * @public
 */
export interface FaceMovementClientChallenge {
  ChallengeId: string | undefined;
  VideoStartTimestamp?: number | undefined;
  VideoEndTimestamp?: number | undefined;
  /**
   * <p> Contains bounding box of initial face position of the user on the device screen.
   *       Contains an epoch timestamp of when the user was detected in this position. Used for Face
   *       Liveness detection.</p>
   * @public
   */
  InitialFace?: InitialFace | undefined;

  /**
   * <p>Contains bounding box of face position of the user on the device screen at target
   *       location constructed for the challenge. This is generated using the random offsets provided by
   *       the server to the client at session start. Also contains start and end epoch timestamp of when
   *       the user was detected in this position.</p>
   * @public
   */
  TargetFace?: TargetFace | undefined;
}

/**
 * <p>Object containing information for Face Liveness challenges performed at the client
 *       side.</p>
 * @public
 */
export type ClientChallenge =
  | ClientChallenge.FaceMovementAndLightChallengeMember
  | ClientChallenge.FaceMovementChallengeMember
  | ClientChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ClientChallenge {
  /**
   * <p>Information about a face movement and light challenge type.</p>
   * @public
   */
  export interface FaceMovementAndLightChallengeMember {
    FaceMovementAndLightChallenge: FaceMovementAndLightClientChallenge;
    FaceMovementChallenge?: never;
    $unknown?: never;
  }

  export interface FaceMovementChallengeMember {
    FaceMovementAndLightChallenge?: never;
    FaceMovementChallenge: FaceMovementClientChallenge;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    FaceMovementAndLightChallenge?: never;
    FaceMovementChallenge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    FaceMovementAndLightChallenge: (value: FaceMovementAndLightClientChallenge) => T;
    FaceMovementChallenge: (value: FaceMovementClientChallenge) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Any information that the client needs to send for the streaming session. For face movement challenge,
 *        it will contain information like initial face position and target face position.</p>
 * @public
 */
export interface ClientSessionInformationEvent {
  /**
   * <p>Contains information on FaceMovementAndLightChellenge, TargetFace, and ColorDisplayed, for a given Challenge.</p>
   * @public
   */
  Challenge: ClientChallenge | undefined;
}

/**
 * <p>A color sequence to be displayed on the user’s screen. </p>
 * @public
 */
export interface ColorSequence {
  /**
   * <p>Represents the colors in a given ColorSequence to be flashed to the end user, with each color represented in RGB values.</p>
   * @public
   */
  FreshnessColor: FreshnessColor | undefined;

  /**
   * <p>Duration in milliseconds for which a given color in the color sequence will down-scroll before taking over full screen.</p>
   * @public
   */
  DownscrollDuration: number | undefined;

  /**
   * <p>Duration in milliseconds for which a given flat color in the color sequence will be displayed on the full screen.</p>
   * @public
   */
  FlatDisplayDuration: number | undefined;
}

/**
 * <p>Contains information regarding if a disconnection event took place
 *       during the Face Liveness session. Disconnection events may indicate processing is complete at the server side.</p>
 * @public
 */
export interface DisconnectionEvent {
  /**
   * <p>The timestamp that a disconnection event took place at.</p>
   * @public
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
 * <p>Oval parameters need for oval display to complete oval match challenge.</p>
 * @public
 */
export interface OvalParameters {
  /**
   * <p>Width of the oval</p>
   * @public
   */
  Width: number | undefined;

  /**
   * <p>Height of the oval</p>
   * @public
   */
  Height: number | undefined;

  /**
   * <p>X-axis co-ordinate of  for center of oval</p>
   * @public
   */
  CenterX: number | undefined;

  /**
   * <p>Y-axis co-ordinate of  for center of oval</p>
   * @public
   */
  CenterY: number | undefined;
}

/**
 * <p>Contains information regarding the <code>OvalParameters</code> and
 *         <code>LightChallengeType</code> for a challenge.</p>
 * @public
 */
export interface FaceMovementAndLightServerChallenge {
  /**
   * <p>The parameters needed for an oval to display and to complete oval match challenge.</p>
   * @public
   */
  OvalParameters: OvalParameters | undefined;

  /**
   * <p>Information on the type of colored light challenge.</p>
   * @public
   */
  LightChallengeType: LightChallengeType | undefined;

  /**
   * <p>Configurations for attributes of the Face Liveness movement and light challenges.</p>
   * @public
   */
  ChallengeConfig: ChallengeConfig | undefined;

  /**
   * <p>Used to generate a list of color sequences to be displayed on a user's screen.</p>
   * @public
   */
  ColorSequences: ColorSequence[] | undefined;
}

/**
 * @public
 */
export interface FaceMovementServerChallenge {
  /**
   * <p>Oval parameters need for oval display to complete oval match challenge.</p>
   * @public
   */
  OvalParameters: OvalParameters | undefined;

  /**
   * <p>Configuration options for Face Liveness challenges performed at the client side. </p>
   * @public
   */
  ChallengeConfig: ChallengeConfig | undefined;
}

/**
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Contains the video chunk blob.</p>
 * @public
 */
export interface VideoEvent {
  /**
   * <p>The video chunk for a video event.</p>
   * @public
   */
  VideoChunk?: Uint8Array | undefined;

  /**
   * <p>Milisecond timestamp for a video chunk in a video event.</p>
   * @public
   */
  TimestampMillis?: number | undefined;
}

/**
 * <p>Contains information regarding video events and client session details for a Face Liveness verification request stream.</p>
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
  /**
   * <p>Contains video events for a Face Liveness request stream.</p>
   * @public
   */
  export interface VideoEventMember {
    VideoEvent: VideoEvent;
    ClientSessionInformationEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Information event for the client session for a given Face Liveness request stream.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VideoEvent: (value: VideoEvent) => T;
    ClientSessionInformationEvent: (value: ClientSessionInformationEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Information on the challenge sent by the server.</p>
 * @public
 */
export type ServerChallenge =
  | ServerChallenge.FaceMovementAndLightChallengeMember
  | ServerChallenge.FaceMovementChallengeMember
  | ServerChallenge.$UnknownMember;

/**
 * @public
 */
export namespace ServerChallenge {
  /**
   * <p>Paramteters and configuration information for the face movement and light sequence challenges.</p>
   * @public
   */
  export interface FaceMovementAndLightChallengeMember {
    FaceMovementAndLightChallenge: FaceMovementAndLightServerChallenge;
    FaceMovementChallenge?: never;
    $unknown?: never;
  }

  export interface FaceMovementChallengeMember {
    FaceMovementAndLightChallenge?: never;
    FaceMovementChallenge: FaceMovementServerChallenge;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    FaceMovementAndLightChallenge?: never;
    FaceMovementChallenge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    FaceMovementAndLightChallenge: (value: FaceMovementAndLightServerChallenge) => T;
    FaceMovementChallenge: (value: FaceMovementServerChallenge) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Information required for the streaming session.</p>
 * @public
 */
export interface SessionInformation {
  /**
   * <p>Object containing information of Face Liveness challenge to be performed by the client. The information is used to construct the challenges at the client's SDK.</p>
   * @public
   */
  Challenge: ServerChallenge | undefined;
}

/**
 * <p>Event containing session information for the server.</p>
 * @public
 */
export interface ServerSessionInformationEvent {
  /**
   * <p>Contains the session information sent by the server..</p>
   * @public
   */
  SessionInformation: SessionInformation | undefined;
}

/**
 * <p>Occurs when a request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Service-wide throttling to recover from an operational event or service is not able to scale.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>A request was denied due to request throttling. Occurs when too many requests were made by a user
 *        (exceeding their service quota), the service isn't able to scale, or a service-wide throttling was done to recover from an operational event.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>The input fails to satisfy the constraints specified by the service. Potential reasons
 *       inlcude: video quality or size is invalid, video container format not supported, video does
 *       not have enough information - no person detected in video, request couldn't be parsed or is
 *       invalid, session has expired or is invalid, S3 bucket is invalid/in another AWS region, KMS
 *       Key is invalid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
 * <p>Contains information event details and exception information for a Face Liveness verification response stream.</p>
 * @public
 */
export type LivenessResponseStream =
  | LivenessResponseStream.ChallengeEventMember
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
   * <p>Details for a server session information event.</p>
   * @public
   */
  export interface ServerSessionInformationEventMember {
    ServerSessionInformationEvent: ServerSessionInformationEvent;
    DisconnectionEvent?: never;
    ChallengeEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Notification that disconnection event has occurred to a Face Liveness session.</p>
   * @public
   */
  export interface DisconnectionEventMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent: DisconnectionEvent;
    ChallengeEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  export interface ChallengeEventMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ChallengeEvent: ChallengeEvent;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Notification that a ValidationException occurred during a Face Liveness session.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ChallengeEvent?: never;
    ValidationException: ValidationException;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Notification that an InternalServerException occurred during a Face Liveness session.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ChallengeEvent?: never;
    ValidationException?: never;
    InternalServerException: InternalServerException;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Notification that a ThrottlingException occurred during a Face Liveness session.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ChallengeEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException: ThrottlingException;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Notification that a ServiceQuotaExceededException occurred during a Face Liveness session.</p>
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ChallengeEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException: ServiceQuotaExceededException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Notification that a ServiceUnavailableException occurred during a Face Liveness session.</p>
   * @public
   */
  export interface ServiceUnavailableExceptionMember {
    ServerSessionInformationEvent?: never;
    DisconnectionEvent?: never;
    ChallengeEvent?: never;
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
    ChallengeEvent?: never;
    ValidationException?: never;
    InternalServerException?: never;
    ThrottlingException?: never;
    ServiceQuotaExceededException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ServerSessionInformationEvent: (value: ServerSessionInformationEvent) => T;
    DisconnectionEvent: (value: DisconnectionEvent) => T;
    ChallengeEvent: (value: ChallengeEvent) => T;
    ValidationException: (value: ValidationException) => T;
    InternalServerException: (value: InternalServerException) => T;
    ThrottlingException: (value: ThrottlingException) => T;
    ServiceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Occurs when the given <code>sessionId</code> is not found.</p>
 * @public
 */
export class SessionNotFoundException extends __BaseException {
  readonly name: "SessionNotFoundException" = "SessionNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
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
   * <p>A unique 128-bit UUID. Used to uniquely identify the session and also acta as an
   *       idempotency token for all operations associated with the session.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The width of the video object included in a request to start a Face Liveness
   *       session.</p>
   * @public
   */
  VideoWidth: string | undefined;

  /**
   * <p>The height of the video object included in a request to start a Face Liveness
   *       session.</p>
   * @public
   */
  VideoHeight: string | undefined;

  /**
   * <p>String containing comma separated list of challenge versions supported by client.</p>
   * @public
   */
  ChallengeVersions: string | undefined;

  /**
   * <p>Information regarding the request stream for a Face Liveness session.</p>
   * @public
   */
  LivenessRequestStream?: AsyncIterable<LivenessRequestStream> | undefined;
}

/**
 * @public
 */
export interface StartFaceLivenessSessionResponse {
  /**
   * <p>The ID that identifies a Face Liveness session.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>Information regarding the response stream for a Face Liveness session.</p>
   * @public
   */
  LivenessResponseStream?: AsyncIterable<LivenessResponseStream> | undefined;
}
