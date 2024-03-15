// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IvsServiceException as __BaseException } from "./IvsServiceException";

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
 * @public
 */
export interface BatchGetChannelRequest {
  /**
   * <p>Array of ARNs, one per channel.</p>
   * @public
   */
  arns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelLatencyMode = {
  LowLatency: "LOW",
  NormalLatency: "NORMAL",
} as const;

/**
 * @public
 */
export type ChannelLatencyMode = (typeof ChannelLatencyMode)[keyof typeof ChannelLatencyMode];

/**
 * @public
 * @enum
 */
export const TranscodePreset = {
  ConstrainedBandwidthTranscodePreset: "CONSTRAINED_BANDWIDTH_DELIVERY",
  HigherBandwidthTranscodePreset: "HIGHER_BANDWIDTH_DELIVERY",
} as const;

/**
 * @public
 */
export type TranscodePreset = (typeof TranscodePreset)[keyof typeof TranscodePreset];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  AdvancedHDChannelType: "ADVANCED_HD",
  AdvancedSDChannelType: "ADVANCED_SD",
  BasicChannelType: "BASIC",
  StandardChannelType: "STANDARD",
} as const;

/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * <p>Object specifying a channel.</p>
 * @public
 */
export interface Channel {
  /**
   * <p>Channel ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Channel name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>.</p>
   * @public
   */
  latencyMode?: ChannelLatencyMode;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. For details, see <a href="https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/channel-types.html">Channel
   *         Types</a>.</p>
   * @public
   */
  type?: ChannelType;

  /**
   * <p>Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording.
   *     Default: "" (empty string, recording is disabled).</p>
   * @public
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Channel ingest endpoint, part of the definition of an ingest server, used when you set up
   *       streaming software.</p>
   * @public
   */
  ingestEndpoint?: string;

  /**
   * <p>Channel playback URL.</p>
   * @public
   */
  playbackUrl?: string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   * @public
   */
  authorized?: boolean;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   * @public
   */
  insecureIngest?: boolean;

  /**
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   * @public
   */
  preset?: TranscodePreset;

  /**
   * <p>Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction. Default: "" (empty string, no playback restriction policy is applied).</p>
   * @public
   */
  playbackRestrictionPolicyArn?: string;
}

/**
 * <p>Error related to a specific channel, specified by its ARN.</p>
 * @public
 */
export interface BatchError {
  /**
   * <p>Channel ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>Error message, determined by the application.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 */
export interface BatchGetChannelResponse {
  /**
   * <p/>
   * @public
   */
  channels?: Channel[];

  /**
   * <p>Each error object is related to a specific ARN in the request.</p>
   * @public
   */
  errors?: BatchError[];
}

/**
 * @public
 */
export interface BatchGetStreamKeyRequest {
  /**
   * <p>Array of ARNs, one per stream key.</p>
   * @public
   */
  arns: string[] | undefined;
}

/**
 * <p>Object specifying a stream key.</p>
 * @public
 */
export interface StreamKey {
  /**
   * <p>Stream-key ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Stream-key value.</p>
   * @public
   */
  value?: string;

  /**
   * <p>Channel ARN for the stream.</p>
   * @public
   */
  channelArn?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchGetStreamKeyResponse {
  /**
   * <p/>
   * @public
   */
  streamKeys?: StreamKey[];

  /**
   * <p/>
   * @public
   */
  errors?: BatchError[];
}

/**
 * <p>A viewer session to revoke in the call to <a>BatchStartViewerSessionRevocation</a>.</p>
 * @public
 */
export interface BatchStartViewerSessionRevocationViewerSession {
  /**
   * <p>The ARN of the channel associated with the viewer session to revoke.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The ID of the viewer associated with the viewer session to revoke. Do not use this field
   *       for personally identifying, confidential, or sensitive information.</p>
   * @public
   */
  viewerId: string | undefined;

  /**
   * <p>An optional filter on which versions of the viewer session to revoke. All versions less
   *       than or equal to the specified version will be revoked. Default: 0.</p>
   * @public
   */
  viewerSessionVersionsLessThanOrEqualTo?: number;
}

/**
 * @public
 */
export interface BatchStartViewerSessionRevocationRequest {
  /**
   * <p>Array of viewer sessions, one per channel-ARN and viewer-ID pair.</p>
   * @public
   */
  viewerSessions: BatchStartViewerSessionRevocationViewerSession[] | undefined;
}

/**
 * <p>Error for a request in the batch for BatchStartViewerSessionRevocation. Each error is
 *       related to a specific channel-ARN and viewer-ID pair.</p>
 * @public
 */
export interface BatchStartViewerSessionRevocationError {
  /**
   * <p>Channel ARN.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The ID of the viewer session to revoke.</p>
   * @public
   */
  viewerId: string | undefined;

  /**
   * <p>Error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>Error message, determined by the application.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 */
export interface BatchStartViewerSessionRevocationResponse {
  /**
   * <p>Each error object is related to a specific <code>channelArn</code> and
   *         <code>viewerId</code> pair in the request.</p>
   * @public
   */
  errors?: BatchStartViewerSessionRevocationError[];
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
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Request was denied due to request throttling.</p>
   * @public
   */
  exceptionMessage?: string;
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
 */
export interface CreateChannelRequest {
  /**
   * <p>Channel name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default: <code>LOW</code>.</p>
   * @public
   */
  latencyMode?: ChannelLatencyMode;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. For details, see <a href="https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/channel-types.html">Channel
   *         Types</a>.</p>
   * @public
   */
  type?: ChannelType;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   * @public
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording.
   *      Default: "" (empty string, recording is disabled).</p>
   * @public
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   * @public
   */
  insecureIngest?: boolean;

  /**
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   * @public
   */
  preset?: TranscodePreset;

  /**
   * <p>Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction.
   *     Default: "" (empty string, no playback restriction policy is applied).</p>
   * @public
   */
  playbackRestrictionPolicyArn?: string;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p/>
   * @public
   */
  channel?: Channel;

  /**
   * <p/>
   * @public
   */
  streamKey?: StreamKey;
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
 * @public
 */
export interface CreatePlaybackRestrictionPolicyRequest {
  /**
   * <p>A list of country codes that control geoblocking restriction. Allowed values are the
   *       officially assigned <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1
   *         alpha-2</a> codes. Default: All countries (an empty array).</p>
   * @public
   */
  allowedCountries?: string[];

  /**
   * <p>A list of origin sites that control CORS restriction. Allowed values are the same as valid
   *       values of the Origin header defined at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin</a>. Default: All
   *       origins (an empty array).</p>
   * @public
   */
  allowedOrigins?: string[];

  /**
   * <p>Whether channel playback is constrained by origin site. Default:
   *       <code>false</code>.</p>
   * @public
   */
  enableStrictOriginEnforcement?: boolean;

  /**
   * <p>Playback-restriction-policy name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>An object representing a policy to constrain playback by country and/or origin
 *       sites.</p>
 * @public
 */
export interface PlaybackRestrictionPolicy {
  /**
   * <p>Playback-restriction-policy ARN</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A list of country codes that control geoblocking restriction. Allowed values are the
   *       officially assigned <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> codes. Default: All countries (an empty array).</p>
   * @public
   */
  allowedCountries: string[] | undefined;

  /**
   * <p>A list of origin sites that control CORS restriction. Allowed values are the same as valid
   *       values of the Origin header defined at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin</a>. Default: All origins (an empty array).</p>
   * @public
   */
  allowedOrigins: string[] | undefined;

  /**
   * <p>Whether channel playback is constrained by origin site. Default:
   *       <code>false</code>.</p>
   * @public
   */
  enableStrictOriginEnforcement?: boolean;

  /**
   * <p>Playback-restriction-policy name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePlaybackRestrictionPolicyResponse {
  /**
   * <p/>
   * @public
   */
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
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
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * <p>Location (S3 bucket name) where recorded videos will be stored.</p>
   * @public
   */
  bucketName: string | undefined;
}

/**
 * <p>A complex type that describes a location where recorded videos will be stored. Each member
 *       represents a type of destination configuration. For recording, you define one and only one
 *       type of destination configuration.</p>
 * @public
 */
export interface DestinationConfiguration {
  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   * @public
   */
  s3?: S3DestinationConfiguration;
}

/**
 * @public
 * @enum
 */
export const RenditionConfigurationRendition = {
  FULL_HD: "FULL_HD",
  HD: "HD",
  LOWEST_RESOLUTION: "LOWEST_RESOLUTION",
  SD: "SD",
} as const;

/**
 * @public
 */
export type RenditionConfigurationRendition =
  (typeof RenditionConfigurationRendition)[keyof typeof RenditionConfigurationRendition];

/**
 * @public
 * @enum
 */
export const RenditionConfigurationRenditionSelection = {
  ALL: "ALL",
  CUSTOM: "CUSTOM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type RenditionConfigurationRenditionSelection =
  (typeof RenditionConfigurationRenditionSelection)[keyof typeof RenditionConfigurationRenditionSelection];

/**
 * <p>Object that describes which renditions should be recorded for a stream.</p>
 * @public
 */
export interface RenditionConfiguration {
  /**
   * <p>Indicates which set of renditions are recorded for a stream. For <code>BASIC</code>
   *       channels, the <code>CUSTOM</code> value has no effect. If <code>CUSTOM</code> is specified, a
   *       set of renditions must be specified in the <code>renditions</code> field. Default:
   *         <code>ALL</code>.</p>
   * @public
   */
  renditionSelection?: RenditionConfigurationRenditionSelection;

  /**
   * <p>Indicates which renditions are recorded for a stream, if <code>renditionSelection</code>
   *       is <code>CUSTOM</code>; otherwise, this field is irrelevant. The selected renditions are
   *       recorded if they are available during the stream. If a selected rendition is unavailable, the
   *       best available rendition is recorded. For details on the resolution dimensions of each
   *       rendition, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/record-to-s3.html">Auto-Record to Amazon S3</a>.</p>
   * @public
   */
  renditions?: RenditionConfigurationRendition[];
}

/**
 * @public
 * @enum
 */
export const RecordingMode = {
  Disabled: "DISABLED",
  Interval: "INTERVAL",
} as const;

/**
 * @public
 */
export type RecordingMode = (typeof RecordingMode)[keyof typeof RecordingMode];

/**
 * @public
 * @enum
 */
export const ThumbnailConfigurationResolution = {
  FULL_HD: "FULL_HD",
  HD: "HD",
  LOWEST_RESOLUTION: "LOWEST_RESOLUTION",
  SD: "SD",
} as const;

/**
 * @public
 */
export type ThumbnailConfigurationResolution =
  (typeof ThumbnailConfigurationResolution)[keyof typeof ThumbnailConfigurationResolution];

/**
 * @public
 * @enum
 */
export const ThumbnailConfigurationStorage = {
  LATEST: "LATEST",
  SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * @public
 */
export type ThumbnailConfigurationStorage =
  (typeof ThumbnailConfigurationStorage)[keyof typeof ThumbnailConfigurationStorage];

/**
 * <p>An object representing a configuration of thumbnails for recorded video.</p>
 * @public
 */
export interface ThumbnailConfiguration {
  /**
   * <p>Thumbnail recording mode. Default: <code>INTERVAL</code>.</p>
   * @public
   */
  recordingMode?: RecordingMode;

  /**
   * <p>The targeted thumbnail-generation interval in seconds. This is configurable (and required)
   *       only if <code>recordingMode</code> is <code>INTERVAL</code>. Default: 60.</p>
   *          <p>
   *             <b>Important:</b> For the <code>BASIC</code> channel type,
   *       setting a value for <code>targetIntervalSeconds</code> does not guarantee that thumbnails are
   *       generated at the specified interval. For thumbnails to be generated at the
   *         <code>targetIntervalSeconds</code> interval, the <code>IDR/Keyframe</code> value for the
   *       input video must be less than the <code>targetIntervalSeconds</code> value. See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html"> Amazon IVS Streaming
   *         Configuration</a> for information on setting <code>IDR/Keyframe</code> to the
   *       recommended value in video-encoder settings.</p>
   * @public
   */
  targetIntervalSeconds?: number;

  /**
   * <p>Indicates the desired resolution of recorded thumbnails. Thumbnails are recorded at the
   *       selected resolution if the corresponding rendition is available during the stream; otherwise,
   *       they are recorded at source resolution. For more information about resolution values and their
   *       corresponding height and width dimensions, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/record-to-s3.html">Auto-Record to Amazon S3</a>. Default:
   *       Null (source resolution is returned).</p>
   * @public
   */
  resolution?: ThumbnailConfigurationResolution;

  /**
   * <p>Indicates the format in which thumbnails are recorded. <code>SEQUENTIAL</code> records all
   *       generated thumbnails in a serial manner, to the media/thumbnails directory.
   *         <code>LATEST</code> saves the latest thumbnail in media/latest_thumbnail/thumb.jpg and
   *       overwrites it at the interval specified by <code>targetIntervalSeconds</code>. You can enable
   *       both <code>SEQUENTIAL</code> and <code>LATEST</code>. Default: <code>SEQUENTIAL</code>.</p>
   * @public
   */
  storage?: ThumbnailConfigurationStorage[];
}

/**
 * @public
 */
export interface CreateRecordingConfigurationRequest {
  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where recorded video will be
   *       stored.</p>
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   * @public
   */
  thumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * <p>If a broadcast disconnects and then reconnects within the specified interval, the multiple
   *       streams will be considered a single broadcast and merged together. Default: 0.</p>
   * @public
   */
  recordingReconnectWindowSeconds?: number;

  /**
   * <p>Object that describes which renditions should be recorded for a stream.</p>
   * @public
   */
  renditionConfiguration?: RenditionConfiguration;
}

/**
 * @public
 * @enum
 */
export const RecordingConfigurationState = {
  Active: "ACTIVE",
  CreateFailed: "CREATE_FAILED",
  Creating: "CREATING",
} as const;

/**
 * @public
 */
export type RecordingConfigurationState =
  (typeof RecordingConfigurationState)[keyof typeof RecordingConfigurationState];

/**
 * <p>An object representing a configuration to record a channel stream.</p>
 * @public
 */
export interface RecordingConfiguration {
  /**
   * <p>Recording-configuration ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   * @public
   */
  state: RecordingConfigurationState | undefined;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   * @public
   */
  thumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * <p>If a broadcast disconnects and then reconnects within the specified interval, the multiple
   *       streams will be considered a single broadcast and merged together. Default: 0.</p>
   * @public
   */
  recordingReconnectWindowSeconds?: number;

  /**
   * <p>Object that describes which renditions should be recorded for a stream.</p>
   * @public
   */
  renditionConfiguration?: RenditionConfiguration;
}

/**
 * @public
 */
export interface CreateRecordingConfigurationResponse {
  /**
   *
   * @public
   */
  recordingConfiguration?: RecordingConfiguration;
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
 * @public
 */
export interface CreateStreamKeyRequest {
  /**
   * <p>ARN of the channel for which to create the stream key.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStreamKeyResponse {
  /**
   * <p>Stream key used to authenticate an RTMPS stream for ingestion.</p>
   * @public
   */
  streamKey?: StreamKey;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * <p>ARN of the channel to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaybackKeyPairResponse {}

/**
 * @public
 */
export interface DeletePlaybackRestrictionPolicyRequest {
  /**
   * <p>ARN of the playback restriction policy to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamKeyRequest {
  /**
   * <p>ARN of the stream key to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * <p>ARN of the channel for which the configuration is to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * <p/>
   * @public
   */
  channel?: Channel;
}

/**
 * @public
 */
export interface GetPlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be returned.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>A key pair used to sign and validate a playback authorization token.</p>
 * @public
 */
export interface PlaybackKeyPair {
  /**
   * <p>Key-pair ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Key-pair identifier.</p>
   * @public
   */
  fingerprint?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetPlaybackKeyPairResponse {
  /**
   *
   * @public
   */
  keyPair?: PlaybackKeyPair;
}

/**
 * @public
 */
export interface GetPlaybackRestrictionPolicyRequest {
  /**
   * <p>ARN of the playback restriction policy to be returned.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetPlaybackRestrictionPolicyResponse {
  /**
   * <p/>
   * @public
   */
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}

/**
 * @public
 */
export interface GetRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetRecordingConfigurationResponse {
  /**
   *
   * @public
   */
  recordingConfiguration?: RecordingConfiguration;
}

/**
 * <p/>
 * @public
 */
export class ChannelNotBroadcasting extends __BaseException {
  readonly name: "ChannelNotBroadcasting" = "ChannelNotBroadcasting";
  readonly $fault: "client" = "client";
  /**
   * <p>The stream is offline for the given channel ARN.</p>
   * @public
   */
  exceptionMessage?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelNotBroadcasting, __BaseException>) {
    super({
      name: "ChannelNotBroadcasting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelNotBroadcasting.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 */
export interface GetStreamRequest {
  /**
   * <p>Channel ARN for stream to be accessed.</p>
   * @public
   */
  channelArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamHealth = {
  Starving: "STARVING",
  StreamHealthy: "HEALTHY",
  Unknown: "UNKNOWN",
} as const;

/**
 * @public
 */
export type StreamHealth = (typeof StreamHealth)[keyof typeof StreamHealth];

/**
 * @public
 * @enum
 */
export const StreamState = {
  StreamLive: "LIVE",
  StreamOffline: "OFFLINE",
} as const;

/**
 * @public
 */
export type StreamState = (typeof StreamState)[keyof typeof StreamState];

/**
 * <p>Specifies a live video stream that has been ingested and distributed.</p>
 * @public
 */
export interface _Stream {
  /**
   * <p>Channel ARN for the stream.</p>
   * @public
   */
  channelArn?: string;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>URL of the master playlist, required by the video player to play the HLS stream.</p>
   * @public
   */
  playbackUrl?: string;

  /**
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The stream’s state. Do not rely on the <code>OFFLINE</code> state, as the API may not
   *       return it; instead, a "NotBroadcasting" error will indicate that the stream is not
   *       live.</p>
   * @public
   */
  state?: StreamState;

  /**
   * <p>The stream’s health.</p>
   * @public
   */
  health?: StreamHealth;

  /**
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   * @public
   */
  viewerCount?: number;
}

/**
 * @public
 */
export interface GetStreamResponse {
  /**
   * <p/>
   * @public
   */
  stream?: _Stream;
}

/**
 * @public
 */
export interface GetStreamKeyRequest {
  /**
   * <p>ARN for the stream key to be retrieved.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStreamKeyResponse {
  /**
   *
   * @public
   */
  streamKey?: StreamKey;
}

/**
 * @public
 */
export interface GetStreamSessionRequest {
  /**
   * <p>ARN of the channel resource</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel. If no
   *         <code>streamId</code> is provided, this returns the most recent stream session for the
   *       channel, if it exists.</p>
   * @public
   */
  streamId?: string;
}

/**
 * <p>Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in
 *       an encoder). This is part of the <a>IngestConfiguration</a> object and used for
 *       monitoring stream health.</p>
 * @public
 */
export interface AudioConfiguration {
  /**
   * <p>Codec used for the audio encoding.</p>
   * @public
   */
  codec?: string;

  /**
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   * @public
   */
  targetBitrate?: number;

  /**
   * <p>Number of audio samples recorded per second.</p>
   * @public
   */
  sampleRate?: number;

  /**
   * <p>Number of audio channels.</p>
   * @public
   */
  channels?: number;
}

/**
 * <p>Object specifying a stream’s video configuration, as set up by the broadcaster (usually in
 *       an encoder). This is part of the <a>IngestConfiguration</a> object and used for
 *       monitoring stream health.</p>
 * @public
 */
export interface VideoConfiguration {
  /**
   * <p>Indicates to the decoder the requirements for decoding the stream. For definitions of the
   *       valid values, see the H.264 specification.</p>
   * @public
   */
  avcProfile?: string;

  /**
   * <p>Indicates the degree of required decoder performance for a profile. Normally this is set
   *       automatically by the encoder. For details, see the H.264 specification.</p>
   * @public
   */
  avcLevel?: string;

  /**
   * <p>Codec used for the video encoding.</p>
   * @public
   */
  codec?: string;

  /**
   * <p>Software or hardware used to encode the video.</p>
   * @public
   */
  encoder?: string;

  /**
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   * @public
   */
  targetBitrate?: number;

  /**
   * <p>The expected ingest framerate. This is configured in the encoder.</p>
   * @public
   */
  targetFramerate?: number;

  /**
   * <p>Video-resolution height in pixels.</p>
   * @public
   */
  videoHeight?: number;

  /**
   * <p>Video-resolution width in pixels.</p>
   * @public
   */
  videoWidth?: number;
}

/**
 * <p>Object specifying the ingest configuration set up by the broadcaster, usually in an
 *       encoder.</p>
 * @public
 */
export interface IngestConfiguration {
  /**
   * <p>Encoder settings for video.</p>
   * @public
   */
  video?: VideoConfiguration;

  /**
   * <p>Encoder settings for audio.</p>
   * @public
   */
  audio?: AudioConfiguration;
}

/**
 * <p>Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
 *       IVS</a>.</p>
 * @public
 */
export interface StreamEvent {
  /**
   * <p>Name that identifies the stream event within a <code>type</code>.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Logical group for certain events.</p>
   * @public
   */
  type?: string;

  /**
   * <p>Time when the event occurred. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>.</p>
   * @public
   */
  eventTime?: Date;
}

/**
 * <p>Object that captures the Amazon IVS configuration that the customer provisioned, the
 *       ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events
 *       it encountered.</p>
 * @public
 */
export interface StreamSession {
  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this
   *         is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that
   *         this is returned as a string</i>. For live streams, this is <code>NULL</code>.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The properties of the channel at the time of going live.</p>
   * @public
   */
  channel?: Channel;

  /**
   * <p>The properties of the incoming RTMP stream for the stream.</p>
   * @public
   */
  ingestConfiguration?: IngestConfiguration;

  /**
   * <p>The properties of recording the live stream.</p>
   * @public
   */
  recordingConfiguration?: RecordingConfiguration;

  /**
   * <p>List of Amazon IVS events that the stream encountered. The list is sorted by most recent
   *       events and contains up to 500 events. For Amazon IVS events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
   *       IVS</a>.</p>
   * @public
   */
  truncatedEvents?: StreamEvent[];
}

/**
 * @public
 */
export interface GetStreamSessionResponse {
  /**
   * <p>List of stream details.</p>
   * @public
   */
  streamSession?: StreamSession;
}

/**
 * @public
 */
export interface ImportPlaybackKeyPairRequest {
  /**
   * <p>The public portion of a customer-generated key pair.</p>
   * @public
   */
  publicKeyMaterial: string | undefined;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ImportPlaybackKeyPairResponse {
  /**
   * <p/>
   * @public
   */
  keyPair?: PlaybackKeyPair;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>Filters the channel list to match the specified name.</p>
   * @public
   */
  filterByName?: string;

  /**
   * <p>Filters the channel list to match the specified recording-configuration ARN.</p>
   * @public
   */
  filterByRecordingConfigurationArn?: string;

  /**
   * <p>Filters the channel list to match the specified policy.</p>
   * @public
   */
  filterByPlaybackRestrictionPolicyArn?: string;

  /**
   * <p>The first channel to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of channels to return. Default: 100.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a channel.</p>
 * @public
 */
export interface ChannelSummary {
  /**
   * <p>Channel ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Channel name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>.</p>
   * @public
   */
  latencyMode?: ChannelLatencyMode;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   * @public
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording.
   *       Default: "" (empty string, recording is disabled).</p>
   * @public
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   * @public
   */
  insecureIngest?: boolean;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. For details, see <a href="https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/channel-types.html">Channel
   *         Types</a>.</p>
   * @public
   */
  type?: ChannelType;

  /**
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   * @public
   */
  preset?: TranscodePreset;

  /**
   * <p>Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction.
   *     Default: "" (empty string, no playback restriction policy is applied).</p>
   * @public
   */
  playbackRestrictionPolicyArn?: string;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>List of the matching channels.</p>
   * @public
   */
  channels: ChannelSummary[] | undefined;

  /**
   * <p>If there are more channels than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPlaybackKeyPairsRequest {
  /**
   * <p>The first key pair to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of key pairs to return. Default: your service quota or 100, whichever is
   *       smaller.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a playback key pair.</p>
 * @public
 */
export interface PlaybackKeyPairSummary {
  /**
   * <p>Key-pair ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListPlaybackKeyPairsResponse {
  /**
   * <p>List of key pairs.</p>
   * @public
   */
  keyPairs: PlaybackKeyPairSummary[] | undefined;

  /**
   * <p>If there are more key pairs than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPlaybackRestrictionPoliciesRequest {
  /**
   * <p>The first policy to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of policies to return. Default: 1.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a PlaybackRestrictionPolicy.</p>
 * @public
 */
export interface PlaybackRestrictionPolicySummary {
  /**
   * <p>Playback-restriction-policy ARN</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A list of country codes that control geoblocking restriction. Allowed values are the
   *       officially assigned <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1
   *         alpha-2</a> codes. Default: All countries (an empty array).</p>
   * @public
   */
  allowedCountries: string[] | undefined;

  /**
   * <p>A list of origin sites that control CORS restriction. Allowed values are the same as valid
   *       values of the Origin header defined at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin</a>. Default: All origins (an empty array).</p>
   * @public
   */
  allowedOrigins: string[] | undefined;

  /**
   * <p>Whether channel playback is constrained by origin site. Default:
   *       <code>false</code>.</p>
   * @public
   */
  enableStrictOriginEnforcement?: boolean;

  /**
   * <p>Playback-restriction-policy name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListPlaybackRestrictionPoliciesResponse {
  /**
   * <p>List of the matching policies.</p>
   * @public
   */
  playbackRestrictionPolicies: PlaybackRestrictionPolicySummary[] | undefined;

  /**
   * <p>If there are more channels than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRecordingConfigurationsRequest {
  /**
   * <p>The first recording configuration to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of recording configurations to return. Default: your service quota or 100,
   *       whichever is smaller. </p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a RecordingConfiguration.</p>
 * @public
 */
export interface RecordingConfigurationSummary {
  /**
   * <p>Recording-configuration ARN.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   * @public
   */
  state: RecordingConfigurationState | undefined;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListRecordingConfigurationsResponse {
  /**
   * <p>List of the matching recording configurations.</p>
   * @public
   */
  recordingConfigurations: RecordingConfigurationSummary[] | undefined;

  /**
   * <p>If there are more recording configurations than <code>maxResults</code>, use
   *         <code>nextToken</code> in the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStreamKeysRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The first stream key to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streamKeys to return. Default: 1.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stream key.</p>
 * @public
 */
export interface StreamKeySummary {
  /**
   * <p>Stream-key ARN.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>Channel ARN for the stream.</p>
   * @public
   */
  channelArn?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStreamKeysResponse {
  /**
   * <p>List of stream keys.</p>
   * @public
   */
  streamKeys: StreamKeySummary[] | undefined;

  /**
   * <p>If there are more stream keys than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Object specifying the stream attribute on which to filter.</p>
 * @public
 */
export interface StreamFilters {
  /**
   * <p>The stream’s health.</p>
   * @public
   */
  health?: StreamHealth;
}

/**
 * @public
 */
export interface ListStreamsRequest {
  /**
   * <p>Filters the stream list to match the specified criterion.</p>
   * @public
   */
  filterBy?: StreamFilters;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 100.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stream.</p>
 * @public
 */
export interface StreamSummary {
  /**
   * <p>Channel ARN for the stream.</p>
   * @public
   */
  channelArn?: string;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>The stream’s state. Do not rely on the <code>OFFLINE</code> state, as the API may not
   *       return it; instead, a "NotBroadcasting" error will indicate that the stream is not
   *       live.</p>
   * @public
   */
  state?: StreamState;

  /**
   * <p>The stream’s health.</p>
   * @public
   */
  health?: StreamHealth;

  /**
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   * @public
   */
  viewerCount?: number;

  /**
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   * @public
   */
  startTime?: Date;
}

/**
 * @public
 */
export interface ListStreamsResponse {
  /**
   * <p>List of streams.</p>
   * @public
   */
  streams: StreamSummary[] | undefined;

  /**
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStreamSessionsRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 100.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stream session.</p>
 * @public
 */
export interface StreamSessionSummary {
  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this
   *         is returned as a string</i>.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that
   *         this is returned as a string</i>. For live streams, this is <code>NULL</code>.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>If <code>true</code>, this stream encountered a quota breach or failure.</p>
   * @public
   */
  hasErrorEvent?: boolean;
}

/**
 * @public
 */
export interface ListStreamSessionsResponse {
  /**
   * <p>List of stream sessions.</p>
   * @public
   */
  streamSessions: StreamSessionSummary[] | undefined;

  /**
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
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
   *         (key:value)</code>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutMetadataRequest {
  /**
   * <p>ARN of the channel into which metadata is inserted. This channel must have an active
   *       stream.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>Metadata to insert into the stream. Maximum: 1 KB per request.</p>
   * @public
   */
  metadata: string | undefined;
}

/**
 * @public
 */
export interface StartViewerSessionRevocationRequest {
  /**
   * <p>The ARN of the channel associated with the viewer session to revoke.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The ID of the viewer associated with the viewer session to revoke. Do not use this field
   *       for personally identifying, confidential, or sensitive information.</p>
   * @public
   */
  viewerId: string | undefined;

  /**
   * <p>An optional filter on which versions of the viewer session to revoke. All versions less
   *       than or equal to the specified version will be revoked. Default: 0.</p>
   * @public
   */
  viewerSessionVersionsLessThanOrEqualTo?: number;
}

/**
 * @public
 */
export interface StartViewerSessionRevocationResponse {}

/**
 * @public
 */
export interface StopStreamRequest {
  /**
   * <p>ARN of the channel for which the stream is to be stopped.</p>
   * @public
   */
  channelArn: string | undefined;
}

/**
 * @public
 */
export interface StopStreamResponse {}

/**
 * <p/>
 * @public
 */
export class StreamUnavailable extends __BaseException {
  readonly name: "StreamUnavailable" = "StreamUnavailable";
  readonly $fault: "server" = "server";
  /**
   * <p>The stream is temporarily unavailable.</p>
   * @public
   */
  exceptionMessage?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamUnavailable, __BaseException>) {
    super({
      name: "StreamUnavailable",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamUnavailable.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be added or updated. The ARN must be
   *       URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
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
   * <p>ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
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
export interface UpdateChannelRequest {
  /**
   * <p>ARN of the channel to be updated.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Channel name.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers.</p>
   * @public
   */
  latencyMode?: ChannelLatencyMode;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. For details, see <a href="https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/channel-types.html">Channel
   *         Types</a>.</p>
   * @public
   */
  type?: ChannelType;

  /**
   * <p>Whether the channel is private (enabled for playback authorization).</p>
   * @public
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. A valid ARN value here both specifies the ARN and enables recording.
   *     If this is set to an empty string, recording is disabled.</p>
   * @public
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   * @public
   */
  insecureIngest?: boolean;

  /**
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   * @public
   */
  preset?: TranscodePreset;

  /**
   * <p>Playback-restriction-policy ARN. A valid ARN value here both specifies the ARN and enables playback restriction.
   *      If this is set to an empty string, playback restriction policy is disabled.</p>
   * @public
   */
  playbackRestrictionPolicyArn?: string;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>Object specifying the updated channel.</p>
   * @public
   */
  channel?: Channel;
}

/**
 * @public
 */
export interface UpdatePlaybackRestrictionPolicyRequest {
  /**
   * <p>ARN of the playback-restriction-policy to be updated.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A list of country codes that control geoblocking restriction. Allowed values are the
   *       officially assigned <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1
   *         alpha-2</a> codes. Default: All countries (an empty array).</p>
   * @public
   */
  allowedCountries?: string[];

  /**
   * <p>A list of origin sites that control CORS restriction. Allowed values are the same as valid
   *       values of the Origin header defined at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin">https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin</a>. Default: All
   *       origins (an empty array).</p>
   * @public
   */
  allowedOrigins?: string[];

  /**
   * <p>Whether channel playback is constrained by origin site. Default:
   *       <code>false</code>.</p>
   * @public
   */
  enableStrictOriginEnforcement?: boolean;

  /**
   * <p>Playback-restriction-policy name. The value does not need to be unique.</p>
   * @public
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdatePlaybackRestrictionPolicyResponse {
  /**
   * <p>Object specifying the updated policy.</p>
   * @public
   */
  playbackRestrictionPolicy?: PlaybackRestrictionPolicy;
}

/**
 * @internal
 */
export const StreamKeyFilterSensitiveLog = (obj: StreamKey): any => ({
  ...obj,
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetStreamKeyResponseFilterSensitiveLog = (obj: BatchGetStreamKeyResponse): any => ({
  ...obj,
  ...(obj.streamKeys && { streamKeys: obj.streamKeys.map((item) => StreamKeyFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateChannelResponseFilterSensitiveLog = (obj: CreateChannelResponse): any => ({
  ...obj,
  ...(obj.streamKey && { streamKey: StreamKeyFilterSensitiveLog(obj.streamKey) }),
});

/**
 * @internal
 */
export const CreateStreamKeyResponseFilterSensitiveLog = (obj: CreateStreamKeyResponse): any => ({
  ...obj,
  ...(obj.streamKey && { streamKey: StreamKeyFilterSensitiveLog(obj.streamKey) }),
});

/**
 * @internal
 */
export const GetStreamKeyResponseFilterSensitiveLog = (obj: GetStreamKeyResponse): any => ({
  ...obj,
  ...(obj.streamKey && { streamKey: StreamKeyFilterSensitiveLog(obj.streamKey) }),
});

/**
 * @internal
 */
export const PutMetadataRequestFilterSensitiveLog = (obj: PutMetadataRequest): any => ({
  ...obj,
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});
