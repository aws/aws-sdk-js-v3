import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>User does not have sufficient access to perform this action.</p>
   */
  exceptionMessage?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetChannelRequest): any => ({
    ...obj,
  });
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
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. Default: <code>LOW</code>. (Note: In the Amazon IVS console, <code>LOW</code> and
   *       <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. Valid values:</p>
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
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
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

export namespace BatchError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchError): any => ({
    ...obj,
  });
}

export interface BatchGetChannelResponse {
  channels?: Channel[];
  /**
   * <p>Each error object is related to a specific ARN in the request.</p>
   */
  errors?: BatchError[];
}

export namespace BatchGetChannelResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetStreamKeyRequest): any => ({
    ...obj,
  });
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
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StreamKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamKey): any => ({
    ...obj,
  });
}

export interface BatchGetStreamKeyResponse {
  streamKeys?: StreamKey[];
  errors?: BatchError[];
}

export namespace BatchGetStreamKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetStreamKeyResponse): any => ({
    ...obj,
  });
}

export interface CreateChannelRequest {
  /**
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to
   *       Full HD. Use <code>LOW</code> for near-real-time interaction with viewers. (Note: In the
   *       Amazon IVS console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)
   *       Default: <code>LOW</code>.</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately.</i> Default: <code>STANDARD</code>. Valid values:</p>
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
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingVerification): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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

export namespace S3DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
    ...obj,
  });
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

export namespace DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationConfiguration): any => ({
    ...obj,
  });
}

export interface CreateRecordingConfigurationRequest {
  /**
   * <p>An arbitrary string (a nickname) that helps the customer identify that resource. The value
   *       does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where recorded video will be
   *       stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRecordingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecordingConfigurationRequest): any => ({
    ...obj,
  });
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
   * <p>An arbitrary string (a nickname) assigned to a recording configuration that helps the
   *       customer identify that resource. The value does not need to be unique.</p>
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
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace RecordingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordingConfiguration): any => ({
    ...obj,
  });
}

export interface CreateRecordingConfigurationResponse {
  /**
   * <p>An object representing a configuration to record a channel stream.</p>
   */
  recordingConfiguration?: RecordingConfiguration;
}

export namespace CreateRecordingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecordingConfigurationResponse): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export interface CreateStreamKeyRequest {
  /**
   * <p>ARN of the channel for which to create the stream key.</p>
   */
  channelArn: string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateStreamKeyRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeletePlaybackKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaybackKeyPairRequest): any => ({
    ...obj,
  });
}

export interface DeletePlaybackKeyPairResponse {}

export namespace DeletePlaybackKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePlaybackKeyPairResponse): any => ({
    ...obj,
  });
}

export interface DeleteRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteRecordingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecordingConfigurationRequest): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelResponse): any => ({
    ...obj,
  });
}

export interface GetPlaybackKeyPairRequest {
  /**
   * <p>ARN of the key pair to be returned.</p>
   */
  arn: string | undefined;
}

export namespace GetPlaybackKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlaybackKeyPairRequest): any => ({
    ...obj,
  });
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
   * <p>An arbitrary string (a nickname) assigned to a playback key pair that helps the customer
   *       identify that resource. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Key-pair identifier.</p>
   */
  fingerprint?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PlaybackKeyPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackKeyPair): any => ({
    ...obj,
  });
}

export interface GetPlaybackKeyPairResponse {
  /**
   * <p>A key pair used to sign and validate a playback authorization token.</p>
   */
  keyPair?: PlaybackKeyPair;
}

export namespace GetPlaybackKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlaybackKeyPairResponse): any => ({
    ...obj,
  });
}

export interface GetRecordingConfigurationRequest {
  /**
   * <p>ARN of the recording configuration to be retrieved.</p>
   */
  arn: string | undefined;
}

export namespace GetRecordingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecordingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetRecordingConfigurationResponse {
  /**
   * <p>An object representing a configuration to record a channel stream.</p>
   */
  recordingConfiguration?: RecordingConfiguration;
}

export namespace GetRecordingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecordingConfigurationResponse): any => ({
    ...obj,
  });
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelNotBroadcasting): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamRequest): any => ({
    ...obj,
  });
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
   * <p>URL of the master playlist, required by the video player to play the HLS stream.</p>
   */
  playbackUrl?: string;

  /**
   * <p>ISO-8601 formatted timestamp of the stream’s start.</p>
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
   * <p>Number of current viewers of the stream. A value of -1 indicates that the request timed
   *       out; in this case, retry.</p>
   */
  viewerCount?: number;
}

export namespace _Stream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: _Stream): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamResponse): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamKeyResponse): any => ({
    ...obj,
  });
}

export interface ImportPlaybackKeyPairRequest {
  /**
   * <p>The public portion of a customer-generated key pair.</p>
   */
  publicKeyMaterial: string | undefined;

  /**
   * <p>An arbitrary string (a nickname) assigned to a playback key pair that helps the customer
   *       identify that resource. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Any tags provided with the request are added to the playback key pair tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ImportPlaybackKeyPairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportPlaybackKeyPairRequest): any => ({
    ...obj,
  });
}

export interface ImportPlaybackKeyPairResponse {
  /**
   * <p>A key pair used to sign and validate a playback authorization token.</p>
   */
  keyPair?: PlaybackKeyPair;
}

export namespace ImportPlaybackKeyPairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportPlaybackKeyPairResponse): any => ({
    ...obj,
  });
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
   * <p>Maximum number of channels to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
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
   * <p>Channel name.</p>
   */
  name?: string;

  /**
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use
   *       <code>LOW</code> for near-real-time interaction with viewers. Default: <code>LOW</code>. (Note: In the Amazon IVS
   *       console, <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard, respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Whether the channel is private (enabled for playback authorization). Default: <code>false</code>.</p>
   */
  authorized?: boolean;

  /**
   * <p>Recording-configuration ARN. A value other than an empty string indicates that recording
   *       is enabled. Default: "" (empty string, recording is disabled).</p>
   */
  recordingConfigurationArn?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ChannelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListPlaybackKeyPairsRequest {
  /**
   * <p>Maximum number of key pairs to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The first key pair to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListPlaybackKeyPairsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaybackKeyPairsRequest): any => ({
    ...obj,
  });
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
   * <p>An arbitrary string (a nickname) assigned to a playback key pair that helps the customer
   *       identify that resource. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace PlaybackKeyPairSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlaybackKeyPairSummary): any => ({
    ...obj,
  });
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

export namespace ListPlaybackKeyPairsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPlaybackKeyPairsResponse): any => ({
    ...obj,
  });
}

export interface ListRecordingConfigurationsRequest {
  /**
   * <p>The first recording configuration to retrieve. This is used for pagination; see the
   *         <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of recording configurations to return. Default: 50. </p>
   */
  maxResults?: number;
}

export namespace ListRecordingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecordingConfigurationsRequest): any => ({
    ...obj,
  });
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
   * <p>An arbitrary string (a nickname) assigned to a recording configuration that helps the
   *       customer identify that resource. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains information about where recorded video will be stored.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Indicates the current state of the recording configuration. When the state is
   *       <code>ACTIVE</code>, the configuration is ready for recording a channel stream.</p>
   */
  state: RecordingConfigurationState | string | undefined;

  /**
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace RecordingConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordingConfigurationSummary): any => ({
    ...obj,
  });
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

export namespace ListRecordingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecordingConfigurationsResponse): any => ({
    ...obj,
  });
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
   * <p>Maximum number of streamKeys to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListStreamKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamKeysRequest): any => ({
    ...obj,
  });
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
   * <p>Array of 1-50 maps, each of the form <code>string:string (key:value)</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StreamKeySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamKeySummary): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamKeysResponse): any => ({
    ...obj,
  });
}

export interface ListStreamsRequest {
  /**
   * <p>The first stream to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of streams to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListStreamsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsRequest): any => ({
    ...obj,
  });
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
   * <p>The stream’s state.</p>
   */
  state?: StreamState | string;

  /**
   * <p>The stream’s health.</p>
   */
  health?: StreamHealth | string;

  /**
   * <p>Number of current viewers of the stream. A value of -1 indicates that the request timed
   *       out; in this case, retry.</p>
   */
  viewerCount?: number;

  /**
   * <p>ISO-8601 formatted timestamp of the stream’s start.</p>
   */
  startTime?: Date;
}

export namespace StreamSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamSummary): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to be retrieved.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The first tag to retrieve. This is used for pagination; see the <code>nextToken</code>
   *       response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of tags to return. Default: 50.</p>
   */
  maxResults?: number;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  tags: { [key: string]: string } | undefined;
  /**
   * <p>If there are more tags than <code>maxResults</code>, use <code>nextToken</code> in the
   *       request to get the next set.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PutMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutMetadataRequest): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopStreamRequest): any => ({
    ...obj,
  });
}

export interface StopStreamResponse {}

export namespace StopStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopStreamResponse): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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
   * <p>Channel latency mode. Use <code>NORMAL</code> to broadcast and deliver live video up to Full HD. Use
   *       <code>LOW</code> for near-real-time interaction with viewers. (Note: In the Amazon IVS console,
   *         <code>LOW</code> and <code>NORMAL</code> correspond to Ultra-low and Standard,
   *       respectively.)</p>
   */
  latencyMode?: ChannelLatencyMode | string;

  /**
   * <p>Channel type, which determines the allowable resolution and bitrate. <i>If you
   *         exceed the allowable resolution or bitrate, the stream probably will disconnect
   *         immediately</i>. Valid values:</p>
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

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}
