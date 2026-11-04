// smithy-typescript generated code
import type { ChallengeType, LightChallengeType } from "./enums";
import type {
  InternalServerException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * Identifies the bounding box around a given label, face, text, object of interest, or personal protective equipment. The left (x-coordinate) and top (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0).
 *
 * The top and left values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200).
 *
 * The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1.
 *
 * @public
 */
export interface BoundingBox {
  /**
   * Width of the bounding box as a ratio of the overall image width.
   *
   * @public
   */
  Width: number | undefined;

  /**
   * Height of the bounding box as a ratio of the overall image height.
   *
   * @public
   */
  Height: number | undefined;

  /**
   * Left coordinate of the bounding box as a ratio of overall image width.
   *
   * @public
   */
  Left: number | undefined;

  /**
   * Top coordinate of the bounding box as a ratio of overall image height.
   *
   * @public
   */
  Top: number | undefined;
}

/**
 * Configuration options for Face Liveness challenges performed at the client side.
 *
 * @public
 */
export interface ChallengeConfig {
  /**
   * Threshold for face detection done using blaze face.
   *
   * @public
   */
  BlazeFaceDetectionThreshold?: number | undefined;

  /**
   * Threshold for the minimum distance that face can be from the camera before face oval match challenge starts.
   *
   * @public
   */
  FaceDistanceThresholdMin?: number | undefined;

  /**
   * Threshold for face distance threshold face liveness challenge.
   *
   * @public
   */
  FaceDistanceThreshold?: number | undefined;

  /**
   * Threshold for the maximum distance that face can be from the camera before face oval match challenge starts.
   *
   * @public
   */
  FaceDistanceThresholdMax?: number | undefined;

  /**
   * Threshold for face oval match using IoU (Intersection over Union).
   *
   * @public
   */
  OvalIouThreshold?: number | undefined;

  /**
   * Height to width ratio of oval used for face oval match.
   *
   * @public
   */
  OvalHeightWidthRatio?: number | undefined;

  /**
   * Threshold for width during oval IOU (Intersection over Union) match.
   *
   * @public
   */
  OvalIouWidthThreshold?: number | undefined;

  /**
   * Threshold for height during oval IOU (Intersection over Union) match.
   *
   * @public
   */
  OvalIouHeightThreshold?: number | undefined;

  /**
   * Threshold for width during face IOU (Intersection over Union) match.
   *
   * @public
   */
  FaceIouWidthThreshold?: number | undefined;

  /**
   * Threshold for height during face IOU (Intersection over Union) match.
   *
   * @public
   */
  FaceIouHeightThreshold?: number | undefined;

  OvalFitTimeout?: number | undefined;
}

/**
 * @public
 */
export interface ChallengeEvent {
  Version: string | undefined;
  Type: ChallengeType | undefined;
}

/**
 * Represents the colors to be flashed to the end user, each color represented in RGB values.
 *
 * @public
 */
export interface FreshnessColor {
  /**
   * RGB values for a color to be flashed to the end user.
   *
   * @public
   */
  RGB: number[] | undefined;
}

/**
 * Contains information regarding `SequenceNumber`, `CurrentColor`, `PreviousColor`, and `CurrentColorStartTimestamp`.
 *
 * @public
 */
export interface ColorDisplayed {
  /**
   * The current color being displayed on the screen (flat or downscrolled). It will contain a separate RGB list having 3 elements (each element can have values between 0 to 255).
   *
   * @public
   */
  CurrentColor: FreshnessColor | undefined;

  /**
   * The previous color displayed on screen (flat or downscrolled). It will contain a separate RGB list having 3 elements (each element can have values between 0 to 255).
   *
   * @public
   */
  PreviousColor?: FreshnessColor | undefined;

  /**
   * The order in which the current color was displayed on the screen.
   *
   * @public
   */
  SequenceNumber: number | undefined;

  /**
   * Epoch timestamp of when the current color was displayed on the user screen.
   *
   * @public
   */
  CurrentColorStartTimestamp: number | undefined;
}

/**
 * Contains bounding box of initial face position of the user on the device screen. Contains an epoch timestamp of when the user was detected in this position. Used for Face Liveness detection.
 *
 * @public
 */
export interface InitialFace {
  /**
   * The bounding box for the initial face position of the user on the device screen.
   *
   * @public
   */
  BoundingBox: BoundingBox | undefined;

  /**
   * Timestamp that a face was initially detected at.
   *
   * @public
   */
  InitialFaceDetectedTimestamp: number | undefined;
}

/**
 * Contains bounding box of face position of the user on the device screen at target location constructed for the challenge. This is generated using the random offsets provided by the server to the client at session start. Also contains start and end epoch timestamp of when the user was detected in this position.
 *
 * @public
 */
export interface TargetFace {
  /**
   * A bounding box for the target face.
   *
   * @public
   */
  BoundingBox: BoundingBox | undefined;

  /**
   * Starting timestamp at which a face was detected in the target position.
   *
   * @public
   */
  FaceDetectedInTargetPositionStartTimestamp: number | undefined;

  /**
   * Ending timestamp at which a face was detected in the target position.
   *
   * @public
   */
  FaceDetectedInTargetPositionEndTimestamp: number | undefined;
}

/**
 * Holds information about the type of face movement and light challenges that need to be performed.
 *
 * @public
 */
export interface FaceMovementAndLightClientChallenge {
  /**
   * An ID that uniquely identifies a challenge from a client.
   *
   * @public
   */
  ChallengeId: string | undefined;

  /**
   * Epoch timestamp indicating start of video recording.
   *
   * @public
   */
  VideoStartTimestamp?: number | undefined;

  /**
   * Epoch timestamp indicating end of video recording.
   *
   * @public
   */
  VideoEndTimestamp?: number | undefined;

  /**
   * Contains the bounding box of the initial face position for the user on the device screen. Also contains an epoch timestamp of when the user was detected in this position. Used for Face Liveness detection.
   *
   * @public
   */
  InitialFace?: InitialFace | undefined;

  /**
   * Contains the face position bounding box for the user on the device's screen, set at the target location constructed for the challenge. Generated using a precise oval location depending on the provided video
   *
   * dimensions in the input stream. Contains start and end epoch timestamp of when the user was detected in this position.
   *
   * @public
   */
  TargetFace?: TargetFace | undefined;

  /**
   * Contains information regarding SequenceNumber, CurrentColor, PreviousColor, and CurrentColorStartTimestamp for a challenge.
   *
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
   * Contains bounding box of initial face position of the user on the device screen. Contains an epoch timestamp of when the user was detected in this position. Used for Face Liveness detection.
   *
   * @public
   */
  InitialFace?: InitialFace | undefined;

  /**
   * Contains bounding box of face position of the user on the device screen at target location constructed for the challenge. This is generated using the random offsets provided by the server to the client at session start. Also contains start and end epoch timestamp of when the user was detected in this position.
   *
   * @public
   */
  TargetFace?: TargetFace | undefined;
}

/**
 * Object containing information for Face Liveness challenges performed at the client side.
 *
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
   * Information about a face movement and light challenge type.
   *
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
 * Any information that the client needs to send for the streaming session. For face movement challenge, it will contain information like initial face position and target face position.
 *
 * @public
 */
export interface ClientSessionInformationEvent {
  /**
   * Contains information on FaceMovementAndLightChellenge, TargetFace, and ColorDisplayed, for a given Challenge.
   *
   * @public
   */
  Challenge: ClientChallenge | undefined;
}

/**
 * A color sequence to be displayed on the user’s screen.
 *
 * @public
 */
export interface ColorSequence {
  /**
   * Represents the colors in a given ColorSequence to be flashed to the end user, with each color represented in RGB values.
   *
   * @public
   */
  FreshnessColor: FreshnessColor | undefined;

  /**
   * Duration in milliseconds for which a given color in the color sequence will down-scroll before taking over full screen.
   *
   * @public
   */
  DownscrollDuration: number | undefined;

  /**
   * Duration in milliseconds for which a given flat color in the color sequence will be displayed on the full screen.
   *
   * @public
   */
  FlatDisplayDuration: number | undefined;
}

/**
 * Contains information regarding if a disconnection event took place during the Face Liveness session. Disconnection events may indicate processing is complete at the server side.
 *
 * @public
 */
export interface DisconnectionEvent {
  /**
   * The timestamp that a disconnection event took place at.
   *
   * @public
   */
  TimestampMillis: number | undefined;
}

/**
 * Oval parameters need for oval display to complete oval match challenge.
 *
 * @public
 */
export interface OvalParameters {
  /**
   * Width of the oval
   *
   * @public
   */
  Width: number | undefined;

  /**
   * Height of the oval
   *
   * @public
   */
  Height: number | undefined;

  /**
   * X-axis co-ordinate of for center of oval
   *
   * @public
   */
  CenterX: number | undefined;

  /**
   * Y-axis co-ordinate of for center of oval
   *
   * @public
   */
  CenterY: number | undefined;
}

/**
 * Contains information regarding the `OvalParameters` and `LightChallengeType` for a challenge.
 *
 * @public
 */
export interface FaceMovementAndLightServerChallenge {
  /**
   * The parameters needed for an oval to display and to complete oval match challenge.
   *
   * @public
   */
  OvalParameters: OvalParameters | undefined;

  /**
   * Information on the type of colored light challenge.
   *
   * @public
   */
  LightChallengeType: LightChallengeType | undefined;

  /**
   * Configurations for attributes of the Face Liveness movement and light challenges.
   *
   * @public
   */
  ChallengeConfig: ChallengeConfig | undefined;

  /**
   * Used to generate a list of color sequences to be displayed on a user's screen.
   *
   * @public
   */
  ColorSequences: ColorSequence[] | undefined;
}

/**
 * @public
 */
export interface FaceMovementServerChallenge {
  /**
   * Oval parameters need for oval display to complete oval match challenge.
   *
   * @public
   */
  OvalParameters: OvalParameters | undefined;

  /**
   * Configuration options for Face Liveness challenges performed at the client side.
   *
   * @public
   */
  ChallengeConfig: ChallengeConfig | undefined;
}

/**
 * Contains the video chunk blob.
 *
 * @public
 */
export interface VideoEvent {
  /**
   * The video chunk for a video event.
   *
   * @public
   */
  VideoChunk?: Uint8Array | undefined;

  /**
   * Milisecond timestamp for a video chunk in a video event.
   *
   * @public
   */
  TimestampMillis?: number | undefined;
}

/**
 * Contains information regarding video events and client session details for a Face Liveness verification request stream.
 *
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
   * Contains video events for a Face Liveness request stream.
   *
   * @public
   */
  export interface VideoEventMember {
    VideoEvent: VideoEvent;
    ClientSessionInformationEvent?: never;
    $unknown?: never;
  }

  /**
   * Information event for the client session for a given Face Liveness request stream.
   *
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
 * Information on the challenge sent by the server.
 *
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
   * Paramteters and configuration information for the face movement and light sequence challenges.
   *
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
 * Information required for the streaming session.
 *
 * @public
 */
export interface SessionInformation {
  /**
   * Object containing information of Face Liveness challenge to be performed by the client. The information is used to construct the challenges at the client's SDK.
   *
   * @public
   */
  Challenge: ServerChallenge | undefined;
}

/**
 * Event containing session information for the server.
 *
 * @public
 */
export interface ServerSessionInformationEvent {
  /**
   * Contains the session information sent by the server..
   *
   * @public
   */
  SessionInformation: SessionInformation | undefined;
}

/**
 * Contains information event details and exception information for a Face Liveness verification response stream.
 *
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
   * Details for a server session information event.
   *
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
   * Notification that disconnection event has occurred to a Face Liveness session.
   *
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
   * Notification that a ValidationException occurred during a Face Liveness session.
   *
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
   * Notification that an InternalServerException occurred during a Face Liveness session.
   *
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
   * Notification that a ThrottlingException occurred during a Face Liveness session.
   *
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
   * Notification that a ServiceQuotaExceededException occurred during a Face Liveness session.
   *
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
   * Notification that a ServiceUnavailableException occurred during a Face Liveness session.
   *
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
 * @public
 */
export interface StartFaceLivenessSessionRequest {
  /**
   * A unique 128-bit UUID. Used to uniquely identify the session and also acta as an idempotency token for all operations associated with the session.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The width of the video object included in a request to start a Face Liveness session.
   *
   * @public
   */
  VideoWidth: string | undefined;

  /**
   * The height of the video object included in a request to start a Face Liveness session.
   *
   * @public
   */
  VideoHeight: string | undefined;

  /**
   * String containing comma separated list of challenge versions supported by client.
   *
   * @public
   */
  ChallengeVersions: string | undefined;

  /**
   * Information regarding the request stream for a Face Liveness session.
   *
   * @public
   */
  LivenessRequestStream?: AsyncIterable<LivenessRequestStream> | undefined;
}

/**
 * @public
 */
export interface StartFaceLivenessSessionResponse {
  /**
   * The ID that identifies a Face Liveness session.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * Information regarding the response stream for a Face Liveness session.
   *
   * @public
   */
  LivenessResponseStream?: AsyncIterable<LivenessResponseStream> | undefined;
}
