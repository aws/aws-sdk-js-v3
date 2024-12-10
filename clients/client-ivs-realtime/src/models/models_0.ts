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
  exceptionMessage?: string | undefined;
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
  exceptionMessage?: string | undefined;
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
   * <p>Video-resolution width. This must be an even number. Note that the maximum value is determined by <code>width</code>
   *          times <code>height</code>, such that the maximum total pixels is 2073600 (1920x1080 or
   *          1080x1920). Default: 1280.</p>
   * @public
   */
  width?: number | undefined;

  /**
   * <p>Video-resolution height. This must be an even number. Note that the maximum value is determined by <code>width</code>
   *          times <code>height</code>, such that the maximum total pixels is 2073600 (1920x1080 or
   *          1080x1920). Default: 720.</p>
   * @public
   */
  height?: number | undefined;

  /**
   * <p>Video frame rate, in fps. Default: 30.</p>
   * @public
   */
  framerate?: number | undefined;

  /**
   * <p>Bitrate for generated output, in bps. Default: 2500000.</p>
   * @public
   */
  bitrate?: number | undefined;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationRequest {
  /**
   * <p>Optional name to identify the resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30
   *          fps.</p>
   * @public
   */
  video?: Video | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  name?: string | undefined;

  /**
   * <p>Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30
   *          fps</p>
   * @public
   */
  video?: Video | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationResponse {
  /**
   * <p>The EncoderConfiguration that was created.</p>
   * @public
   */
  encoderConfiguration?: EncoderConfiguration | undefined;
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
  exceptionMessage?: string | undefined;
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
  exceptionMessage?: string | undefined;
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
  exceptionMessage?: string | undefined;
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
  exceptionMessage?: string | undefined;
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
  exceptionMessage?: string | undefined;
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
export const IngestProtocol = {
  RTMP: "RTMP",
  RTMPS: "RTMPS",
} as const;

/**
 * @public
 */
export type IngestProtocol = (typeof IngestProtocol)[keyof typeof IngestProtocol];

/**
 * @public
 */
export interface CreateIngestConfigurationRequest {
  /**
   * <p>Optional name that can be specified for the IngestConfiguration being created.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>ARN of the stage with which the IngestConfiguration is associated.</p>
   * @public
   */
  stageArn?: string | undefined;

  /**
   * <p>Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *       <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Application-provided attributes to store in the IngestConfiguration and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *       <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>Type of ingest protocol that the user employs to broadcast. If this is set to <code>RTMP</code>, <code>insecureIngest</code> must be set to <code>true</code>.</p>
   * @public
   */
  ingestProtocol: IngestProtocol | undefined;

  /**
   * <p>Whether the stage allows insecure RTMP ingest. This must be set to <code>true</code>, if <code>ingestProtocol</code> is set to <code>RTMP</code>. Default: <code>false</code>. </p>
   * @public
   */
  insecureIngest?: boolean | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   * 	 there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestConfigurationState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type IngestConfigurationState = (typeof IngestConfigurationState)[keyof typeof IngestConfigurationState];

/**
 * <p>Object specifying an ingest configuration.</p>
 * @public
 */
export interface IngestConfiguration {
  /**
   * <p>Ingest name</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Ingest configuration ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Type of ingest protocol that the user employs for broadcasting.</p>
   * @public
   */
  ingestProtocol: IngestProtocol | undefined;

  /**
   * <p>Ingest-key value for the RTMP(S) protocol.</p>
   * @public
   */
  streamKey: string | undefined;

  /**
   * <p>ARN of the stage with which the IngestConfiguration is associated.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>ID of the participant within the stage.</p>
   * @public
   */
  participantId: string | undefined;

  /**
   * <p>State of the ingest configuration. It is <code>ACTIVE</code> if a publisher currently is publishing to the stage associated with the ingest configuration.</p>
   * @public
   */
  state: IngestConfigurationState | undefined;

  /**
   * <p>Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *       <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Application-provided attributes to to store in the IngestConfiguration and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *       <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIngestConfigurationResponse {
  /**
   * <p>The IngestConfiguration that was created.</p>
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;
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
  duration?: number | undefined;

  /**
   * <p>Name that can be specified to help identify the token. This can be any UTF-8 encoded
   *          text. <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage. Default:
   *             <code>PUBLISH, SUBSCRIBE</code>.</p>
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;
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
  participantId?: string | undefined;

  /**
   * <p>The issued client token, encrypted.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>Duration (in minutes), after which the participant token expires. Default: 720 (12
   *          hours).</p>
   * @public
   */
  duration?: number | undefined;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;

  /**
   * <p>ISO 8601 timestamp (returned as a string) for when this token expires.</p>
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateParticipantTokenResponse {
  /**
   * <p>The participant token that was created.</p>
   * @public
   */
  participantToken?: ParticipantToken | undefined;
}

/**
 * @public
 * @enum
 */
export const ParticipantRecordingMediaType = {
  AUDIO_ONLY: "AUDIO_ONLY",
  AUDIO_VIDEO: "AUDIO_VIDEO",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ParticipantRecordingMediaType =
  (typeof ParticipantRecordingMediaType)[keyof typeof ParticipantRecordingMediaType];

/**
 * @public
 * @enum
 */
export const ThumbnailRecordingMode = {
  DISABLED: "DISABLED",
  INTERVAL: "INTERVAL",
} as const;

/**
 * @public
 */
export type ThumbnailRecordingMode = (typeof ThumbnailRecordingMode)[keyof typeof ThumbnailRecordingMode];

/**
 * @public
 * @enum
 */
export const ThumbnailStorageType = {
  LATEST: "LATEST",
  SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * @public
 */
export type ThumbnailStorageType = (typeof ThumbnailStorageType)[keyof typeof ThumbnailStorageType];

/**
 * <p>An object representing a configuration of thumbnails for recorded video from an individual participant.</p>
 * @public
 */
export interface ParticipantThumbnailConfiguration {
  /**
   * <p>The targeted thumbnail-generation interval in seconds. This is configurable only if
   *             <code>recordingMode</code> is <code>INTERVAL</code>. Default: 60.</p>
   * @public
   */
  targetIntervalSeconds?: number | undefined;

  /**
   * <p>Indicates the format in which thumbnails are recorded. <code>SEQUENTIAL</code> records all generated thumbnails
   *             in a serial manner, to the media/thumbnails/high directory. <code>LATEST</code> saves the latest thumbnail
   * 	    in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by
   * 	    <code>targetIntervalSeconds</code>. You can enable both <code>SEQUENTIAL</code> and <code>LATEST</code>.
   * 	    Default: <code>SEQUENTIAL</code>.</p>
   * @public
   */
  storage?: ThumbnailStorageType[] | undefined;

  /**
   * <p>Thumbnail recording mode. Default: <code>DISABLED</code>.</p>
   * @public
   */
  recordingMode?: ThumbnailRecordingMode | undefined;
}

/**
 * <p>Object specifying a configuration for individual participant recording.</p>
 * @public
 */
export interface AutoParticipantRecordingConfiguration {
  /**
   * <p>ARN of the <a>StorageConfiguration</a> resource to use for individual participant recording. Default: <code>""</code> (empty string, no storage configuration is specified). Individual participant recording cannot be started unless a storage configuration is specified, when a  <a>Stage</a> is created or updated.</p>
   * @public
   */
  storageConfigurationArn: string | undefined;

  /**
   * <p>Types of media to be recorded. Default: <code>AUDIO_VIDEO</code>.</p>
   * @public
   */
  mediaTypes?: ParticipantRecordingMediaType[] | undefined;

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording
   *             and modify the interval at which thumbnails are generated for the live session.</p>
   * @public
   */
  thumbnailConfiguration?: ParticipantThumbnailConfiguration | undefined;
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
  duration?: number | undefined;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Application-provided attributes to encode into the corresponding participant token and
   *          attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length
   *          of this field is 1 KB total. <i>This field is exposed to all stage participants and
   *             should not be used for personally identifying, confidential, or sensitive
   *             information.</i>
   *          </p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the stage.</p>
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * <p>Optional name that can be specified for the stage being created.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Array of participant token configuration objects to attach to the new stage.</p>
   * @public
   */
  participantTokenConfigurations?: ParticipantTokenConfiguration[] | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Configuration object for individual participant recording, to attach to the new stage.</p>
   * @public
   */
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration | undefined;
}

/**
 * <p>Summary information about various endpoints for a stage. We recommend that you cache these values at stage
 *             creation; the values can be cached for up to 14 days.</p>
 * @public
 */
export interface StageEndpoints {
  /**
   * <p>Events endpoint.</p>
   * @public
   */
  events?: string | undefined;

  /**
   * <p>The endpoint to be used for IVS real-time streaming using the WHIP protocol.</p>
   * @public
   */
  whip?: string | undefined;

  /**
   * <p>The endpoint to be used for IVS real-time streaming using the RTMP protocol.</p>
   * @public
   */
  rtmp?: string | undefined;

  /**
   * <p>The endpoint to be used for IVS real-time streaming using the RTMPS protocol.</p>
   * @public
   */
  rtmps?: string | undefined;
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
  name?: string | undefined;

  /**
   * <p>ID of the active session within the stage.</p>
   * @public
   */
  activeSessionId?: string | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Configuration object for individual participant recording, attached to the stage.</p>
   * @public
   */
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration | undefined;

  /**
   * <p>Summary information about various endpoints for a stage.</p>
   * @public
   */
  endpoints?: StageEndpoints | undefined;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * <p>The stage that was created.</p>
   * @public
   */
  stage?: Stage | undefined;

  /**
   * <p>Participant tokens attached to the stage. These correspond to the
   *             <code>participants</code> in the request.</p>
   * @public
   */
  participantTokens?: ParticipantToken[] | undefined;
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
  name?: string | undefined;

  /**
   * <p>A complex type that contains a storage configuration for where recorded video will be stored.</p>
   * @public
   */
  s3: S3StorageConfiguration | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   * 	 in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  name?: string | undefined;

  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   * @public
   */
  s3?: S3StorageConfiguration | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateStorageConfigurationResponse {
  /**
   * <p>The StorageConfiguration that was created.</p>
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
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
export interface DeleteIngestConfigurationRequest {
  /**
   * <p>ARN of the IngestConfiguration.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Optional field to force deletion of the IngestConfiguration. If this is set to <code>true</code> when a participant is actively publishing, the participant is disconnected from the stage, followed by deletion of the IngestConfiguration. Default: <code>false</code>.</p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteIngestConfigurationResponse {}

/**
 * @public
 */
export interface DeletePublicKeyRequest {
  /**
   * <p>ARN of the public key to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePublicKeyResponse {}

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
   * <p>Identifier of the participant to be disconnected. IVS assigns this; it is returned
   *             by <a>CreateParticipantToken</a> (for streams using WebRTC ingest) or <a>CreateIngestConfiguration</a> (for
   * 	    streams using RTMP ingest).</p>
   * @public
   */
  participantId: string | undefined;

  /**
   * <p>Description of why this participant is being disconnected.</p>
   * @public
   */
  reason?: string | undefined;
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
  encoderConfigurationArn?: string | undefined;
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
  format?: RecordingConfigurationFormat | undefined;
}

/**
 * <p>An object representing a configuration of thumbnails for recorded video for a <a>Composition</a>.</p>
 * @public
 */
export interface CompositionThumbnailConfiguration {
  /**
   * <p>The targeted thumbnail-generation interval in seconds. Default: 60.</p>
   * @public
   */
  targetIntervalSeconds?: number | undefined;

  /**
   * <p>Indicates the format in which thumbnails are recorded. <code>SEQUENTIAL</code> records all generated thumbnails
   *             in a serial manner, to the media/thumbnails/(width)x(height) directory, where (width) and (height) are the width
   * 	    and height of the thumbnail. <code>LATEST</code> saves the latest thumbnail in
   * 	    media/latest_thumbnail/(width)x(height)/thumb.jpg and overwrites it at the interval specified by
   * 	    <code>targetIntervalSeconds</code>.  You can enable both <code>SEQUENTIAL</code> and <code>LATEST</code>.
   * 	    Default: <code>SEQUENTIAL</code>.</p>
   * @public
   */
  storage?: ThumbnailStorageType[] | undefined;
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
  recordingConfiguration?: RecordingConfiguration | undefined;

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a <a>Composition</a>
   *             and modify the interval at which thumbnails are generated for the live session.</p>
   * @public
   */
  thumbnailConfigurations?: CompositionThumbnailConfiguration[] | undefined;
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
  name?: string | undefined;

  /**
   * <p>An IVS channel to be used for broadcasting, for server-side composition. Either a <code>channel</code> or an
   * 	  <code>s3</code> must be specified. </p>
   * @public
   */
  channel?: ChannelDestinationConfiguration | undefined;

  /**
   * <p>An S3 storage configuration to be used for recording video data. Either a <code>channel</code>
   * 	  or an <code>s3</code> must be specified.</p>
   * @public
   */
  s3?: S3DestinationConfiguration | undefined;
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
  s3?: S3Detail | undefined;
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
  startTime?: Date | undefined;

  /**
   * <p>UTC time of the destination end. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Configuration used to create this destination.</p>
   * @public
   */
  configuration: DestinationConfiguration | undefined;

  /**
   * <p>Optional details regarding the status of the destination.</p>
   * @public
   */
  detail?: DestinationDetail | undefined;
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
   *          slot. Default: <code>""</code> (no featured participant).</p>
   * @public
   */
  featuredParticipantAttribute?: string | undefined;

  /**
   * <p>Determines whether to omit participants with stopped video in the composition. Default: <code>false</code>.</p>
   * @public
   */
  omitStoppedVideo?: boolean | undefined;

  /**
   * <p>Sets the non-featured participant display mode, to control the aspect ratio of video tiles. <code>VIDEO</code> is 16:9, <code>SQUARE</code> is 1:1, and <code>PORTRAIT</code> is 3:4. Default: <code>VIDEO</code>.</p>
   * @public
   */
  videoAspectRatio?: VideoAspectRatio | undefined;

  /**
   * <p>Defines how video content fits within the participant tile: <code>FILL</code> (stretched), <code>COVER</code> (cropped),
   *       or <code>CONTAIN</code> (letterboxed). When not set,
   *       <code>videoFillMode</code> defaults to <code>COVER</code> fill mode for participants in the grid
   *       and to <code>CONTAIN</code> fill mode for featured participants.</p>
   * @public
   */
  videoFillMode?: VideoFillMode | undefined;

  /**
   * <p>Specifies the spacing between participant tiles in pixels. Default: <code>2</code>.</p>
   * @public
   */
  gridGap?: number | undefined;
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
   *          slot. Default: <code>""</code> (no featured participant).</p>
   * @public
   */
  featuredParticipantAttribute?: string | undefined;

  /**
   * <p>Determines whether to omit participants with stopped video in the composition. Default: <code>false</code>.</p>
   * @public
   */
  omitStoppedVideo?: boolean | undefined;

  /**
   * <p>Defines how video content fits within the participant tile: <code>FILL</code> (stretched),
   * 	  <code>COVER</code> (cropped), or <code>CONTAIN</code> (letterboxed). Default: <code>COVER</code>.</p>
   * @public
   */
  videoFillMode?: VideoFillMode | undefined;

  /**
   * <p>Specifies the spacing between participant tiles in pixels. Default: <code>0</code>.</p>
   * @public
   */
  gridGap?: number | undefined;

  /**
   * <p>Specifies the participant for the PiP window. A participant with this attribute set
   *          to <code>"true"</code> (as a string value) in <a>ParticipantTokenConfiguration</a>
   * 	 is placed in the PiP slot. Default: <code>""</code> (no PiP participant).</p>
   * @public
   */
  pipParticipantAttribute?: string | undefined;

  /**
   * <p>Defines PiP behavior when all participants have left: <code>STATIC</code> (maintains original position/size) or <code>DYNAMIC</code> (expands to full composition). Default: <code>STATIC</code>.</p>
   * @public
   */
  pipBehavior?: PipBehavior | undefined;

  /**
   * <p>Sets the PiP window’s offset position in pixels from the closest edges determined by <code>PipPosition</code>.
   * 	  Default: <code>0</code>.</p>
   * @public
   */
  pipOffset?: number | undefined;

  /**
   * <p>Determines the corner position of the PiP window. Default: <code>BOTTOM_RIGHT</code>.</p>
   * @public
   */
  pipPosition?: PipPosition | undefined;

  /**
   * <p>Specifies the width of the PiP window in pixels. When this is not set explicitly,
   * 	        <code>pipWidth</code>’s value will be based on the size of the composition and the
   * 			aspect ratio of the participant’s video.</p>
   * @public
   */
  pipWidth?: number | undefined;

  /**
   * <p>Specifies the height of the PiP window in pixels. When this is not set explicitly,
   * 	        <code>pipHeight</code>’s value will be based on the size of the composition and the
   * 			aspect ratio of the participant’s video.</p>
   * @public
   */
  pipHeight?: number | undefined;
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
  grid?: GridConfiguration | undefined;

  /**
   * <p>Configuration related to PiP layout.</p>
   * @public
   */
  pip?: PipConfiguration | undefined;
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
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>UTC time of the Composition start. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>UTC time of the Composition end. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCompositionResponse {
  /**
   * <p>The Composition that was returned.</p>
   * @public
   */
  composition?: Composition | undefined;
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
  encoderConfiguration?: EncoderConfiguration | undefined;
}

/**
 * @public
 */
export interface GetIngestConfigurationRequest {
  /**
   * <p>ARN of the ingest for which the information is to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetIngestConfigurationResponse {
  /**
   * <p>The IngestConfiguration that was returned.</p>
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;
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
export const ParticipantProtocol = {
  RTMP: "RTMP",
  RTMPS: "RTMPS",
  UNKNOWN: "UNKNOWN",
  WHIP: "WHIP",
} as const;

/**
 * @public
 */
export type ParticipantProtocol = (typeof ParticipantProtocol)[keyof typeof ParticipantProtocol];

/**
 * @public
 * @enum
 */
export const ParticipantRecordingState = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  FAILED: "FAILED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type ParticipantRecordingState = (typeof ParticipantRecordingState)[keyof typeof ParticipantRecordingState];

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
  participantId?: string | undefined;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   * @public
   */
  state?: ParticipantState | undefined;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   * @public
   */
  firstJoinTime?: Date | undefined;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a stage. Map keys
   *          and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>Whether the participant ever published to the stage session.</p>
   * @public
   */
  published?: boolean | undefined;

  /**
   * <p>The participant’s Internet Service Provider.</p>
   * @public
   */
  ispName?: string | undefined;

  /**
   * <p>The participant’s operating system.</p>
   * @public
   */
  osName?: string | undefined;

  /**
   * <p>The participant’s operating system version.</p>
   * @public
   */
  osVersion?: string | undefined;

  /**
   * <p>The participant’s browser.</p>
   * @public
   */
  browserName?: string | undefined;

  /**
   * <p>The participant’s browser version.</p>
   * @public
   */
  browserVersion?: string | undefined;

  /**
   * <p>The participant’s SDK version.</p>
   * @public
   */
  sdkVersion?: string | undefined;

  /**
   * <p>Name of the S3 bucket to where the participant is being recorded, if individual participant recording is enabled, or <code>""</code> (empty string), if recording is not enabled.</p>
   * @public
   */
  recordingS3BucketName?: string | undefined;

  /**
   * <p>S3 prefix of the S3 bucket where the participant is being recorded, if individual participant recording is enabled, or <code>""</code> (empty string), if recording is not enabled.</p>
   * @public
   */
  recordingS3Prefix?: string | undefined;

  /**
   * <p>The participant’s recording state.</p>
   * @public
   */
  recordingState?: ParticipantRecordingState | undefined;

  /**
   * <p>Type of ingest protocol that the participant employs for broadcasting.</p>
   * @public
   */
  protocol?: ParticipantProtocol | undefined;
}

/**
 * @public
 */
export interface GetParticipantResponse {
  /**
   * <p>The participant that is returned.</p>
   * @public
   */
  participant?: Participant | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * <p>ARN of the public key for which the information is to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Object specifying a public key used to sign stage participant tokens.</p>
 * @public
 */
export interface PublicKey {
  /**
   * <p>Public key ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Public key name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Public key material.</p>
   * @public
   */
  publicKeyMaterial?: string | undefined;

  /**
   * <p>The public key fingerprint, a short string used to identify or verify the full public key.</p>
   * @public
   */
  fingerprint?: string | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResponse {
  /**
   * <p>The public key that is returned.</p>
   * @public
   */
  publicKey?: PublicKey | undefined;
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
  stage?: Stage | undefined;
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
  sessionId?: string | undefined;

  /**
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetStageSessionResponse {
  /**
   * <p>The stage session that is returned.</p>
   * @public
   */
  stageSession?: StageSession | undefined;
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
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface ImportPublicKeyRequest {
  /**
   * <p>The content of the public key to be imported.</p>
   * @public
   */
  publicKeyMaterial: string | undefined;

  /**
   * <p>Name of the public key to be imported.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportPublicKeyResponse {
  /**
   * <p>The public key that was imported.</p>
   * @public
   */
  publicKey?: PublicKey | undefined;
}

/**
 * @public
 */
export interface ListCompositionsRequest {
  /**
   * <p>Filters the Composition list to match the specified Stage ARN.</p>
   * @public
   */
  filterByStageArn?: string | undefined;

  /**
   * <p>Filters the Composition list to match the specified EncoderConfiguration attached to at
   *          least one of its output.</p>
   * @public
   */
  filterByEncoderConfigurationArn?: string | undefined;

  /**
   * <p>The first Composition to retrieve. This is used for pagination; see the
   *          <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 100.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  startTime?: Date | undefined;

  /**
   * <p>UTC time of the destination end. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date | undefined;
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
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>UTC time of the Composition start. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>UTC time of the Composition end. This is an ISO 8601 timestamp; <i>note that
   *          this is returned as a string</i>.</p>
   * @public
   */
  endTime?: Date | undefined;
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
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 100.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  name?: string | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestConfigurationsRequest {
  /**
   * <p>Filters the response list to match the specified stage ARN. Only one filter (by stage ARN or by state) can be used at a time.</p>
   * @public
   */
  filterByStageArn?: string | undefined;

  /**
   * <p>Filters the response list to match the specified state. Only one filter (by stage ARN or by state) can be used at a time.</p>
   * @public
   */
  filterByState?: IngestConfigurationState | undefined;

  /**
   * <p>The first IngestConfiguration to retrieve. This is used for pagination; see the <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about an IngestConfiguration.</p>
 * @public
 */
export interface IngestConfigurationSummary {
  /**
   * <p>Ingest name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Ingest configuration ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Type of ingest protocol that the user employs for broadcasting.</p>
   * @public
   */
  ingestProtocol: IngestProtocol | undefined;

  /**
   * <p>ARN of the stage with which the IngestConfiguration is associated.</p>
   * @public
   */
  stageArn: string | undefined;

  /**
   * <p>ID of the participant within the stage.</p>
   * @public
   */
  participantId: string | undefined;

  /**
   * <p>State of the ingest configuration. It is <code>ACTIVE</code> if a publisher currently is publishing to the stage associated with the ingest configuration.</p>
   * @public
   */
  state: IngestConfigurationState | undefined;

  /**
   * <p>Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *       <i>This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.</i>
   *          </p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestConfigurationsResponse {
  /**
   * <p>List of the matching ingest configurations (summary information only).</p>
   * @public
   */
  ingestConfigurations: IngestConfigurationSummary[] | undefined;

  /**
   * <p>If there are more IngestConfigurations than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EventErrorCode = {
  BITRATE_EXCEEDED: "BITRATE_EXCEEDED",
  B_FRAME_PRESENT: "B_FRAME_PRESENT",
  INSUFFICIENT_CAPABILITIES: "INSUFFICIENT_CAPABILITIES",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  INVALID_AUDIO_CODEC: "INVALID_AUDIO_CODEC",
  INVALID_INPUT: "INVALID_INPUT",
  INVALID_PROTOCOL: "INVALID_PROTOCOL",
  INVALID_STREAM_KEY: "INVALID_STREAM_KEY",
  INVALID_VIDEO_CODEC: "INVALID_VIDEO_CODEC",
  PUBLISHER_NOT_FOUND: "PUBLISHER_NOT_FOUND",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
  RESOLUTION_EXCEEDED: "RESOLUTION_EXCEEDED",
  REUSE_OF_STREAM_KEY: "REUSE_OF_STREAM_KEY",
  STREAM_DURATION_EXCEEDED: "STREAM_DURATION_EXCEEDED",
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
  name?: EventName | undefined;

  /**
   * <p>Unique identifier for the participant who triggered the event. This is assigned by
   *          IVS.</p>
   * @public
   */
  participantId?: string | undefined;

  /**
   * <p>ISO 8601 timestamp (returned as a string) for when the event occurred.</p>
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * <p>Unique identifier for the remote participant. For a subscribe event, this is the
   *          publisher. For a publish or join event, this is null. This is assigned by IVS.</p>
   * @public
   */
  remoteParticipantId?: string | undefined;

  /**
   * <p>If the event is an error event, the error code is provided to give insight into the
   *          specific error that occurred. If the event is not an error event, this field is null.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>B_FRAME_PRESENT</code> —
   * 		     The participant's stream includes B-frames.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html">
   * 		     IVS RTMP Publishing</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BITRATE_EXCEEDED</code> —
   * 		     The participant exceeded the maximum supported bitrate.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">
   * 		     Service Quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSUFFICIENT_CAPABILITIES</code> —
   * 		     The participant tried to take an action
   * 		     that the participant’s token is not allowed to do. For details on participant capabilities, see
   * 		     the <code>capabilities</code> field in <a>CreateParticipantToken</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_SERVER_EXCEPTION</code> —
   * 		     The participant failed to publish to the stage due to an internal server error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_AUDIO_CODEC</code> —
   * 		     The participant is using an invalid audio codec.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-stream-ingest.html">
   * 		     Stream Ingest</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_INPUT</code> —
   * 		     The participant is using an invalid input stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_PROTOCOL</code> —
   * 		     The participant's IngestConfiguration resource is configured for RTMPS but they tried streaming with RTMP.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html">
   * 		     IVS RTMP Publishing</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_STREAM_KEY</code> —
   * 		     The participant is using an invalid stream key.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html">
   * 		     IVS RTMP Publishing</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_VIDEO_CODEC</code> —
   * 		     The participant is using an invalid video codec.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-stream-ingest.html">
   * 		     Stream Ingest</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLISHER_NOT_FOUND</code> —
   * 		     The participant tried to subscribe to a publisher that doesn’t exist.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUOTA_EXCEEDED</code> —
   * 		     The number of participants who want to publish/subscribe to a stage exceeds the quota.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">
   * 		     Service Quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLUTION_EXCEEDED</code> —
   * 		     The participant exceeded the maximum supported resolution.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">
   * 		     Service Quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REUSE_OF_STREAM_KEY</code> —
   * 		     The participant tried to use a stream key that is associated with another active stage session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STREAM_DURATION_EXCEEDED</code> —
   * 		     The participant exceeded the maximum allowed stream duration.
   * 		     For details, see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html">
   * 		     Service Quotas</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  errorCode?: EventErrorCode | undefined;
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
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ParticipantRecordingFilterByRecordingState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type ParticipantRecordingFilterByRecordingState =
  (typeof ParticipantRecordingFilterByRecordingState)[keyof typeof ParticipantRecordingFilterByRecordingState];

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
   * <p>Filters the response list to match the specified user ID.
   *             Only one of <code>filterByUserId</code>, <code>filterByPublished</code>,
   *             <code>filterByState</code>, or <code>filterByRecordingState</code> can be provided per request.
   * 	    A <code>userId</code> is a
   *             customer-assigned name to help identify the token; this can be used to link a participant
   *             to a user in the customer’s own systems.</p>
   * @public
   */
  filterByUserId?: string | undefined;

  /**
   * <p>Filters the response list to only show participants who published during the stage session.
   *             Only one of <code>filterByUserId</code>, <code>filterByPublished</code>,
   *             <code>filterByState</code>, or <code>filterByRecordingState</code> can be provided per request.</p>
   * @public
   */
  filterByPublished?: boolean | undefined;

  /**
   * <p>Filters the response list to only show participants in the specified state.
   *             Only one of <code>filterByUserId</code>, <code>filterByPublished</code>,
   *             <code>filterByState</code>, or <code>filterByRecordingState</code> can be provided per request.</p>
   * @public
   */
  filterByState?: ParticipantState | undefined;

  /**
   * <p>The first participant to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filters the response list to only show participants with the specified recording state.
   *             Only one of <code>filterByUserId</code>, <code>filterByPublished</code>,
   *             <code>filterByState</code>, or <code>filterByRecordingState</code> can be provided per request.</p>
   * @public
   */
  filterByRecordingState?: ParticipantRecordingFilterByRecordingState | undefined;
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
  participantId?: string | undefined;

  /**
   * <p>Customer-assigned name to help identify the token; this can be used to link a
   *          participant to a user in the customer’s own systems. This can be any UTF-8 encoded text.
   *             <i>This field is exposed to all stage participants and should not be used for
   *             personally identifying, confidential, or sensitive information</i>.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Whether the participant is connected to or disconnected from the stage.</p>
   * @public
   */
  state?: ParticipantState | undefined;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the participant first joined the stage
   *          session.</p>
   * @public
   */
  firstJoinTime?: Date | undefined;

  /**
   * <p>Whether the participant ever published to the stage session.</p>
   * @public
   */
  published?: boolean | undefined;

  /**
   * <p>The participant’s recording state.</p>
   * @public
   */
  recordingState?: ParticipantRecordingState | undefined;
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
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * <p>The first public key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about a public key.</p>
 * @public
 */
export interface PublicKeySummary {
  /**
   * <p>Public key ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Public key name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysResponse {
  /**
   * <p>List of the matching public keys (summary information only).</p>
   * @public
   */
  publicKeys: PublicKeySummary[] | undefined;

  /**
   * <p>If there are more public keys than <code>maxResults</code>, use <code>nextToken</code> in the request to get the next set.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  name?: string | undefined;

  /**
   * <p>ID of the active session within the stage.</p>
   * @public
   */
  activeSessionId?: string | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  sessionId?: string | undefined;

  /**
   * <p> ISO 8601 timestamp (returned as a string) when this stage session began.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if
   *          the stage is active.</p>
   * @public
   */
  endTime?: Date | undefined;
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
  nextToken?: string | undefined;
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
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of storage configurations to return. Default: your service quota or 100,
   * 	  whichever is smaller.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  name?: string | undefined;

  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   * @public
   */
  s3?: S3StorageConfiguration | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   * 	 limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  nextToken?: string | undefined;
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
  idempotencyToken?: string | undefined;

  /**
   * <p>Layout object to configure composition parameters.</p>
   * @public
   */
  layout?: LayoutConfiguration | undefined;

  /**
   * <p>Array of destination configuration.</p>
   * @public
   */
  destinations: DestinationConfiguration[] | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCompositionResponse {
  /**
   * <p>The Composition that was created.</p>
   * @public
   */
  composition?: Composition | undefined;
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
   *          <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
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
   *          (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
   *          in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented
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
export interface UpdateIngestConfigurationRequest {
  /**
   * <p>ARN of the IngestConfiguration, for which the related stage ARN needs to be updated.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Stage ARN that needs to be updated.</p>
   * @public
   */
  stageArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIngestConfigurationResponse {
  /**
   * <p>The updated IngestConfiguration.</p>
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;
}

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
  name?: string | undefined;

  /**
   * <p>Configuration object for individual participant recording, to attach to the stage. Note that this cannot be updated while recording is active.</p>
   * @public
   */
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * <p>The updated stage.</p>
   * @public
   */
  stage?: Stage | undefined;
}

/**
 * @internal
 */
export const IngestConfigurationFilterSensitiveLog = (obj: IngestConfiguration): any => ({
  ...obj,
  ...(obj.streamKey && { streamKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateIngestConfigurationResponseFilterSensitiveLog = (obj: CreateIngestConfigurationResponse): any => ({
  ...obj,
  ...(obj.ingestConfiguration && {
    ingestConfiguration: IngestConfigurationFilterSensitiveLog(obj.ingestConfiguration),
  }),
});

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

/**
 * @internal
 */
export const GetIngestConfigurationResponseFilterSensitiveLog = (obj: GetIngestConfigurationResponse): any => ({
  ...obj,
  ...(obj.ingestConfiguration && {
    ingestConfiguration: IngestConfigurationFilterSensitiveLog(obj.ingestConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateIngestConfigurationResponseFilterSensitiveLog = (obj: UpdateIngestConfigurationResponse): any => ({
  ...obj,
  ...(obj.ingestConfiguration && {
    ingestConfiguration: IngestConfigurationFilterSensitiveLog(obj.ingestConfiguration),
  }),
});
