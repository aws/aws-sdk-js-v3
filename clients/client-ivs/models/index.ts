import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>User does not have sufficient access to perform this action.</p>
   */
  exceptionMessage?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Error related to a specific channel, specified by its ARN.</p>
 */
export interface BatchError {
  /**
   * <p>Error code.</p>
   */
  code?: string;

  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Error message, determined by the application.</p>
   */
  message?: string;
}

export namespace BatchError {
  export const filterSensitiveLog = (obj: BatchError): any => ({
    ...obj,
  });
}

export interface BatchGetChannelRequest {
  /**
   * <p>Array of ARNs, one per channel.</p>
   */
  arns: string[] | undefined;
}

export namespace BatchGetChannelRequest {
  export const filterSensitiveLog = (obj: BatchGetChannelRequest): any => ({
    ...obj,
  });
}

export interface BatchGetChannelResponse {
  /**
   * <p>Each error object is related to a specific ARN in the request.</p>
   */
  errors?: BatchError[];

  channels?: Channel[];
}

export namespace BatchGetChannelResponse {
  export const filterSensitiveLog = (obj: BatchGetChannelResponse): any => ({
    ...obj,
  });
}

export interface BatchGetStreamKeyRequest {
  /**
   * <p>Array of ARNs, one per channel.</p>
   */
  arns: string[] | undefined;
}

export namespace BatchGetStreamKeyRequest {
  export const filterSensitiveLog = (obj: BatchGetStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface BatchGetStreamKeyResponse {
  streamKeys?: StreamKey[];
  errors?: BatchError[];
}

export namespace BatchGetStreamKeyResponse {
  export const filterSensitiveLog = (obj: BatchGetStreamKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Object specifying a channel.</p>
 */
export interface Channel {
  /**
   * <p>Channel playback URL.</p>
   */
  playbackUrl?: string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Multiple qualities are generated from the original input, to
   *           automatically give viewers the best experience for their devices and network conditions.
   *           Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s
   *           video-quality choice is limited to the original input. Vertical resolution can be up to
   *           480 and bitrate can be up to 1.5 Mbps.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>STANDARD</code>.</p>
   */
  type?: ChannelType | string;

  /**
   * <p>Channel ingest endpoint, part of the definition of an ingest server, used when you set up
   *       streaming software.</p>
   */
  ingestEndpoint?: string;

  /**
   * <p>Channel ARN.</p>
   */
  arn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;
}

export namespace Channel {
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

export enum ChannelLatencyMode {
  LowLatency = "LOW",
  NormalLatency = "NORMAL",
}

export interface ChannelNotBroadcasting extends __SmithyException, $MetadataBearer {
  name: "ChannelNotBroadcasting";
  $fault: "client";
  /**
   * <p>The stream is offline for the given channel ARN.</p>
   */
  exceptionMessage?: string;
}

export namespace ChannelNotBroadcasting {
  export const filterSensitiveLog = (obj: ChannelNotBroadcasting): any => ({
    ...obj,
  });
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
   * <p>Channel latency mode. Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Channel name.</p>
   */
  name?: string;
}

export namespace ChannelSummary {
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
  });
}

export enum ChannelType {
  BasicChannelType = "BASIC",
  StandardChannelType = "STANDARD",
}

export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
   */
  exceptionMessage?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface CreateChannelRequest {
  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>See <a>Channel$tags</a>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Multiple qualities are generated from the original input, to
   *           automatically give viewers the best experience for their devices and network conditions.
   *           Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s
   *           video-quality choice is limited to the original input. Vertical resolution can be up to
   *           480 and bitrate can be up to 1.5 Mbps.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>STANDARD</code>.</p>
   */
  type?: ChannelType | string;

  /**
   * <p>Channel latency mode. Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;
}

export namespace CreateChannelRequest {
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelResponse {
  /**
   * <p>Object specifying a channel.</p>
   */
  channel?: Channel;

  /**
   * <p>Object specifying a stream key.</p>
   */
  streamKey?: StreamKey;
}

export namespace CreateChannelResponse {
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

export interface CreateStreamKeyRequest {
  /**
   * <p>ARN of the channel for which to create the stream key.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>See <a>Channel$tags</a>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateStreamKeyRequest {
  export const filterSensitiveLog = (obj: CreateStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface CreateStreamKeyResponse {
  /**
   * <p>Stream key used to authenticate an RTMPS stream for ingestion.</p>
   */
  streamKey?: StreamKey;
}

export namespace CreateStreamKeyResponse {
  export const filterSensitiveLog = (obj: CreateStreamKeyResponse): any => ({
    ...obj,
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>ARN of the channel to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteChannelRequest {
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteStreamKeyRequest {
  /**
   * <p>ARN of the stream key to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteStreamKeyRequest {
  export const filterSensitiveLog = (obj: DeleteStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface GetChannelRequest {
  /**
   * <p>ARN of the channel for which the configuration is to be retrieved.</p>
   */
  arn: string | undefined;
}

export namespace GetChannelRequest {
  export const filterSensitiveLog = (obj: GetChannelRequest): any => ({
    ...obj,
  });
}

export interface GetChannelResponse {
  /**
   * <p>Object specifying a channel.</p>
   */
  channel?: Channel;
}

export namespace GetChannelResponse {
  export const filterSensitiveLog = (obj: GetChannelResponse): any => ({
    ...obj,
  });
}

export interface GetStreamKeyRequest {
  /**
   * <p>ARN for the stream key to be retrieved.</p>
   */
  arn: string | undefined;
}

export namespace GetStreamKeyRequest {
  export const filterSensitiveLog = (obj: GetStreamKeyRequest): any => ({
    ...obj,
  });
}

export interface GetStreamKeyResponse {
  /**
   * <p>Object specifying a stream key.</p>
   */
  streamKey?: StreamKey;
}

export namespace GetStreamKeyResponse {
  export const filterSensitiveLog = (obj: GetStreamKeyResponse): any => ({
    ...obj,
  });
}

export interface GetStreamRequest {
  /**
   * <p>Channel ARN for stream to be accessed.</p>
   */
  channelArn: string | undefined;
}

export namespace GetStreamRequest {
  export const filterSensitiveLog = (obj: GetStreamRequest): any => ({
    ...obj,
  });
}

export interface GetStreamResponse {
  /**
   * <p>Specifies a live video stream that has been ingested and distributed.</p>
   */
  stream?: _Stream;
}

export namespace GetStreamResponse {
  export const filterSensitiveLog = (obj: GetStreamResponse): any => ({
    ...obj,
  });
}

export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>Unexpected error during processing of request.</p>
   */
  exceptionMessage?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export interface ListChannelsRequest {
  /**
   * <p>Maximum number of channels to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The first channel to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Filters the channel list to match the specified name.</p>
   */
  filterByName?: string;
}

export namespace ListChannelsRequest {
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
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

export namespace ListChannelsResponse {
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListStreamKeysRequest {
  /**
   * <p>Channel ARN used to filter the list.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Maximum number of streamKeys to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The first stream key to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;
}

export namespace ListStreamKeysRequest {
  export const filterSensitiveLog = (obj: ListStreamKeysRequest): any => ({
    ...obj,
  });
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

export namespace ListStreamKeysResponse {
  export const filterSensitiveLog = (obj: ListStreamKeysResponse): any => ({
    ...obj,
  });
}

export interface ListStreamsRequest {
  /**
   * <p>Maximum number of streams to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;
}

export namespace ListStreamsRequest {
  export const filterSensitiveLog = (obj: ListStreamsRequest): any => ({
    ...obj,
  });
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

export namespace ListStreamsResponse {
  export const filterSensitiveLog = (obj: ListStreamsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The first tag to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of tags to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The ARN of the resource to be retrieved.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>If there are more tags than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;

  tags: { [key: string]: string } | undefined;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PendingVerification extends __SmithyException, $MetadataBearer {
  name: "PendingVerification";
  $fault: "client";
  /**
   * <p> Your account is pending verification. </p>
   */
  exceptionMessage?: string;
}

export namespace PendingVerification {
  export const filterSensitiveLog = (obj: PendingVerification): any => ({
    ...obj,
  });
}

export interface PutMetadataRequest {
  /**
   * <p>Metadata to insert into the stream. Maximum: 1 KB per request.</p>
   */
  metadata: string | undefined;

  /**
   * <p>ARN of the channel into which metadata is inserted. This channel must have an active
   *       stream.</p>
   */
  channelArn: string | undefined;
}

export namespace PutMetadataRequest {
  export const filterSensitiveLog = (obj: PutMetadataRequest): any => ({
    ...obj,
  });
}

export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>Request references a resource which does not exist.</p>
   */
  exceptionMessage?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>Request would cause a service quota to be exceeded.</p>
   */
  exceptionMessage?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface StopStreamRequest {
  /**
   * <p>ARN of the channel for which the stream is to be stopped.</p>
   */
  channelArn: string | undefined;
}

export namespace StopStreamRequest {
  export const filterSensitiveLog = (obj: StopStreamRequest): any => ({
    ...obj,
  });
}

export interface StopStreamResponse {}

export namespace StopStreamResponse {
  export const filterSensitiveLog = (obj: StopStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a live video stream that has been ingested and distributed.</p>
 */
export interface _Stream {
  /**
   * <p>ISO-8601 formatted timestamp of the stream’s start.</p>
   */
  startTime?: Date;

  /**
   * <p>URL of the video master manifest, required by the video player to play the HLS
   *       stream.</p>
   */
  playbackUrl?: string;

  /**
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>Number of current viewers of the stream.</p>
   */
  viewerCount?: number;

  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;
}

export namespace _Stream {
  export const filterSensitiveLog = (obj: _Stream): any => ({
    ...obj,
  });
}

export enum StreamHealth {
  Starving = "STARVING",
  StreamHealthy = "HEALTHY",
  Unknown = "UNKNOWN",
}

/**
 * <p>Object specifying a stream key.</p>
 */
export interface StreamKey {
  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Stream-key ARN.</p>
   */
  arn?: string;

  /**
   * <p>Stream-key value.</p>
   */
  value?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>
   *          </p>
   */
  tags?: { [key: string]: string };
}

export namespace StreamKey {
  export const filterSensitiveLog = (obj: StreamKey): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a stream key.</p>
 */
export interface StreamKeySummary {
  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>
   *          </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Stream-key ARN.</p>
   */
  arn?: string;
}

export namespace StreamKeySummary {
  export const filterSensitiveLog = (obj: StreamKeySummary): any => ({
    ...obj,
  });
}

export enum StreamState {
  StreamLive = "LIVE",
  StreamOffline = "OFFLINE",
}

/**
 * <p>Summary information about a stream.</p>
 */
export interface StreamSummary {
  /**
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * <p>Channel ARN for the stream.</p>
   */
  channelArn?: string;

  /**
   * <p>Number of current viewers of the stream.</p>
   */
  viewerCount?: number;

  /**
   * <p>ISO-8601 formatted timestamp of the stream’s start.</p>
   */
  startTime?: Date;
}

export namespace StreamSummary {
  export const filterSensitiveLog = (obj: StreamSummary): any => ({
    ...obj,
  });
}

export interface StreamUnavailable extends __SmithyException, $MetadataBearer {
  name: "StreamUnavailable";
  $fault: "server";
  /**
   * <p>The stream is temporarily unavailable.</p>
   */
  exceptionMessage?: string;
}

export namespace StreamUnavailable {
  export const filterSensitiveLog = (obj: StreamUnavailable): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be added or updated.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>Request was denied due to request throttling.</p>
   */
  exceptionMessage?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>ARN of the resource for which tags are to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateChannelRequest {
  /**
   * <p>Channel latency mode. Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>ARN of the channel to be updated.</p>
   */
  arn: string | undefined;

  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code>: Multiple qualities are generated from the original input, to
   *           automatically give viewers the best experience for their devices and network conditions.
   *           Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s
   *           video-quality choice is limited to the original input. Vertical resolution can be up to
   *           480 and bitrate can be up to 1.5 Mbps.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>STANDARD</code>.</p>
   */
  type?: ChannelType | string;
}

export namespace UpdateChannelRequest {
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateChannelResponse {
  /**
   * <p>Object specifying a channel.</p>
   */
  channel?: Channel;
}

export namespace UpdateChannelResponse {
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}

export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
   */
  exceptionMessage?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}
