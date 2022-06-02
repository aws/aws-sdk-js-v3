// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { KinesisVideoServiceException as __BaseException } from "./KinesisVideoServiceException";

/**
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

export enum APIName {
  GET_CLIP = "GET_CLIP",
  GET_DASH_STREAMING_SESSION_URL = "GET_DASH_STREAMING_SESSION_URL",
  GET_HLS_STREAMING_SESSION_URL = "GET_HLS_STREAMING_SESSION_URL",
  GET_IMAGES = "GET_IMAGES",
  GET_MEDIA = "GET_MEDIA",
  GET_MEDIA_FOR_FRAGMENT_LIST = "GET_MEDIA_FOR_FRAGMENT_LIST",
  LIST_FRAGMENTS = "LIST_FRAGMENTS",
  PUT_MEDIA = "PUT_MEDIA",
}

export enum Status {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

export enum ChannelType {
  FULL_MESH = "FULL_MESH",
  SINGLE_MASTER = "SINGLE_MASTER",
}

/**
 * <p>A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel
 *             type.</p>
 */
export interface SingleMasterConfiguration {
  /**
   * <p>The period of time a signaling channel retains undelivered messages before they are
   *             discarded.</p>
   */
  MessageTtlSeconds?: number;
}

export namespace SingleMasterConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingleMasterConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that encapsulates a signaling channel's metadata and properties.</p>
 */
export interface ChannelInfo {
  /**
   * <p>The name of the signaling channel.</p>
   */
  ChannelName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the signaling channel.</p>
   */
  ChannelARN?: string;

  /**
   * <p>The type of the signaling channel.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>Current status of the signaling channel.</p>
   */
  ChannelStatus?: Status | string;

  /**
   * <p>The time at which the signaling channel was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel
   *             type.</p>
   */
  SingleMasterConfiguration?: SingleMasterConfiguration;

  /**
   * <p>The current version of the signaling channel.</p>
   */
  Version?: string;
}

export namespace ChannelInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelInfo): any => ({
    ...obj,
  });
}

export enum ComparisonOperator {
  BEGINS_WITH = "BEGINS_WITH",
}

/**
 * <p>An optional input parameter for the <code>ListSignalingChannels</code> API. When this
 *             parameter is specified while invoking <code>ListSignalingChannels</code>, the API
 *             returns only the channels that satisfy a condition specified in
 *                 <code>ChannelNameCondition</code>.</p>
 */
export interface ChannelNameCondition {
  /**
   * <p>A comparison operator. Currently, you can only specify the <code>BEGINS_WITH</code>
   *             operator, which finds signaling channels whose names begin with a given prefix.</p>
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   * <p>A value to compare.</p>
   */
  ComparisonValue?: string;
}

export namespace ChannelNameCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelNameCondition): any => ({
    ...obj,
  });
}

export enum ChannelProtocol {
  HTTPS = "HTTPS",
  WSS = "WSS",
}

export enum ChannelRole {
  MASTER = "MASTER",
  VIEWER = "VIEWER",
}

/**
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

export enum ConfigurationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>A key and value pair that is associated with the specified signaling channel.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag that is associated with the specified signaling channel.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag that is associated with the specified signaling channel.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateSignalingChannelInput {
  /**
   * <p>A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>A type of the signaling channel that you are creating. Currently,
   *                 <code>SINGLE_MASTER</code> is the only supported channel type. </p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>A structure containing the configuration for the <code>SINGLE_MASTER</code> channel
   *             type. </p>
   */
  SingleMasterConfiguration?: SingleMasterConfiguration;

  /**
   * <p>A set of tags (key-value pairs) that you want to associate with this channel.</p>
   */
  Tags?: Tag[];
}

export namespace CreateSignalingChannelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSignalingChannelInput): any => ({
    ...obj,
  });
}

export interface CreateSignalingChannelOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the created channel.</p>
   */
  ChannelARN?: string;
}

export namespace CreateSignalingChannelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSignalingChannelOutput): any => ({
    ...obj,
  });
}

/**
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
 * <p>The resource is currently not available for this operation. New resources cannot be
 *             created with the same name as existing resources. Also, resources cannot be updated or
 *             deleted unless they are in an <code>ACTIVE</code> state.</p>
 *         <p>If this exception is returned, do not use it to determine whether the requested
 *             resource already exists. Instead, it is recommended you use the resource-specific
 *             describe API, for example, <code>DescribeStream</code> for video streams.</p>
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

export interface CreateStreamInput {
  /**
   * <p>The name of the device that is writing to the stream. </p>
   *         <note>
   *             <p>In the current implementation, Kinesis Video Streams does not use this
   *                 name.</p>
   *         </note>
   */
  DeviceName?: string;

  /**
   * <p>A name for the stream that you are creating.</p>
   *         <p>The stream name is an identifier for the stream, and must be unique for each
   *             account and region.</p>
   */
  StreamName: string | undefined;

  /**
   * <p>The media type of the stream. Consumers of the stream can use this information when
   *             processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media
   *                 Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>
   *             for guidelines.</p>
   *
   *         <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p>
   *         <p>This parameter is optional; the default value is <code>null</code> (or empty in
   *             JSON).</p>
   */
  MediaType?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key that you want Kinesis Video
   *             Streams to use to encrypt stream data.</p>
   *         <p>If no key ID is specified, the default, Kinesis Video-managed key
   *                 (<code>aws/kinesisvideo</code>) is used.</p>
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p>
   *         <p>The default value is 0, indicating that the stream does not persist data.</p>
   *         <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume
   *             the fragments that remain in the service host buffer, which has a retention time limit
   *             of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the
   *             buffer when either limit is reached.</p>
   */
  DataRetentionInHours?: number;

  /**
   * <p>A list of tags to associate with the specified stream. Each tag is a key-value pair
   *             (the value is optional).</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamInput): any => ({
    ...obj,
  });
}

export interface CreateStreamOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;
}

export namespace CreateStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamOutput): any => ({
    ...obj,
  });
}

/**
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

export interface DeleteSignalingChannelInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the signaling channel that you want to
   *             delete.</p>
   */
  ChannelARN: string | undefined;

  /**
   * <p>The current version of the signaling channel that you want to delete. You can obtain
   *             the current version by invoking the <code>DescribeSignalingChannel</code> or
   *                 <code>ListSignalingChannels</code> API operations.</p>
   */
  CurrentVersion?: string;
}

export namespace DeleteSignalingChannelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSignalingChannelInput): any => ({
    ...obj,
  });
}

export interface DeleteSignalingChannelOutput {}

export namespace DeleteSignalingChannelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSignalingChannelOutput): any => ({
    ...obj,
  });
}

/**
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

export interface DeleteStreamInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the stream that you want to delete. </p>
   */
  StreamARN: string | undefined;

  /**
   * <p>Optional: The version of the stream that you want to delete. </p>
   *         <p>Specify the version as a safeguard to ensure that your are deleting the correct
   *             stream. To get the stream version, use the <code>DescribeStream</code> API.</p>
   *         <p>If not specified, only the <code>CreationTime</code> is checked before deleting the
   *             stream.</p>
   */
  CurrentVersion?: string;
}

export namespace DeleteStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamInput): any => ({
    ...obj,
  });
}

export interface DeleteStreamOutput {}

export namespace DeleteStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamOutput): any => ({
    ...obj,
  });
}

/**
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

export interface DescribeImageGenerationConfigurationInput {
  /**
   * <p>The name of the stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.  </p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;
}

export namespace DescribeImageGenerationConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageGenerationConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>The structure that contains the information required to deliver images to a customer.</p>
 */
export interface ImageGenerationDestinationConfig {
  /**
   * <p>The Uniform Resource Idenifier (URI) that identifies where the images will be delivered.</p>
   */
  Uri: string | undefined;

  /**
   * <p>The AWS Region of the S3 bucket where images will be delivered. This <code>DestinationRegion</code> must match the Region where the stream is located.</p>
   */
  DestinationRegion: string | undefined;
}

export namespace ImageGenerationDestinationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageGenerationDestinationConfig): any => ({
    ...obj,
  });
}

export enum Format {
  JPEG = "JPEG",
  PNG = "PNG",
}

export enum FormatConfigKey {
  JPEGQuality = "JPEGQuality",
}

export enum ImageSelectorType {
  PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP",
  SERVER_TIMESTAMP = "SERVER_TIMESTAMP",
}

/**
 * <p>The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.</p>
 */
export interface ImageGenerationConfiguration {
  /**
   * <p>Indicates whether the <code>ContinuousImageGenerationConfigurations</code> API is enabled or disabled.</p>
   */
  Status: ConfigurationStatus | string | undefined;

  /**
   * <p>The origin of the Server or Producer timestamps to use to generate the images.</p>
   */
  ImageSelectorType: ImageSelectorType | string | undefined;

  /**
   * <p>The structure that contains the information required to deliver images to a customer.</p>
   */
  DestinationConfig: ImageGenerationDestinationConfig | undefined;

  /**
   * <p>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 33 ms,
   *             because a camera that generates content at 30 FPS would create a frame every 33.3 ms. If the timestamp range is less than the sampling interval, the
   *             Image from the <code>StartTimestamp</code> will be returned if available. </p>
   */
  SamplingInterval: number | undefined;

  /**
   * <p>The accepted image format.</p>
   */
  Format: Format | string | undefined;

  /**
   * <p>The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated.
   *             The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image.
   *             The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression.
   *             If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code>
   *             key will be set to 80.</p>
   */
  FormatConfig?: Record<string, string>;

  /**
   * <p>The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and
   *             <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is
   *             provided, its original aspect ratio will be used to calculate the <code>HeightPixels</code> ratio. If neither parameter is provided, the original image size will be returned.</p>
   */
  WidthPixels?: number;

  /**
   * <p>The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both
   *             <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio.
   *             If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio.
   *             If neither parameter is provided, the original image size will be returned.</p>
   */
  HeightPixels?: number;
}

export namespace ImageGenerationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageGenerationConfiguration): any => ({
    ...obj,
  });
}

export interface DescribeImageGenerationConfigurationOutput {
  /**
   * <p>The structure that contains the information required for the Kinesis video stream (KVS) images delivery. If this structure is null, the configuration will be deleted from the stream.</p>
   */
  ImageGenerationConfiguration?: ImageGenerationConfiguration;
}

export namespace DescribeImageGenerationConfigurationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImageGenerationConfigurationOutput): any => ({
    ...obj,
  });
}

export interface DescribeNotificationConfigurationInput {
  /**
   * <p>The name of the stream from which to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the <code>StreamName</code> or the StreamARN.</p>
   */
  StreamARN?: string;
}

export namespace DescribeNotificationConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNotificationConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>The structure that contains the information required to deliver a notification to a customer.</p>
 */
export interface NotificationDestinationConfig {
  /**
   * <p>The Uniform Resource Idenifier (URI) that identifies where the images will be delivered.</p>
   */
  Uri: string | undefined;
}

export namespace NotificationDestinationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationDestinationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>Indicates if a notification configuration is enabled or disabled.</p>
   */
  Status: ConfigurationStatus | string | undefined;

  /**
   * <p>The destination information required to deliver a notification to a customer.</p>
   */
  DestinationConfig: NotificationDestinationConfig | undefined;
}

export namespace NotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

export interface DescribeNotificationConfigurationOutput {
  /**
   * <p>The structure that contains the information required for notifications. If the structure is null, the configuration will be deleted from the stream.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace DescribeNotificationConfigurationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeNotificationConfigurationOutput): any => ({
    ...obj,
  });
}

export interface DescribeSignalingChannelInput {
  /**
   * <p>The name of the signaling channel that you want to describe.</p>
   */
  ChannelName?: string;

  /**
   * <p>The ARN of the signaling channel that you want to describe.</p>
   */
  ChannelARN?: string;
}

export namespace DescribeSignalingChannelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSignalingChannelInput): any => ({
    ...obj,
  });
}

export interface DescribeSignalingChannelOutput {
  /**
   * <p>A structure that encapsulates the specified signaling channel's metadata and
   *             properties.</p>
   */
  ChannelInfo?: ChannelInfo;
}

export namespace DescribeSignalingChannelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSignalingChannelOutput): any => ({
    ...obj,
  });
}

export interface DescribeStreamInput {
  /**
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;
}

export namespace DescribeStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStreamInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object describing a Kinesis video stream.</p>
 */
export interface StreamInfo {
  /**
   * <p>The name of the device that is associated with the stream.</p>
   */
  DeviceName?: string;

  /**
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream.</p>
   */
  StreamARN?: string;

  /**
   * <p>The <code>MediaType</code> of the stream. </p>
   */
  MediaType?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key that Kinesis Video Streams
   *             uses to encrypt data on the stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The version of the stream.</p>
   */
  Version?: string;

  /**
   * <p>The status of the stream.</p>
   */
  Status?: Status | string;

  /**
   * <p>A time stamp that indicates when the stream was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>How long the stream retains data, in hours.</p>
   */
  DataRetentionInHours?: number;
}

export namespace StreamInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamInfo): any => ({
    ...obj,
  });
}

export interface DescribeStreamOutput {
  /**
   * <p>An object that describes the stream.</p>
   */
  StreamInfo?: StreamInfo;
}

export namespace DescribeStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStreamOutput): any => ({
    ...obj,
  });
}

export interface GetDataEndpointInput {
  /**
   * <p>The name of the stream that you want to get the endpoint for. You must specify
   *             either this parameter or a <code>StreamARN</code> in the request.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for.
   *             You must specify either this parameter or a <code>StreamName</code> in the request.
   *         </p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the API action for which to get an endpoint.</p>
   */
  APIName: APIName | string | undefined;
}

export namespace GetDataEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataEndpointInput): any => ({
    ...obj,
  });
}

export interface GetDataEndpointOutput {
  /**
   * <p>The endpoint value. To read data from the stream or to write data to it, specify
   *             this endpoint in your application.</p>
   */
  DataEndpoint?: string;
}

export namespace GetDataEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataEndpointOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code>
 *             channel type. </p>
 */
export interface SingleMasterChannelEndpointConfiguration {
  /**
   * <p>This property is used to determine the nature of communication over this
   *                 <code>SINGLE_MASTER</code> signaling channel. If <code>WSS</code> is specified, this
   *             API returns a websocket endpoint. If <code>HTTPS</code> is specified, this API returns
   *             an <code>HTTPS</code> endpoint.</p>
   */
  Protocols?: (ChannelProtocol | string)[];

  /**
   * <p>This property is used to determine messaging permissions in this
   *                 <code>SINGLE_MASTER</code> signaling channel. If <code>MASTER</code> is specified,
   *             this API returns an endpoint that a client can use to receive offers from and send
   *             answers to any of the viewers on this signaling channel. If <code>VIEWER</code> is
   *             specified, this API returns an endpoint that a client can use only to send offers to
   *             another <code>MASTER</code> client on this signaling channel. </p>
   */
  Role?: ChannelRole | string;
}

export namespace SingleMasterChannelEndpointConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SingleMasterChannelEndpointConfiguration): any => ({
    ...obj,
  });
}

export interface GetSignalingChannelEndpointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the signalling channel for which you want to get an
   *             endpoint.</p>
   */
  ChannelARN: string | undefined;

  /**
   * <p>A structure containing the endpoint configuration for the <code>SINGLE_MASTER</code>
   *             channel type.</p>
   */
  SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration;
}

export namespace GetSignalingChannelEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSignalingChannelEndpointInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that describes the endpoint of the signaling channel returned by the
 *                 <code>GetSignalingChannelEndpoint</code> API.</p>
 */
export interface ResourceEndpointListItem {
  /**
   * <p>The protocol of the signaling channel returned by the
   *                 <code>GetSignalingChannelEndpoint</code> API.</p>
   */
  Protocol?: ChannelProtocol | string;

  /**
   * <p>The endpoint of the signaling channel returned by the
   *                 <code>GetSignalingChannelEndpoint</code> API.</p>
   */
  ResourceEndpoint?: string;
}

export namespace ResourceEndpointListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceEndpointListItem): any => ({
    ...obj,
  });
}

export interface GetSignalingChannelEndpointOutput {
  /**
   * <p>A list of endpoints for the specified signaling channel.</p>
   */
  ResourceEndpointList?: ResourceEndpointListItem[];
}

export namespace GetSignalingChannelEndpointOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSignalingChannelEndpointOutput): any => ({
    ...obj,
  });
}

/**
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

export interface ListSignalingChannelsInput {
  /**
   * <p>The maximum number of channels to return in the response. The default is 500.</p>
   */
  MaxResults?: number;

  /**
   * <p>If you specify this parameter, when the result of a <code>ListSignalingChannels</code>
   *             operation is truncated, the call returns the <code>NextToken</code> in the response. To
   *             get another batch of channels, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Optional: Returns only the channels that satisfy a specific condition.</p>
   */
  ChannelNameCondition?: ChannelNameCondition;
}

export namespace ListSignalingChannelsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSignalingChannelsInput): any => ({
    ...obj,
  });
}

export interface ListSignalingChannelsOutput {
  /**
   * <p>An array of <code>ChannelInfo</code> objects.</p>
   */
  ChannelInfoList?: ChannelInfo[];

  /**
   * <p>If the response is truncated, the call returns this element with a token. To get the
   *             next batch of streams, use this token in your next request.</p>
   */
  NextToken?: string;
}

export namespace ListSignalingChannelsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSignalingChannelsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the condition that streams must satisfy to be returned when you list
 *             streams (see the <code>ListStreams</code> API). A condition has a comparison operation
 *             and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator,
 *             which finds streams whose names start with a given prefix. </p>
 */
export interface StreamNameCondition {
  /**
   * <p>A comparison operator. Currently, you can specify only the <code>BEGINS_WITH</code>
   *             operator, which finds streams whose names start with a given prefix.</p>
   */
  ComparisonOperator?: ComparisonOperator | string;

  /**
   * <p>A value to compare.</p>
   */
  ComparisonValue?: string;
}

export namespace StreamNameCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamNameCondition): any => ({
    ...obj,
  });
}

export interface ListStreamsInput {
  /**
   * <p>The maximum number of streams to return in the response. The default is
   *             10,000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If you specify this parameter, when the result of a <code>ListStreams</code>
   *             operation is truncated, the call returns the <code>NextToken</code> in the response. To
   *             get another batch of streams, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Optional: Returns only streams that satisfy a specific condition. Currently, you
   *             can specify only the prefix of a stream name as a condition. </p>
   */
  StreamNameCondition?: StreamNameCondition;
}

export namespace ListStreamsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsInput): any => ({
    ...obj,
  });
}

export interface ListStreamsOutput {
  /**
   * <p>An array of <code>StreamInfo</code> objects.</p>
   */
  StreamInfoList?: StreamInfo[];

  /**
   * <p>If the response is truncated, the call returns this element with a token. To get
   *             the next batch of streams, use this token in your next request. </p>
   */
  NextToken?: string;
}

export namespace ListStreamsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceInput {
  /**
   * <p>If you specify this parameter and the result of a <code>ListTagsForResource</code>
   *             call is truncated, the response includes a token that you can use in the next request to
   *             fetch the next batch of tags. </p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the signaling channel for which you want to list
   *             tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>If you specify this parameter and the result of a <code>ListTagsForResource</code>
   *             call is truncated, the response includes a token that you can use in the next request to
   *             fetch the next set of tags. </p>
   */
  NextToken?: string;

  /**
   * <p>A map of tag keys and values associated with the specified signaling channel.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForStreamInput {
  /**
   * <p>If you specify this parameter and the result of a <code>ListTagsForStream</code>
   *             call is truncated, the response includes a token that you can use in the next request to
   *             fetch the next batch of tags.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream that you want to list tags
   *             for.</p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the stream that you want to list tags for.</p>
   */
  StreamName?: string;
}

export namespace ListTagsForStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForStreamInput): any => ({
    ...obj,
  });
}

export interface ListTagsForStreamOutput {
  /**
   * <p>If you specify this parameter and the result of a <code>ListTags</code> call is
   *             truncated, the response includes a token that you can use in the next request to fetch
   *             the next set of tags.</p>
   */
  NextToken?: string;

  /**
   * <p>A map of tag keys and values associated with the specified stream.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTagsForStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForStreamOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the signaling channel to which you want to add
   *             tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags to associate with the specified signaling channel. Each tag is a
   *             key-value pair.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

export interface TagResourceOutput {}

export namespace TagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
}

export interface TagStreamInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags
   *             to.</p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the stream that you want to add the tag or tags to.</p>
   */
  StreamName?: string;

  /**
   * <p>A list of tags to associate with the specified stream. Each tag is a key-value pair
   *             (the value is optional).</p>
   */
  Tags: Record<string, string> | undefined;
}

export namespace TagStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagStreamInput): any => ({
    ...obj,
  });
}

export interface TagStreamOutput {}

export namespace TagStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagStreamOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the signaling channel from which you want to remove
   *             tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of the keys of the tags that you want to remove.</p>
   */
  TagKeyList: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UntagResourceOutput {}

export namespace UntagResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
}

export interface UntagStreamInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the stream that you want to remove tags
   *             from.</p>
   */
  StreamARN?: string;

  /**
   * <p>The name of the stream that you want to remove tags from.</p>
   */
  StreamName?: string;

  /**
   * <p>A list of the keys of the tags that you want to remove.</p>
   */
  TagKeyList: string[] | undefined;
}

export namespace UntagStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagStreamInput): any => ({
    ...obj,
  });
}

export interface UntagStreamOutput {}

export namespace UntagStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagStreamOutput): any => ({
    ...obj,
  });
}

export enum UpdateDataRetentionOperation {
  DECREASE_DATA_RETENTION = "DECREASE_DATA_RETENTION",
  INCREASE_DATA_RETENTION = "INCREASE_DATA_RETENTION",
}

export interface UpdateDataRetentionInput {
  /**
   * <p>The name of the stream whose retention period you want to change.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the stream whose retention period you want to
   *             change.</p>
   */
  StreamARN?: string;

  /**
   * <p>The version of the stream whose retention period you want to change. To get the
   *             version, call either the <code>DescribeStream</code> or the <code>ListStreams</code>
   *             API.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Indicates whether you want to increase or decrease the retention period.</p>
   */
  Operation: UpdateDataRetentionOperation | string | undefined;

  /**
   * <p>The retention period, in hours. The value you specify replaces the current value.
   *             The maximum value for this parameter is 87600 (ten years).</p>
   */
  DataRetentionChangeInHours: number | undefined;
}

export namespace UpdateDataRetentionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataRetentionInput): any => ({
    ...obj,
  });
}

export interface UpdateDataRetentionOutput {}

export namespace UpdateDataRetentionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataRetentionOutput): any => ({
    ...obj,
  });
}

/**
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

export interface UpdateImageGenerationConfigurationInput {
  /**
   * <p>The name of the stream from which to update the image generation configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the <code>StreamName</code>
   *             or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * <p>The structure that contains the information required for the KVS images delivery. If the structure is null, the configuration will be deleted from the stream.</p>
   */
  ImageGenerationConfiguration?: ImageGenerationConfiguration;
}

export namespace UpdateImageGenerationConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageGenerationConfigurationInput): any => ({
    ...obj,
  });
}

export interface UpdateImageGenerationConfigurationOutput {}

export namespace UpdateImageGenerationConfigurationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateImageGenerationConfigurationOutput): any => ({
    ...obj,
  });
}

export interface UpdateNotificationConfigurationInput {
  /**
   * <p>The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
   */
  StreamARN?: string;

  /**
   * <p>The structure containing the information required for notifications. If the structure is null, the configuration will be deleted from the stream.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export namespace UpdateNotificationConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotificationConfigurationInput): any => ({
    ...obj,
  });
}

export interface UpdateNotificationConfigurationOutput {}

export namespace UpdateNotificationConfigurationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateNotificationConfigurationOutput): any => ({
    ...obj,
  });
}

export interface UpdateSignalingChannelInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the signaling channel that you want to
   *             update.</p>
   */
  ChannelARN: string | undefined;

  /**
   * <p>The current version of the signaling channel that you want to update.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The structure containing the configuration for the <code>SINGLE_MASTER</code> type of
   *             the signaling channel that you want to update. </p>
   */
  SingleMasterConfiguration?: SingleMasterConfiguration;
}

export namespace UpdateSignalingChannelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSignalingChannelInput): any => ({
    ...obj,
  });
}

export interface UpdateSignalingChannelOutput {}

export namespace UpdateSignalingChannelOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSignalingChannelOutput): any => ({
    ...obj,
  });
}

export interface UpdateStreamInput {
  /**
   * <p>The name of the stream whose metadata you want to update.</p>
   *         <p>The stream name is an identifier for the stream, and must be unique for each
   *             account and region.</p>
   */
  StreamName?: string;

  /**
   * <p>The ARN of the stream whose metadata you want to update.</p>
   */
  StreamARN?: string;

  /**
   * <p>The version of the stream whose metadata you want to update.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The name of the device that is writing to the stream. </p>
   *         <note>
   *             <p> In the current implementation, Kinesis Video Streams does not use this name.
   *             </p>
   *         </note>
   */
  DeviceName?: string;

  /**
   * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content
   *             that the stream contains to the consumers of the stream. For more information about
   *             media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media
   *                 Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming
   *             Requirements</a>.</p>
   *         <p>To play video on the console, you must specify the correct video type. For example,
   *             if the video in the stream is H.264, specify <code>video/h264</code> as the
   *                 <code>MediaType</code>.</p>
   */
  MediaType?: string;
}

export namespace UpdateStreamInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamInput): any => ({
    ...obj,
  });
}

export interface UpdateStreamOutput {}

export namespace UpdateStreamOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamOutput): any => ({
    ...obj,
  });
}
