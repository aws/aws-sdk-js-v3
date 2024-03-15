// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IVSRealTimeServiceException as __BaseException } from "./IVSRealTimeServiceException";

/**
 * <p/>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>User does not have sufficient access to perform this action.</p>
   * @public
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
 * <p/>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
   * @public
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
 * <p>Settings for video.</p>
 * @public
 */
export interface Video {
  /**
   * <p>Video-resolution width. Note that the maximum value is determined by <code>width</code>
   *          times <code>height</code>, such that the maximum total pixels is 2073600 (1920x1080 or
   *          1080x1920). Default: 1280.</p>
   * @public
   */
  width?: number;

  /**
   * <p>Video-resolution height. Note that the maximum value is determined by <code>width</code>
   *          times <code>height</code>, such that the maximum total pixels is 2073600 (1920x1080 or
   *          1080x1920). Default: 720.</p>
   * @public
   */
  height?: number;

  /**
   * <p>Video frame rate, in fps. Default: 30.</p>
   * @public
   */
  framerate?: number;

  /**
   * <p>Bitrate for generated output, in bps. Default: 2500000.</p>
   * @public
   */
  bitrate?: number;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationRequest {
  /**
   * <p>Optional name to identify the resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30
   *          fps.</p>
   * @public
   */
  video?: Video;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Settings for transcoding.</p>
 * @public
 */
export interface EncoderConfiguration {
  /**
   * <p>ARN of the EncoderConfiguration resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Optional name to identify the resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30
   *          fps</p>
   * @public
   */
  video?: Video;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationResponse {
  /**
   * <p>The EncoderConfiguration that was created.</p>
   * @public
   */
  encoderConfiguration?: EncoderConfiguration;
}

/**
 * <p/>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>Unexpected error during processing of request.</p>
   * @public
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
 * <p/>
 * @public
 */
export class PendingVerification extends __BaseException {
  readonly name: "PendingVerification" = "PendingVerification";
  readonly $fault: "client" = "client";
  /**
   * <p> Your account is pending verification. </p>
   * @public
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
 * <p/>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Request references a resource which does not exist.</p>
   * @public
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
 * <p/>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Request would cause a service quota to be exceeded.</p>
   * @public
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
 * <p/>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
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
   * <p>ARN of the stage to which this token is scoped.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>Duration (in minutes), after which the token expires. Default: 720 (12 hours).</p>
   * @public
   */
  duration?: number;

  /**
   * <p>Name that can be specified to help identify the token. This can be any UTF-8 encoded
   *          text. <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage. Default:
   *             <code>PUBLISH, SUBSCRIBE</code>.</p>
   * @public
   */
  capabilities?: ParticipantTokenCapability[];
}

/**
 * <p>Object specifying a participant token in a stage.</p>
 *          <p>
 *             <b>Important</b>: Treat tokens as opaque; i.e., do not build functionality
 *          based on token contents. The format of tokens could change in the future.</p>
 * @public
 */
export interface ParticipantToken {
  /**
   * <p>Unique identifier for this participant token, assigned by IVS.</p>
   * @public
   */
  participantId?: string;

  /**
   * <p>The issued client token, encrypted.</p>
   * @public
   */
  token?: string;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>Duration (in minutes), after which the participant token expires. Default: 720 (12
   *          hours).</p>
   * @public
   */
  duration?: number;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   * @public
   */
  capabilities?: ParticipantTokenCapability[];

  /**
   * <p>ISO 8601 timestamp (returned as a string) for when this token expires.</p>
   * @public
   */
  expirationTime?: Date;
}

/**
 * @public
 */
export interface CreateParticipantTokenResponse {
  /**
   * <p>The participant token that was created.</p>
   * @public
   */
  participantToken?: ParticipantToken;
}

/**
 * <p>Object specifying a participant token configuration in a stage.</p>
 * @public
 */
export interface ParticipantTokenConfiguration {
  /**
   * <p>Duration (in minutes), after which the corresponding participant token expires. Default:
   *          720 (12 hours).</p>
   * @public
   */
  duration?: number;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string;

  /**
   * <p>Application-provided attributes to encode into the corresponding participant token and
   *          attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length
   *          of this field is 1 KB total. <i>This field is exposed to all stage participants and
   *             should not be used for personally identifying, confidential, or sensitive
   *             information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   * @public
   */
  capabilities?: ParticipantTokenCapability[];
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * <p>Optional name that can be specified for the stage being created.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Array of participant token configuration objects to attach to the new stage.</p>
   * @public
   */
  participantTokenConfigurations?: ParticipantTokenConfiguration[];

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there. </p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Object specifying a stage.</p>
 * @public
 */
export interface Stage {
  /**
   * <p>Stage ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Stage name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>ID of the active session within the stage.</p>
   * @public
   */
  activeSessionId?: string;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * <p>The stage that was created.</p>
   * @public
   */
  stage?: Stage;

  /**
   * <p>Participant tokens attached to the stage. These correspond to the
   *             <code>participants</code> in the request.</p>
   * @public
   */
  participantTokens?: ParticipantToken[];
}

/**
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 * @public
 */
export interface S3StorageConfiguration {
  /**
   * <p>Location (S3 bucket name) where recorded videos will be stored.  Note that the StorageConfiguration
   * 	  and S3 bucket must be in the same region as the Composition.</p>
   * @public
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateStorageConfigurationRequest {
  /**
   * <p>Storage configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A complex type that contains a storage configuration for where recorded video will be stored.</p>
   * @public
   */
  s3: S3StorageConfiguration | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>A complex type that describes a location where recorded videos will be stored.</p>
 * @public
 */
export interface StorageConfiguration {
  /**
   * <p>ARN of the storage configuration.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Name of the storage configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   * @public
   */
  s3?: S3StorageConfiguration;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStorageConfigurationResponse {
  /**
   * <p>The StorageConfiguration that was created.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration;
}

/**
 * @public
 */
export interface DeleteEncoderConfigurationRequest {
  /**
   * <p>ARN of the EncoderConfiguration.</p>
   * @public
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
   * <p>ARN of the stage to be deleted.</p>
   * @public
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
   * <p>ARN of the storage configuration to be deleted.</p>
   * @public
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
   * <p>ARN of the stage to which the participant is attached.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>Identifier of the participant to be disconnected. This is assigned by IVS and returned
   *          by <a>CreateParticipantToken</a>.</p>
   * @public
   */
  participantId: string | undefined;

  /**
   * <p>Description of why this participant is being disconnected.</p>
   * @public
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
   * <p>ARN of the Composition resource.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Object specifying a channel as a destination.</p>
 * @public
 */
export interface ChannelDestinationConfiguration {
  /**
   * <p>ARN of the channel to use for broadcasting. The channel and stage resources must be in
   *          the same AWS account and region. The channel must be offline (not broadcasting).</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>ARN of the <a>EncoderConfiguration</a> resource. The encoder configuration
   *          and stage resources must be in the same AWS account and region.</p>
   * @public
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
 * <p>An object representing a configuration to record a stage stream.</p>
 * @public
 */
export interface RecordingConfiguration {
  /**
   * <p>The recording format for storing a recording in Amazon S3.</p>
   * @public
   */
  format?: RecordingConfigurationFormat;
}

/**
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * <p>ARN of the <a>StorageConfiguration</a> where recorded videos will be stored.</p>
   * @public
   */
  storageConfigurationArn: string | undefined;

  /**
   * <p>ARNs of the <a>EncoderConfiguration</a> resource. The encoder configuration and stage resources
   * 	  must be in the same AWS account and region. </p>
   * @public
   */
  encoderConfigurationArns: string[] | undefined;

  /**
   * <p>Array of maps, each of the form <code>string:string (key:value)</code>.
   * 	  This is an optional customer specification, currently used only to specify
   * 	  the recording format for storing a recording in Amazon S3.</p>
   * @public
   */
  recordingConfiguration?: RecordingConfiguration;
}

/**
 * <p>Complex data type that defines destination-configuration objects.</p>
 * @public
 */
export interface DestinationConfiguration {
  /**
   * <p>Name that can be specified to help identify the destination.</p>
   * @public
   */
  name?: string;

  /**
   * <p>An IVS channel to be used for broadcasting, for server-side composition. Either a <code>channel</code> or an
   * 	  <code>s3</code> must be specified. </p>
   * @public
   */
  channel?: ChannelDestinationConfiguration;

  /**
   * <p>An S3 storage configuration to be used for recording video data. Either a <code>channel</code>
   * 	  or an <code>s3</code> must be specified.</p>
   * @public
   */
  s3?: S3DestinationConfiguration;
}

/**
 * <p>Complex data type that defines S3Detail objects.</p>
 * @public
 */
export interface S3Detail {
  /**
   * <p>The S3 bucket prefix under which the recording is stored.</p>
   * @public
   */
  recordingPrefix: string | undefined;
}

/**
 * <p>Complex data type that defines destination-detail objects.</p>
 * @public
 */
export interface DestinationDetail {
  /**
   * <p>An S3 detail object to return information about the S3 destination.</p>
   * @public
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
 * <p>Object specifying the status of a Destination.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>Unique identifier for this destination, assigned by IVS.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>State of the Composition Destination.</p>
   * @public
   */
  state: DestinationState | undefined;

  /**
   * <p>UTC time of the destination start. This is an ISO 8601 timestamp; <i>note that
   *             this is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>UTC time of the destination end. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>Configuration used to create this destination.</p>
   * @public
   */
  configuration: DestinationConfiguration | undefined;

  /**
   * <p>Optional details regarding the status of the destination.</p>
   * @public
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
 * <p>Configuration information specific to Grid layout, for server-side composition. See
 *          "Layouts" in <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/server-side-composition.html">Server-Side
 *             Composition</a>.</p>
 * @public
 */
export interface GridConfiguration {
  /**
   * <p>This attribute name identifies the featured slot. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a> is placed in the featured
   *          slot.</p>
   * @public
   */
  featuredParticipantAttribute?: string;

  /**
   * <p>Determines whether to omit participants with stopped video in the composition. Default: <code>false</code>.</p>
   * @public
   */
  omitStoppedVideo?: boolean;

  /**
   * <p>Sets the non-featured participant display mode. Default: <code>VIDEO</code>.</p>
   * @public
   */
  videoAspectRatio?: VideoAspectRatio;

  /**
   * <p>Defines how video fits within the participant tile. When not set,
   * 	  <code>videoFillMode</code> defaults to <code>COVER</code> fill mode for participants in the grid
   * 	  and to <code>CONTAIN</code> fill mode for featured participants.</p>
   * @public
   */
  videoFillMode?: VideoFillMode;

  /**
   * <p>Specifies the spacing between participant tiles in pixels. Default: <code>2</code>.</p>
   * @public
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
 * <p>Configuration information specific to Picture-in-Picture (PiP) layout,
 * 	        for <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/server-side-composition.html">server-side composition</a>.
 * 	  </p>
 * @public
 */
export interface PipConfiguration {
  /**
   * <p>This attribute name identifies the featured slot. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a> is placed in the featured
   *          slot.</p>
   * @public
   */
  featuredParticipantAttribute?: string;

  /**
   * <p>Determines whether to omit participants with stopped video in the composition. Default: <code>false</code>.</p>
   * @public
   */
  omitStoppedVideo?: boolean;

  /**
   * <p>Defines how video fits within the participant tile. Default: <code>COVER</code>.
   * </p>
   * @public
   */
  videoFillMode?: VideoFillMode;

  /**
   * <p>Specifies the spacing between participant tiles in pixels. Default: <code>0</code>.</p>
   * @public
   */
  gridGap?: number;

  /**
   * <p>Identifies the PiP slot. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a>
   * 		 is placed in the PiP slot.</p>
   * @public
   */
  pipParticipantAttribute?: string;

  /**
   * <p>Defines PiP behavior when all participants have left. Default: <code>STATIC</code>.</p>
   * @public
   */
  pipBehavior?: PipBehavior;

  /**
   * <p>Sets the PiP window’s offset position in pixels from the closest edges determined by <code>PipPosition</code>.
   * 	  Default: <code>0</code>.</p>
   * @public
   */
  pipOffset?: number;

  /**
   * <p>Determines the corner position of the PiP window. Default: <code>BOTTOM_RIGHT</code>.</p>
   * @public
   */
  pipPosition?: PipPosition;

  /**
   * <p>Specifies the width of the PiP window in pixels. When this is not set explicitly,
   * 	        <code>pipWidth</code>’s value will be based on the size of the composition and the
   * 			aspect ratio of the participant’s video.</p>
   * @public
   */
  pipWidth?: number;

  /**
   * <p>Specifies the height of the PiP window in pixels. When this is not set explicitly,
   * 	        <code>pipHeight</code>’s value will be based on the size of the composition and the
   * 			aspect ratio of the participant’s video.</p>
   * @public
   */
  pipHeight?: number;
}

/**
 * <p>Configuration information of supported layouts for server-side composition.</p>
 * @public
 */
export interface LayoutConfiguration {
  /**
   * <p>Configuration related to grid layout. Default: Grid layout.</p>
   * @public
   */
  grid?: GridConfiguration;

  /**
   * <p>Configuration related to PiP layout.</p>
   * @public
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
 * <p>Object specifying a Composition resource.</p>
 * @public
 */
export interface Composition {
  /**
   * <p>ARN of the Composition resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>ARN of the stage used as input</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>State of the Composition.</p>
   * @public
   */
  state: CompositionState | undefined;

  /**
   * <p>Layout object to configure composition parameters.</p>
   * @public
   */
  layout: LayoutConfiguration | undefined;

  /**
   * <p>Array of Destination objects. A Composition can contain either one destination
   * 	        (<code>channel</code> or <code>s3</code>) or two (one <code>channel</code> and one <code>s3</code>).</p>
   * @public
   */
  destinations: Destination[] | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>UTC time of the Composition start. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>UTC time of the Composition end. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface GetCompositionResponse {
  /**
   * <p>The Composition that was returned.</p>
   * @public
   */
  composition?: Composition;
}

/**
 * @public
 */
export interface GetEncoderConfigurationRequest {
  /**
   * <p>ARN of the EncoderConfiguration resource.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEncoderConfigurationResponse {
  /**
   * <p>The EncoderConfiguration that was returned.</p>
   * @public
   */
  encoderConfiguration?: EncoderConfiguration;
}

/**
 * @public
 */
export interface GetParticipantRequest {
  /**
   * <p>Stage ARN.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>ID of a session within the stage.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Unique identifier for the participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   * @public
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
 * <p>Object describing a participant that has joined a stage.</p>
 * @public
 */
export interface Participant {
  /**
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   * @public
   */
  participantId?: string;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   * @public
   */
  userId?: string;

  /**
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   * @public
   */
  state?: ParticipantState;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   * @public
   */
  firstJoinTime?: Date;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   * @public
   */
  attributes?: Record<string, string>;

  /**
   * <p>Whether the participant ever published to the stage session.</p>
   * @public
   */
  published?: boolean;

  /**
   * <p>The participant’s Internet Service Provider.</p>
   * @public
   */
  ispName?: string;

  /**
   * <p>The participant’s operating system.</p>
   * @public
   */
  osName?: string;

  /**
   * <p>The participant’s operating system version.</p>
   * @public
   */
  osVersion?: string;

  /**
   * <p>The participant’s browser.</p>
   * @public
   */
  browserName?: string;

  /**
   * <p>The participant’s browser version.</p>
   * @public
   */
  browserVersion?: string;

  /**
   * <p>The participant’s SDK version.</p>
   * @public
   */
  sdkVersion?: string;
}

/**
 * @public
 */
export interface GetParticipantResponse {
  /**
   * <p>The participant that is returned.</p>
   * @public
   */
  participant?: Participant;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * <p>The stage that is returned.</p>
   * @public
   */
  stage?: Stage;
}

/**
 * @public
 */
export interface GetStageSessionRequest {
  /**
   * <p>ARN of the stage for which the information is to be retrieved.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>ID of a session within the stage.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>A stage session begins when the first participant joins a stage and ends after the last
 *          participant leaves the stage. A stage session helps with debugging stages by grouping
 *          events and participants into shorter periods of time (i.e., a session), which is helpful
 *          when stages are used over long periods of time.</p>
 * @public
 */
export interface StageSession {
  /**
   * <p>ID of the session within the stage.</p>
   * @public
   */
  sessionId?: string;

  /**
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface GetStageSessionResponse {
  /**
   * <p>The stage session that is returned.</p>
   * @public
   */
  stageSession?: StageSession;
}

/**
 * @public
 */
export interface GetStorageConfigurationRequest {
  /**
   * <p>ARN of the storage configuration to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStorageConfigurationResponse {
  /**
   * <p>The StorageConfiguration that was returned.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration;
}

/**
 * @public
 */
export interface ListCompositionsRequest {
  /**
   * <p>Filters the Composition list to match the specified Stage ARN.</p>
   * @public
   */
  filterByStageArn?: string;

  /**
   * <p>Filters the Composition list to match the specified EncoderConfiguration attached to at
   *          least one of its output.</p>
   * @public
   */
  filterByEncoderConfigurationArn?: string;

  /**
   * <p>The first Composition to retrieve. This is used for pagination; see the
   *          <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return. Default: 100.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a Destination.</p>
 * @public
 */
export interface DestinationSummary {
  /**
   * <p>Unique identifier for this destination, assigned by IVS.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>State of the Composition Destination.</p>
   * @public
   */
  state: DestinationState | undefined;

  /**
   * <p>UTC time of the destination start. This is an ISO 8601 timestamp; <i>note that
   *             this is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>UTC time of the destination end. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * <p>Summary information about a Composition.</p>
 * @public
 */
export interface CompositionSummary {
  /**
   * <p>ARN of the Composition resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>ARN of the attached stage.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>Array of Destination objects.</p>
   * @public
   */
  destinations: DestinationSummary[] | undefined;

  /**
   * <p>State of the Composition resource.</p>
   * @public
   */
  state: CompositionState | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>UTC time of the Composition start. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>UTC time of the Composition end. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListCompositionsResponse {
  /**
   * <p>List of the matching Compositions (summary information only).</p>
   * @public
   */
  compositions: CompositionSummary[] | undefined;

  /**
   * <p>If there are more compositions than <code>maxResults</code>, use <code>nextToken</code>
   *          in the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEncoderConfigurationsRequest {
  /**
   * <p>The first encoder configuration to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return. Default: 100.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about an EncoderConfiguration.</p>
 * @public
 */
export interface EncoderConfigurationSummary {
  /**
   * <p>ARN of the EncoderConfiguration resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Optional name to identify the resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListEncoderConfigurationsResponse {
  /**
   * <p>List of the matching EncoderConfigurations (summary information only).</p>
   * @public
   */
  encoderConfigurations: EncoderConfigurationSummary[] | undefined;

  /**
   * <p>If there are more encoder configurations than <code>maxResults</code>, use
   *             <code>nextToken</code> in the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListParticipantEventsRequest {
  /**
   * <p>Stage ARN.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>ID of a session within the stage.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Unique identifier for this participant. This is assigned by IVS and returned by <a>CreateParticipantToken</a>.</p>
   * @public
   */
  participantId: string | undefined;

  /**
   * <p>The first participant event to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
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
 * <p>An occurrence during a stage session.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The name of the event.</p>
   * @public
   */
  name?: EventName;

  /**
   * <p>Unique identifier for the participant who triggered the event. This is assigned by
   *          IVS.</p>
   * @public
   */
  participantId?: string;

  /**
   * <p>ISO 8601 timestamp (returned as a string) for when the event occurred.</p>
   * @public
   */
  eventTime?: Date;

  /**
   * <p>Unique identifier for the remote participant. For a subscribe event, this is the
   *          publisher. For a publish or join event, this is null. This is assigned by IVS.</p>
   * @public
   */
  remoteParticipantId?: string;

  /**
   * <p>If the event is an error event, the error code is provided to give insight into the
   *          specific error that occurred. If the event is not an error event, this field is null.
   *             <code>INSUFFICIENT_CAPABILITIES</code> indicates that the participant tried to take an
   *          action that the participant’s token is not allowed to do. For more information about
   *          participant capabilities, see the <code>capabilities</code> field in <a>CreateParticipantToken</a>. <code>QUOTA_EXCEEDED</code> indicates that the
   *          number of participants who want to publish/subscribe to a stage exceeds the quota; for more
   *          information, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">Service Quotas</a>.
   *             <code>PUBLISHER_NOT_FOUND</code> indicates that the participant tried to subscribe to a
   *          publisher that doesn’t exist. </p>
   * @public
   */
  errorCode?: EventErrorCode;
}

/**
 * @public
 */
export interface ListParticipantEventsResponse {
  /**
   * <p>List of the matching events.</p>
   * @public
   */
  events: Event[] | undefined;

  /**
   * <p>If there are more events than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set. </p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListParticipantsRequest {
  /**
   * <p>Stage ARN.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>ID of the session within the stage.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Filters the response list to match the specified user ID. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request. A <code>userId</code> is a
   *          customer-assigned name to help identify the token; this can be used to link a participant
   *          to a user in the customer’s own systems.</p>
   * @public
   */
  filterByUserId?: string;

  /**
   * <p>Filters the response list to only show participants who published during the stage
   *          session. Only one of <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   * @public
   */
  filterByPublished?: boolean;

  /**
   * <p>Filters the response list to only show participants in the specified state. Only one of
   *             <code>filterByUserId</code>, <code>filterByPublished</code>, or
   *             <code>filterByState</code> can be provided per request.</p>
   * @public
   */
  filterByState?: ParticipantState;

  /**
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary object describing a participant that has joined a stage.</p>
 * @public
 */
export interface ParticipantSummary {
  /**
   * <p>Unique identifier for this participant, assigned by IVS.</p>
   * @public
   */
  participantId?: string;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   * @public
   */
  userId?: string;

  /**
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   * @public
   */
  state?: ParticipantState;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   * @public
   */
  firstJoinTime?: Date;

  /**
   * <p>Whether the participant ever published to the stage session.</p>
   * @public
   */
  published?: boolean;
}

/**
 * @public
 */
export interface ListParticipantsResponse {
  /**
   * <p>List of the matching participants (summary information only).</p>
   * @public
   */
  participants: ParticipantSummary[] | undefined;

  /**
   * <p>If there are more participants than <code>maxResults</code>, use <code>nextToken</code>
   *          in the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStagesRequest {
  /**
   * <p>The first stage to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stage.</p>
 * @public
 */
export interface StageSummary {
  /**
   * <p>Stage ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Stage name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>ID of the active session within the stage.</p>
   * @public
   */
  activeSessionId?: string;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStagesResponse {
  /**
   * <p>List of the matching stages (summary information only).</p>
   * @public
   */
  stages: StageSummary[] | undefined;

  /**
   * <p>If there are more stages than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStageSessionsRequest {
  /**
   * <p>Stage ARN.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>The first stage session to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stage session.</p>
 * @public
 */
export interface StageSessionSummary {
  /**
   * <p>ID of the session within the stage.</p>
   * @public
   */
  sessionId?: string;

  /**
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListStageSessionsResponse {
  /**
   * <p>List of matching stage sessions.</p>
   * @public
   */
  stageSessions: StageSessionSummary[] | undefined;

  /**
   * <p>If there are more stage sessions than <code>maxResults</code>, use
   *             <code>nextToken</code> in the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStorageConfigurationsRequest {
  /**
   * <p>The first storage configuration to retrieve. This is used for pagination;
   * 	  see the <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of storage configurations to return. Default: your service quota or 100,
   * 	  whichever is smaller.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a storage configuration.</p>
 * @public
 */
export interface StorageConfigurationSummary {
  /**
   * <p>ARN of the storage configuration.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Name of the storage configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   * @public
   */
  s3?: S3StorageConfiguration;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStorageConfigurationsResponse {
  /**
   * <p>List of the matching storage configurations.</p>
   * @public
   */
  storageConfigurations: StorageConfigurationSummary[] | undefined;

  /**
   * <p>If there are more storage configurations than <code>maxResults</code>, use <code>nextToken</code>
   *      in the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCompositionRequest {
  /**
   * <p>ARN of the stage to be used for compositing.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>Idempotency token.</p>
   * @public
   */
  idempotencyToken?: string;

  /**
   * <p>Layout object to configure composition parameters.</p>
   * @public
   */
  layout?: LayoutConfiguration;

  /**
   * <p>Array of destination configuration.</p>
   * @public
   */
  destinations: DestinationConfiguration[] | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartCompositionResponse {
  /**
   * <p>The Composition that was created.</p>
   * @public
   */
  composition?: Composition;
}

/**
 * @public
 */
export interface StopCompositionRequest {
  /**
   * <p>ARN of the Composition.</p>
   * @public
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
   * <p>The ARN of the resource to be tagged. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated. Array of maps, each of the form
   *             <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints beyond what is documented
   *          there.</p>
   * @public
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
   * <p>The ARN of the resource to be untagged. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints beyond what is documented
   *          there.</p>
   * @public
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
   * <p>ARN of the stage to be updated.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Name of the stage to be updated.</p>
   * @public
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * <p>The updated stage.</p>
   * @public
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
