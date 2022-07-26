// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKMediaPipelinesServiceException as __BaseException } from "./ChimeSDKMediaPipelinesServiceException";

export enum AudioMuxType {
  AudioOnly = "AudioOnly",
  AudioWithActiveSpeakerVideo = "AudioWithActiveSpeakerVideo",
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
 * <p>The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25.</p>
 */
export interface SelectedVideoStreams {
  /**
   * <p>The attendee IDs of the streams selected for a media capture pipeline. </p>
   */
  AttendeeIds?: string[];

  /**
   * <p>The external user IDs of the streams selected for a media capture pipeline.</p>
   */
  ExternalUserIds?: string[];
}

/**
 * <p>Source configuration for a specified media capture pipeline.</p>
 */
export interface SourceConfiguration {
  /**
   * <p>The selected video streams to capture for a specified media capture pipeline. The number of video streams can't exceed 25.</p>
   */
  SelectedVideoStreams?: SelectedVideoStreams;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * <p>The source configuration for a specified media capture pipline.</p>
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
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export interface CreateMediaCapturePipelineRequest {
  /**
   * <p>Source type from which the media artifacts are captured. A Chime SDK Meeting
   *          is the only supported source.</p>
   */
  SourceType: MediaPipelineSourceType | string | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are captured.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket. </p>
   */
  SinkType: MediaPipelineSinkType | string | undefined;

  /**
   * <p>The ARN of the sink type.</p>
   */
  SinkArn: string | undefined;

  /**
   * <p>The token assigned to the client making the pipeline request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;

  /**
   * <p>The list of tags.</p>
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
 * <p>A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.</p>
 */
export interface MediaCapturePipeline {
  /**
   * <p>The ID of a media capture pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The ARN of a media capture pipeline.</p>
   */
  MediaPipelineArn?: string;

  /**
   * <p>Source type from which media artifacts are saved. You must use <code>ChimeMeeting</code>.</p>
   */
  SourceType?: MediaPipelineSourceType | string;

  /**
   * <p>ARN of the source from which the media artifacts are saved.</p>
   */
  SourceArn?: string;

  /**
   * <p>The status of the media capture pipeline.</p>
   */
  Status?: MediaPipelineStatus | string;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 Bucket.</p>
   */
  SinkType?: MediaPipelineSinkType | string;

  /**
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   */
  SinkArn?: string;

  /**
   * <p>The time at which the capture pipeline was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the capture pipeline was updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media capture pipeline object, the ID, source type, source ARN, sink type, and  sink ARN of a media capture pipeline object.</p>
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

export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media capture pipeline being deleted. </p>
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

export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
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
 * <p>A summary of a media capture pipeline.</p>
 */
export interface MediaCapturePipelineSummary {
  /**
   * <p>The ID of a media capture pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>The ARN of a media capture pipeline.</p>
   */
  MediaPipelineArn?: string;
}

export interface ListMediaCapturePipelinesResponse {
  /**
   * <p>The media capture pipeline objects in the list.</p>
   */
  MediaCapturePipelines?: MediaCapturePipelineSummary[];

  /**
   * <p>The token used to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AudioArtifactsConfigurationFilterSensitiveLog = (obj: AudioArtifactsConfiguration): any => ({
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
export const DeleteMediaCapturePipelineRequestFilterSensitiveLog = (obj: DeleteMediaCapturePipelineRequest): any => ({
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
