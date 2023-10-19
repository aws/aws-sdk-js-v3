// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { KinesisVideoServiceException as __BaseException } from "./KinesisVideoServiceException";

/**
 * @public
 * <p>You do not have required permissions to perform this operation.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You have reached the maximum limit of active signaling channels for this Amazon Web Services account
 *             in this region.</p>
 */
export class AccountChannelLimitExceededException extends __BaseException {
  readonly name: "AccountChannelLimitExceededException" = "AccountChannelLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountChannelLimitExceededException, __BaseException>) {
    super({
      name: "AccountChannelLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountChannelLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The number of streams created for the account is too high.</p>
 */
export class AccountStreamLimitExceededException extends __BaseException {
  readonly name: "AccountStreamLimitExceededException" = "AccountStreamLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountStreamLimitExceededException, __BaseException>) {
    super({
      name: "AccountStreamLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountStreamLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const APIName = {
  GET_CLIP: "GET_CLIP",
  GET_DASH_STREAMING_SESSION_URL: "GET_DASH_STREAMING_SESSION_URL",
  GET_HLS_STREAMING_SESSION_URL: "GET_HLS_STREAMING_SESSION_URL",
  GET_IMAGES: "GET_IMAGES",
  GET_MEDIA: "GET_MEDIA",
  GET_MEDIA_FOR_FRAGMENT_LIST: "GET_MEDIA_FOR_FRAGMENT_LIST",
  LIST_FRAGMENTS: "LIST_FRAGMENTS",
  PUT_MEDIA: "PUT_MEDIA",
} as const;

/**
 * @public
 */
export type APIName = (typeof APIName)[keyof typeof APIName];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  FULL_MESH: "FULL_MESH",
  SINGLE_MASTER: "SINGLE_MASTER",
} as const;

/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * <p>A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel
 *             type.</p>
 */
export interface SingleMasterConfiguration {
  /**
   * @public
   * <p>The period of time a signaling channel retains undelivered messages before they are
   *             discarded.</p>
   */
  MessageTtlSeconds?: number;
}

/**
 * @public
 * <p>A structure that encapsulates a signaling channel's metadata and properties.</p>
 */
export interface ChannelInfo {
  /**
   * @public
   * <p>The name of the signaling channel.</p>
   */
  ChannelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signaling channel.</p>
   */
  ChannelARN?: string;

  /**
   * @public
   * <p>The type of the signaling channel.</p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>Current status of the signaling channel.</p>
   */
  ChannelStatus?: Status;

  /**
   * @public
   * <p>The time at which the signaling channel was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel
   *             type.</p>
   */
  SingleMasterConfiguration?: SingleMasterConfiguration;

  /**
   * @public
   * <p>The current version of the signaling channel.</p>
   */
  Version?: string;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * <p>An optional input parameter for the <code>ListSignalingChannels</code> API. When this
 *             parameter is specified while invoking <code>ListSignalingChannels</code>, the API
 *             returns only the channels that satisfy a condition specified in
 *                 <code>ChannelNameCondition</code>.</p>
 */
export interface ChannelNameCondition {
  /**
   * @public
   * <p>A comparison operator. Currently, you can only specify the <code>BEGINS_WITH</code>
   *             operator, which finds signaling channels whose names begin with a given prefix.</p>
   */
  ComparisonOperator?: ComparisonOperator;

  /**
   * @public
   * <p>A value to compare.</p>
   */
  ComparisonValue?: string;
}

/**
 * @public
 * @enum
 */
export const ChannelProtocol = {
  HTTPS: "HTTPS",
  WEBRTC: "WEBRTC",
  WSS: "WSS",
} as const;

/**
 * @public
 */
export type ChannelProtocol = (typeof ChannelProtocol)[keyof typeof ChannelProtocol];

/**
 * @public
 * @enum
 */
export const ChannelRole = {
  MASTER: "MASTER",
  VIEWER: "VIEWER",
} as const;

/**
 * @public
 */
export type ChannelRole = (typeof ChannelRole)[keyof typeof ChannelRole];

/**
 * @public
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 */
export class ClientLimitExceededException extends __BaseException {
  readonly name: "ClientLimitExceededException" = "ClientLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientLimitExceededException, __BaseException>) {
    super({
      name: "ClientLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * @public
 * <p>A key and value pair that is associated with the specified signaling channel.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag that is associated with the specified signaling channel.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag that is associated with the specified signaling channel.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateSignalingChannelInput {
  /**
   * @public
   * <p>A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.</p>
   */
  ChannelName: string | undefined;

  /**
   * @public
   * <p>A type of the signaling channel that you are creating. Currently,
   *                 <code>SINGLE_MASTER</code> is the only supported channel type. </p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>A structure containing the configuration for the <code>SINGLE_MASTER</code> channel
   *             type. </p>
   */
  SingleMasterConfiguration?: SingleMasterConfiguration;

  /**
   * @public
   * <p>A set of tags (key-value pairs) that you want to associate with this channel.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSignalingChannelOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the created channel.</p>
   */
  ChannelARN?: string;
}

/**
 * @public
 * <p>The value for this input parameter is invalid.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>When the input <code>StreamARN</code> or <code>ChannelARN</code>
 *             in <code>CLOUD_STORAGE_MODE</code> is already mapped to a different
 *             Kinesis Video Stream resource, or if the provided input <code>StreamARN</code>
 *             or <code>ChannelARN</code> is not in Active status, try one of the following : </p>
 *          <ol>
 *             <li>
 *                <p>The <code>DescribeMediaStorageConfiguration</code> API to determine what the stream given channel is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeMappedResourceConfiguration</code> API to determine the channel that the given stream is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeStream</code> or <code>DescribeSignalingChannel</code> API to determine the status of the resource.
 *             </p>
 *             </li>
 *          </ol>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You have exceeded the limit of tags that you can associate with the resource.
 *             A Kinesis video stream can support up to 50 tags. </p>
 */
export class TagsPerResourceExceededLimitException extends __BaseException {
  readonly name: "TagsPerResourceExceededLimitException" = "TagsPerResourceExceededLimitException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagsPerResourceExceededLimitException, __BaseException>) {
    super({
      name: "TagsPerResourceExceededLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagsPerResourceExceededLimitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateStreamInput {
  /**
   * @public
   * <p>The name of the device that is writing to the stream. </p>
   *          <note>
   *             <p>In the current implementation, Kinesis Video Streams does not use this
   *                 name.</p>
   *          </note>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>A name for the stream that you are creating.</p>
   *          <p>The stream name is an identifier for the stream, and must be unique for each
   *             account and region.</p>
   */
  StreamName: string | undefined;

  /**
   * @public
   * <p>The media type of the stream. Consumers of the stream can use this information when
   *             processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media
   *                 Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>
   *             for guidelines.</p>
   *          <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p>
   *          <p>This parameter is optional; the default value is <code>null</code> (or empty in
   *             JSON).</p>
   */
  MediaType?: string;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key that you want Kinesis Video
   *             Streams to use to encrypt stream data.</p>
   *          <p>If no key ID is specified, the default, Kinesis Video-managed key
   *             (<code>Amazon Web Services/kinesisvideo</code>) is used.</p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p>
   *          <p>The default value is 0, indicating that the stream does not persist data.</p>
   *          <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume
   *             the fragments that remain in the service host buffer, which has a retention time limit
   *             of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the
   *             buffer when either limit is reached.</p>
   */
  DataRetentionInHours?: number;

  /**
   * @public
   * <p>A list of tags to associate with the specified stream. Each tag is a key-value pair
   *             (the value is optional).</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStreamOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;
}

/**
 * @public
 * <p>Not implemented.
 *             </p>
 */
export class DeviceStreamLimitExceededException extends __BaseException {
  readonly name: "DeviceStreamLimitExceededException" = "DeviceStreamLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceStreamLimitExceededException, __BaseException>) {
    super({
      name: "DeviceStreamLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceStreamLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Not implemented.</p>
 */
export class InvalidDeviceException extends __BaseException {
  readonly name: "InvalidDeviceException" = "InvalidDeviceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeviceException, __BaseException>) {
    super({
      name: "InvalidDeviceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeviceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteEdgeConfigurationInput {
  /**
   * @public
   * <p>The name of the stream from which to delete the edge configuration. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;
}

/**
 * @public
 */
export interface DeleteEdgeConfigurationOutput {}

/**
 * @public
 * <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The Exception rendered when the Amazon Kinesis Video Stream can't find a stream's edge configuration
 *          that you specified. </p>
 */
export class StreamEdgeConfigurationNotFoundException extends __BaseException {
  readonly name: "StreamEdgeConfigurationNotFoundException" = "StreamEdgeConfigurationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamEdgeConfigurationNotFoundException, __BaseException>) {
    super({
      name: "StreamEdgeConfigurationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamEdgeConfigurationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteSignalingChannelInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signaling channel that you want to
   *             delete.</p>
   */
  ChannelARN: string | undefined;

  /**
   * @public
   * <p>The current version of the signaling channel that you want to delete. You can obtain
   *             the current version by invoking the <code>DescribeSignalingChannel</code> or
   *                 <code>ListSignalingChannels</code> API operations.</p>
   */
  CurrentVersion?: string;
}

/**
 * @public
 */
export interface DeleteSignalingChannelOutput {}

/**
 * @public
 * <p>The stream version that you specified is not the latest version. To get the latest
 *             version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a>
 *             API.</p>
 */
export class VersionMismatchException extends __BaseException {
  readonly name: "VersionMismatchException" = "VersionMismatchException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionMismatchException, __BaseException>) {
    super({
      name: "VersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteStreamInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream that you want to delete. </p>
   */
  StreamARN: string | undefined;

  /**
   * @public
   * <p>Optional: The version of the stream that you want to delete. </p>
   *          <p>Specify the version as a safeguard to ensure that your are deleting the correct
   *             stream. To get the stream version, use the <code>DescribeStream</code> API.</p>
   *          <p>If not specified, only the <code>CreationTime</code> is checked before deleting the
   *             stream.</p>
   */
  CurrentVersion?: string;
}

/**
 * @public
 */
export interface DeleteStreamOutput {}

/**
 * @public
 * <p>The caller is not authorized to perform this operation.</p>
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const StrategyOnFullSize = {
  DELETE_OLDEST_MEDIA: "DELETE_OLDEST_MEDIA",
  DENY_NEW_MEDIA: "DENY_NEW_MEDIA",
} as const;

/**
 * @public
 */
export type StrategyOnFullSize = (typeof StrategyOnFullSize)[keyof typeof StrategyOnFullSize];

/**
 * @public
 * <p>The configuration details that include the maximum size of the media
 *             (<code>MaxLocalMediaSizeInMB</code>) that you want to
 *             store for a stream on the Edge Agent, as well as the strategy that should be used (<code>StrategyOnFullSize</code>) when a stream's
 *             maximum size has been reached.</p>
 */
export interface LocalSizeConfig {
  /**
   * @public
   * <p>The overall maximum size of the media that you want to store for a stream on the Edge Agent. </p>
   */
  MaxLocalMediaSizeInMB?: number;

  /**
   * @public
   * <p>The strategy to perform when a stream’s <code>MaxLocalMediaSizeInMB</code> limit is reached.</p>
   */
  StrategyOnFullSize?: StrategyOnFullSize;
}

/**
 * @public
 * <p>The configuration details required to delete the connection of the stream from the Edge Agent.</p>
 */
export interface DeletionConfig {
  /**
   * @public
   * <p>The number of hours that you want to retain the data in the stream on the Edge Agent. The default value of the retention
   *             time is 720 hours, which translates to 30 days.</p>
   */
  EdgeRetentionInHours?: number;

  /**
   * @public
   * <p>The value of the local size required in order to delete the edge configuration.</p>
   */
  LocalSizeConfig?: LocalSizeConfig;

  /**
   * @public
   * <p>The <code>boolean</code> value used to indicate whether or not you want to mark the media for deletion, once it has been uploaded to
   *             the Kinesis Video Stream cloud. The media files can be deleted if any of the deletion configuration values are
   *             set to <code>true</code>, such as when the limit for the <code>EdgeRetentionInHours</code>, or the
   *             <code>MaxLocalMediaSizeInMB</code>, has been reached.
   *         </p>
   *          <p>Since the default value is set to <code>true</code>, configure the uploader schedule such
   *             that the media files are not being deleted before they are initially uploaded to the  Amazon Web Services cloud.</p>
   */
  DeleteAfterUpload?: boolean;
}

/**
 * @public
 */
export interface DescribeEdgeConfigurationInput {
  /**
   * @public
   * <p>The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code> or
   *             the <code>StreamARN</code>.
   *         </p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream. Specify either the <code>StreamName</code>or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;
}

/**
 * @public
 * @enum
 */
export const RecorderStatus = {
  SUCCESS: "SUCCESS",
  SYSTEM_ERROR: "SYSTEM_ERROR",
  USER_ERROR: "USER_ERROR",
} as const;

/**
 * @public
 */
export type RecorderStatus = (typeof RecorderStatus)[keyof typeof RecorderStatus];

/**
 * @public
 * <p>The latest status of a stream's edge recording job.</p>
 */
export interface LastRecorderStatus {
  /**
   * @public
   * <p>A description of a recorder job’s latest status.</p>
   */
  JobStatusDetails?: string;

  /**
   * @public
   * <p>The timestamp at which the recorder job was last executed and media stored to local disk.</p>
   */
  LastCollectedTime?: Date;

  /**
   * @public
   * <p>The timestamp at which the recorder status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The status of the latest recorder job.</p>
   */
  RecorderStatus?: RecorderStatus;
}

/**
 * @public
 * @enum
 */
export const UploaderStatus = {
  SUCCESS: "SUCCESS",
  SYSTEM_ERROR: "SYSTEM_ERROR",
  USER_ERROR: "USER_ERROR",
} as const;

/**
 * @public
 */
export type UploaderStatus = (typeof UploaderStatus)[keyof typeof UploaderStatus];

/**
 * @public
 * <p>The latest status of a stream’s edge to cloud uploader job.</p>
 */
export interface LastUploaderStatus {
  /**
   * @public
   * <p>A description of an uploader job’s latest status.</p>
   */
  JobStatusDetails?: string;

  /**
   * @public
   * <p>The timestamp at which the uploader job was last executed and media collected to the cloud.</p>
   */
  LastCollectedTime?: Date;

  /**
   * @public
   * <p>The timestamp at which the uploader status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The status of the latest uploader job.</p>
   */
  UploaderStatus?: UploaderStatus;
}

/**
 * @public
 * <p>An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent.</p>
 */
export interface EdgeAgentStatus {
  /**
   * @public
   * <p>The latest status of a stream’s edge recording job.</p>
   */
  LastRecorderStatus?: LastRecorderStatus;

  /**
   * @public
   * <p>The latest status of a stream’s edge to cloud uploader job.</p>
   */
  LastUploaderStatus?: LastUploaderStatus;
}

/**
 * @public
 * @enum
 */
export const MediaUriType = {
  FILE_URI: "FILE_URI",
  RTSP_URI: "RTSP_URI",
} as const;

/**
 * @public
 */
export type MediaUriType = (typeof MediaUriType)[keyof typeof MediaUriType];

/**
 * @public
 * <p>The configuration details that consist of the credentials required
 *             (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files that are
 *             streamed to the camera.</p>
 */
export interface MediaSourceConfig {
  /**
   * @public
   * <p>The Amazon Web Services Secrets Manager ARN for the username and password of the camera, or a local media file location.</p>
   */
  MediaUriSecretArn: string | undefined;

  /**
   * @public
   * <p>The Uniform Resource Identifier (URI) type. The <code>FILE_URI</code> value can be used to stream
   *             local media files.</p>
   *          <note>
   *             <p>Preview only supports the <code>RTSP_URI</code> media source URI format .</p>
   *          </note>
   */
  MediaUriType: MediaUriType | undefined;
}

/**
 * @public
 * <p>This API enables you to specify the duration that the camera,
 *             or local media file, should record onto the Edge Agent. The <code>ScheduleConfig</code> consists of the <code>ScheduleExpression</code> and the
 *             <code>DurationInMinutes</code> attributes. </p>
 *          <p>If the <code>ScheduleConfig</code> is not provided in the <code>RecorderConfig</code>,
 *                 then the Edge Agent will always be set to recording mode.</p>
 *          <p>If the <code>ScheduleConfig</code> is not provided in the <code>UploaderConfig</code>,
 *             then the Edge Agent will upload at regular intervals (every 1 hour).</p>
 */
export interface ScheduleConfig {
  /**
   * @public
   * <p>The Quartz cron expression that takes care of scheduling jobs to record from the
   *             camera, or local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> is not provided for the <code>RecorderConfig</code>,
   *             then the Edge Agent will always be set to recording mode.</p>
   *          <p>For more information about Quartz, refer to the
   *             <a href="http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html">
   *                <i>Cron Trigger Tutorial</i>
   *             </a> page to understand the valid expressions and its use.</p>
   */
  ScheduleExpression: string | undefined;

  /**
   * @public
   * <p>The total duration to record the media. If the <code>ScheduleExpression</code> attribute is provided, then the
   *         <code>DurationInSeconds</code> attribute should also be specified.</p>
   */
  DurationInSeconds: number | undefined;
}

/**
 * @public
 * <p>The recorder configuration consists of the local <code>MediaSourceConfig</code> details that are used as
 *             credentials to accesss the local media files streamed on the camera. </p>
 */
export interface RecorderConfig {
  /**
   * @public
   * <p>The configuration details that consist of the credentials required
   *             (<code>MediaUriSecretArn</code> and <code>MediaUriType</code>) to access the media files
   *             streamed to the camera.
   *             </p>
   */
  MediaSourceConfig: MediaSourceConfig | undefined;

  /**
   * @public
   * <p>The configuration that consists of the <code>ScheduleExpression</code> and the
   *             <code>DurationInMinutes</code> details that specify the scheduling to record from a camera, or
   *         local media file, onto the Edge Agent. If the <code>ScheduleExpression</code> attribute is not provided,
   *         then the Edge Agent will always be set to recording mode.</p>
   */
  ScheduleConfig?: ScheduleConfig;
}

/**
 * @public
 * <p>The configuration that consists of the <code>ScheduleExpression</code>
 *             and the <code>DurationInMinutes</code> details that specify the scheduling to record from a camera,
 *             or local media file, onto the Edge Agent. If the <code>ScheduleConfig</code>
 *             is not provided in the <code>UploaderConfig</code>, then the Edge Agent will upload at regular intervals (every 1 hour).
 *         </p>
 */
export interface UploaderConfig {
  /**
   * @public
   * <p>The configuration that consists of the <code>ScheduleExpression</code> and the
   *             <code>DurationInMinutes</code> details that specify the scheduling to record from a camera, or
   *             local media file, onto the Edge Agent. If the <code>ScheduleConfig</code> is not provided in this <code>UploaderConfig</code>,
   *             then the Edge Agent will upload at regular intervals (every 1 hour).</p>
   */
  ScheduleConfig: ScheduleConfig | undefined;
}

/**
 * @public
 * <p>A description of the stream's edge configuration that will be used to sync
 *             with the Edge Agent IoT Greengrass component. The Edge Agent component will run
 *             on an IoT Hub Device setup at your premise.</p>
 */
export interface EdgeConfig {
  /**
   * @public
   * <p>The "<b>Internet of Things (IoT) Thing</b>" Arn of the stream.</p>
   */
  HubDeviceArn: string | undefined;

  /**
   * @public
   * <p>The recorder configuration consists of the local <code>MediaSourceConfig</code> details, that are used as
   *             credentials to access the local media files streamed on the camera. </p>
   */
  RecorderConfig: RecorderConfig | undefined;

  /**
   * @public
   * <p>The uploader configuration contains the <code>ScheduleExpression</code> details that are used to
   *             schedule upload jobs for the recorded media files from the Edge Agent to a Kinesis Video Stream.</p>
   */
  UploaderConfig?: UploaderConfig;

  /**
   * @public
   * <p>The deletion configuration is made up of the retention time (<code>EdgeRetentionInHours</code>) and local size configuration
   *         (<code>LocalSizeConfig</code>) details that are used to make the deletion.</p>
   */
  DeletionConfig?: DeletionConfig;
}

/**
 * @public
 * @enum
 */
export const SyncStatus = {
  ACKNOWLEDGED: "ACKNOWLEDGED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DELETING_ACKNOWLEDGED: "DELETING_ACKNOWLEDGED",
  IN_SYNC: "IN_SYNC",
  SYNCING: "SYNCING",
  SYNC_FAILED: "SYNC_FAILED",
} as const;

/**
 * @public
 */
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus];

/**
 * @public
 */
export interface DescribeEdgeConfigurationOutput {
  /**
   * @public
   * <p>The name of the stream from which the edge configuration was updated.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The timestamp at which a stream’s edge configuration was first created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The timestamp at which a stream’s edge configuration was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The latest status of the edge configuration update.</p>
   */
  SyncStatus?: SyncStatus;

  /**
   * @public
   * <p>A description of the generated failure status.</p>
   */
  FailedStatusDetails?: string;

  /**
   * @public
   * <p>A description of the stream's edge configuration that will be used to sync
   *             with the Edge Agent IoT Greengrass component. The Edge Agent component will run
   *             on an IoT Hub Device setup at your premise.</p>
   */
  EdgeConfig?: EdgeConfig;

  /**
   * @public
   * <p>An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent.</p>
   */
  EdgeAgentStatus?: EdgeAgentStatus;
}

/**
 * @public
 */
export interface DescribeImageGenerationConfigurationInput {
  /**
   * @public
   * <p>The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.  </p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;
}

/**
 * @public
 * <p>The structure that contains the information required to deliver images to a customer.</p>
 */
export interface ImageGenerationDestinationConfig {
  /**
   * @public
   * <p>The Uniform Resource Identifier (URI) that identifies where the images will be delivered.</p>
   */
  Uri: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region of the S3 bucket where images will be delivered. This <code>DestinationRegion</code> must match the Region where the stream is located.</p>
   */
  DestinationRegion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Format = {
  JPEG: "JPEG",
  PNG: "PNG",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const FormatConfigKey = {
  JPEGQuality: "JPEGQuality",
} as const;

/**
 * @public
 */
export type FormatConfigKey = (typeof FormatConfigKey)[keyof typeof FormatConfigKey];

/**
 * @public
 * @enum
 */
export const ImageSelectorType = {
  PRODUCER_TIMESTAMP: "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP: "SERVER_TIMESTAMP",
} as const;

/**
 * @public
 */
export type ImageSelectorType = (typeof ImageSelectorType)[keyof typeof ImageSelectorType];

/**
 * @public
 * <p>The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.</p>
 */
export interface ImageGenerationConfiguration {
  /**
   * @public
   * <p>Indicates whether the <code>ContinuousImageGenerationConfigurations</code> API is enabled or disabled.</p>
   */
  Status: ConfigurationStatus | undefined;

  /**
   * @public
   * <p>The origin of the Server or Producer timestamps to use to generate the images.</p>
   */
  ImageSelectorType: ImageSelectorType | undefined;

  /**
   * @public
   * <p>The structure that contains the information required to deliver images to a customer.</p>
   */
  DestinationConfig: ImageGenerationDestinationConfig | undefined;

  /**
   * @public
   * <p>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 200 ms. If the timestamp range is less than the sampling interval, the
   *             Image from the <code>StartTimestamp</code> will be returned if available. </p>
   */
  SamplingInterval: number | undefined;

  /**
   * @public
   * <p>The accepted image format.</p>
   */
  Format: Format | undefined;

  /**
   * @public
   * <p>The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated.
   *             The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image.
   *             The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression.
   *             If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code>
   *             key will be set to 80.</p>
   */
  FormatConfig?: Partial<Record<FormatConfigKey, string>>;

  /**
   * @public
   * <p>The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and
   *             <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is
   *             provided, its original aspect ratio will be used to calculate the <code>HeightPixels</code> ratio. If neither parameter is provided, the original image size will be returned.</p>
   */
  WidthPixels?: number;

  /**
   * @public
   * <p>The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both
   *             <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio.
   *             If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio.
   *             If neither parameter is provided, the original image size will be returned.</p>
   */
  HeightPixels?: number;
}

/**
 * @public
 */
export interface DescribeImageGenerationConfigurationOutput {
  /**
   * @public
   * <p>The structure that contains the information required for the Kinesis video stream (KVS) images delivery. If this structure is null, the configuration will be deleted from the stream.</p>
   */
  ImageGenerationConfiguration?: ImageGenerationConfiguration;
}

/**
 * @public
 */
export interface DescribeMappedResourceConfigurationInput {
  /**
   * @public
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to provide in your next request, to get another batch of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A structure that encapsulates, or contains, the media storage configuration properties.</p>
 */
export interface MappedResourceConfigurationListItem {
  /**
   * @public
   * <p>The type of the associated resource for the kinesis video stream.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis Video Stream resource, associated with the stream.</p>
   */
  ARN?: string;
}

/**
 * @public
 */
export interface DescribeMappedResourceConfigurationOutput {
  /**
   * @public
   * <p>A structure that encapsulates, or contains, the media storage configuration properties.</p>
   */
  MappedResourceConfigurationList?: MappedResourceConfigurationListItem[];

  /**
   * @public
   * <p>The token that was used in the <code>NextToken</code>request to fetch the next set of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeMediaStorageConfigurationInput {
  /**
   * @public
   * <p>The name of the channel.</p>
   */
  ChannelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the channel.</p>
   */
  ChannelARN?: string;
}

/**
 * @public
 * @enum
 */
export const MediaStorageConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MediaStorageConfigurationStatus =
  (typeof MediaStorageConfigurationStatus)[keyof typeof MediaStorageConfigurationStatus];

/**
 * @public
 * <p>A structure that encapsulates, or contains, the media storage configuration properties.</p>
 */
export interface MediaStorageConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream </p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The status of the media storage configuration.</p>
   */
  Status: MediaStorageConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeMediaStorageConfigurationOutput {
  /**
   * @public
   * <p>A structure that encapsulates, or contains, the media storage configuration properties.</p>
   */
  MediaStorageConfiguration?: MediaStorageConfiguration;
}

/**
 * @public
 */
export interface DescribeNotificationConfigurationInput {
  /**
   * @public
   * <p>The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.</p>
   */
  StreamARN?: string;
}

/**
 * @public
 * <p>The structure that contains the information required to deliver a notification to a customer.</p>
 */
export interface NotificationDestinationConfig {
  /**
   * @public
   * <p>The Uniform Resource Identifier (URI) that identifies where the images will be delivered.</p>
   */
  Uri: string | undefined;
}

/**
 * @public
 * <p>The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.</p>
 */
export interface NotificationConfiguration {
  /**
   * @public
   * <p>Indicates if a notification configuration is enabled or disabled.</p>
   */
  Status: ConfigurationStatus | undefined;

  /**
   * @public
   * <p>The destination information required to deliver a notification to a customer.</p>
   */
  DestinationConfig: NotificationDestinationConfig | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationConfigurationOutput {
  /**
   * @public
   * <p>The structure that contains the information required for notifications. If the structure is null, the configuration will be deleted from the stream.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

/**
 * @public
 */
export interface DescribeSignalingChannelInput {
  /**
   * @public
   * <p>The name of the signaling channel that you want to describe.</p>
   */
  ChannelName?: string;

  /**
   * @public
   * <p>The ARN of the signaling channel that you want to describe.</p>
   */
  ChannelARN?: string;
}

/**
 * @public
 */
export interface DescribeSignalingChannelOutput {
  /**
   * @public
   * <p>A structure that encapsulates the specified signaling channel's metadata and
   *             properties.</p>
   */
  ChannelInfo?: ChannelInfo;
}

/**
 * @public
 */
export interface DescribeStreamInput {
  /**
   * @public
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;
}

/**
 * @public
 * <p>An object describing a Kinesis video stream.</p>
 */
export interface StreamInfo {
  /**
   * @public
   * <p>The name of the device that is associated with the stream.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The <code>MediaType</code> of the stream. </p>
   */
  MediaType?: string;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key that Kinesis Video Streams
   *             uses to encrypt data on the stream.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>The version of the stream.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The status of the stream.</p>
   */
  Status?: Status;

  /**
   * @public
   * <p>A time stamp that indicates when the stream was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>How long the stream retains data, in hours.</p>
   */
  DataRetentionInHours?: number;
}

/**
 * @public
 */
export interface DescribeStreamOutput {
  /**
   * @public
   * <p>An object that describes the stream.</p>
   */
  StreamInfo?: StreamInfo;
}

/**
 * @public
 */
export interface GetDataEndpointInput {
  /**
   * @public
   * <p>The name of the stream that you want to get the endpoint for. You must specify
   *             either this parameter or a <code>StreamARN</code> in the request.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for.
   *             You must specify either this parameter or a <code>StreamName</code> in the request.
   *         </p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The name of the API action for which to get an endpoint.</p>
   */
  APIName: APIName | undefined;
}

/**
 * @public
 */
export interface GetDataEndpointOutput {
  /**
   * @public
   * <p>The endpoint value. To read data from the stream or to write data to it, specify
   *             this endpoint in your application.</p>
   */
  DataEndpoint?: string;
}

/**
 * @public
 * <p>An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code>
 *             channel type. </p>
 */
export interface SingleMasterChannelEndpointConfiguration {
  /**
   * @public
   * <p>This property is used to determine the nature of communication over this
   *                 <code>SINGLE_MASTER</code> signaling channel. If <code>WSS</code> is specified, this
   *             API returns a websocket endpoint. If <code>HTTPS</code> is specified, this API returns
   *             an <code>HTTPS</code> endpoint.</p>
   */
  Protocols?: ChannelProtocol[];

  /**
   * @public
   * <p>This property is used to determine messaging permissions in this
   *                 <code>SINGLE_MASTER</code> signaling channel. If <code>MASTER</code> is specified,
   *             this API returns an endpoint that a client can use to receive offers from and send
   *             answers to any of the viewers on this signaling channel. If <code>VIEWER</code> is
   *             specified, this API returns an endpoint that a client can use only to send offers to
   *             another <code>MASTER</code> client on this signaling channel. </p>
   */
  Role?: ChannelRole;
}

/**
 * @public
 */
export interface GetSignalingChannelEndpointInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signalling channel for which you want to get an
   *             endpoint.</p>
   */
  ChannelARN: string | undefined;

  /**
   * @public
   * <p>A structure containing the endpoint configuration for the <code>SINGLE_MASTER</code>
   *             channel type.</p>
   */
  SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;
}

/**
 * @public
 * <p>An object that describes the endpoint of the signaling channel returned by the
 *                 <code>GetSignalingChannelEndpoint</code> API.</p>
 *          <p>The media server endpoint will correspond to the <code>WEBRTC</code> Protocol.</p>
 */
export interface ResourceEndpointListItem {
  /**
   * @public
   * <p>The protocol of the signaling channel returned by the
   *                 <code>GetSignalingChannelEndpoint</code> API.</p>
   */
  Protocol?: ChannelProtocol;

  /**
   * @public
   * <p>The endpoint of the signaling channel returned by the
   *                 <code>GetSignalingChannelEndpoint</code> API.</p>
   */
  ResourceEndpoint?: string;
}

/**
 * @public
 */
export interface GetSignalingChannelEndpointOutput {
  /**
   * @public
   * <p>A list of endpoints for the specified signaling channel.</p>
   */
  ResourceEndpointList?: ResourceEndpointListItem[];
}

/**
 * @public
 * <p>The format of the <code>StreamARN</code> is invalid.</p>
 */
export class InvalidResourceFormatException extends __BaseException {
  readonly name: "InvalidResourceFormatException" = "InvalidResourceFormatException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceFormatException, __BaseException>) {
    super({
      name: "InvalidResourceFormatException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceFormatException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListEdgeAgentConfigurationsInput {
  /**
   * @public
   * <p>The "Internet of Things (IoT) Thing" Arn of the edge agent.</p>
   */
  HubDeviceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of edge configurations to return in the response. The default is 5.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If you specify this parameter, when the result of a <code>ListEdgeAgentConfigurations</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of edge configurations, provide this token in your next request.
   *         </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A description of a single stream's edge configuration.</p>
 */
export interface ListEdgeAgentConfigurationsEdgeConfig {
  /**
   * @public
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The timestamp when the stream first created the edge config.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The timestamp when the stream last updated the edge config.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The current sync status of the stream's edge configuration.</p>
   */
  SyncStatus?: SyncStatus;

  /**
   * @public
   * <p>A description of the generated failure status.</p>
   */
  FailedStatusDetails?: string;

  /**
   * @public
   * <p>A description of the stream's edge configuration that will be used to sync
   *             with the Edge Agent IoT Greengrass component. The Edge Agent component will run
   *             on an IoT Hub Device setup at your premise.</p>
   */
  EdgeConfig?: EdgeConfig;
}

/**
 * @public
 */
export interface ListEdgeAgentConfigurationsOutput {
  /**
   * @public
   * <p>A description of a single stream's edge configuration.</p>
   */
  EdgeConfigs?: ListEdgeAgentConfigurationsEdgeConfig[];

  /**
   * @public
   * <p>If the response is truncated, the call returns this element with a given token. To get the next batch of edge configurations, use this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSignalingChannelsInput {
  /**
   * @public
   * <p>The maximum number of channels to return in the response. The default is 500.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If you specify this parameter, when the result of a <code>ListSignalingChannels</code>
   *             operation is truncated, the call returns the <code>NextToken</code> in the response. To
   *             get another batch of channels, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Optional: Returns only the channels that satisfy a specific condition.</p>
   */
  ChannelNameCondition?: ChannelNameCondition;
}

/**
 * @public
 */
export interface ListSignalingChannelsOutput {
  /**
   * @public
   * <p>An array of <code>ChannelInfo</code> objects.</p>
   */
  ChannelInfoList?: ChannelInfo[];

  /**
   * @public
   * <p>If the response is truncated, the call returns this element with a token. To get the
   *             next batch of streams, use this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies the condition that streams must satisfy to be returned when you list
 *             streams (see the <code>ListStreams</code> API). A condition has a comparison operation
 *             and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator,
 *             which finds streams whose names start with a given prefix. </p>
 */
export interface StreamNameCondition {
  /**
   * @public
   * <p>A comparison operator. Currently, you can specify only the <code>BEGINS_WITH</code>
   *             operator, which finds streams whose names start with a given prefix.</p>
   */
  ComparisonOperator?: ComparisonOperator;

  /**
   * @public
   * <p>A value to compare.</p>
   */
  ComparisonValue?: string;
}

/**
 * @public
 */
export interface ListStreamsInput {
  /**
   * @public
   * <p>The maximum number of streams to return in the response. The default is
   *             10,000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If you specify this parameter, when the result of a <code>ListStreams</code>
   *             operation is truncated, the call returns the <code>NextToken</code> in the response. To
   *             get another batch of streams, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Optional: Returns only streams that satisfy a specific condition. Currently, you
   *             can specify only the prefix of a stream name as a condition. </p>
   */
  StreamNameCondition?: StreamNameCondition;
}

/**
 * @public
 */
export interface ListStreamsOutput {
  /**
   * @public
   * <p>An array of <code>StreamInfo</code> objects.</p>
   */
  StreamInfoList?: StreamInfo[];

  /**
   * @public
   * <p>If the response is truncated, the call returns this element with a token. To get
   *             the next batch of streams, use this token in your next request. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>If you specify this parameter and the result of a <code>ListTagsForResource</code>
   *             call is truncated, the response includes a token that you can use in the next request to
   *             fetch the next batch of tags. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signaling channel for which you want to list
   *             tags.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>If you specify this parameter and the result of a <code>ListTagsForResource</code>
   *             call is truncated, the response includes a token that you can use in the next request to
   *             fetch the next set of tags. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A map of tag keys and values associated with the specified signaling channel.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTagsForStreamInput {
  /**
   * @public
   * <p>If you specify this parameter and the result of a <code>ListTagsForStream</code>
   *             call is truncated, the response includes a token that you can use in the next request to
   *             fetch the next batch of tags.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream that you want to list tags
   *             for.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The name of the stream that you want to list tags for.</p>
   */
  StreamName?: string;
}

/**
 * @public
 */
export interface ListTagsForStreamOutput {
  /**
   * @public
   * <p>If you specify this parameter and the result of a <code>ListTags</code> call is
   *             truncated, the response includes a token that you can use in the next request to fetch
   *             the next set of tags.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A map of tag keys and values associated with the specified stream.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The Stream data retention in hours is equal to zero.</p>
 */
export class NoDataRetentionException extends __BaseException {
  readonly name: "NoDataRetentionException" = "NoDataRetentionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoDataRetentionException, __BaseException>) {
    super({
      name: "NoDataRetentionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoDataRetentionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartEdgeConfigurationUpdateInput {
  /**
   * @public
   * <p>The name of the stream whose edge configuration you want to update. Specify either the <code>StreamName</code>
   *             or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the stream. Specify either the
   *             <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The edge configuration details required to invoke the update process.</p>
   */
  EdgeConfig: EdgeConfig | undefined;
}

/**
 * @public
 */
export interface StartEdgeConfigurationUpdateOutput {
  /**
   * @public
   * <p>The name of the stream from which the edge configuration was updated.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The timestamp at which a stream’s edge configuration was first created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The timestamp at which a stream’s edge configuration was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p> The current sync status of the stream's edge configuration. When you invoke this API, the sync
   *             status will be set to the <code>SYNCING</code> state. Use the <code>DescribeEdgeConfiguration</code> API
   *             to get the latest status of the edge configuration.</p>
   */
  SyncStatus?: SyncStatus;

  /**
   * @public
   * <p>A description of the generated failure status.</p>
   */
  FailedStatusDetails?: string;

  /**
   * @public
   * <p>A description of the stream's edge configuration that will be used to sync
   *             with the Edge Agent IoT Greengrass component. The Edge Agent component will run
   *             on an IoT Hub Device setup at your premise.</p>
   */
  EdgeConfig?: EdgeConfig;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signaling channel to which you want to add
   *             tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tags to associate with the specified signaling channel. Each tag is a
   *             key-value pair.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface TagStreamInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags
   *             to.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The name of the stream that you want to add the tag or tags to.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>A list of tags to associate with the specified stream. Each tag is a key-value pair
   *             (the value is optional).</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagStreamOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signaling channel from which you want to remove
   *             tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of the keys of the tags that you want to remove.</p>
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UntagStreamInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream that you want to remove tags
   *             from.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The name of the stream that you want to remove tags from.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>A list of the keys of the tags that you want to remove.</p>
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UntagStreamOutput {}

/**
 * @public
 * @enum
 */
export const UpdateDataRetentionOperation = {
  DECREASE_DATA_RETENTION: "DECREASE_DATA_RETENTION",
  INCREASE_DATA_RETENTION: "INCREASE_DATA_RETENTION",
} as const;

/**
 * @public
 */
export type UpdateDataRetentionOperation =
  (typeof UpdateDataRetentionOperation)[keyof typeof UpdateDataRetentionOperation];

/**
 * @public
 */
export interface UpdateDataRetentionInput {
  /**
   * @public
   * <p>The name of the stream whose retention period you want to change.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stream whose retention period you want to
   *             change.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The version of the stream whose retention period you want to change. To get the
   *             version, call either the <code>DescribeStream</code> or the <code>ListStreams</code>
   *             API.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>Indicates whether you want to increase or decrease the retention period.</p>
   */
  Operation: UpdateDataRetentionOperation | undefined;

  /**
   * @public
   * <p>The retention period, in hours. The value you specify replaces the current value.
   *             The maximum value for this parameter is 87600 (ten years).</p>
   */
  DataRetentionChangeInHours: number | undefined;
}

/**
 * @public
 */
export interface UpdateDataRetentionOutput {}

/**
 * @public
 */
export interface UpdateImageGenerationConfigurationInput {
  /**
   * @public
   * <p>The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code>
   *             or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The structure that contains the information required for the KVS images delivery. If the structure is null, the configuration will be deleted from the stream.</p>
   */
  ImageGenerationConfiguration?: ImageGenerationConfiguration;
}

/**
 * @public
 */
export interface UpdateImageGenerationConfigurationOutput {}

/**
 * @public
 */
export interface UpdateMediaStorageConfigurationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the channel.</p>
   */
  ChannelARN: string | undefined;

  /**
   * @public
   * <p>A structure that encapsulates, or contains, the media storage configuration properties.</p>
   */
  MediaStorageConfiguration: MediaStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateMediaStorageConfigurationOutput {}

/**
 * @public
 */
export interface UpdateNotificationConfigurationInput {
  /**
   * @public
   * <p>The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The structure containing the information required for notifications. If the structure is null, the configuration will be deleted from the stream.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationOutput {}

/**
 * @public
 */
export interface UpdateSignalingChannelInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the signaling channel that you want to
   *             update.</p>
   */
  ChannelARN: string | undefined;

  /**
   * @public
   * <p>The current version of the signaling channel that you want to update.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>The structure containing the configuration for the <code>SINGLE_MASTER</code> type of
   *             the signaling channel that you want to update. </p>
   */
  SingleMasterConfiguration?: SingleMasterConfiguration;
}

/**
 * @public
 */
export interface UpdateSignalingChannelOutput {}

/**
 * @public
 */
export interface UpdateStreamInput {
  /**
   * @public
   * <p>The name of the stream whose metadata you want to update.</p>
   *          <p>The stream name is an identifier for the stream, and must be unique for each
   *             account and region.</p>
   */
  StreamName?: string;

  /**
   * @public
   * <p>The ARN of the stream whose metadata you want to update.</p>
   */
  StreamARN?: string;

  /**
   * @public
   * <p>The version of the stream whose metadata you want to update.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>The name of the device that is writing to the stream. </p>
   *          <note>
   *             <p> In the current implementation, Kinesis Video Streams does not use this name.
   *             </p>
   *          </note>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content
   *             that the stream contains to the consumers of the stream. For more information about
   *             media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media
   *                 Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming
   *             Requirements</a>.</p>
   *          <p>To play video on the console, you must specify the correct video type. For example,
   *             if the video in the stream is H.264, specify <code>video/h264</code> as the
   *                 <code>MediaType</code>.</p>
   */
  MediaType?: string;
}

/**
 * @public
 */
export interface UpdateStreamOutput {}

/**
 * @internal
 */
export const MediaSourceConfigFilterSensitiveLog = (obj: MediaSourceConfig): any => ({
  ...obj,
  ...(obj.MediaUriSecretArn && { MediaUriSecretArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RecorderConfigFilterSensitiveLog = (obj: RecorderConfig): any => ({
  ...obj,
  ...(obj.MediaSourceConfig && { MediaSourceConfig: MediaSourceConfigFilterSensitiveLog(obj.MediaSourceConfig) }),
});

/**
 * @internal
 */
export const EdgeConfigFilterSensitiveLog = (obj: EdgeConfig): any => ({
  ...obj,
  ...(obj.RecorderConfig && { RecorderConfig: RecorderConfigFilterSensitiveLog(obj.RecorderConfig) }),
});

/**
 * @internal
 */
export const DescribeEdgeConfigurationOutputFilterSensitiveLog = (obj: DescribeEdgeConfigurationOutput): any => ({
  ...obj,
  ...(obj.EdgeConfig && { EdgeConfig: EdgeConfigFilterSensitiveLog(obj.EdgeConfig) }),
});

/**
 * @internal
 */
export const ListEdgeAgentConfigurationsEdgeConfigFilterSensitiveLog = (
  obj: ListEdgeAgentConfigurationsEdgeConfig
): any => ({
  ...obj,
  ...(obj.EdgeConfig && { EdgeConfig: EdgeConfigFilterSensitiveLog(obj.EdgeConfig) }),
});

/**
 * @internal
 */
export const ListEdgeAgentConfigurationsOutputFilterSensitiveLog = (obj: ListEdgeAgentConfigurationsOutput): any => ({
  ...obj,
  ...(obj.EdgeConfigs && {
    EdgeConfigs: obj.EdgeConfigs.map((item) => ListEdgeAgentConfigurationsEdgeConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const StartEdgeConfigurationUpdateInputFilterSensitiveLog = (obj: StartEdgeConfigurationUpdateInput): any => ({
  ...obj,
  ...(obj.EdgeConfig && { EdgeConfig: EdgeConfigFilterSensitiveLog(obj.EdgeConfig) }),
});

/**
 * @internal
 */
export const StartEdgeConfigurationUpdateOutputFilterSensitiveLog = (obj: StartEdgeConfigurationUpdateOutput): any => ({
  ...obj,
  ...(obj.EdgeConfig && { EdgeConfig: EdgeConfigFilterSensitiveLog(obj.EdgeConfig) }),
});
