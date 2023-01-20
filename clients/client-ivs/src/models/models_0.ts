// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { IvsServiceException as __BaseException } from "./IvsServiceException";

/**
 * <p/>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
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

export interface BatchGetChannelRequest {
  /**
   * <p>Array of ARNs, one per channel.</p>
   */
  arns: string[] | undefined;
}

export enum ChannelLatencyMode {
  LowLatency = "LOW",
  NormalLatency = "NORMAL",
}

export enum ChannelType {
  BasicChannelType = "BASIC",
  StandardChannelType = "STANDARD",
}

/**
 * <p>Object specifying a channel.</p>
 */
export interface Channel {
  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code>
   *       correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to
   *           viewers. The viewer’s video-quality choice is limited to the original input. Resolution
   *           can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for
   *           resolutions between 480p and 1080p.</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Channel ingest endpoint, part of the definition of an ingest server, used when you set up
   *       streaming software.</p>
   */
  ingestEndpoint?: string;

  /**
   * <p>Channel playback URL.</p>
   */
  playbackUrl?: string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Error related to a specific channel, specified by its ARN.</p>
 */
export interface BatchError {
  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Error code.</p>
   */
  code?: string;

  /**
   * <p>Error message, determined by the application.</p>
   */
  message?: string;
}

export interface BatchGetChannelResponse {
  /**
   * <p/>
   */
  channels?: Channel[];

  /**
   * <p>Each error object is related to a specific ARN in the request.</p>
   */
  errors?: BatchError[];
}

export interface BatchGetStreamKeyRequest {
  /**
   * <p>Array of ARNs, one per stream key.</p>
   */
  arns: string[] | undefined;
}

/**
 * <p>Object specifying a stream key.</p>
 */
export interface StreamKey {
  /**
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * <p>Stream-key value.</p>
   */
  value?: string;

  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface BatchGetStreamKeyResponse {
  /**
   * <p/>
   */
  streamKeys?: StreamKey[];

  /**
   * <p/>
   */
  errors?: BatchError[];
}

export interface CreateChannelRequest {
  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and
   *       Standard, respectively.) Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to
   *           viewers. The viewer’s video-quality choice is limited to the original input. Resolution
   *           can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for
   *           resolutions between 480p and 1080p.</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateChannelResponse {
  /**
   * <p/>
   */
  channel?: Channel;

  /**
   * <p/>
   */
  streamKey?: StreamKey;
}

/**
 * <p/>
 */
export class PendingVerification extends __BaseException {
  readonly name: "PendingVerification" = "PendingVerification";
  readonly $fault: "client" = "client";
  /**
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
 * <p/>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
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
 * <p/>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
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
 * <p/>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
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
 * <p/>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>A complex type that describes an S3 location where recorded videos will be stored.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * <p>Location (S3 bucket name) where recorded videos will be stored.</p>
   */
  bucketName: string | undefined;
}

/**
 * <p>A complex type that describes a location where recorded videos will be stored. Each member
 *       represents a type of destination configuration. For recording, you define one and only one
 *       type of destination configuration.</p>
 */
export interface DestinationConfiguration {
  /**
   * <p>An S3 destination configuration where recorded videos will be stored.</p>
   */
  s3?: S3DestinationConfiguration;
}

export enum RecordingMode {
  Disabled = "DISABLED",
  Interval = "INTERVAL",
}

/**
 * <p>An object representing a configuration of thumbnails for recorded video.</p>
 */
export interface ThumbnailConfiguration {
  /**
   * <p>Thumbnail recording mode. Default: <code>INTERVAL</code>.</p>
   */
  recordingMode?: RecordingMode | string;

  /**
   * <p>The targeted thumbnail-generation interval in seconds. This is configurable (and required)
   *       only if <code>recordingMode</code> is <code>INTERVAL</code>. Default: 60.</p>
   *          <p>
   *             <b>Important:</b> Setting a value for
   *         <code>targetIntervalSeconds</code> does not guarantee that thumbnails are generated at the
   *       specified interval. For thumbnails to be generated at the <code>targetIntervalSeconds</code>
   *       interval, the <code>IDR/Keyframe</code> value for the input video must be less than the
   *         <code>targetIntervalSeconds</code> value. See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html"> Amazon IVS Streaming Configuration</a>
   *       for information on setting <code>IDR/Keyframe</code> to the recommended value in video-encoder
   *       settings.</p>
   */
  targetIntervalSeconds?: number;
}

export interface CreateRecordingConfigurationRequest {
  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where recorded video will be
   *       stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   */
  thumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * <p>If a broadcast disconnects and then reconnects within the specified interval, the multiple
   *       streams will be considered a single broadcast and merged together. Default: 0.</p>
   */
  recordingReconnectWindowSeconds?: number;
}

export enum RecordingConfigurationState {
  Active = "ACTIVE",
  CreateFailed = "CREATE_FAILED",
  Creating = "CREATING",
}

/**
 * <p>An object representing a configuration to record a channel stream.</p>
 */
export interface RecordingConfiguration {
  /**
   * <p>Recording-configuration ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A complex type that allows you to enable/disable the recording of thumbnails for a live
   *       session and modify the interval at which thumbnails are generated for the live session.</p>
   */
  thumbnailConfiguration?: ThumbnailConfiguration;

  /**
   * <p>If a broadcast disconnects and then reconnects within the specified interval, the multiple
   *       streams will be considered a single broadcast and merged together. Default: 0.</p>
   */
  recordingReconnectWindowSeconds?: number;
}

export interface CreateRecordingConfigurationResponse {
  /**
   *
   */
  recordingConfiguration?: RecordingConfiguration;
}

/**
 * <p/>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
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

export interface CreateStreamKeyRequest {
  /**
   * <p>ARN of the channel for which to create the stream key.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateStreamKeyResponse {
  /**
   * <p>Stream key used to authenticate an RTMPS stream for ingestion.</p>
   */
  streamKey?: StreamKey;
}

export interface DeleteChannelRequest {
  /**
   * <p>ARN of the channel to be deleted.</p>
   */
  arn: string | undefined;
}

export interface DeletePlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be deleted.</p>
   */
  arn: string | undefined;
}

export interface DeletePlaybackKeyPairResponse {}

export interface DeleteRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be deleted.</p>
   */
  arn: string | undefined;
}

export interface DeleteStreamKeyRequest {
  /**
   * <p>ARN of the stream key to be deleted.</p>
   */
  arn: string | undefined;
}

export interface GetChannelRequest {
  /**
   * <p>ARN of the channel for which the configuration is to be retrieved.</p>
   */
  arn: string | undefined;
}

export interface GetChannelResponse {
  /**
   * <p/>
   */
  channel?: Channel;
}

export interface GetPlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be returned.</p>
   */
  arn: string | undefined;
}

/**
 * <p>A key pair used to sign and validate a playback authorization token.</p>
 */
export interface PlaybackKeyPair {
  /**
   * <p>Key-pair ARN.</p>
   */
  arn?: string;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Key-pair identifier.</p>
   */
  fingerprint?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface GetPlaybackKeyPairResponse {
  /**
   *
   */
  keyPair?: PlaybackKeyPair;
}

export interface GetRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be retrieved.</p>
   */
  arn: string | undefined;
}

export interface GetRecordingConfigurationResponse {
  /**
   *
   */
  recordingConfiguration?: RecordingConfiguration;
}

/**
 * <p/>
 */
export class ChannelNotBroadcasting extends __BaseException {
  readonly name: "ChannelNotBroadcasting" = "ChannelNotBroadcasting";
  readonly $fault: "client" = "client";
  /**
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

export interface GetStreamRequest {
  /**
   * <p>Channel ARN for stream to be accessed.</p>
   */
  channelArn: string | undefined;
}

export enum StreamHealth {
  Starving = "STARVING",
  StreamHealthy = "HEALTHY",
  Unknown = "UNKNOWN",
}

export enum StreamState {
  StreamLive = "LIVE",
  StreamOffline = "OFFLINE",
}

/**
 * <p>Specifies a live video stream that has been ingested and distributed.</p>
 */
export interface _Stream {
  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>URL of the master playlist, required by the video player to play the HLS stream.</p>
   */
  playbackUrl?: string;

  /**
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   */
  viewerCount?: number;
}

export interface GetStreamResponse {
  /**
   * <p/>
   */
  stream?: _Stream;
}

export interface GetStreamKeyRequest {
  /**
   * <p>ARN for the stream key to be retrieved.</p>
   */
  arn: string | undefined;
}

export interface GetStreamKeyResponse {
  /**
   *
   */
  streamKey?: StreamKey;
}

export interface GetStreamSessionRequest {
  /**
   * <p>ARN of the channel resource</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel. If no
   *         <code>streamId</code> is provided, this returns the most recent stream session for the
   *       channel, if it exists.</p>
   */
  streamId?: string;
}

/**
 * <p>Object specifying a stream’s audio configuration, as set up by the broadcaster (usually in
 *       an encoder). This is part of the <a>IngestConfiguration</a> object and used for
 *       monitoring stream health.</p>
 */
export interface AudioConfiguration {
  /**
   * <p>Codec used for the audio encoding.</p>
   */
  codec?: string;

  /**
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   */
  targetBitrate?: number;

  /**
   * <p>Number of audio samples recorded per second.</p>
   */
  sampleRate?: number;

  /**
   * <p>Number of audio channels.</p>
   */
  channels?: number;
}

/**
 * <p>Object specifying a stream’s video configuration, as set up by the broadcaster (usually in
 *       an encoder). This is part of the <a>IngestConfiguration</a> object and used for
 *       monitoring stream health.</p>
 */
export interface VideoConfiguration {
  /**
   * <p>Indicates to the decoder the requirements for decoding the stream. For definitions of the
   *       valid values, see the H.264 specification.</p>
   */
  avcProfile?: string;

  /**
   * <p>Indicates the degree of required decoder performance for a profile. Normally this is set
   *       automatically by the encoder. For details, see the H.264 specification.</p>
   */
  avcLevel?: string;

  /**
   * <p>Codec used for the video encoding.</p>
   */
  codec?: string;

  /**
   * <p>Software or hardware used to encode the video.</p>
   */
  encoder?: string;

  /**
   * <p>The expected ingest bitrate (bits per second). This is configured in the encoder.</p>
   */
  targetBitrate?: number;

  /**
   * <p>The expected ingest framerate. This is configured in the encoder.</p>
   */
  targetFramerate?: number;

  /**
   * <p>Video-resolution height in pixels.</p>
   */
  videoHeight?: number;

  /**
   * <p>Video-resolution width in pixels.</p>
   */
  videoWidth?: number;
}

/**
 * <p>Object specifying the ingest configuration set up by the broadcaster, usually in an
 *       encoder.</p>
 */
export interface IngestConfiguration {
  /**
   * <p>Encoder settings for video.</p>
   */
  video?: VideoConfiguration;

  /**
   * <p>Encoder settings for audio.</p>
   */
  audio?: AudioConfiguration;
}

/**
 * <p>Object specifying a stream’s events. For a list of events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
 *       IVS</a>.</p>
 */
export interface StreamEvent {
  /**
   * <p>Name that identifies the stream event within a <code>type</code>.</p>
   */
  name?: string;

  /**
   * <p>Logical group for certain events.</p>
   */
  type?: string;

  /**
   * <p>Time when the event occurred. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>.</p>
   */
  eventTime?: Date;
}

/**
 * <p>Object that captures the Amazon IVS configuration that the customer provisioned, the
 *       ingest configurations that the broadcaster used, and the most recent Amazon IVS stream events
 *       it encountered.</p>
 */
export interface StreamSession {
  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this
   *         is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * <p>Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that
   *         this is returned as a string</i>. For live streams, this is <code>NULL</code>.</p>
   */
  endTime?: Date;

  /**
   * <p>The properties of the channel at the time of going live.</p>
   */
  channel?: Channel;

  /**
   * <p>The properties of the incoming RTMP stream for the stream.</p>
   */
  ingestConfiguration?: IngestConfiguration;

  /**
   * <p>The properties of recording the live stream.</p>
   */
  recordingConfiguration?: RecordingConfiguration;

  /**
   * <p>List of Amazon IVS events that the stream encountered. The list is sorted by most recent
   *       events and contains up to 500 events. For Amazon IVS events, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html">Using Amazon EventBridge with Amazon
   *       IVS</a>.</p>
   */
  truncatedEvents?: StreamEvent[];
}

export interface GetStreamSessionResponse {
  /**
   * <p>List of stream details.</p>
   */
  streamSession?: StreamSession;
}

export interface ImportPlaybackKeyPairRequest {
  /**
   * <p>The public portion of a customer-generated key pair.</p>
   */
  publicKeyMaterial: string | undefined;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Any tags provided with the request are added to the playback key pair tags. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface ImportPlaybackKeyPairResponse {
  /**
   * <p/>
   */
  keyPair?: PlaybackKeyPair;
}

export interface ListChannelsRequest {
  /**
   * <p>Filters the channel list to match the specified name.</p>
   */
  filterByName?: string;

  /**
   * <p>Filters the channel list to match the specified recording-configuration ARN.</p>
   */
  filterByRecordingConfigurationArn?: string;

  /**
   * <p>The first channel to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of channels to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a channel.</p>
 */
export interface ChannelSummary {
  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default:
   *         <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and <code>NORMAL</code>
   *       correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default:
   *         <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface ListChannelsResponse {
  /**
   * <p>List of the matching channels.</p>
   */
  channels: ChannelSummary[] | undefined;

  /**
   * <p>If there are more channels than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export interface ListPlaybackKeyPairsRequest {
  /**
   * <p>The first key pair to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of key pairs to return. Default: your service quota or 100, whichever is
   *       smaller.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a playback key pair.</p>
 */
export interface PlaybackKeyPairSummary {
  /**
   * <p>Key-pair ARN.</p>
   */
  arn?: string;

  /**
   * <p>Playback-key-pair name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface ListPlaybackKeyPairsResponse {
  /**
   * <p>List of key pairs.</p>
   */
  keyPairs: PlaybackKeyPairSummary[] | undefined;

  /**
   * <p>If there are more key pairs than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   */
  nextToken?: string;
}

export interface ListRecordingConfigurationsRequest {
  /**
   * <p>The first recording configuration to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of recording configurations to return. Default: your service quota or 100,
   *       whichever is smaller. </p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a RecordingConfiguration.</p>
 */
export interface RecordingConfigurationSummary {
  /**
   * <p>Recording-configuration ARN.</p>
   */
  arn: string | undefined;

  /**
   * <p>Recording-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *         <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface ListRecordingConfigurationsResponse {
  /**
   * <p>List of the matching recording configurations.</p>
   */
  recordingConfigurations: RecordingConfigurationSummary[] | undefined;

  /**
   * <p>If there are more recording configurations than <code>maxResults</code>, use
   *         <code>nextToken</code> in the request to get the next set.</p>
   */
  nextToken?: string;
}

export interface ListStreamKeysRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>The first stream key to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streamKeys to return. Default: 1.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stream key.</p>
 */
export interface StreamKeySummary {
  /**
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Tags attached to the resource. Array of 1-50 maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface ListStreamKeysResponse {
  /**
   * <p>List of stream keys.</p>
   */
  streamKeys: StreamKeySummary[] | undefined;

  /**
   * <p>If there are more stream keys than <code>maxResults</code>, use <code>nextToken</code> in
   *       the request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * <p>Object specifying the stream attribute on which to filter.</p>
 */
export interface StreamFilters {
  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;
}

export interface ListStreamsRequest {
  /**
   * <p>Filters the stream list to match the specified criterion.</p>
   */
  filterBy?: StreamFilters;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stream.</p>
 */
export interface StreamSummary {
  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * <p>A count of concurrent views of the stream. Typically, a new view appears in
   *         <code>viewerCount</code> within 15 seconds of when video playback starts and a view is
   *       removed from <code>viewerCount</code> within 1 minute of when video playback ends. A value of
   *       -1 indicates that the request timed out; in this case, retry.</p>
   */
  viewerCount?: number;

  /**
   * <p>Time of the stream’s start. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   */
  startTime?: Date;
}

export interface ListStreamsResponse {
  /**
   * <p>List of streams.</p>
   */
  streams: StreamSummary[] | undefined;

  /**
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export interface ListStreamSessionsRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 100.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a stream session.</p>
 */
export interface StreamSessionSummary {
  /**
   * <p>Unique identifier for a live or previously live stream in the specified channel.</p>
   */
  streamId?: string;

  /**
   * <p>Time when the channel went live. This is an ISO 8601 timestamp; <i>note that this
   *         is returned as a string</i>.</p>
   */
  startTime?: Date;

  /**
   * <p>Time when the channel went offline. This is an ISO 8601 timestamp; <i>note that
   *         this is returned as a string</i>. For live streams, this is <code>NULL</code>.</p>
   */
  endTime?: Date;

  /**
   * <p>If <code>true</code>, this stream encountered a quota breach or failure.</p>
   */
  hasErrorEvent?: boolean;
}

export interface ListStreamSessionsResponse {
  /**
   * <p>List of stream sessions.</p>
   */
  streamSessions: StreamSessionSummary[] | undefined;

  /**
   * <p>If there are more streams than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface PutMetadataRequest {
  /**
   * <p>ARN of the channel into which metadata is inserted. This channel must have an active
   *       stream.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Metadata to insert into the stream. Maximum: 1 KB per request.</p>
   */
  metadata: string | undefined;
}

/**
 * <p/>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
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

export interface StopStreamRequest {
  /**
   * <p>ARN of the channel for which the stream is to be stopped.</p>
   */
  channelArn: string | undefined;
}

export interface StopStreamResponse {}

/**
 * <p/>
 */
export class StreamUnavailable extends __BaseException {
  readonly name: "StreamUnavailable" = "StreamUnavailable";
  readonly $fault: "server" = "server";
  /**
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

export interface TagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be added or updated. The ARN must be
   *       URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated. Array of maps, each of the form <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be removed. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed. Array of maps, each of the form s<code>tring:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
   *       more information, including restrictions that apply to tags and "Tag naming limits and
   *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
   *       there.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateChannelRequest {
  /**
   * <p>ARN of the channel to be updated.</p>
   */
  arn: string | undefined;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and
   *       Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately</i>. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Video is transcoded: multiple qualities are generated from the
   *           original input, to automatically give viewers the best experience for their devices and
   *           network conditions. Transcoding allows higher playback quality across a range of download
   *           speeds. Resolution can be up to 1080p and bitrate can be up to 8.5 Mbps. Audio is
   *           transcoded only for renditions 360p and below; above that, audio is passed through. This
   *           is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Video is transmuxed: Amazon IVS delivers the original input to
   *           viewers. The viewer’s video-quality choice is limited to the original input. Resolution
   *           can be up to 1080p and bitrate can be up to 1.5 Mbps for 480p and up to 3.5 Mbps for
   *           resolutions between 480p and 1080p.</p>
   *             </li>
   *          </ul>
   */
  type?: ChannelType | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization).</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. If this is set to an empty string, recording is disabled. A
   *       value other than an empty string indicates that recording is enabled</p>
   */
  recordingConfigurationArn?: string;
}

export interface UpdateChannelResponse {
  /**
   * <p>Object specifying a channel.</p>
   */
  channel?: Channel;
}

/**
 * @internal
 */
export const BatchGetChannelRequestFilterSensitiveLog = (obj: BatchGetChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelFilterSensitiveLog = (obj: Channel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchErrorFilterSensitiveLog = (obj: BatchError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetChannelResponseFilterSensitiveLog = (obj: BatchGetChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetStreamKeyRequestFilterSensitiveLog = (obj: BatchGetStreamKeyRequest): any => ({
  ...obj,
});

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
export const CreateChannelRequestFilterSensitiveLog = (obj: CreateChannelRequest): any => ({
  ...obj,
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
export const S3DestinationConfigurationFilterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationConfigurationFilterSensitiveLog = (obj: DestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThumbnailConfigurationFilterSensitiveLog = (obj: ThumbnailConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecordingConfigurationRequestFilterSensitiveLog = (
  obj: CreateRecordingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordingConfigurationFilterSensitiveLog = (obj: RecordingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecordingConfigurationResponseFilterSensitiveLog = (
  obj: CreateRecordingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamKeyRequestFilterSensitiveLog = (obj: CreateStreamKeyRequest): any => ({
  ...obj,
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
export const DeleteChannelRequestFilterSensitiveLog = (obj: DeleteChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlaybackKeyPairRequestFilterSensitiveLog = (obj: DeletePlaybackKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlaybackKeyPairResponseFilterSensitiveLog = (obj: DeletePlaybackKeyPairResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecordingConfigurationRequestFilterSensitiveLog = (
  obj: DeleteRecordingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamKeyRequestFilterSensitiveLog = (obj: DeleteStreamKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelRequestFilterSensitiveLog = (obj: GetChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelResponseFilterSensitiveLog = (obj: GetChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlaybackKeyPairRequestFilterSensitiveLog = (obj: GetPlaybackKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlaybackKeyPairFilterSensitiveLog = (obj: PlaybackKeyPair): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPlaybackKeyPairResponseFilterSensitiveLog = (obj: GetPlaybackKeyPairResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecordingConfigurationRequestFilterSensitiveLog = (obj: GetRecordingConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecordingConfigurationResponseFilterSensitiveLog = (obj: GetRecordingConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamRequestFilterSensitiveLog = (obj: GetStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _StreamFilterSensitiveLog = (obj: _Stream): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamResponseFilterSensitiveLog = (obj: GetStreamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamKeyRequestFilterSensitiveLog = (obj: GetStreamKeyRequest): any => ({
  ...obj,
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
export const GetStreamSessionRequestFilterSensitiveLog = (obj: GetStreamSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioConfigurationFilterSensitiveLog = (obj: AudioConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoConfigurationFilterSensitiveLog = (obj: VideoConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IngestConfigurationFilterSensitiveLog = (obj: IngestConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamEventFilterSensitiveLog = (obj: StreamEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamSessionFilterSensitiveLog = (obj: StreamSession): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamSessionResponseFilterSensitiveLog = (obj: GetStreamSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportPlaybackKeyPairRequestFilterSensitiveLog = (obj: ImportPlaybackKeyPairRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportPlaybackKeyPairResponseFilterSensitiveLog = (obj: ImportPlaybackKeyPairResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChannelsRequestFilterSensitiveLog = (obj: ListChannelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelSummaryFilterSensitiveLog = (obj: ChannelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListChannelsResponseFilterSensitiveLog = (obj: ListChannelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlaybackKeyPairsRequestFilterSensitiveLog = (obj: ListPlaybackKeyPairsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlaybackKeyPairSummaryFilterSensitiveLog = (obj: PlaybackKeyPairSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlaybackKeyPairsResponseFilterSensitiveLog = (obj: ListPlaybackKeyPairsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecordingConfigurationsRequestFilterSensitiveLog = (obj: ListRecordingConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordingConfigurationSummaryFilterSensitiveLog = (obj: RecordingConfigurationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecordingConfigurationsResponseFilterSensitiveLog = (
  obj: ListRecordingConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamKeysRequestFilterSensitiveLog = (obj: ListStreamKeysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamKeySummaryFilterSensitiveLog = (obj: StreamKeySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamKeysResponseFilterSensitiveLog = (obj: ListStreamKeysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamFiltersFilterSensitiveLog = (obj: StreamFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamsRequestFilterSensitiveLog = (obj: ListStreamsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamSummaryFilterSensitiveLog = (obj: StreamSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamsResponseFilterSensitiveLog = (obj: ListStreamsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamSessionsRequestFilterSensitiveLog = (obj: ListStreamSessionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamSessionSummaryFilterSensitiveLog = (obj: StreamSessionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamSessionsResponseFilterSensitiveLog = (obj: ListStreamSessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutMetadataRequestFilterSensitiveLog = (obj: PutMetadataRequest): any => ({
  ...obj,
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StopStreamRequestFilterSensitiveLog = (obj: StopStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopStreamResponseFilterSensitiveLog = (obj: StopStreamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelRequestFilterSensitiveLog = (obj: UpdateChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelResponseFilterSensitiveLog = (obj: UpdateChannelResponse): any => ({
  ...obj,
});
