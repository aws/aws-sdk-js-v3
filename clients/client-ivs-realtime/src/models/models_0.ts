// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IVSRealTimeServiceException as __BaseException } from "./IVSRealTimeServiceException";

/**
 * @public
 * <p/>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>User does not have sufficient access to perform this action.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
   */
  exceptionMessage?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p>Settings for video.</p>
 */
export interface Video {
  /**
   * @public
   * <p>Video-resolution width. Note that the maximum value is determined by <code>width</code>
   *          times <code>height</code>, such that the maximum total pixels is 2073600 (1920x1080 or
   *          1080x1920). Default: 1280.</p>
   */
  width?: number;

  /**
   * @public
   * <p>Video-resolution height. Note that the maximum value is determined by <code>width</code>
   *          times <code>height</code>, such that the maximum total pixels is 2073600 (1920x1080 or
   *          1080x1920). Default: 720.</p>
   */
  height?: number;

  /**
   * @public
   * <p>Video frame rate, in fps. Default: 30.</p>
   */
  framerate?: number;

  /**
   * @public
   * <p>Bitrate for generated output, in bps. Default: 2500000.</p>
   */
  bitrate?: number;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationRequest {
  /**
   * @public
   * <p>Optional name to identify the resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30
   *          fps.</p>
   */
  video?: Video;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Settings for transcoding.</p>
 */
export interface EncoderConfiguration {
  /**
   * @public
   * <p>ARN of the EncoderConfiguration resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Optional name to identify the resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30
   *          fps</p>
   */
  video?: Video;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationResponse {
  /**
   * @public
   * <p>The EncoderConfiguration that was created.</p>
   */
  encoderConfiguration?: EncoderConfiguration;
}

/**
 * @public
 * <p/>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>Unexpected error during processing of request.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class PendingVerification extends __BaseException {
  readonly name: "PendingVerification" = "PendingVerification";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p> Your account is pending verification. </p>
   */
  exceptionMessage?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PendingVerification, __BaseException>) {
    super({
      name: "PendingVerification",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PendingVerification.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Request references a resource which does not exist.</p>
   */
  exceptionMessage?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Request would cause a service quota to be exceeded.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * <p/>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   */
  exceptionMessage?: string;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 * @enum
 */
export const ParticipantTokenCapability = {
  PUBLISH: "PUBLISH",
  SUBSCRIBE: "SUBSCRIBE",
} as const;

/**
 * @public
 */
export type ParticipantTokenCapability = (typeof ParticipantTokenCapability)[keyof typeof ParticipantTokenCapability];

/**
 * @public
 */
export interface CreateParticipantTokenRequest {
  /**
   * @public
   * <p>ARN of the stage to which this token is scoped.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>Duration (in minutes), after which the token expires. Default: 720 (12 hours).</p>
   */
  duration?: number;

  /**
   * @public
   * <p>Name that can be specified to help identify the token. This can be any UTF-8 encoded
   *          text. <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * @public
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Set of capabilities that the user is allowed to perform in the stage. Default:
   *             <code>PUBLISH, SUBSCRIBE</code>.</p>
   */
  capabilities?: ParticipantTokenCapability[];
}

/**
 * @public
 * <p>Object specifying a participant token in a stage.</p>
 *          <p>
 *             <b>Important</b>: Treat tokens as opaque; i.e., do not build functionality
 *          based on token contents. The format of tokens could change in the future.</p>
 */
export interface ParticipantToken {
  /**
   * @public
   * <p>Unique identifier for this participant token, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>The issued client token, encrypted.</p>
   */
  token?: string;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * @public
   * <p>Application-provided attributes to encode into the token and attach to a stage.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Duration (in minutes), after which the participant token expires. Default: 720 (12
   *          hours).</p>
   */
  duration?: number;

  /**
   * @public
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   */
  capabilities?: ParticipantTokenCapability[];

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) for when this token expires.</p>
   */
  expirationTime?: Date;
}

/**
 * @public
 */
export interface CreateParticipantTokenResponse {
  /**
   * @public
   * <p>The participant token that was created.</p>
   */
  participantToken?: ParticipantToken;
}

/**
 * @public
 * <p>Object specifying a participant token configuration in a stage.</p>
 */
export interface ParticipantTokenConfiguration {
  /**
   * @public
   * <p>Duration (in minutes), after which the corresponding participant token expires. Default:
   *          720 (12 hours).</p>
   */
  duration?: number;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   */
  userId?: string;

  /**
   * @public
   * <p>Application-provided attributes to encode into the corresponding participant token and
   *          attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length
   *          of this field is 1 KB total. <i>This field is exposed to all stage participants and
   *             should not be used for personally identifying, confidential, or sensitive
   *             information.</i>
   *          </p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   */
  capabilities?: ParticipantTokenCapability[];
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * @public
   * <p>Optional name that can be specified for the stage being created.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Array of participant token configuration objects to attach to the new stage.</p>
   */
  participantTokenConfigurations?: ParticipantTokenConfiguration[];

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there. </p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Object specifying a stage.</p>
 */
export interface Stage {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Stage name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>ID of the active session within the stage.</p>
   */
  activeSessionId?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * @public
   * <p>The stage that was created.</p>
   */
  stage?: Stage;

  /**
   * @public
   * <p>Participant tokens attached to the stage. These correspond to the
   *             <code>participants</code> in the request.</p>
   */
  participantTokens?: ParticipantToken[];
}

/**
 * @public
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 */
export interface S3StorageConfiguration {
  /**
   * @public
   * <p>Location (S3 bucket name) where recorded videos will be stored.  Note that the StorageConfiguration
   * 	  and S3 bucket must be in the same region as the Composition.</p>
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateStorageConfigurationRequest {
  /**
   * @public
   * <p>Storage configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A complex type that contains a storage configuration for where recorded video will be stored.</p>
   */
  s3: S3StorageConfiguration | undefined;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A complex type that describes a location where recorded videos will be stored.</p>
 */
export interface StorageConfiguration {
  /**
   * @public
   * <p>ARN of the storage configuration.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Name of the storage configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   */
  s3?: S3StorageConfiguration;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStorageConfigurationResponse {
  /**
   * @public
   * <p>The StorageConfiguration that was created.</p>
   */
  storageConfiguration?: StorageConfiguration;
}

/**
 * @public
 */
export interface DeleteEncoderConfigurationRequest {
  /**
   * @public
   * <p>ARN of the EncoderConfiguration.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEncoderConfigurationResponse {}

/**
 * @public
 */
export interface DeleteStageRequest {
  /**
   * @public
   * <p>ARN of the stage to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStageResponse {}

/**
 * @public
 */
export interface DeleteStorageConfigurationRequest {
  /**
   * @public
   * <p>ARN of the storage configuration to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStorageConfigurationResponse {}

/**
 * @public
 */
export interface DisconnectParticipantRequest {
  /**
   * @public
   * <p>ARN of the stage to which the participant is attached.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>Identifier of the participant to be disconnected. This is assigned by IVS and returned
   *          by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;

  /**
   * @public
   * <p>Description of why this participant is being disconnected.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface DisconnectParticipantResponse {}

/**
 * @public
 */
export interface GetCompositionRequest {
  /**
   * @public
   * <p>ARN of the Composition resource.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>Object specifying a channel as a destination.</p>
 */
export interface ChannelDestinationConfiguration {
  /**
   * @public
   * <p>ARN of the channel to use for broadcasting. The channel and stage resources must be in
   *          the same AWS account and region. The channel must be offline (not broadcasting).</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>ARN of the <a>EncoderConfiguration</a> resource. The encoder configuration
   *          and stage resources must be in the same AWS account and region.</p>
   */
  encoderConfigurationArn?: string;
}

/**
 * @public
 * @enum
 */
export const RecordingConfigurationFormat = {
  HLS: "HLS",
} as const;

/**
 * @public
 */
export type RecordingConfigurationFormat =
  (typeof RecordingConfigurationFormat)[keyof typeof RecordingConfigurationFormat];

/**
 * @public
 * <p>An object representing a configuration to record a stage stream.</p>
 */
export interface RecordingConfiguration {
  /**
   * @public
   * <p>The recording format for storing a recording in Amazon S3.</p>
   */
  format?: RecordingConfigurationFormat;
}

/**
 * @public
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * @public
   * <p>ARN of the <a>StorageConfiguration</a> where recorded videos will be stored.</p>
   */
  storageConfigurationArn: string | undefined;

  /**
   * @public
   * <p>ARNs of the <a>EncoderConfiguration</a> resource. The encoder configuration and stage resources
   * 	  must be in the same AWS account and region. </p>
   */
  encoderConfigurationArns: string[] | undefined;

  /**
   * @public
   * <p>Array of maps, each of the form <code>string:string (key:value)</code>.
   * 	  This is an optional customer specification, currently used only to specify
   * 	  the recording format for storing a recording in Amazon S3.</p>
   */
  recordingConfiguration?: RecordingConfiguration;
}

/**
 * @public
 * <p>Complex data type that defines destination-configuration objects.</p>
 */
export interface DestinationConfiguration {
  /**
   * @public
   * <p>Name that can be specified to help identify the destination.</p>
   */
  name?: string;

  /**
   * @public
   * <p>An IVS channel to be used for broadcasting, for server-side composition. Either a <code>channel</code> or an
   * 	  <code>s3</code> must be specified. </p>
   */
  channel?: ChannelDestinationConfiguration;

  /**
   * @public
   * <p>An S3 storage configuration to be used for recording video data. Either a <code>channel</code>
   * 	  or an <code>s3</code> must be specified.</p>
   */
  s3?: S3DestinationConfiguration;
}

/**
 * @public
 * <p>Complex data type that defines S3Detail objects.</p>
 */
export interface S3Detail {
  /**
   * @public
   * <p>The S3 bucket prefix under which the recording is stored.</p>
   */
  recordingPrefix: string | undefined;
}

/**
 * @public
 * <p>Complex data type that defines destination-detail objects.</p>
 */
export interface DestinationDetail {
  /**
   * @public
   * <p>An S3 detail object to return information about the S3 destination.</p>
   */
  s3?: S3Detail;
}

/**
 * @public
 * @enum
 */
export const DestinationState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  RECONNECTING: "RECONNECTING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type DestinationState = (typeof DestinationState)[keyof typeof DestinationState];

/**
 * @public
 * <p>Object specifying the status of a Destination.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>Unique identifier for this destination, assigned by IVS.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>State of the Composition Destination.</p>
   */
  state: DestinationState | undefined;

  /**
   * @public
   * <p>UTC time of the destination start. This is an ISO 8601 timestamp; <i>note that
   *             this is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>UTC time of the destination end. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>Configuration used to create this destination.</p>
   */
  configuration: DestinationConfiguration | undefined;

  /**
   * @public
   * <p>Optional details regarding the status of the destination.</p>
   */
  detail?: DestinationDetail;
}

/**
 * @public
 * @enum
 */
export const VideoAspectRatio = {
  AUTO: "AUTO",
  PORTRAIT: "PORTRAIT",
  SQUARE: "SQUARE",
  VIDEO: "VIDEO",
} as const;

/**
 * @public
 */
export type VideoAspectRatio = (typeof VideoAspectRatio)[keyof typeof VideoAspectRatio];

/**
 * @public
 * @enum
 */
export const VideoFillMode = {
  CONTAIN: "CONTAIN",
  COVER: "COVER",
  FILL: "FILL",
} as const;

/**
 * @public
 */
export type VideoFillMode = (typeof VideoFillMode)[keyof typeof VideoFillMode];

/**
 * @public
 * <p>Configuration information specific to Grid layout, for server-side composition. See
 *          "Layouts" in <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/server-side-composition.html">Server-Side
 *             Composition</a>.</p>
 */
export interface GridConfiguration {
  /**
   * @public
   * <p>This attribute name identifies the featured slot. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a> is placed in the featured
   *          slot.</p>
   */
  featuredParticipantAttribute?: string;

  /**
   * @public
   * <p>Determines whether to omit participants with stopped video in the composition. Default: <code>false</code>.</p>
   */
  omitStoppedVideo?: boolean;

  /**
   * @public
   * <p>Sets the non-featured participant display mode. Default: <code>VIDEO</code>.</p>
   */
  videoAspectRatio?: VideoAspectRatio;

  /**
   * @public
   * <p>Defines how video fits within the participant tile. When not set,
   * 	  <code>videoFillMode</code> defaults to <code>COVER</code> fill mode for participants in the grid
   * 	  and to <code>CONTAIN</code> fill mode for featured participants.</p>
   */
  videoFillMode?: VideoFillMode;

  /**
   * @public
   * <p>Specifies the spacing between participant tiles in pixels. Default: <code>2</code>.</p>
   */
  gridGap?: number;
}

/**
 * @public
 * @enum
 */
export const PipBehavior = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type PipBehavior = (typeof PipBehavior)[keyof typeof PipBehavior];

/**
 * @public
 * @enum
 */
export const PipPosition = {
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
} as const;

/**
 * @public
 */
export type PipPosition = (typeof PipPosition)[keyof typeof PipPosition];

/**
 * @public
 * <p>Configuration information specific to Picture-in-Picture (PiP) layout,
 * 	        for <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/server-side-composition.html">server-side composition</a>.
 * 	  </p>
 */
export interface PipConfiguration {
  /**
   * @public
   * <p>This attribute name identifies the featured slot. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a> is placed in the featured
   *          slot.</p>
   */
  featuredParticipantAttribute?: string;

  /**
   * @public
   * <p>Determines whether to omit participants with stopped video in the composition. Default: <code>false</code>.</p>
   */
  omitStoppedVideo?: boolean;

  /**
   * @public
   * <p>Defines how video fits within the participant tile. Default: <code>COVER</code>.
   * </p>
   */
  videoFillMode?: VideoFillMode;

  /**
   * @public
   * <p>Specifies the spacing between participant tiles in pixels. Default: <code>0</code>.</p>
   */
  gridGap?: number;

  /**
   * @public
   * <p>Identifies the PiP slot. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a>
   * 		 is placed in the PiP slot.</p>
   */
  pipParticipantAttribute?: string;

  /**
   * @public
   * <p>Defines PiP behavior when all participants have left. Default: <code>STATIC</code>.</p>
   */
  pipBehavior?: PipBehavior;

  /**
   * @public
   * <p>Sets the PiP window’s offset position in pixels from the closest edges determined by <code>PipPosition</code>.
   * 	  Default: <code>0</code>.</p>
   */
  pipOffset?: number;

  /**
   * @public
   * <p>Determines the corner position of the PiP window. Default: <code>BOTTOM_RIGHT</code>.</p>
   */
  pipPosition?: PipPosition;

  /**
   * @public
   * <p>Specifies the width of the PiP window in pixels. When this is not set explicitly,
   * 	        <code>pipWidth</code>’s value will be based on the size of the composition and the
   * 			aspect ratio of the participant’s video.</p>
   */
  pipWidth?: number;

  /**
   * @public
   * <p>Specifies the height of the PiP window in pixels. When this is not set explicitly,
   * 	        <code>pipHeight</code>’s value will be based on the size of the composition and the
   * 			aspect ratio of the participant’s video.</p>
   */
  pipHeight?: number;
}

/**
 * @public
 * <p>Configuration information of supported layouts for server-side composition.</p>
 */
export interface LayoutConfiguration {
  /**
   * @public
   * <p>Configuration related to grid layout. Default: Grid layout.</p>
   */
  grid?: GridConfiguration;

  /**
   * @public
   * <p>Configuration related to PiP layout.</p>
   */
  pip?: PipConfiguration;
}

/**
 * @public
 * @enum
 */
export const CompositionState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type CompositionState = (typeof CompositionState)[keyof typeof CompositionState];

/**
 * @public
 * <p>Object specifying a Composition resource.</p>
 */
export interface Composition {
  /**
   * @public
   * <p>ARN of the Composition resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>ARN of the stage used as input</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>State of the Composition.</p>
   */
  state: CompositionState | undefined;

  /**
   * @public
   * <p>Layout object to configure composition parameters.</p>
   */
  layout: LayoutConfiguration | undefined;

  /**
   * @public
   * <p>Array of Destination objects. A Composition can contain either one destination
   * 	        (<code>channel</code> or <code>s3</code>) or two (one <code>channel</code> and one <code>s3</code>).</p>
   */
  destinations: Destination[] | undefined;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>UTC time of the Composition start. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>UTC time of the Composition end. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface GetCompositionResponse {
  /**
   * @public
   * <p>The Composition that was returned.</p>
   */
  composition?: Composition;
}

/**
 * @public
 */
export interface GetEncoderConfigurationRequest {
  /**
   * @public
   * <p>ARN of the EncoderConfiguration resource.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEncoderConfigurationResponse {
  /**
   * @public
   * <p>The EncoderConfiguration that was returned.</p>
   */
  encoderConfiguration?: EncoderConfiguration;
}

/**
 * @public
 */
export interface GetParticipantRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Unique identifier for the participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ParticipantState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;

/**
 * @public
 */
export type ParticipantState = (typeof ParticipantState)[keyof typeof ParticipantState];

/**
 * @public
 * <p>Object describing a participant that has joined a stage.</p>
 */
export interface Participant {
  /**
   * @public
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   */
  state?: ParticipantState;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   */
  firstJoinTime?: Date;

  /**
   * @public
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Whether the participant ever published to the stage session.</p>
   */
  published?: boolean;

  /**
   * @public
   * <p>The participant’s Internet Service Provider.</p>
   */
  ispName?: string;

  /**
   * @public
   * <p>The participant’s operating system.</p>
   */
  osName?: string;

  /**
   * @public
   * <p>The participant’s operating system version.</p>
   */
  osVersion?: string;

  /**
   * @public
   * <p>The participant’s browser.</p>
   */
  browserName?: string;

  /**
   * @public
   * <p>The participant’s browser version.</p>
   */
  browserVersion?: string;

  /**
   * @public
   * <p>The participant’s SDK version.</p>
   */
  sdkVersion?: string;
}

/**
 * @public
 */
export interface GetParticipantResponse {
  /**
   * @public
   * <p>The participant that is returned.</p>
   */
  participant?: Participant;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * @public
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * @public
   * <p>The stage that is returned.</p>
   */
  stage?: Stage;
}

/**
 * @public
 */
export interface GetStageSessionRequest {
  /**
   * @public
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 * <p>A stage session begins when the first participant joins a stage and ends after the last
 *          participant leaves the stage. A stage session helps with debugging stages by grouping
 *          events and participants into shorter periods of time (i.e., a session), which is helpful
 *          when stages are used over long periods of time.</p>
 */
export interface StageSession {
  /**
   * @public
   * <p>ID of the session within the stage.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface GetStageSessionResponse {
  /**
   * @public
   * <p>The stage session that is returned.</p>
   */
  stageSession?: StageSession;
}

/**
 * @public
 */
export interface GetStorageConfigurationRequest {
  /**
   * @public
   * <p>ARN of the storage configuration to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStorageConfigurationResponse {
  /**
   * @public
   * <p>The StorageConfiguration that was returned.</p>
   */
  storageConfiguration?: StorageConfiguration;
}

/**
 * @public
 */
export interface ListCompositionsRequest {
  /**
   * @public
   * <p>Filters the Composition list to match the specified Stage ARN.</p>
   */
  filterByStageArn?: string;

  /**
   * @public
   * <p>Filters the Composition list to match the specified EncoderConfiguration attached to at
   *          least one of its output.</p>
   */
  filterByEncoderConfigurationArn?: string;

  /**
   * @public
   * <p>The first Composition to retrieve. This is used for pagination; see the
   *          <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a Destination.</p>
 */
export interface DestinationSummary {
  /**
   * @public
   * <p>Unique identifier for this destination, assigned by IVS.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>State of the Composition Destination.</p>
   */
  state: DestinationState | undefined;

  /**
   * @public
   * <p>UTC time of the destination start. This is an ISO 8601 timestamp; <i>note that
   *             this is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>UTC time of the destination end. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  endTime?: Date;
}

/**
 * @public
 * <p>Summary information about a Composition.</p>
 */
export interface CompositionSummary {
  /**
   * @public
   * <p>ARN of the Composition resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>ARN of the attached stage.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>Array of Destination objects.</p>
   */
  destinations: DestinationSummary[] | undefined;

  /**
   * @public
   * <p>State of the Composition resource.</p>
   */
  state: CompositionState | undefined;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>UTC time of the Composition start. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>UTC time of the Composition end. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListCompositionsResponse {
  /**
   * @public
   * <p>List of the matching Compositions (summary information only).</p>
   */
  compositions: CompositionSummary[] | undefined;

  /**
   * @public
   * <p>If there are more compositions than <code>maxResults</code>, use <code>nextToken</code>
   *          in the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEncoderConfigurationsRequest {
  /**
   * @public
   * <p>The first encoder configuration to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about an EncoderConfiguration.</p>
 */
export interface EncoderConfigurationSummary {
  /**
   * @public
   * <p>ARN of the EncoderConfiguration resource.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Optional name to identify the resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListEncoderConfigurationsResponse {
  /**
   * @public
   * <p>List of the matching EncoderConfigurations (summary information only).</p>
   */
  encoderConfigurations: EncoderConfigurationSummary[] | undefined;

  /**
   * @public
   * <p>If there are more encoder configurations than <code>maxResults</code>, use
   *             <code>nextToken</code> in the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListParticipantEventsRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of a session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Unique identifier for this participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   */
  participantId: string | undefined;

  /**
   * @public
   * <p>The first participant event to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const EventErrorCode = {
  INSUFFICIENT_CAPABILITIES: "INSUFFICIENT_CAPABILITIES",
  PUBLISHER_NOT_FOUND: "PUBLISHER_NOT_FOUND",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
} as const;

/**
 * @public
 */
export type EventErrorCode = (typeof EventErrorCode)[keyof typeof EventErrorCode];

/**
 * @public
 * @enum
 */
export const EventName = {
  JOINED: "JOINED",
  JOIN_ERROR: "JOIN_ERROR",
  LEFT: "LEFT",
  PUBLISH_ERROR: "PUBLISH_ERROR",
  PUBLISH_STARTED: "PUBLISH_STARTED",
  PUBLISH_STOPPED: "PUBLISH_STOPPED",
  SUBSCRIBE_ERROR: "SUBSCRIBE_ERROR",
  SUBSCRIBE_STARTED: "SUBSCRIBE_STARTED",
  SUBSCRIBE_STOPPED: "SUBSCRIBE_STOPPED",
} as const;

/**
 * @public
 */
export type EventName = (typeof EventName)[keyof typeof EventName];

/**
 * @public
 * <p>An occurrence during a stage session.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The name of the event.</p>
   */
  name?: EventName;

  /**
   * @public
   * <p>Unique identifier for the participant who triggered the event. This is assigned by
   *          IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) for when the event occurred.</p>
   */
  eventTime?: Date;

  /**
   * @public
   * <p>Unique identifier for the remote participant. For a subscribe event, this is the
   *          publisher. For a publish or join event, this is null. This is assigned by IVS.</p>
   */
  remoteParticipantId?: string;

  /**
   * @public
   * <p>If the event is an error event, the error code is provided to give insight into the
   *          specific error that occurred. If the event is not an error event, this field is null.
   *             <code>INSUFFICIENT_CAPABILITIES</code> indicates that the participant tried to take an
   *          action that the participant’s token is not allowed to do. For more information about
   *          participant capabilities, see the <code>capabilities</code> field in <a>CreateParticipantToken</a>. <code>QUOTA_EXCEEDED</code> indicates that the
   *          number of participants who want to publish/subscribe to a stage exceeds the quota; for more
   *          information, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">Service Quotas</a>.
   *             <code>PUBLISHER_NOT_FOUND</code> indicates that the participant tried to subscribe to a
   *          publisher that doesn’t exist. </p>
   */
  errorCode?: EventErrorCode;
}

/**
 * @public
 */
export interface ListParticipantEventsResponse {
  /**
   * @public
   * <p>List of the matching events.</p>
   */
  events: Event[] | undefined;

  /**
   * @public
   * <p>If there are more events than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListParticipantsRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>ID of the session within the stage.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Filters the response list to match the specified user ID. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request. A <code>userId</code> is a
   *          customer-assigned name to help identify the token; this can be used to link a participant
   *          to a user in the customer’s own systems.</p>
   */
  filterByUserId?: string;

  /**
   * @public
   * <p>Filters the response list to only show participants who published during the stage
   *          session. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   */
  filterByPublished?: boolean;

  /**
   * @public
   * <p>Filters the response list to only show participants in the specified state. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   */
  filterByState?: ParticipantState;

  /**
   * @public
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary object describing a participant that has joined a stage.</p>
 */
export interface ParticipantSummary {
  /**
   * @public
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   */
  participantId?: string;

  /**
   * @public
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   */
  state?: ParticipantState;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   */
  firstJoinTime?: Date;

  /**
   * @public
   * <p>Whether the participant ever published to the stage session.</p>
   */
  published?: boolean;
}

/**
 * @public
 */
export interface ListParticipantsResponse {
  /**
   * @public
   * <p>List of the matching participants (summary information only).</p>
   */
  participants: ParticipantSummary[] | undefined;

  /**
   * @public
   * <p>If there are more participants than <code>maxResults</code>, use <code>nextToken</code>
   *          in the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagesRequest {
  /**
   * @public
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stage.</p>
 */
export interface StageSummary {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Stage name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>ID of the active session within the stage.</p>
   */
  activeSessionId?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStagesResponse {
  /**
   * @public
   * <p>List of the matching stages (summary information only).</p>
   */
  stages: StageSummary[] | undefined;

  /**
   * @public
   * <p>If there are more stages than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStageSessionsRequest {
  /**
   * @public
   * <p>Stage ARN.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>The first stage session to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stage session.</p>
 */
export interface StageSessionSummary {
  /**
   * @public
   * <p>ID of the session within the stage.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListStageSessionsResponse {
  /**
   * @public
   * <p>List of matching stage sessions.</p>
   */
  stageSessions: StageSessionSummary[] | undefined;

  /**
   * @public
   * <p>If there are more stage sessions than <code>maxResults</code>, use
   *             <code>nextToken</code> in the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStorageConfigurationsRequest {
  /**
   * @public
   * <p>The first storage configuration to retrieve. This is used for pagination;
   * 	  see the <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of storage configurations to return. Default: your service quota or 100,
   * 	  whichever is smaller.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a storage configuration.</p>
 */
export interface StorageConfigurationSummary {
  /**
   * @public
   * <p>ARN of the storage configuration.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Name of the storage configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   */
  s3?: S3StorageConfiguration;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStorageConfigurationsResponse {
  /**
   * @public
   * <p>List of the matching storage configurations.</p>
   */
  storageConfigurations: StorageConfigurationSummary[] | undefined;

  /**
   * @public
   * <p>If there are more storage configurations than <code>maxResults</code>, use <code>nextToken</code>
   *      in the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCompositionRequest {
  /**
   * @public
   * <p>ARN of the stage to be used for compositing.</p>
   */
  stageArn: string | undefined;

  /**
   * @public
   * <p>Idempotency token.</p>
   */
  idempotencyToken?: string;

  /**
   * @public
   * <p>Layout object to configure composition parameters.</p>
   */
  layout?: LayoutConfiguration;

  /**
   * @public
   * <p>Array of destination configuration.</p>
   */
  destinations: DestinationConfiguration[] | undefined;

  /**
   * @public
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartCompositionResponse {
  /**
   * @public
   * <p>The Composition that was created.</p>
   */
  composition?: Composition;
}

/**
 * @public
 */
export interface StopCompositionRequest {
  /**
   * @public
   * <p>ARN of the Composition.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface StopCompositionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be tagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be added or updated. Array of maps, each of the form
   *             <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints beyond what is documented
   *          there.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to be untagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be removed. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints beyond what is documented
   *          there.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateStageRequest {
  /**
   * @public
   * <p>ARN of the stage to be updated.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Name of the stage to be updated.</p>
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * @public
   * <p>The updated stage.</p>
   */
  stage?: Stage;
}

/**
 * @internal
 */
export const ParticipantTokenFilterSensitiveLog = (obj: ParticipantToken): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateParticipantTokenResponseFilterSensitiveLog = (obj: CreateParticipantTokenResponse): any => ({
  ...obj,
  ...(obj.participantToken && { participantToken: ParticipantTokenFilterSensitiveLog(obj.participantToken) }),
});

/**
 * @internal
 */
export const CreateStageResponseFilterSensitiveLog = (obj: CreateStageResponse): any => ({
  ...obj,
  ...(obj.participantTokens && {
    participantTokens: obj.participantTokens.map((item) => ParticipantTokenFilterSensitiveLog(item)),
  }),
});
