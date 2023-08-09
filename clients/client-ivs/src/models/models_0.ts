// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IvsServiceException as __BaseException } from "./IvsServiceException";

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
 */
export interface BatchGetChannelRequest {
  /**
   * @public
   * <p>Array of ARNs, one per channel.</p>
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
 * @public
 * <p>Object specifying a channel.</p>
 */
export interface Channel {
  /**
   * @public
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code>
   *       correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * @public
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Some types generate multiple qualities (renditions) from the
   *       original input; this automatically gives viewers the best experience for their devices and
   *       network conditions. Some types provide transcoded video; transcoding allows higher playback
   *       quality across a range of download speeds. Default: <code>STANDARD</code>. Valid
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input
   *           quality to viewers. The viewer’s video-quality choice is limited to the original input.
   *           Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to
   *           3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default when you create a channel.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at SD quality (480p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at HD quality (720p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code>
   *       types) allow you to trade off available download bandwidth and video quality, to optimize the
   *       viewing experience. There are two presets:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Constrained bandwidth delivery</i> uses a lower bitrate for each
   *           quality level. Use it if you have low download bandwidth and/or simple video content
   *           (e.g., talking heads)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality
   *           level. Use it if you have high download bandwidth and/or complex video content (e.g.,
   *           flashes and quick scene changes).</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * @public
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * @public
   * <p>Channel ingest endpoint, part of the definition of an ingest server, used when you set up
   *       streaming software.</p>
   */
  ingestEndpoint?: string;

  /**
   * @public
   * <p>Channel playback URL.</p>
   */
  playbackUrl?: string;

  /**
   * @public
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   */
  insecureIngest?: boolean;

  /**
   * @public
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   */
  preset?: TranscodePreset | string;
}

/**
 * @public
 * <p>Error related to a specific channel, specified by its ARN.</p>
 */
export interface BatchError {
  /**
   * @public
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Error code.</p>
   */
  code?: string;

  /**
   * @public
   * <p>Error message, determined by the application.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface BatchGetChannelResponse {
  /**
   * @public
   * <p/>
   */
  channels?: Channel[];

  /**
   * @public
   * <p>Each error object is related to a specific ARN in the request.</p>
   */
  errors?: BatchError[];
}

/**
 * @public
 */
export interface BatchGetStreamKeyRequest {
  /**
   * @public
   * <p>Array of ARNs, one per stream key.</p>
   */
  arns: string[] | undefined;
}

/**
 * @public
 * <p>Object specifying a stream key.</p>
 */
export interface StreamKey {
  /**
   * @public
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Stream-key value.</p>
   */
  value?: string;

  /**
   * @public
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface BatchGetStreamKeyResponse {
  /**
   * @public
   * <p/>
   */
  streamKeys?: StreamKey[];

  /**
   * @public
   * <p/>
   */
  errors?: BatchError[];
}

/**
 * @public
 * <p>A viewer session to revoke in the call to <a>BatchStartViewerSessionRevocation</a>.</p>
 */
export interface BatchStartViewerSessionRevocationViewerSession {
  /**
   * @public
   * <p>The ARN of the channel associated with the viewer session to revoke.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the viewer associated with the viewer session to revoke. Do not use this field
   *       for personally identifying, confidential, or sensitive information.</p>
   */
  viewerId: string | undefined;

  /**
   * @public
   * <p>An optional filter on which versions of the viewer session to revoke. All versions less
   *       than or equal to the specified version will be revoked. Default: 0.</p>
   */
  viewerSessionVersionsLessThanOrEqualTo?: number;
}

/**
 * @public
 */
export interface BatchStartViewerSessionRevocationRequest {
  /**
   * @public
   * <p>Array of viewer sessions, one per channel-ARN and viewer-ID pair.</p>
   */
  viewerSessions: BatchStartViewerSessionRevocationViewerSession[] | undefined;
}

/**
 * @public
 * <p>Error for a request in the batch for BatchStartViewerSessionRevocation. Each error is
 *       related to a specific channel-ARN and viewer-ID pair.</p>
 */
export interface BatchStartViewerSessionRevocationError {
  /**
   * @public
   * <p>Channel ARN.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the viewer session to revoke.</p>
   */
  viewerId: string | undefined;

  /**
   * @public
   * <p>Error code.</p>
   */
  code?: string;

  /**
   * @public
   * <p>Error message, determined by the application.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface BatchStartViewerSessionRevocationResponse {
  /**
   * @public
   * <p>Each error object is related to a specific <code>channelArn</code> and
   *         <code>viewerId</code> pair in the request.</p>
   */
  errors?: BatchStartViewerSessionRevocationError[];
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
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Request was denied due to request throttling.</p>
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
 */
export interface CreateChannelRequest {
  /**
   * @public
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and
   *       Standard, respectively.) Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * @public
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Some types generate multiple qualities (renditions) from the
   *       original input; this automatically gives viewers the best experience for their devices and
   *       network conditions. Some types provide transcoded video; transcoding allows higher playback
   *       quality across a range of download speeds. Default: <code>STANDARD</code>. Valid
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input
   *           quality to viewers. The viewer’s video-quality choice is limited to the original input.
   *           Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to
   *           3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default when you create a channel.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at SD quality (480p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at HD quality (720p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code>
   *       types) allow you to trade off available download bandwidth and video quality, to optimize the
   *       viewing experience. There are two presets:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Constrained bandwidth delivery</i> uses a lower bitrate for each
   *           quality level. Use it if you have low download bandwidth and/or simple video content
   *           (e.g., talking heads)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality
   *           level. Use it if you have high download bandwidth and/or complex video content (e.g.,
   *           flashes and quick scene changes).</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * @public
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * @public
   * <p>Recording-configuration ARN. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * @public
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   */
  insecureIngest?: boolean;

  /**
   * @public
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   */
  preset?: TranscodePreset | string;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * @public
   * <p/>
   */
  channel?: Channel;

  /**
   * @public
   * <p/>
   */
  streamKey?: StreamKey;
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
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * @public
   * <p>Location (S3 bucket name) where recorded videos will be stored.</p>
   */
  bucketName: string | undefined;
}

/**
 * @public
 * <p>A complex type that describes a location where recorded videos will be stored. Each member
 *       represents a type of destination configuration. For recording, you define one and only one
 *       type of destination configuration.</p>
 */
export interface DestinationConfiguration {
  /**
   * @public
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
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
 * @public
 * <p>Object that describes which renditions should be recorded for a stream.</p>
 */
export interface RenditionConfiguration {
  /**
   * @public
   * <p>Indicates which set of renditions are recorded for a stream. For <code>BASIC</code>
   *       channels, the <code>CUSTOM</code> value has no effect. If <code>CUSTOM</code> is specified, a
   *       set of renditions must be specified in the <code>renditions</code> field. Default:
   *         <code>ALL</code>.</p>
   */
  renditionSelection?: RenditionConfigurationRenditionSelection | string;

  /**
   * @public
   * <p>Indicates which renditions are recorded for a stream, if <code>renditionSelection</code>
   *       is <code>CUSTOM</code>; otherwise, this field is irrelevant. The selected renditions are
   *       recorded if they are available during the stream. If a selected rendition is unavailable, the
   *       best available rendition is recorded. For details on the resolution dimensions of each
   *       rendition, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/record-to-s3.html">Auto-Record to Amazon S3</a>.</p>
   */
  renditions?: (RenditionConfigurationRendition | string)[];
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
 * @public
 * <p>An object representing a configuration of thumbnails for recorded video.</p>
 */
export interface ThumbnailConfiguration {
  /**
   * @public
   * <p>Thumbnail recording mode. Default: <code>INTERVAL</code>.</p>
   */
  recordingMode?: RecordingMode | string;

  /**
   * @public
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
   */
  targetIntervalSeconds?: number;

  /**
   * @public
   * <p>Indicates the desired resolution of recorded thumbnails. Thumbnails are recorded at the
   *       selected resolution if the corresponding rendition is available during the stream; otherwise,
   *       they are recorded at source resolution. For more information about resolution values and their
   *       corresponding height and width dimensions, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/record-to-s3.html">Auto-Record to Amazon S3</a>. Default:
   *       Null (source resolution is returned).</p>
   */
  resolution?: ThumbnailConfigurationResolution | string;

  /**
   * @public
   * <p>Indicates the format in which thumbnails are recorded. <code>SEQUENTIAL</code> records all
   *       generated thumbnails in a serial manner, to the media/thumbnails directory.
   *         <code>LATEST</code> saves the latest thumbnail in media/latest_thumbnail/thumb.jpg and
   *       overwrites it at the interval specified by <code>targetIntervalSeconds</code>. You can enable
   *       both <code>SEQUENTIAL</code> and <code>LATEST</code>. Default: <code>SEQUENTIAL</code>.</p>
   */
  storage?: (ThumbnailConfigurationStorage | string)[];
}

/**
 * @public
 */
export interface CreateRecordingConfigurationRequest {
  /**
   * @public
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A complex type that contains a destination configuration for where recorded video will be
   *       stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * @public
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   */
  thumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * @public
   * <p>If a broadcast disconnects and then reconnects within the specified interval, the multiple
   *       streams will be considered a single broadcast and merged together. Default: 0.</p>
   */
  recordingReconnectWindowSeconds?: number;

  /**
   * @public
   * <p>Object that describes which renditions should be recorded for a stream.</p>
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
 * @public
 * <p>An object representing a configuration to record a channel stream.</p>
 */
export interface RecordingConfiguration {
  /**
   * @public
   * <p>Recording-configuration ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * @public
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   */
  thumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * @public
   * <p>If a broadcast disconnects and then reconnects within the specified interval, the multiple
   *       streams will be considered a single broadcast and merged together. Default: 0.</p>
   */
  recordingReconnectWindowSeconds?: number;

  /**
   * @public
   * <p>Object that describes which renditions should be recorded for a stream.</p>
   */
  renditionConfiguration?: RenditionConfiguration;
}

/**
 * @public
 */
export interface CreateRecordingConfigurationResponse {
  /**
   * @public
   *
   */
  recordingConfiguration?: RecordingConfiguration;
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
 */
export interface CreateStreamKeyRequest {
  /**
   * @public
   * <p>ARN of the channel for which to create the stream key.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStreamKeyResponse {
  /**
   * @public
   * <p>Stream key used to authenticate an RTMPS stream for ingestion.</p>
   */
  streamKey?: StreamKey;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * @public
   * <p>ARN of the channel to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeletePlaybackKeyPairRequest {
  /**
   * @public
   * <p>ARN of the key pair to be deleted.</p>
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
export interface DeleteRecordingConfigurationRequest {
  /**
   * @public
   * <p>ARN of the recording configuration to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamKeyRequest {
  /**
   * @public
   * <p>ARN of the stream key to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * @public
   * <p>ARN of the channel for which the configuration is to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * @public
   * <p/>
   */
  channel?: Channel;
}

/**
 * @public
 */
export interface GetPlaybackKeyPairRequest {
  /**
   * @public
   * <p>ARN of the key pair to be returned.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>A key pair used to sign and validate a playback authorization token.</p>
 */
export interface PlaybackKeyPair {
  /**
   * @public
   * <p>Key-pair ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Key-pair identifier.</p>
   */
  fingerprint?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetPlaybackKeyPairResponse {
  /**
   * @public
   *
   */
  keyPair?: PlaybackKeyPair;
}

/**
 * @public
 */
export interface GetRecordingConfigurationRequest {
  /**
   * @public
   * <p>ARN of the recording configuration to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetRecordingConfigurationResponse {
  /**
   * @public
   *
   */
  recordingConfiguration?: RecordingConfiguration;
}

/**
 * @public
 * <p/>
 */
export class ChannelNotBroadcasting extends __BaseException {
  readonly name: "ChannelNotBroadcasting" = "ChannelNotBroadcasting";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The stream is offline for the given channel ARN.</p>
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
   * @public
   * <p>Channel ARN for stream to be accessed.</p>
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
 * @public
 * <p>Specifies a live video stream that has been ingested and distributed.</p>
 */
export interface _Stream {
  /**
   * @public
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * @public
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>URL of the master playlist, required by the video player to play the HLS stream.</p>
   */
  playbackUrl?: string;

  /**
   * @public
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The stream’s state. Do not rely on the <code>OFFLINE</code> state, as the API may not
   *       return it; instead, a "NotBroadcasting" error will indicate that the stream is not
   *       live.</p>
   */
  state?: StreamState | string;

  /**
   * @public
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * @public
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   */
  viewerCount?: number;
}

/**
 * @public
 */
export interface GetStreamResponse {
  /**
   * @public
   * <p/>
   */
  stream?: _Stream;
}

/**
 * @public
 */
export interface GetStreamKeyRequest {
  /**
   * @public
   * <p>ARN for the stream key to be retrieved.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetStreamKeyResponse {
  /**
   * @public
   *
   */
  streamKey?: StreamKey;
}

/**
 * @public
 */
export interface GetStreamSessionRequest {
  /**
   * @public
   * <p>ARN of the channel resource</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>Unique identifier for a live or previously live stream in the specified channel. If no
   *         <code>streamId</code> is provided, this returns the most recent stream session for the
   *       channel, if it exists.</p>
   */
  streamId?: string;
}

/**
 * @public
 * <p>Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in
 *       an encoder). This is part of the <a>IngestConfiguration</a> object and used for
 *       monitoring stream health.</p>
 */
export interface AudioConfiguration {
  /**
   * @public
   * <p>Codec used for the audio encoding.</p>
   */
  codec?: string;

  /**
   * @public
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   */
  targetBitrate?: number;

  /**
   * @public
   * <p>Number of audio samples recorded per second.</p>
   */
  sampleRate?: number;

  /**
   * @public
   * <p>Number of audio channels.</p>
   */
  channels?: number;
}

/**
 * @public
 * <p>Object specifying a stream’s video configuration, as set up by the broadcaster (usually in
 *       an encoder). This is part of the <a>IngestConfiguration</a> object and used for
 *       monitoring stream health.</p>
 */
export interface VideoConfiguration {
  /**
   * @public
   * <p>Indicates to the decoder the requirements for decoding the stream. For definitions of the
   *       valid values, see the H.264 specification.</p>
   */
  avcProfile?: string;

  /**
   * @public
   * <p>Indicates the degree of required decoder performance for a profile. Normally this is set
   *       automatically by the encoder. For details, see the H.264 specification.</p>
   */
  avcLevel?: string;

  /**
   * @public
   * <p>Codec used for the video encoding.</p>
   */
  codec?: string;

  /**
   * @public
   * <p>Software or hardware used to encode the video.</p>
   */
  encoder?: string;

  /**
   * @public
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   */
  targetBitrate?: number;

  /**
   * @public
   * <p>The expected ingest framerate. This is configured in the encoder.</p>
   */
  targetFramerate?: number;

  /**
   * @public
   * <p>Video-resolution height in pixels.</p>
   */
  videoHeight?: number;

  /**
   * @public
   * <p>Video-resolution width in pixels.</p>
   */
  videoWidth?: number;
}

/**
 * @public
 * <p>Object specifying the ingest configuration set up by the broadcaster, usually in an
 *       encoder.</p>
 */
export interface IngestConfiguration {
  /**
   * @public
   * <p>Encoder settings for video.</p>
   */
  video?: VideoConfiguration;

  /**
   * @public
   * <p>Encoder settings for audio.</p>
   */
  audio?: AudioConfiguration;
}

/**
 * @public
 * <p>Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
 *       IVS</a>.</p>
 */
export interface StreamEvent {
  /**
   * @public
   * <p>Name that identifies the stream event within a <code>type</code>.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Logical group for certain events.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Time when the event occurred. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>.</p>
   */
  eventTime?: Date;
}

/**
 * @public
 * <p>Object that captures the Amazon IVS configuration that the customer provisioned, the
 *       ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events
 *       it encountered.</p>
 */
export interface StreamSession {
  /**
   * @public
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this
   *         is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that
   *         this is returned as a string</i>. For live streams, this is <code>NULL</code>.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The properties of the channel at the time of going live.</p>
   */
  channel?: Channel;

  /**
   * @public
   * <p>The properties of the incoming RTMP stream for the stream.</p>
   */
  ingestConfiguration?: IngestConfiguration;

  /**
   * @public
   * <p>The properties of recording the live stream.</p>
   */
  recordingConfiguration?: RecordingConfiguration;

  /**
   * @public
   * <p>List of Amazon IVS events that the stream encountered. The list is sorted by most recent
   *       events and contains up to 500 events. For Amazon IVS events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
   *       IVS</a>.</p>
   */
  truncatedEvents?: StreamEvent[];
}

/**
 * @public
 */
export interface GetStreamSessionResponse {
  /**
   * @public
   * <p>List of stream details.</p>
   */
  streamSession?: StreamSession;
}

/**
 * @public
 */
export interface ImportPlaybackKeyPairRequest {
  /**
   * @public
   * <p>The public portion of a customer-generated key pair.</p>
   */
  publicKeyMaterial: string | undefined;

  /**
   * @public
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *         Resources</a> for more information, including restrictions that apply to tags and "Tag
   *       naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is
   *       documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ImportPlaybackKeyPairResponse {
  /**
   * @public
   * <p/>
   */
  keyPair?: PlaybackKeyPair;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * @public
   * <p>Filters the channel list to match the specified name.</p>
   */
  filterByName?: string;

  /**
   * @public
   * <p>Filters the channel list to match the specified recording-configuration ARN.</p>
   */
  filterByRecordingConfigurationArn?: string;

  /**
   * @public
   * <p>The first channel to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of channels to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a channel.</p>
 */
export interface ChannelSummary {
  /**
   * @public
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code>
   *       correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * @public
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * @public
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   */
  insecureIngest?: boolean;

  /**
   * @public
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Some types generate multiple qualities (renditions) from the
   *       original input; this automatically gives viewers the best experience for their devices and
   *       network conditions. Some types provide transcoded video; transcoding allows higher playback
   *       quality across a range of download speeds. Default: <code>STANDARD</code>. Valid
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input
   *           quality to viewers. The viewer’s video-quality choice is limited to the original input.
   *           Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to
   *           3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default when you create a channel.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at SD quality (480p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at HD quality (720p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code>
   *       types) allow you to trade off available download bandwidth and video quality, to optimize the
   *       viewing experience. There are two presets:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Constrained bandwidth delivery</i> uses a lower bitrate for each
   *           quality level. Use it if you have low download bandwidth and/or simple video content
   *           (e.g., talking heads)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality
   *           level. Use it if you have high download bandwidth and/or complex video content (e.g.,
   *           flashes and quick scene changes).</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * @public
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   */
  preset?: TranscodePreset | string;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * @public
   * <p>List of the matching channels.</p>
   */
  channels: ChannelSummary[] | undefined;

  /**
   * @public
   * <p>If there are more channels than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPlaybackKeyPairsRequest {
  /**
   * @public
   * <p>The first key pair to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of key pairs to return. Default: your service quota or 100, whichever is
   *       smaller.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a playback key pair.</p>
 */
export interface PlaybackKeyPairSummary {
  /**
   * @public
   * <p>Key-pair ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListPlaybackKeyPairsResponse {
  /**
   * @public
   * <p>List of key pairs.</p>
   */
  keyPairs: PlaybackKeyPairSummary[] | undefined;

  /**
   * @public
   * <p>If there are more key pairs than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRecordingConfigurationsRequest {
  /**
   * @public
   * <p>The first recording configuration to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of recording configurations to return. Default: your service quota or 100,
   *       whichever is smaller. </p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a RecordingConfiguration.</p>
 */
export interface RecordingConfigurationSummary {
  /**
   * @public
   * <p>Recording-configuration ARN.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * @public
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListRecordingConfigurationsResponse {
  /**
   * @public
   * <p>List of the matching recording configurations.</p>
   */
  recordingConfigurations: RecordingConfigurationSummary[] | undefined;

  /**
   * @public
   * <p>If there are more recording configurations than <code>maxResults</code>, use
   *         <code>nextToken</code> in the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStreamKeysRequest {
  /**
   * @public
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>The first stream key to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of streamKeys to return. Default: 1.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stream key.</p>
 */
export interface StreamKeySummary {
  /**
   * @public
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * @public
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListStreamKeysResponse {
  /**
   * @public
   * <p>List of stream keys.</p>
   */
  streamKeys: StreamKeySummary[] | undefined;

  /**
   * @public
   * <p>If there are more stream keys than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Object specifying the stream attribute on which to filter.</p>
 */
export interface StreamFilters {
  /**
   * @public
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;
}

/**
 * @public
 */
export interface ListStreamsRequest {
  /**
   * @public
   * <p>Filters the stream list to match the specified criterion.</p>
   */
  filterBy?: StreamFilters;

  /**
   * @public
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of streams to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stream.</p>
 */
export interface StreamSummary {
  /**
   * @public
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * @public
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>The stream’s state. Do not rely on the <code>OFFLINE</code> state, as the API may not
   *       return it; instead, a "NotBroadcasting" error will indicate that the stream is not
   *       live.</p>
   */
  state?: StreamState | string;

  /**
   * @public
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * @public
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   */
  viewerCount?: number;

  /**
   * @public
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   */
  startTime?: Date;
}

/**
 * @public
 */
export interface ListStreamsResponse {
  /**
   * @public
   * <p>List of streams.</p>
   */
  streams: StreamSummary[] | undefined;

  /**
   * @public
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStreamSessionsRequest {
  /**
   * @public
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of streams to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about a stream session.</p>
 */
export interface StreamSessionSummary {
  /**
   * @public
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this
   *         is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that
   *         this is returned as a string</i>. For live streams, this is <code>NULL</code>.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>If <code>true</code>, this stream encountered a quota breach or failure.</p>
   */
  hasErrorEvent?: boolean;
}

/**
 * @public
 */
export interface ListStreamSessionsResponse {
  /**
   * @public
   * <p>List of stream sessions.</p>
   */
  streamSessions: StreamSessionSummary[] | undefined;

  /**
   * @public
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
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
   *         (key:value)</code>.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutMetadataRequest {
  /**
   * @public
   * <p>ARN of the channel into which metadata is inserted. This channel must have an active
   *       stream.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>Metadata to insert into the stream. Maximum: 1 KB per request.</p>
   */
  metadata: string | undefined;
}

/**
 * @public
 */
export interface StartViewerSessionRevocationRequest {
  /**
   * @public
   * <p>The ARN of the channel associated with the viewer session to revoke.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the viewer associated with the viewer session to revoke. Do not use this field
   *       for personally identifying, confidential, or sensitive information.</p>
   */
  viewerId: string | undefined;

  /**
   * @public
   * <p>An optional filter on which versions of the viewer session to revoke. All versions less
   *       than or equal to the specified version will be revoked. Default: 0.</p>
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
   * @public
   * <p>ARN of the channel for which the stream is to be stopped.</p>
   */
  channelArn: string | undefined;
}

/**
 * @public
 */
export interface StopStreamResponse {}

/**
 * @public
 * <p/>
 */
export class StreamUnavailable extends __BaseException {
  readonly name: "StreamUnavailable" = "StreamUnavailable";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The stream is temporarily unavailable.</p>
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
   * @public
   * <p>ARN of the resource for which tags are to be added or updated. The ARN must be
   *       URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be added or updated. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
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
   * <p>ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Array of tags to be removed. Array of maps, each of the form s<code>tring:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions
   *       that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no
   *       service-specific constraints beyond what is documented there.</p>
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
   * @public
   * <p>ARN of the channel to be updated.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and
   *       Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * @public
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable input resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Some types generate multiple qualities (renditions) from the
   *       original input; this automatically gives viewers the best experience for their devices and
   *       network conditions. Some types provide transcoded video; transcoding allows higher playback
   *       quality across a range of download speeds. Default: <code>STANDARD</code>. Valid
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input
   *           quality to viewers. The viewer’s video-quality choice is limited to the original input.
   *           Input resolution can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to
   *           3.5 Mbps for resolutions between 480p and 1080p. Original audio is passed through.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default when you create a channel.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_SD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at SD quality (480p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADVANCED_HD</code>: Video is transcoded; multiple qualities are generated from
   *           the original input, to automatically give viewers the best experience for their devices
   *           and network conditions. Input resolution can be up to 1080p and bitrate can be up to 8.5
   *           Mbps; output is capped at HD quality (720p). You can select an optional transcode preset
   *           (see below). Audio for all renditions is transcoded, and an audio-only rendition is
   *           available.</p>
   *             </li>
   *          </ul>
   *          <p>Optional <i>transcode presets</i> (available for the <code>ADVANCED</code>
   *       types) allow you to trade off available download bandwidth and video quality, to optimize the
   *       viewing experience. There are two presets:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Constrained bandwidth delivery</i> uses a lower bitrate for each
   *           quality level. Use it if you have low download bandwidth and/or simple video content
   *           (e.g., talking heads)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Higher bandwidth delivery</i> uses a higher bitrate for each quality
   *           level. Use it if you have high download bandwidth and/or complex video content (e.g.,
   *           flashes and quick scene changes).</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * @public
   * <p>Whether the channel is private (enabled for playback authorization).</p>
   */
  authorized?: boolean;

  /**
   * @public
   * <p>Recording-configuration ARN. If this is set to an empty string, recording is disabled. A
   *       value other than an empty string indicates that recording is enabled</p>
   */
  recordingConfigurationArn?: string;

  /**
   * @public
   * <p>Whether the channel allows insecure RTMP ingest. Default: <code>false</code>.</p>
   */
  insecureIngest?: boolean;

  /**
   * @public
   * <p>Optional transcode preset for the channel. This is selectable only for
   *         <code>ADVANCED_HD</code> and <code>ADVANCED_SD</code> channel types. For those channel
   *       types, the default <code>preset</code> is <code>HIGHER_BANDWIDTH_DELIVERY</code>. For other
   *       channel types (<code>BASIC</code> and <code>STANDARD</code>), <code>preset</code> is the empty
   *       string (<code>""</code>).</p>
   */
  preset?: TranscodePreset | string;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * @public
   * <p>Object specifying a channel.</p>
   */
  channel?: Channel;
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
