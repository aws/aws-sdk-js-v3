// smithy-typescript generated code
import type {
  CompositionState,
  DestinationState,
  EventErrorCode,
  EventName,
  IngestConfigurationState,
  IngestProtocol,
  ParticipantProtocol,
  ParticipantRecordingFilterByRecordingState,
  ParticipantRecordingMediaType,
  ParticipantRecordingState,
  ParticipantState,
  ParticipantTokenCapability,
  PipBehavior,
  PipPosition,
  RecordingConfigurationFormat,
  ReplicationState,
  ReplicationType,
  ThumbnailRecordingMode,
  ThumbnailStorageType,
  VideoAspectRatio,
  VideoFillMode,
} from "./enums";

/**
 * Settings for video.
 *
 * @public
 */
export interface Video {
  /**
   * Video-resolution width. This must be an even number. Note that the maximum value is determined by `width` times `height`, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.
   *
   * @public
   */
  width?: number | undefined;

  /**
   * Video-resolution height. This must be an even number. Note that the maximum value is determined by `width` times `height`, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.
   *
   * @public
   */
  height?: number | undefined;

  /**
   * Video frame rate, in fps. Default: 30.
   *
   * @public
   */
  framerate?: number | undefined;

  /**
   * Bitrate for generated output, in bps. Default: 2500000.
   *
   * @public
   */
  bitrate?: number | undefined;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationRequest {
  /**
   * Optional name to identify the resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps.
   *
   * @public
   */
  video?: Video | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Settings for transcoding.
 *
 * @public
 */
export interface EncoderConfiguration {
  /**
   * ARN of the EncoderConfiguration resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Optional name to identify the resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps
   *
   * @public
   */
  video?: Video | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEncoderConfigurationResponse {
  /**
   * The EncoderConfiguration that was created.
   *
   * @public
   */
  encoderConfiguration?: EncoderConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateIngestConfigurationRequest {
  /**
   * Optional name that can be specified for the IngestConfiguration being created.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * ARN of the stage with which the IngestConfiguration is associated.
   *
   * @public
   */
  stageArn?: string | undefined;

  /**
   * Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Application-provided attributes to store in the IngestConfiguration and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Type of ingest protocol that the user employs to broadcast. If this is set to `RTMP`, `insecureIngest` must be set to `true`.
   *
   * @public
   */
  ingestProtocol: IngestProtocol | undefined;

  /**
   * Whether the stage allows insecure RTMP ingest. This must be set to `true`, if `ingestProtocol` is set to `RTMP`. Default: `false`.
   *
   * @public
   */
  insecureIngest?: boolean | undefined;

  /**
   * Indicates whether redundant ingest is enabled for the ingest configuration. Default: `false`.
   *
   * @public
   */
  redundantIngest?: boolean | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An object representing a redundant ingest credential.
 *
 * @public
 */
export interface RedundantIngestCredential {
  /**
   * ID of the participant within the stage.
   *
   * @public
   */
  participantId?: string | undefined;

  /**
   * Ingest-key value.
   *
   * @public
   */
  streamKey?: string | undefined;
}

/**
 * Object specifying an ingest configuration.
 *
 * @public
 */
export interface IngestConfiguration {
  /**
   * Ingest name
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Ingest configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Type of ingest protocol that the user employs for broadcasting.
   *
   * @public
   */
  ingestProtocol: IngestProtocol | undefined;

  /**
   * Ingest-key value for the RTMP(S) protocol.
   *
   * @public
   */
  streamKey: string | undefined;

  /**
   * ARN of the stage with which the IngestConfiguration is associated.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * ID of the participant within the stage.
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * State of the ingest configuration. It is `ACTIVE` if a publisher currently is publishing to the stage associated with the ingest configuration.
   *
   * @public
   */
  state: IngestConfigurationState | undefined;

  /**
   * Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Indicates whether redundant ingest is enabled for the ingest configuration.
   *
   * @public
   */
  redundantIngest?: boolean | undefined;

  /**
   * A list of redundant ingest credentials, present only when `redundantIngest` is set to `true`. See [Redundant Ingest](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html#redundant-ingest) in *IVS RTMP Publishing* for details.
   *
   * @public
   */
  redundantIngestCredentials?: RedundantIngestCredential[] | undefined;

  /**
   * Application-provided attributes to to store in the IngestConfiguration and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIngestConfigurationResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * The IngestConfiguration that was created.
   *
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateParticipantTokenRequest {
  /**
   * ARN of the stage to which this token is scoped.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * Duration (in minutes), after which the token expires. Default: 720 (12 hours).
   *
   * @public
   */
  duration?: number | undefined;

  /**
   * Name that can be specified to help identify the token. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Set of capabilities that the user is allowed to perform in the stage. Default: `PUBLISH, SUBSCRIBE`.
   *
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;
}

/**
 * Object specifying a participant token in a stage.
 *
 * **Important**: Treat tokens as opaque; i.e., do not build functionality based on token contents. The format of tokens could change in the future.
 *
 * @public
 */
export interface ParticipantToken {
  /**
   * Unique identifier for this participant token, assigned by IVS.
   *
   * @public
   */
  participantId?: string | undefined;

  /**
   * The issued client token, encrypted.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Duration (in minutes), after which the participant token expires. Default: 720 (12 hours).
   *
   * @public
   */
  duration?: number | undefined;

  /**
   * Set of capabilities that the user is allowed to perform in the stage.
   *
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) for when this token expires.
   *
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateParticipantTokenResponse {
  /**
   * The participant token that was created.
   *
   * @public
   */
  participantToken?: ParticipantToken | undefined;
}

/**
 * An object representing a configuration of participant HLS recordings for individual participant recording.
 *
 * @public
 */
export interface ParticipantRecordingHlsConfiguration {
  /**
   * Defines the target duration for recorded segments generated when recording a stage participant. Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.
   *
   * @public
   */
  targetSegmentDurationSeconds?: number | undefined;
}

/**
 * An object representing a configuration of thumbnails for recorded video from an individual participant.
 *
 * @public
 */
export interface ParticipantThumbnailConfiguration {
  /**
   * The targeted thumbnail-generation interval in seconds. This is configurable only if `recordingMode` is `INTERVAL`. Default: 60.
   *
   * @public
   */
  targetIntervalSeconds?: number | undefined;

  /**
   * Indicates the format in which thumbnails are recorded. `SEQUENTIAL` records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. `LATEST` saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by `targetIntervalSeconds`. You can enable both `SEQUENTIAL` and `LATEST`. Default: `SEQUENTIAL`.
   *
   * @public
   */
  storage?: ThumbnailStorageType[] | undefined;

  /**
   * Thumbnail recording mode. Default: `DISABLED`.
   *
   * @public
   */
  recordingMode?: ThumbnailRecordingMode | undefined;
}

/**
 * Object specifying a configuration for individual participant recording.
 *
 * @public
 */
export interface AutoParticipantRecordingConfiguration {
  /**
   * ARN of the StorageConfiguration resource to use for individual participant recording. Default: `""` (empty string, no storage configuration is specified). Individual participant recording cannot be started unless a storage configuration is specified, when a Stage is created or updated. To disable individual participant recording, set this to `""`; other fields in this object will get reset to their defaults when sending `""`.
   *
   * @public
   */
  storageConfigurationArn: string | undefined;

  /**
   * Types of media to be recorded. Default: `AUDIO_VIDEO`.
   *
   * @public
   */
  mediaTypes?: ParticipantRecordingMediaType[] | undefined;

  /**
   * A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.
   *
   * @public
   */
  thumbnailConfiguration?: ParticipantThumbnailConfiguration | undefined;

  /**
   * If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together.
   *
   * The default value is 0, which disables merging.
   *
   * @public
   */
  recordingReconnectWindowSeconds?: number | undefined;

  /**
   * HLS configuration object for individual participant recording.
   *
   * @public
   */
  hlsConfiguration?: ParticipantRecordingHlsConfiguration | undefined;

  /**
   * Optional field to disable replica participant recording. If this is set to `false` when a participant is a replica, replica participants are not recorded. Default: `true`.
   *
   * @public
   */
  recordParticipantReplicas?: boolean | undefined;
}

/**
 * Object specifying a participant token configuration in a stage.
 *
 * @public
 */
export interface ParticipantTokenConfiguration {
  /**
   * Duration (in minutes), after which the corresponding participant token expires. Default: 720 (12 hours).
   *
   * @public
   */
  duration?: number | undefined;

  /**
   * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Application-provided attributes to encode into the corresponding participant token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Set of capabilities that the user is allowed to perform in the stage.
   *
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;
}

/**
 * @public
 */
export interface CreateStageRequest {
  /**
   * Optional name that can be specified for the stage being created.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Array of participant token configuration objects to attach to the new stage.
   *
   * @public
   */
  participantTokenConfigurations?: ParticipantTokenConfiguration[] | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Configuration object for individual participant recording, to attach to the new stage.
   *
   * @public
   */
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration | undefined;
}

/**
 * Summary information about various endpoints for a stage. We recommend that you cache these values at stage creation; the values can be cached for up to 14 days.
 *
 * @public
 */
export interface StageEndpoints {
  /**
   * Events endpoint.
   *
   * @public
   */
  events?: string | undefined;

  /**
   * The endpoint to be used for IVS real-time streaming using the WHIP protocol.
   *
   * @public
   */
  whip?: string | undefined;

  /**
   * The endpoint to be used for IVS real-time streaming using the RTMP protocol.
   *
   * @public
   */
  rtmp?: string | undefined;

  /**
   * The endpoint to be used for IVS real-time streaming using the RTMPS protocol.
   *
   * @public
   */
  rtmps?: string | undefined;
}

/**
 * Object specifying a stage.
 *
 * @public
 */
export interface Stage {
  /**
   * Stage ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Stage name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * ID of the active session within the stage.
   *
   * @public
   */
  activeSessionId?: string | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Configuration object for individual participant recording, attached to the stage.
   *
   * @public
   */
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration | undefined;

  /**
   * Summary information about various endpoints for a stage.
   *
   * @public
   */
  endpoints?: StageEndpoints | undefined;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * The stage that was created.
   *
   * @public
   */
  stage?: Stage | undefined;

  /**
   * Participant tokens attached to the stage. These correspond to the `participants` in the request.
   *
   * @public
   */
  participantTokens?: ParticipantToken[] | undefined;
}

/**
 * A complex type that describes an S3 location where recorded videos will be stored.
 *
 * @public
 */
export interface S3StorageConfiguration {
  /**
   * Location (S3 bucket name) where recorded videos will be stored. Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * @public
 */
export interface CreateStorageConfigurationRequest {
  /**
   * Storage configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a storage configuration for where recorded video will be stored.
   *
   * @public
   */
  s3: S3StorageConfiguration | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A complex type that describes a location where recorded videos will be stored.
 *
 * @public
 */
export interface StorageConfiguration {
  /**
   * ARN of the storage configuration.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Name of the storage configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An S3 destination configuration where recorded videos will be stored.
   *
   * @public
   */
  s3?: S3StorageConfiguration | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateStorageConfigurationResponse {
  /**
   * The StorageConfiguration that was created.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteEncoderConfigurationRequest {
  /**
   * ARN of the EncoderConfiguration.
   *
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
   * ARN of the IngestConfiguration.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Optional field to force deletion of the IngestConfiguration. If this is set to `true` when a participant is actively publishing, the participant is disconnected from the stage, followed by deletion of the IngestConfiguration. Default: `false`.
   *
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
   * ARN of the public key to be deleted.
   *
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
   * ARN of the stage to be deleted.
   *
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
   * ARN of the storage configuration to be deleted.
   *
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
   * ARN of the stage to which the participant is attached.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * Identifier of the participant to be disconnected. IVS assigns this; it is returned by CreateParticipantToken (for streams using WebRTC ingest) or CreateIngestConfiguration (for streams using RTMP ingest).
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * Description of why this participant is being disconnected.
   *
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
   * ARN of the Composition resource.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Object specifying a channel as a destination.
 *
 * @public
 */
export interface ChannelDestinationConfiguration {
  /**
   * ARN of the channel to use for broadcasting. The channel and stage resources must be in the same AWS account and region. The channel must be offline (not broadcasting).
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * ARN of the EncoderConfiguration resource. The encoder configuration and stage resources must be in the same AWS account and region.
   *
   * @public
   */
  encoderConfigurationArn?: string | undefined;
}

/**
 * An object representing a configuration of HLS recordings for server-side composition.
 *
 * @public
 */
export interface CompositionRecordingHlsConfiguration {
  /**
   * Defines the target duration for recorded segments generated when using composite recording. Default: 2.
   *
   * @public
   */
  targetSegmentDurationSeconds?: number | undefined;
}

/**
 * An object representing a configuration to record a stage stream.
 *
 * @public
 */
export interface RecordingConfiguration {
  /**
   * An HLS configuration object to return information about how the recording will be configured.
   *
   * @public
   */
  hlsConfiguration?: CompositionRecordingHlsConfiguration | undefined;

  /**
   * The recording format for storing a recording in Amazon S3.
   *
   * @public
   */
  format?: RecordingConfigurationFormat | undefined;
}

/**
 * An object representing a configuration of thumbnails for recorded video for a Composition.
 *
 * @public
 */
export interface CompositionThumbnailConfiguration {
  /**
   * The targeted thumbnail-generation interval in seconds. Default: 60.
   *
   * @public
   */
  targetIntervalSeconds?: number | undefined;

  /**
   * Indicates the format in which thumbnails are recorded. `SEQUENTIAL` records all generated thumbnails in a serial manner, to the media/thumbnails/(width)x(height) directory, where (width) and (height) are the width and height of the thumbnail. `LATEST` saves the latest thumbnail in media/latest_thumbnail/(width)x(height)/thumb.jpg and overwrites it at the interval specified by `targetIntervalSeconds`. You can enable both `SEQUENTIAL` and `LATEST`. Default: `SEQUENTIAL`.
   *
   * @public
   */
  storage?: ThumbnailStorageType[] | undefined;
}

/**
 * A complex type that describes an S3 location where recorded videos will be stored.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * ARN of the StorageConfiguration where recorded videos will be stored.
   *
   * @public
   */
  storageConfigurationArn: string | undefined;

  /**
   * ARNs of the EncoderConfiguration resource. The encoder configuration and stage resources must be in the same AWS account and region.
   *
   * @public
   */
  encoderConfigurationArns: string[] | undefined;

  /**
   * Array of maps, each of the form `string:string (key:value)`. This is an optional customer specification, currently used only to specify the recording format for storing a recording in Amazon S3.
   *
   * @public
   */
  recordingConfiguration?: RecordingConfiguration | undefined;

  /**
   * A complex type that allows you to enable/disable the recording of thumbnails for a Composition and modify the interval at which thumbnails are generated for the live session.
   *
   * @public
   */
  thumbnailConfigurations?: CompositionThumbnailConfiguration[] | undefined;
}

/**
 * Complex data type that defines destination-configuration objects.
 *
 * @public
 */
export interface DestinationConfiguration {
  /**
   * Name that can be specified to help identify the destination.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An IVS channel to be used for broadcasting, for server-side composition. Either a `channel` or an `s3` must be specified.
   *
   * @public
   */
  channel?: ChannelDestinationConfiguration | undefined;

  /**
   * An S3 storage configuration to be used for recording video data. Either a `channel` or an `s3` must be specified.
   *
   * @public
   */
  s3?: S3DestinationConfiguration | undefined;
}

/**
 * Complex data type that defines S3Detail objects.
 *
 * @public
 */
export interface S3Detail {
  /**
   * The S3 bucket prefix under which the recording is stored.
   *
   * @public
   */
  recordingPrefix: string | undefined;
}

/**
 * Complex data type that defines destination-detail objects.
 *
 * @public
 */
export interface DestinationDetail {
  /**
   * An S3 detail object to return information about the S3 destination.
   *
   * @public
   */
  s3?: S3Detail | undefined;
}

/**
 * Object specifying the status of a Destination.
 *
 * @public
 */
export interface Destination {
  /**
   * Unique identifier for this destination, assigned by IVS.
   *
   * @public
   */
  id: string | undefined;

  /**
   * State of the Composition Destination.
   *
   * @public
   */
  state: DestinationState | undefined;

  /**
   * UTC time of the destination start. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * UTC time of the destination end. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Configuration used to create this destination.
   *
   * @public
   */
  configuration: DestinationConfiguration | undefined;

  /**
   * Optional details regarding the status of the destination.
   *
   * @public
   */
  detail?: DestinationDetail | undefined;
}

/**
 * Configuration information specific to Grid layout, for server-side composition. See "Layouts" in [Server-Side Composition](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/server-side-composition.html).
 *
 * @public
 */
export interface GridConfiguration {
  /**
   * This attribute name identifies the featured slot. A participant with this attribute set to `"true"` (as a string value) in ParticipantTokenConfiguration is placed in the featured slot. Default: `""` (no featured participant).
   *
   * @public
   */
  featuredParticipantAttribute?: string | undefined;

  /**
   * Determines whether to omit participants with stopped video in the composition. Default: `false`.
   *
   * @public
   */
  omitStoppedVideo?: boolean | undefined;

  /**
   * Sets the non-featured participant display mode, to control the aspect ratio of video tiles. `VIDEO` is 16:9, `SQUARE` is 1:1, and `PORTRAIT` is 3:4. Default: `VIDEO`.
   *
   * @public
   */
  videoAspectRatio?: VideoAspectRatio | undefined;

  /**
   * Defines how video content fits within the participant tile: `FILL` (stretched), `COVER` (cropped), or `CONTAIN` (letterboxed). When not set, `videoFillMode` defaults to `COVER` fill mode for participants in the grid and to `CONTAIN` fill mode for featured participants.
   *
   * @public
   */
  videoFillMode?: VideoFillMode | undefined;

  /**
   * Specifies the spacing between participant tiles in pixels. Default: `2`.
   *
   * @public
   */
  gridGap?: number | undefined;

  /**
   * Attribute name in ParticipantTokenConfiguration identifying the participant ordering key. Participants with `participantOrderAttribute` set to `""` or not specified are ordered based on their arrival time into the stage.
   *
   * @public
   */
  participantOrderAttribute?: string | undefined;
}

/**
 * Configuration information specific to Picture-in-Picture (PiP) layout, for [server-side composition](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/server-side-composition.html).
 *
 * @public
 */
export interface PipConfiguration {
  /**
   * This attribute name identifies the featured slot. A participant with this attribute set to `"true"` (as a string value) in ParticipantTokenConfiguration is placed in the featured slot. Default: `""` (no featured participant).
   *
   * @public
   */
  featuredParticipantAttribute?: string | undefined;

  /**
   * Determines whether to omit participants with stopped video in the composition. Default: `false`.
   *
   * @public
   */
  omitStoppedVideo?: boolean | undefined;

  /**
   * Defines how video content fits within the participant tile: `FILL` (stretched), `COVER` (cropped), or `CONTAIN` (letterboxed). Default: `COVER`.
   *
   * @public
   */
  videoFillMode?: VideoFillMode | undefined;

  /**
   * Specifies the spacing between participant tiles in pixels. Default: `0`.
   *
   * @public
   */
  gridGap?: number | undefined;

  /**
   * Specifies the participant for the PiP window. A participant with this attribute set to `"true"` (as a string value) in ParticipantTokenConfiguration is placed in the PiP slot. Default: `""` (no PiP participant).
   *
   * @public
   */
  pipParticipantAttribute?: string | undefined;

  /**
   * Defines PiP behavior when all participants have left: `STATIC` (maintains original position/size) or `DYNAMIC` (expands to full composition). Default: `STATIC`.
   *
   * @public
   */
  pipBehavior?: PipBehavior | undefined;

  /**
   * Sets the PiP window’s offset position in pixels from the closest edges determined by `PipPosition`. Default: `0`.
   *
   * @public
   */
  pipOffset?: number | undefined;

  /**
   * Determines the corner position of the PiP window. Default: `BOTTOM_RIGHT`.
   *
   * @public
   */
  pipPosition?: PipPosition | undefined;

  /**
   * Specifies the width of the PiP window in pixels. When this is not set explicitly, `pipWidth`’s value will be based on the size of the composition and the aspect ratio of the participant’s video.
   *
   * @public
   */
  pipWidth?: number | undefined;

  /**
   * Specifies the height of the PiP window in pixels. When this is not set explicitly, `pipHeight`’s value will be based on the size of the composition and the aspect ratio of the participant’s video.
   *
   * @public
   */
  pipHeight?: number | undefined;

  /**
   * Attribute name in ParticipantTokenConfiguration identifying the participant ordering key. Participants with `participantOrderAttribute` set to `""` or not specified are ordered based on their arrival time into the stage.
   *
   * @public
   */
  participantOrderAttribute?: string | undefined;
}

/**
 * Configuration information of supported layouts for server-side composition.
 *
 * @public
 */
export interface LayoutConfiguration {
  /**
   * Configuration related to grid layout. Default: Grid layout.
   *
   * @public
   */
  grid?: GridConfiguration | undefined;

  /**
   * Configuration related to PiP layout.
   *
   * @public
   */
  pip?: PipConfiguration | undefined;
}

/**
 * Object specifying a Composition resource.
 *
 * @public
 */
export interface Composition {
  /**
   * ARN of the Composition resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * ARN of the stage used as input
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * State of the Composition.
   *
   * @public
   */
  state: CompositionState | undefined;

  /**
   * Layout object to configure composition parameters.
   *
   * @public
   */
  layout: LayoutConfiguration | undefined;

  /**
   * Array of Destination objects. A Composition can contain either one destination (`channel` or `s3`) or two (one `channel` and one `s3`).
   *
   * @public
   */
  destinations: Destination[] | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * UTC time of the Composition start. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * UTC time of the Composition end. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCompositionResponse {
  /**
   * The Composition that was returned.
   *
   * @public
   */
  composition?: Composition | undefined;
}

/**
 * @public
 */
export interface GetEncoderConfigurationRequest {
  /**
   * ARN of the EncoderConfiguration resource.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEncoderConfigurationResponse {
  /**
   * The EncoderConfiguration that was returned.
   *
   * @public
   */
  encoderConfiguration?: EncoderConfiguration | undefined;
}

/**
 * @public
 */
export interface GetIngestConfigurationRequest {
  /**
   * ARN of the ingest for which the information is to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetIngestConfigurationResponse {
  /**
   * The IngestConfiguration that was returned.
   *
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;
}

/**
 * @public
 */
export interface GetParticipantRequest {
  /**
   * Stage ARN.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * ID of a session within the stage.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Unique identifier for the participant. This is assigned by IVS and returned by CreateParticipantToken.
   *
   * @public
   */
  participantId: string | undefined;
}

/**
 * Object describing a participant that has joined a stage.
 *
 * @public
 */
export interface Participant {
  /**
   * Unique identifier for this participant, assigned by IVS.
   *
   * @public
   */
  participantId?: string | undefined;

  /**
   * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information*.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Whether the participant is connected to or disconnected from the stage.
   *
   * @public
   */
  state?: ParticipantState | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) when the participant first joined the stage session.
   *
   * @public
   */
  firstJoinTime?: Date | undefined;

  /**
   * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information*.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Whether the participant ever published to the stage session.
   *
   * @public
   */
  published?: boolean | undefined;

  /**
   * The participant’s Internet Service Provider.
   *
   * @public
   */
  ispName?: string | undefined;

  /**
   * The participant’s operating system.
   *
   * @public
   */
  osName?: string | undefined;

  /**
   * The participant’s operating system version.
   *
   * @public
   */
  osVersion?: string | undefined;

  /**
   * The participant’s browser.
   *
   * @public
   */
  browserName?: string | undefined;

  /**
   * The participant’s browser version.
   *
   * @public
   */
  browserVersion?: string | undefined;

  /**
   * The participant’s SDK version.
   *
   * @public
   */
  sdkVersion?: string | undefined;

  /**
   * Name of the S3 bucket to where the participant is being recorded, if individual participant recording is enabled, or `""` (empty string), if recording is not enabled.
   *
   * @public
   */
  recordingS3BucketName?: string | undefined;

  /**
   * S3 prefix of the S3 bucket where the participant is being recorded, if individual participant recording is enabled, or `""` (empty string), if recording is not enabled. If individual participant recording merge is enabled, and if a stage publisher disconnects from a stage and then reconnects, IVS tries to record to the same S3 prefix as the previous session. See [Merge Fragmented Individual Participant Recordings](/ivs/latest/RealTimeUserGuide/rt-individual-participant-recording.html#ind-part-rec-merge-frag).
   *
   * @public
   */
  recordingS3Prefix?: string | undefined;

  /**
   * The participant’s recording state.
   *
   * @public
   */
  recordingState?: ParticipantRecordingState | undefined;

  /**
   * Type of ingest protocol that the participant employs for broadcasting.
   *
   * @public
   */
  protocol?: ParticipantProtocol | undefined;

  /**
   * Indicates if the participant has been replicated to another stage or is a replica from another stage. Default: `NONE`.
   *
   * @public
   */
  replicationType?: ReplicationType | undefined;

  /**
   * The participant's replication state.
   *
   * @public
   */
  replicationState?: ReplicationState | undefined;

  /**
   * Source stage ARN from which this participant is replicated, if `replicationType` is `REPLICA`.
   *
   * @public
   */
  sourceStageArn?: string | undefined;

  /**
   * ID of the session within the source stage, if `replicationType` is `REPLICA`.
   *
   * @public
   */
  sourceSessionId?: string | undefined;

  /**
   * Indicates whether redundant ingest is enabled for the participant.
   *
   * @public
   */
  redundantIngest?: boolean | undefined;

  /**
   * The participant’s ingest configuration.
   *
   * @public
   */
  ingestConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface GetParticipantResponse {
  /**
   * The participant that is returned.
   *
   * @public
   */
  participant?: Participant | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * ARN of the public key for which the information is to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Object specifying a public key used to sign stage participant tokens.
 *
 * @public
 */
export interface PublicKey {
  /**
   * Public key ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Public key name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Public key material.
   *
   * @public
   */
  publicKeyMaterial?: string | undefined;

  /**
   * The public key fingerprint, a short string used to identify or verify the full public key.
   *
   * @public
   */
  fingerprint?: string | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResponse {
  /**
   * The public key that is returned.
   *
   * @public
   */
  publicKey?: PublicKey | undefined;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * ARN of the stage for which the information is to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * The stage that is returned.
   *
   * @public
   */
  stage?: Stage | undefined;
}

/**
 * @public
 */
export interface GetStageSessionRequest {
  /**
   * ARN of the stage for which the information is to be retrieved.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * ID of a session within the stage.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * A stage session begins when the first participant joins a stage and ends after the last participant leaves the stage. A stage session helps with debugging stages by grouping events and participants into shorter periods of time (i.e., a session), which is helpful when stages are used over long periods of time.
 *
 * @public
 */
export interface StageSession {
  /**
   * ID of the session within the stage.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) when this stage session began.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if the stage is active.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetStageSessionResponse {
  /**
   * The stage session that is returned.
   *
   * @public
   */
  stageSession?: StageSession | undefined;
}

/**
 * @public
 */
export interface GetStorageConfigurationRequest {
  /**
   * ARN of the storage configuration to be retrieved.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStorageConfigurationResponse {
  /**
   * The StorageConfiguration that was returned.
   *
   * @public
   */
  storageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface ImportPublicKeyRequest {
  /**
   * The content of the public key to be imported.
   *
   * @public
   */
  publicKeyMaterial: string | undefined;

  /**
   * Name of the public key to be imported.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportPublicKeyResponse {
  /**
   * The public key that was imported.
   *
   * @public
   */
  publicKey?: PublicKey | undefined;
}

/**
 * @public
 */
export interface ListCompositionsRequest {
  /**
   * Filters the Composition list to match the specified Stage ARN.
   *
   * @public
   */
  filterByStageArn?: string | undefined;

  /**
   * Filters the Composition list to match the specified EncoderConfiguration attached to at least one of its output.
   *
   * @public
   */
  filterByEncoderConfigurationArn?: string | undefined;

  /**
   * The first Composition to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a Destination.
 *
 * @public
 */
export interface DestinationSummary {
  /**
   * Unique identifier for this destination, assigned by IVS.
   *
   * @public
   */
  id: string | undefined;

  /**
   * State of the Composition Destination.
   *
   * @public
   */
  state: DestinationState | undefined;

  /**
   * UTC time of the destination start. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * UTC time of the destination end. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * Summary information about a Composition.
 *
 * @public
 */
export interface CompositionSummary {
  /**
   * ARN of the Composition resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * ARN of the attached stage.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * Array of Destination objects.
   *
   * @public
   */
  destinations: DestinationSummary[] | undefined;

  /**
   * State of the Composition resource.
   *
   * @public
   */
  state: CompositionState | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * UTC time of the Composition start. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * UTC time of the Composition end. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListCompositionsResponse {
  /**
   * List of the matching Compositions (summary information only).
   *
   * @public
   */
  compositions: CompositionSummary[] | undefined;

  /**
   * If there are more compositions than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEncoderConfigurationsRequest {
  /**
   * The first encoder configuration to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about an EncoderConfiguration.
 *
 * @public
 */
export interface EncoderConfigurationSummary {
  /**
   * ARN of the EncoderConfiguration resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Optional name to identify the resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEncoderConfigurationsResponse {
  /**
   * List of the matching EncoderConfigurations (summary information only).
   *
   * @public
   */
  encoderConfigurations: EncoderConfigurationSummary[] | undefined;

  /**
   * If there are more encoder configurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIngestConfigurationsRequest {
  /**
   * Filters the response list to match the specified stage ARN. Only one filter (by stage ARN or by state) can be used at a time.
   *
   * @public
   */
  filterByStageArn?: string | undefined;

  /**
   * Filters the response list to match the specified state. Only one filter (by stage ARN or by state) can be used at a time.
   *
   * @public
   */
  filterByState?: IngestConfigurationState | undefined;

  /**
   * The first IngestConfiguration to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about an IngestConfiguration.
 *
 * @public
 */
export interface IngestConfigurationSummary {
  /**
   * Ingest name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Ingest configuration ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Type of ingest protocol that the user employs for broadcasting.
   *
   * @public
   */
  ingestProtocol: IngestProtocol | undefined;

  /**
   * ARN of the stage with which the IngestConfiguration is associated.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * ID of the participant within the stage.
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * State of the ingest configuration. It is `ACTIVE` if a publisher currently is publishing to the stage associated with the ingest configuration.
   *
   * @public
   */
  state: IngestConfigurationState | undefined;

  /**
   * Customer-assigned name to help identify the participant using the IngestConfiguration; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Indicates whether redundant ingest is enabled for the ingest configuration.
   *
   * @public
   */
  redundantIngest?: boolean | undefined;
}

/**
 * @public
 */
export interface ListIngestConfigurationsResponse {
  /**
   * List of the matching ingest configurations (summary information only).
   *
   * @public
   */
  ingestConfigurations: IngestConfigurationSummary[] | undefined;

  /**
   * If there are more IngestConfigurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListParticipantEventsRequest {
  /**
   * Stage ARN.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * ID of a session within the stage.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Unique identifier for this participant. This is assigned by IVS and returned by CreateParticipantToken.
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * The first participant event to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Object specifying an exchanged participant token in a stage, created when an original participant token is updated.
 *
 * **Important**: Treat tokens as opaque; i.e., do not build functionality based on token contents. The format of tokens could change in the future.
 *
 * @public
 */
export interface ExchangedParticipantToken {
  /**
   * Set of capabilities that the user is allowed to perform in the stage.
   *
   * @public
   */
  capabilities?: ParticipantTokenCapability[] | undefined;

  /**
   * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) for when this token expires.
   *
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * An occurrence during a stage session.
 *
 * @public
 */
export interface Event {
  /**
   * The name of the event.
   *
   * @public
   */
  name?: EventName | undefined;

  /**
   * Unique identifier for the participant who triggered the event. This is assigned by IVS.
   *
   * @public
   */
  participantId?: string | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) for when the event occurred.
   *
   * @public
   */
  eventTime?: Date | undefined;

  /**
   * Unique identifier for the remote participant. For a subscribe event, this is the publisher. For a publish or join event, this is null. This is assigned by IVS.
   *
   * @public
   */
  remoteParticipantId?: string | undefined;

  /**
   * If the event is an error event, the error code is provided to give insight into the specific error that occurred. If the event is not an error event, this field is null.
   *
   * - `B_FRAME_PRESENT` — The participant's stream includes B-frames. For details, see [IVS RTMP Publishing](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html).
   * - `BITRATE_EXCEEDED` — The participant exceeded the maximum supported bitrate. For details, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html).
   * - `INSUFFICIENT_CAPABILITIES` — The participant tried to take an action that the participant’s token is not allowed to do. For details on participant capabilities, see the `capabilities` field in CreateParticipantToken.
   * - `INTERNAL_SERVER_EXCEPTION` — The participant failed to publish to the stage due to an internal server error.
   * - `INVALID_AUDIO_CODEC` — The participant is using an invalid audio codec. For details, see [Stream Ingest](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-stream-ingest.html).
   * - `INVALID_INPUT` — The participant is using an invalid input stream.
   * - `INVALID_PROTOCOL` — The participant's IngestConfiguration resource is configured for RTMPS but they tried streaming with RTMP. For details, see [IVS RTMP Publishing](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html).
   * - `INVALID_STREAM_KEY` — The participant is using an invalid stream key. For details, see [IVS RTMP Publishing](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-rtmp-publishing.html).
   * - `INVALID_VIDEO_CODEC` — The participant is using an invalid video codec. For details, see [Stream Ingest](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/rt-stream-ingest.html).
   * - `PUBLISHER_NOT_FOUND` — The participant tried to subscribe to a publisher that doesn’t exist.
   * - `QUOTA_EXCEEDED` — The number of participants who want to publish/subscribe to a stage exceeds the quota. For details, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html).
   * - `RESOLUTION_EXCEEDED` — The participant exceeded the maximum supported resolution. For details, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html).
   * - `REUSE_OF_STREAM_KEY` — The participant tried to use a stream key that is associated with another active stage session.
   * - `STREAM_DURATION_EXCEEDED` — The participant exceeded the maximum allowed stream duration. For details, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/service-quotas.html).
   *
   * @public
   */
  errorCode?: EventErrorCode | undefined;

  /**
   * ARN of the stage where the participant is replicated. Applicable only if the event name is `REPLICATION_STARTED` or `REPLICATION_STOPPED`.
   *
   * @public
   */
  destinationStageArn?: string | undefined;

  /**
   * ID of the session within the destination stage. Applicable only if the event name is `REPLICATION_STARTED` or `REPLICATION_STOPPED`.
   *
   * @public
   */
  destinationSessionId?: string | undefined;

  /**
   * If true, this indicates the `participantId` is a replicated participant. If this is a subscribe event, then this flag refers to `remoteParticipantId`. Default: `false`.
   *
   * @public
   */
  replica?: boolean | undefined;

  /**
   * Source participant token for `TOKEN_EXCHANGED` event.
   *
   * @public
   */
  previousToken?: ExchangedParticipantToken | undefined;

  /**
   * Participant token created during `TOKEN_EXCHANGED` event.
   *
   * @public
   */
  newToken?: ExchangedParticipantToken | undefined;
}

/**
 * @public
 */
export interface ListParticipantEventsResponse {
  /**
   * List of the matching events.
   *
   * @public
   */
  events: Event[] | undefined;

  /**
   * If there are more events than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListParticipantReplicasRequest {
  /**
   * ARN of the stage where the participant is publishing.
   *
   * @public
   */
  sourceStageArn: string | undefined;

  /**
   * Participant ID of the publisher that has been replicated. This is assigned by IVS and returned by CreateParticipantToken or the `jti` (JWT ID) used to [create a self signed token](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started-distribute-tokens.html#getting-started-distribute-tokens-self-signed).
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * The first participant to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the replicated destination stage for a participant.
 *
 * @public
 */
export interface ParticipantReplica {
  /**
   * ARN of the stage from which this participant is replicated.
   *
   * @public
   */
  sourceStageArn: string | undefined;

  /**
   * Participant ID of the publisher that will be replicated. This is assigned by IVS and returned by CreateParticipantToken or the `jti` (JWT ID) used to [create a self signed token](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started-distribute-tokens.html#getting-started-distribute-tokens-self-signed).
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * ID of the session within the source stage.
   *
   * @public
   */
  sourceSessionId: string | undefined;

  /**
   * ARN of the stage where the participant is replicated.
   *
   * @public
   */
  destinationStageArn: string | undefined;

  /**
   * ID of the session within the destination stage.
   *
   * @public
   */
  destinationSessionId: string | undefined;

  /**
   * Replica’s current replication state.
   *
   * @public
   */
  replicationState: ReplicationState | undefined;
}

/**
 * @public
 */
export interface ListParticipantReplicasResponse {
  /**
   * List of all participant replicas.
   *
   * @public
   */
  replicas: ParticipantReplica[] | undefined;

  /**
   * If there are more participants than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListParticipantsRequest {
  /**
   * Stage ARN.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * ID of the session within the stage.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Filters the response list to match the specified user ID. Only one of `filterByUserId`, `filterByPublished`, `filterByState`, or `filterByRecordingState` can be provided per request. A `userId` is a customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems.
   *
   * @public
   */
  filterByUserId?: string | undefined;

  /**
   * Filters the response list to only show participants who published during the stage session. Only one of `filterByUserId`, `filterByPublished`, `filterByState`, or `filterByRecordingState` can be provided per request.
   *
   * @public
   */
  filterByPublished?: boolean | undefined;

  /**
   * Filters the response list to only show participants in the specified state. Only one of `filterByUserId`, `filterByPublished`, `filterByState`, or `filterByRecordingState` can be provided per request.
   *
   * @public
   */
  filterByState?: ParticipantState | undefined;

  /**
   * The first participant to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the response list to only show participants with the specified recording state. Only one of `filterByUserId`, `filterByPublished`, `filterByState`, or `filterByRecordingState` can be provided per request.
   *
   * @public
   */
  filterByRecordingState?: ParticipantRecordingFilterByRecordingState | undefined;
}

/**
 * Summary object describing a participant that has joined a stage.
 *
 * @public
 */
export interface ParticipantSummary {
  /**
   * Unique identifier for this participant, assigned by IVS.
   *
   * @public
   */
  participantId?: string | undefined;

  /**
   * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information*.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * Whether the participant is connected to or disconnected from the stage.
   *
   * @public
   */
  state?: ParticipantState | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) when the participant first joined the stage session.
   *
   * @public
   */
  firstJoinTime?: Date | undefined;

  /**
   * Whether the participant ever published to the stage session.
   *
   * @public
   */
  published?: boolean | undefined;

  /**
   * The participant’s recording state.
   *
   * @public
   */
  recordingState?: ParticipantRecordingState | undefined;

  /**
   * Indicates if the participant has been replicated to another stage or is a replica from another stage. Default: `NONE`.
   *
   * @public
   */
  replicationType?: ReplicationType | undefined;

  /**
   * The participant's replication state.
   *
   * @public
   */
  replicationState?: ReplicationState | undefined;

  /**
   * Source stage ARN from which this participant is replicated, if `replicationType` is `REPLICA`.
   *
   * @public
   */
  sourceStageArn?: string | undefined;

  /**
   * ID of the session within the source stage, if `replicationType` is `REPLICA`.
   *
   * @public
   */
  sourceSessionId?: string | undefined;

  /**
   * Indicates whether redundant ingest is enabled for the participant.
   *
   * @public
   */
  redundantIngest?: boolean | undefined;

  /**
   * The participant’s ingest configuration.
   *
   * @public
   */
  ingestConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListParticipantsResponse {
  /**
   * List of the matching participants (summary information only).
   *
   * @public
   */
  participants: ParticipantSummary[] | undefined;

  /**
   * If there are more participants than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * The first public key to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a public key.
 *
 * @public
 */
export interface PublicKeySummary {
  /**
   * Public key ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Public key name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysResponse {
  /**
   * List of the matching public keys (summary information only).
   *
   * @public
   */
  publicKeys: PublicKeySummary[] | undefined;

  /**
   * If there are more public keys than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStagesRequest {
  /**
   * The first stage to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a stage.
 *
 * @public
 */
export interface StageSummary {
  /**
   * Stage ARN.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Stage name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * ID of the active session within the stage.
   *
   * @public
   */
  activeSessionId?: string | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListStagesResponse {
  /**
   * List of the matching stages (summary information only).
   *
   * @public
   */
  stages: StageSummary[] | undefined;

  /**
   * If there are more stages than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStageSessionsRequest {
  /**
   * Stage ARN.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * The first stage session to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a stage session.
 *
 * @public
 */
export interface StageSessionSummary {
  /**
   * ID of the session within the stage.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) when this stage session began.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if the stage is active.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListStageSessionsResponse {
  /**
   * List of matching stage sessions.
   *
   * @public
   */
  stageSessions: StageSessionSummary[] | undefined;

  /**
   * If there are more stage sessions than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStorageConfigurationsRequest {
  /**
   * The first storage configuration to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of storage configurations to return. Default: your service quota or 100, whichever is smaller.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a storage configuration.
 *
 * @public
 */
export interface StorageConfigurationSummary {
  /**
   * ARN of the storage configuration.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Name of the storage configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An S3 destination configuration where recorded videos will be stored.
   *
   * @public
   */
  s3?: S3StorageConfiguration | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListStorageConfigurationsResponse {
  /**
   * List of the matching storage configurations.
   *
   * @public
   */
  storageConfigurations: StorageConfigurationSummary[] | undefined;

  /**
   * If there are more storage configurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to be retrieved. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RevokeConnectionTokenRequest {
  /**
   * The ID of the connection token to revoke.
   *
   * @public
   */
  tokenId: string | undefined;
}

/**
 * @public
 */
export interface RevokeConnectionTokenResponse {}

/**
 * @public
 */
export interface StartCompositionRequest {
  /**
   * ARN of the stage to be used for compositing.
   *
   * @public
   */
  stageArn: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * Layout object to configure composition parameters.
   *
   * @public
   */
  layout?: LayoutConfiguration | undefined;

  /**
   * Array of destination configuration.
   *
   * @public
   */
  destinations: DestinationConfiguration[] | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartCompositionResponse {
  /**
   * The Composition that was created.
   *
   * @public
   */
  composition?: Composition | undefined;
}

/**
 * @public
 */
export interface StartParticipantReplicationRequest {
  /**
   * ARN of the stage where the participant is publishing.
   *
   * @public
   */
  sourceStageArn: string | undefined;

  /**
   * ARN of the stage to which the participant will be replicated.
   *
   * @public
   */
  destinationStageArn: string | undefined;

  /**
   * Participant ID of the publisher that will be replicated. This is assigned by IVS and returned by CreateParticipantToken or the `jti` (JWT ID) used to [create a self signed token](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started-distribute-tokens.html#getting-started-distribute-tokens-self-signed).
   *
   * @public
   */
  participantId: string | undefined;

  /**
   * If the participant disconnects and then reconnects within the specified interval, replication will continue to be `ACTIVE`. Default: 0.
   *
   * @public
   */
  reconnectWindowSeconds?: number | undefined;

  /**
   * Application-provided attributes to set on the replicated participant in the destination stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. *This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.*
   *
   * These attributes are merged with any attributes set for this participant when creating the token. If there is overlap in keys, the values in these attributes are replaced.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartParticipantReplicationResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;
}

/**
 * @public
 */
export interface StopCompositionRequest {
  /**
   * ARN of the Composition.
   *
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
export interface StopParticipantReplicationRequest {
  /**
   * ARN of the stage where the participant is publishing.
   *
   * @public
   */
  sourceStageArn: string | undefined;

  /**
   * ARN of the stage where the participant has been replicated.
   *
   * @public
   */
  destinationStageArn: string | undefined;

  /**
   * Participant ID of the publisher that has been replicated. This is assigned by IVS and returned by CreateParticipantToken or the `jti` (JWT ID) used to [create a self signed token](https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started-distribute-tokens.html#getting-started-distribute-tokens-self-signed).
   *
   * @public
   */
  participantId: string | undefined;
}

/**
 * @public
 */
export interface StopParticipantReplicationResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to be tagged. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tags to be added or updated. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
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
   * The ARN of the resource to be untagged. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tag keys (strings) for the tags to be removed. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging AWS Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
   *
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
   * ARN of the IngestConfiguration, for which the related stage ARN needs to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Stage ARN that needs to be updated.
   *
   * @public
   */
  stageArn?: string | undefined;

  /**
   * Indicates whether redundant ingest is enabled for the ingest configuration. Default: `false`.
   *
   * @public
   */
  redundantIngest?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateIngestConfigurationResponse {
  /**
   * See [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
   *
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * See [Access-Control-Expose-Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
   *
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * See [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control) in the MDN Web Docs.
   *
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * See [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) in the MDN Web Docs.
   *
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * See [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) in the MDN Web Docs.
   *
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * See [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) in the MDN Web Docs.
   *
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * See [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options) in the MDN Web Docs.
   *
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * The updated IngestConfiguration.
   *
   * @public
   */
  ingestConfiguration?: IngestConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateStageRequest {
  /**
   * ARN of the stage to be updated.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Name of the stage to be updated.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Configuration object for individual participant recording, to attach to the stage. Note that this cannot be updated while recording is active.
   *
   * @public
   */
  autoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * The updated stage.
   *
   * @public
   */
  stage?: Stage | undefined;
}
