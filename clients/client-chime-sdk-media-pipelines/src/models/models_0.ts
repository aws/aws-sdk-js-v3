// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "./ChimeSDKMediaPipelinesServiceException";

export enum AudioArtifactsConcatenationState {
  Enabled = "Enabled",
}

/**
 * <p>The audio artifact concatenation configuration object.</p>
 */
export interface AudioConcatenationConfiguration {
  /**
   * <p>Enables the <i>name</i> object, where <i>name</i>
   *          is the name of the configuration object, such as <code>AudioConcatenation</code>.</p>
   */
  State: AudioArtifactsConcatenationState | string | undefined;
}

export enum ArtifactsConcatenationState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>The composited video configuration object for a specified
 *          media pipeline. <code>SourceType</code> must be
 *          <code>ChimeSdkMeeting</code>.</p>
 */
export interface CompositedVideoConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | string | undefined;
}

/**
 * <p>The composited content configuration object for a specified
 *          media pipeline. </p>
 */
export interface ContentConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | string | undefined;
}

/**
 * <p>The content configuration object's data channel.</p>
 */
export interface DataChannelConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | string | undefined;
}

/**
 * <p>The configuration object for an event concatenation pipeline.</p>
 */
export interface MeetingEventsConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | string | undefined;
}

/**
 * <p>The configuration object for concatenating transcription messages.</p>
 */
export interface TranscriptionMessagesConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | string | undefined;
}

/**
 * <p>The configuration object of a video contacatentation pipeline.</p>
 */
export interface VideoConcatenationConfiguration {
  /**
   * <p>Enables or disables the configuration object.</p>
   */
  State: ArtifactsConcatenationState | string | undefined;
}

/**
 * <p>The configuration for the artifacts concatenation.</p>
 */
export interface ArtifactsConcatenationConfiguration {
  /**
   * <p>The configuration for the audio artifacts concatenation.</p>
   */
  Audio: AudioConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the video artifacts concatenation.</p>
   */
  Video: VideoConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the content artifacts concatenation.</p>
   */
  Content: ContentConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the data channel artifacts concatenation.</p>
   */
  DataChannel: DataChannelConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the transcription messages artifacts concatenation.</p>
   */
  TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the meeting events artifacts concatenation.</p>
   */
  MeetingEvents: MeetingEventsConcatenationConfiguration | undefined;

  /**
   * <p>The configuration for the composited video artifacts concatenation.</p>
   */
  CompositedVideo: CompositedVideoConcatenationConfiguration | undefined;
}

export enum AudioMuxType {
  AudioOnly = "AudioOnly",
  AudioWithActiveSpeakerVideo = "AudioWithActiveSpeakerVideo",
  AudioWithCompositedVideo = "AudioWithCompositedVideo",
}

/**
 * <p>The audio artifact configuration object.</p>
 */
export interface AudioArtifactsConfiguration {
  /**
   * <p>The MUX type of the audio artifact configuration object.</p>
   */
  MuxType: AudioMuxType | string | undefined;
}

export enum ContentShareLayoutOption {
  Horizontal = "Horizontal",
  PresenterOnly = "PresenterOnly",
  Vertical = "Vertical",
}

export enum PresenterPosition {
  BottomLeft = "BottomLeft",
  BottomRight = "BottomRight",
  TopLeft = "TopLeft",
  TopRight = "TopRight",
}

/**
 * <p>Defines the configuration for a presenter only video tile.</p>
 */
export interface PresenterOnlyConfiguration {
  /**
   * <p>Defines the position of the presenter video tile. Default: <code>TopRight</code>.</p>
   */
  PresenterPosition?: PresenterPosition | string;
}

/**
 * <p>Specifies the type of grid layout.</p>
 */
export interface GridViewConfiguration {
  /**
   * <p>Defines the layout of the video tiles when content sharing is enabled.</p>
   */
  ContentShareLayout: ContentShareLayoutOption | string | undefined;

  /**
   * <p>Defines the configuration options for a presenter only video tile.</p>
   */
  PresenterOnlyConfiguration?: PresenterOnlyConfiguration;
}

export enum LayoutOption {
  GridView = "GridView",
}

export enum ResolutionOption {
  FHD = "FHD",
  HD = "HD",
}

/**
 * <p>Describes the configuration for the composited video artifacts.</p>
 */
export interface CompositedVideoArtifactsConfiguration {
  /**
   * <p>The layout setting, such as <code>GridView</code> in the configuration object.</p>
   */
  Layout?: LayoutOption | string;

  /**
   * <p>The video resolution setting in the configuration object. Default: HD at 1280 x 720. FHD resolution: 1920 x 1080.</p>
   */
  Resolution?: ResolutionOption | string;

  /**
   * <p>The <code>GridView</code> configuration setting.</p>
   */
  GridViewConfiguration: GridViewConfiguration | undefined;
}

export enum ContentMuxType {
  ContentOnly = "ContentOnly",
}

export enum ArtifactsState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>The content artifact object.</p>
 */
export interface ContentArtifactsConfiguration {
  /**
   * <p>Indicates whether the content artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | string | undefined;

  /**
   * <p>The MUX type of the artifact configuration.</p>
   */
  MuxType?: ContentMuxType | string;
}

export enum VideoMuxType {
  VideoOnly = "VideoOnly",
}

/**
 * <p>The video artifact configuration object.</p>
 */
export interface VideoArtifactsConfiguration {
  /**
   * <p>Indicates whether the video artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | string | undefined;

  /**
   * <p>The MUX type of the video artifact configuration object.</p>
   */
  MuxType?: VideoMuxType | string;
}

/**
 * <p>The configuration for the artifacts.</p>
 */
export interface ArtifactsConfiguration {
  /**
   * <p>The configuration for the audio artifacts.</p>
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the video artifacts.</p>
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the content artifacts.</p>
   */
  Content: ContentArtifactsConfiguration | undefined;

  /**
   * <p>Enables video compositing.</p>
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration;
}

export enum AudioChannelsOption {
  Mono = "Mono",
  Stereo = "Stereo",
}

export enum ErrorCode {
  BadRequest = "BadRequest",
  Forbidden = "Forbidden",
  NotFound = "NotFound",
  ResourceLimitExceeded = "ResourceLimitExceeded",
  ServiceFailure = "ServiceFailure",
  ServiceUnavailable = "ServiceUnavailable",
  Throttling = "Throttling",
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The video streams for a specified media pipeline. The total number of
 *          video streams can't exceed 25.</p>
 */
export interface SelectedVideoStreams {
  /**
   * <p>The attendee IDs of the streams selected for a media pipeline. </p>
   */
  AttendeeIds?: string[];

  /**
   * <p>The external user IDs of the streams selected for a media pipeline.</p>
   */
  ExternalUserIds?: string[];
}

/**
 * <p>Source configuration for a specified media pipeline.</p>
 */
export interface SourceConfiguration {
  /**
   * <p>The selected video streams for a specified media pipeline. The number
   *          of video streams can't exceed 25.</p>
   */
  SelectedVideoStreams?: SelectedVideoStreams;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * <p>The source configuration for a specified media pipline.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting.</p>
   */
  ArtifactsConfiguration?: ArtifactsConfiguration;
}

export enum MediaPipelineSinkType {
  S3Bucket = "S3Bucket",
}

export enum MediaPipelineSourceType {
  ChimeSdkMeeting = "ChimeSdkMeeting",
}

/**
 * <p>A key/value pair that grants users access to meeting resources.</p>
 */
export interface Tag {
  /**
   * <p>The key half of a tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value half of a tag.</p>
   */
  Value: string | undefined;
}

export interface CreateMediaCapturePipelineRequest {
  /**
   * <p>Source type from which the media artifacts are captured. A Chime SDK Meeting is the only
   *          supported source.</p>
   */
  SourceType: MediaPipelineSourceType | string | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are captured.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket.</p>
   */
  SinkType: MediaPipelineSinkType | string | undefined;

  /**
   * <p>The ARN of the sink type.</p>
   */
  SinkArn: string | undefined;

  /**
   * <p>The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The configuration for a specified media pipeline. <code>SourceType</code> must
   *          be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export enum MediaPipelineStatus {
  Failed = "Failed",
  InProgress = "InProgress",
  Initializing = "Initializing",
  Stopped = "Stopped",
  Stopping = "Stopping",
}

/**
 * <p>A media pipeline object consisting of an ID, source type, source ARN, a sink
 *          type, a sink ARN, and a configuration object.</p>
 */
export interface MediaCapturePipeline {
  /**
   * <p>The ID of a media pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The ARN of the media capture pipeline</p>
   */
  MediaPipelineArn?: string;

  /**
   * <p>Source type from which media artifacts are saved. You must use
   *          <code>ChimeMeeting</code>.</p>
   */
  SourceType?: MediaPipelineSourceType | string;

  /**
   * <p>ARN of the source from which the media artifacts are saved.</p>
   */
  SourceArn?: string;

  /**
   * <p>The status of the media pipeline.</p>
   */
  Status?: MediaPipelineStatus | string;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3
   *          Bucket.</p>
   */
  SinkType?: MediaPipelineSinkType | string;

  /**
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   */
  SinkArn?: string;

  /**
   * <p>The time at which the pipeline was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the pipeline was updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The configuration for a specified media pipeline. <code>SourceType</code> must
   *          be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media pipeline object, the ID, source type, source ARN, sink type, and sink
   *          ARN of a media pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledClientException, __BaseException>) {
    super({
      name: "ThrottledClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * <p>The configuration settings for the S3 bucket.</p>
 */
export interface S3BucketSinkConfiguration {
  /**
   * <p>The destination URL of the S3 bucket.</p>
   */
  Destination: string | undefined;
}

export enum ConcatenationSinkType {
  S3Bucket = "S3Bucket",
}

/**
 * <p>The data sink of the configuration object.</p>
 */
export interface ConcatenationSink {
  /**
   * <p>The type of data sink in the configuration object.</p>
   */
  Type: ConcatenationSinkType | string | undefined;

  /**
   * <p>The configuration settings for an Amazon S3 bucket sink.</p>
   */
  S3BucketSinkConfiguration: S3BucketSinkConfiguration | undefined;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting concatenation for a specified
 *          media pipeline.</p>
 */
export interface ChimeSdkMeetingConcatenationConfiguration {
  /**
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting concatenation.</p>
   */
  ArtifactsConfiguration: ArtifactsConcatenationConfiguration | undefined;
}

/**
 * <p>The source configuration object of a media capture pipeline.</p>
 */
export interface MediaCapturePipelineSourceConfiguration {
  /**
   * <p>The media pipeline ARN in the configuration object of a media capture pipeline.</p>
   */
  MediaPipelineArn: string | undefined;

  /**
   * <p>The meeting configuration settings in a media capture pipeline configuration object. </p>
   */
  ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration | undefined;
}

export enum ConcatenationSourceType {
  MediaCapturePipeline = "MediaCapturePipeline",
}

/**
 * <p>The source type and media pipeline configuration settings in a configuration object.</p>
 */
export interface ConcatenationSource {
  /**
   * <p>The type of concatenation source in a configuration object.</p>
   */
  Type: ConcatenationSourceType | string | undefined;

  /**
   * <p>The concatenation settings for the media pipeline in a configuration object.</p>
   */
  MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration | undefined;
}

export interface CreateMediaConcatenationPipelineRequest {
  /**
   * <p>An object that specifies the sources for the media concatenation pipeline.</p>
   */
  Sources: ConcatenationSource[] | undefined;

  /**
   * <p>An object that specifies the data sinks for the media concatenation pipeline.</p>
   */
  Sinks: ConcatenationSink[] | undefined;

  /**
   * <p>The unique identifier for the client request. The token makes the API request
   *          idempotent. Use a unique token for each media concatenation pipeline request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags associated with the media concatenation pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Concatenates audio and video data from one or more data streams.</p>
 */
export interface MediaConcatenationPipeline {
  /**
   * <p>The ID of the media pipeline being concatenated.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The ARN of the media pipeline that you specify in the <code>SourceConfiguration</code> object.</p>
   */
  MediaPipelineArn?: string;

  /**
   * <p>The data sources being concatnated.</p>
   */
  Sources?: ConcatenationSource[];

  /**
   * <p>The data sinks of the concatenation pipeline.</p>
   */
  Sinks?: ConcatenationSink[];

  /**
   * <p>The status of the concatenation pipeline.</p>
   */
  Status?: MediaPipelineStatus | string;

  /**
   * <p>The time at which the concatenation pipeline was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the concatenation pipeline was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

export interface CreateMediaConcatenationPipelineResponse {
  /**
   * <p>A media concatenation pipeline object, the ID, source type, <code>MediaPipelineARN</code>, and sink of a
   *          media concatenation pipeline object.</p>
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
}

/**
 * <p>The media pipeline's RTMP configuration object.</p>
 */
export interface LiveConnectorRTMPConfiguration {
  /**
   * <p>The URL of the RTMP configuration.</p>
   */
  Url: string | undefined;

  /**
   * <p>The audio channels set for the RTMP configuration</p>
   */
  AudioChannels?: AudioChannelsOption | string;

  /**
   * <p>The audio sample rate set for the RTMP configuration. Default: 48000.</p>
   */
  AudioSampleRate?: string;
}

export enum LiveConnectorSinkType {
  RTMP = "RTMP",
}

/**
 * <p>The media pipeline's sink configuration settings.</p>
 */
export interface LiveConnectorSinkConfiguration {
  /**
   * <p>The sink configuration's sink type.</p>
   */
  SinkType: LiveConnectorSinkType | string | undefined;

  /**
   * <p>The sink configuration's RTMP configuration setttings.</p>
   */
  RTMPConfiguration: LiveConnectorRTMPConfiguration | undefined;
}

export enum LiveConnectorMuxType {
  AudioWithActiveSpeakerVideo = "AudioWithActiveSpeakerVideo",
  AudioWithCompositedVideo = "AudioWithCompositedVideo",
}

/**
 * <p>The media pipeline's configuration object.</p>
 */
export interface ChimeSdkMeetingLiveConnectorConfiguration {
  /**
   * <p>The configuration object's Chime SDK meeting ARN.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The configuration object's multiplex type.</p>
   */
  MuxType: LiveConnectorMuxType | string | undefined;

  /**
   * <p>The media pipeline's composited video.</p>
   */
  CompositedVideo?: CompositedVideoArtifactsConfiguration;

  /**
   * <p>The source configuration settings of the media pipeline's configuration object.</p>
   */
  SourceConfiguration?: SourceConfiguration;
}

export enum LiveConnectorSourceType {
  ChimeSdkMeeting = "ChimeSdkMeeting",
}

/**
 * <p>The data source configuration object of a streaming media pipeline.</p>
 */
export interface LiveConnectorSourceConfiguration {
  /**
   * <p>The source configuration's media source type.</p>
   */
  SourceType: LiveConnectorSourceType | string | undefined;

  /**
   * <p>The configuration settings of the connector pipeline.</p>
   */
  ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration | undefined;
}

export interface CreateMediaLiveConnectorPipelineRequest {
  /**
   * <p>The media pipeline's data sources.</p>
   */
  Sources: LiveConnectorSourceConfiguration[] | undefined;

  /**
   * <p>The media pipeline's data sinks.</p>
   */
  Sinks: LiveConnectorSinkConfiguration[] | undefined;

  /**
   * <p>The token assigned to the client making the request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags associated with the media pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The connector pipeline.</p>
 */
export interface MediaLiveConnectorPipeline {
  /**
   * <p>The connector pipeline's data sources.</p>
   */
  Sources?: LiveConnectorSourceConfiguration[];

  /**
   * <p>The connector pipeline's data sinks.</p>
   */
  Sinks?: LiveConnectorSinkConfiguration[];

  /**
   * <p>The connector pipeline's ID.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The connector pipeline's ARN.</p>
   */
  MediaPipelineArn?: string;

  /**
   * <p>The connector pipeline's status.</p>
   */
  Status?: MediaPipelineStatus | string;

  /**
   * <p>Thetime at which the connector pipeline was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the connector pipeline was last updated.</p>
   */
  UpdatedTimestamp?: Date;
}

export interface CreateMediaLiveConnectorPipelineResponse {
  /**
   * <p>The new media pipeline.</p>
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
}

export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media pipeline being deleted. </p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

export interface DeleteMediaPipelineRequest {
  /**
   * <p>The ID of the media pipeline to delete.</p>
   */
  MediaPipelineId: string | undefined;
}

export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

export interface GetMediaPipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * <p>A pipeline consisting of a media capture, media concatenation, or live-streaming pipeline.</p>
 */
export interface MediaPipeline {
  /**
   * <p>A pipeline that enables users to capture audio and video.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;

  /**
   * <p>The connector pipeline of the media pipeline.</p>
   */
  MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;

  /**
   * <p>The media concatenation pipeline in a media pipeline.</p>
   */
  MediaConcatenationPipeline?: MediaConcatenationPipeline;
}

export interface GetMediaPipelineResponse {
  /**
   * <p>The media pipeline object.</p>
   */
  MediaPipeline?: MediaPipeline;
}

export interface ListMediaCapturePipelinesRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The summary data of a media capture pipeline.</p>
 */
export interface MediaCapturePipelineSummary {
  /**
   * <p>The ID of the media pipeline in the summary.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The ARN of the media pipeline in the summary.</p>
   */
  MediaPipelineArn?: string;
}

export interface ListMediaCapturePipelinesResponse {
  /**
   * <p>The media pipeline objects in the list.</p>
   */
  MediaCapturePipelines?: MediaCapturePipelineSummary[];

  /**
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

export interface ListMediaPipelinesRequest {
  /**
   * <p>The token used to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Valid Range: 1 - 99.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The summary of the media pipeline.</p>
 */
export interface MediaPipelineSummary {
  /**
   * <p>The ID of the media pipeline in the summary.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The ARN of the media pipeline in the summary.</p>
   */
  MediaPipelineArn?: string;
}

export interface ListMediaPipelinesResponse {
  /**
   * <p>The media pipeline objects in the list.</p>
   */
  MediaPipelines?: MediaPipelineSummary[];

  /**
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the specified media pipeline.</p>
   */
  Tags?: Tag[];
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tags associated with the specified media pipeline.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the pipeline that you want to untag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key/value pairs in the tag that you want to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AudioConcatenationConfigurationFilterSensitiveLog = (obj: AudioConcatenationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompositedVideoConcatenationConfigurationFilterSensitiveLog = (
  obj: CompositedVideoConcatenationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentConcatenationConfigurationFilterSensitiveLog = (obj: ContentConcatenationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataChannelConcatenationConfigurationFilterSensitiveLog = (
  obj: DataChannelConcatenationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeetingEventsConcatenationConfigurationFilterSensitiveLog = (
  obj: MeetingEventsConcatenationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptionMessagesConcatenationConfigurationFilterSensitiveLog = (
  obj: TranscriptionMessagesConcatenationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoConcatenationConfigurationFilterSensitiveLog = (obj: VideoConcatenationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactsConcatenationConfigurationFilterSensitiveLog = (
  obj: ArtifactsConcatenationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioArtifactsConfigurationFilterSensitiveLog = (obj: AudioArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PresenterOnlyConfigurationFilterSensitiveLog = (obj: PresenterOnlyConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GridViewConfigurationFilterSensitiveLog = (obj: GridViewConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompositedVideoArtifactsConfigurationFilterSensitiveLog = (
  obj: CompositedVideoArtifactsConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentArtifactsConfigurationFilterSensitiveLog = (obj: ContentArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoArtifactsConfigurationFilterSensitiveLog = (obj: VideoArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactsConfigurationFilterSensitiveLog = (obj: ArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelectedVideoStreamsFilterSensitiveLog = (obj: SelectedVideoStreams): any => ({
  ...obj,
  ...(obj.ExternalUserIds && { ExternalUserIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => ({
  ...obj,
  ...(obj.SelectedVideoStreams && {
    SelectedVideoStreams: SelectedVideoStreamsFilterSensitiveLog(obj.SelectedVideoStreams),
  }),
});

/**
 * @internal
 */
export const ChimeSdkMeetingConfigurationFilterSensitiveLog = (obj: ChimeSdkMeetingConfiguration): any => ({
  ...obj,
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMediaCapturePipelineRequestFilterSensitiveLog = (obj: CreateMediaCapturePipelineRequest): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.ChimeSdkMeetingConfiguration && {
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationFilterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
  }),
});

/**
 * @internal
 */
export const MediaCapturePipelineFilterSensitiveLog = (obj: MediaCapturePipeline): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  ...(obj.ChimeSdkMeetingConfiguration && {
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationFilterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMediaCapturePipelineResponseFilterSensitiveLog = (obj: CreateMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
});

/**
 * @internal
 */
export const S3BucketSinkConfigurationFilterSensitiveLog = (obj: S3BucketSinkConfiguration): any => ({
  ...obj,
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConcatenationSinkFilterSensitiveLog = (obj: ConcatenationSink): any => ({
  ...obj,
  ...(obj.S3BucketSinkConfiguration && {
    S3BucketSinkConfiguration: S3BucketSinkConfigurationFilterSensitiveLog(obj.S3BucketSinkConfiguration),
  }),
});

/**
 * @internal
 */
export const ChimeSdkMeetingConcatenationConfigurationFilterSensitiveLog = (
  obj: ChimeSdkMeetingConcatenationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaCapturePipelineSourceConfigurationFilterSensitiveLog = (
  obj: MediaCapturePipelineSourceConfiguration
): any => ({
  ...obj,
  ...(obj.MediaPipelineArn && { MediaPipelineArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConcatenationSourceFilterSensitiveLog = (obj: ConcatenationSource): any => ({
  ...obj,
  ...(obj.MediaCapturePipelineSourceConfiguration && {
    MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfigurationFilterSensitiveLog(
      obj.MediaCapturePipelineSourceConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateMediaConcatenationPipelineRequestFilterSensitiveLog = (
  obj: CreateMediaConcatenationPipelineRequest
): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => ConcatenationSourceFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => ConcatenationSinkFilterSensitiveLog(item)) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaConcatenationPipelineFilterSensitiveLog = (obj: MediaConcatenationPipeline): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => ConcatenationSourceFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => ConcatenationSinkFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMediaConcatenationPipelineResponseFilterSensitiveLog = (
  obj: CreateMediaConcatenationPipelineResponse
): any => ({
  ...obj,
  ...(obj.MediaConcatenationPipeline && {
    MediaConcatenationPipeline: MediaConcatenationPipelineFilterSensitiveLog(obj.MediaConcatenationPipeline),
  }),
});

/**
 * @internal
 */
export const LiveConnectorRTMPConfigurationFilterSensitiveLog = (obj: LiveConnectorRTMPConfiguration): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LiveConnectorSinkConfigurationFilterSensitiveLog = (obj: LiveConnectorSinkConfiguration): any => ({
  ...obj,
  ...(obj.RTMPConfiguration && {
    RTMPConfiguration: LiveConnectorRTMPConfigurationFilterSensitiveLog(obj.RTMPConfiguration),
  }),
});

/**
 * @internal
 */
export const ChimeSdkMeetingLiveConnectorConfigurationFilterSensitiveLog = (
  obj: ChimeSdkMeetingLiveConnectorConfiguration
): any => ({
  ...obj,
  ...(obj.Arn && { Arn: SENSITIVE_STRING }),
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const LiveConnectorSourceConfigurationFilterSensitiveLog = (obj: LiveConnectorSourceConfiguration): any => ({
  ...obj,
  ...(obj.ChimeSdkMeetingLiveConnectorConfiguration && {
    ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfigurationFilterSensitiveLog(
      obj.ChimeSdkMeetingLiveConnectorConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const CreateMediaLiveConnectorPipelineRequestFilterSensitiveLog = (
  obj: CreateMediaLiveConnectorPipelineRequest
): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => LiveConnectorSourceConfigurationFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => LiveConnectorSinkConfigurationFilterSensitiveLog(item)) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MediaLiveConnectorPipelineFilterSensitiveLog = (obj: MediaLiveConnectorPipeline): any => ({
  ...obj,
  ...(obj.Sources && { Sources: obj.Sources.map((item) => LiveConnectorSourceConfigurationFilterSensitiveLog(item)) }),
  ...(obj.Sinks && { Sinks: obj.Sinks.map((item) => LiveConnectorSinkConfigurationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMediaLiveConnectorPipelineResponseFilterSensitiveLog = (
  obj: CreateMediaLiveConnectorPipelineResponse
): any => ({
  ...obj,
  ...(obj.MediaLiveConnectorPipeline && {
    MediaLiveConnectorPipeline: MediaLiveConnectorPipelineFilterSensitiveLog(obj.MediaLiveConnectorPipeline),
  }),
});

/**
 * @internal
 */
export const DeleteMediaCapturePipelineRequestFilterSensitiveLog = (obj: DeleteMediaCapturePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMediaPipelineRequestFilterSensitiveLog = (obj: DeleteMediaPipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMediaCapturePipelineRequestFilterSensitiveLog = (obj: GetMediaCapturePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMediaCapturePipelineResponseFilterSensitiveLog = (obj: GetMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
});

/**
 * @internal
 */
export const GetMediaPipelineRequestFilterSensitiveLog = (obj: GetMediaPipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaPipelineFilterSensitiveLog = (obj: MediaPipeline): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
  ...(obj.MediaLiveConnectorPipeline && {
    MediaLiveConnectorPipeline: MediaLiveConnectorPipelineFilterSensitiveLog(obj.MediaLiveConnectorPipeline),
  }),
  ...(obj.MediaConcatenationPipeline && {
    MediaConcatenationPipeline: MediaConcatenationPipelineFilterSensitiveLog(obj.MediaConcatenationPipeline),
  }),
});

/**
 * @internal
 */
export const GetMediaPipelineResponseFilterSensitiveLog = (obj: GetMediaPipelineResponse): any => ({
  ...obj,
  ...(obj.MediaPipeline && { MediaPipeline: MediaPipelineFilterSensitiveLog(obj.MediaPipeline) }),
});

/**
 * @internal
 */
export const ListMediaCapturePipelinesRequestFilterSensitiveLog = (obj: ListMediaCapturePipelinesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaCapturePipelineSummaryFilterSensitiveLog = (obj: MediaCapturePipelineSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMediaCapturePipelinesResponseFilterSensitiveLog = (obj: ListMediaCapturePipelinesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMediaPipelinesRequestFilterSensitiveLog = (obj: ListMediaPipelinesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaPipelineSummaryFilterSensitiveLog = (obj: MediaPipelineSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMediaPipelinesResponseFilterSensitiveLog = (obj: ListMediaPipelinesResponse): any => ({
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
