// smithy-typescript generated code
import type {
  APIName,
  ChannelProtocol,
  ChannelRole,
  ChannelType,
  ComparisonOperator,
  ConfigurationStatus,
  DefaultStorageTier,
  Format,
  FormatConfigKey,
  ImageSelectorType,
  MediaStorageConfigurationStatus,
  MediaUriType,
  RecorderStatus,
  Status,
  StrategyOnFullSize,
  SyncStatus,
  UpdateDataRetentionOperation,
  UploaderStatus,
} from "./enums";

/**
 * A structure that contains the configuration for the `SINGLE_MASTER` channel type.
 *
 * @public
 */
export interface SingleMasterConfiguration {
  /**
   * The period of time (in seconds) a signaling channel retains undelivered messages before they are discarded. Use to update this value.
   *
   * @public
   */
  MessageTtlSeconds?: number | undefined;
}

/**
 * A structure that encapsulates a signaling channel's metadata and properties.
 *
 * @public
 */
export interface ChannelInfo {
  /**
   * The name of the signaling channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the signaling channel.
   *
   * @public
   */
  ChannelARN?: string | undefined;

  /**
   * The type of the signaling channel.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * Current status of the signaling channel.
   *
   * @public
   */
  ChannelStatus?: Status | undefined;

  /**
   * The time at which the signaling channel was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A structure that contains the configuration for the `SINGLE_MASTER` channel type.
   *
   * @public
   */
  SingleMasterConfiguration?: SingleMasterConfiguration | undefined;

  /**
   * The current version of the signaling channel.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * An optional input parameter for the `ListSignalingChannels` API. When this parameter is specified while invoking `ListSignalingChannels`, the API returns only the channels that satisfy a condition specified in `ChannelNameCondition`.
 *
 * @public
 */
export interface ChannelNameCondition {
  /**
   * A comparison operator. Currently, you can only specify the `BEGINS_WITH` operator, which finds signaling channels whose names begin with a given prefix.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * A value to compare.
   *
   * @public
   */
  ComparisonValue?: string | undefined;
}

/**
 * A key and value pair that is associated with the specified signaling channel.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag that is associated with the specified signaling channel.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag that is associated with the specified signaling channel.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateSignalingChannelInput {
  /**
   * A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * A type of the signaling channel that you are creating. Currently, `SINGLE_MASTER` is the only supported channel type.
   *
   * @public
   */
  ChannelType?: ChannelType | undefined;

  /**
   * A structure containing the configuration for the `SINGLE_MASTER` channel type. The default configuration for the channel message's time to live is 60 seconds (1 minute).
   *
   * @public
   */
  SingleMasterConfiguration?: SingleMasterConfiguration | undefined;

  /**
   * A set of tags (key-value pairs) that you want to associate with this channel.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSignalingChannelOutput {
  /**
   * The Amazon Resource Name (ARN) of the created channel.
   *
   * @public
   */
  ChannelARN?: string | undefined;
}

/**
 * The configuration for stream storage, including the default storage tier for stream data. This configuration determines how stream data is stored and accessed, with different tiers offering varying levels of performance and cost optimization.
 *
 * @public
 */
export interface StreamStorageConfiguration {
  /**
   * The default storage tier for the stream data. This setting determines the storage class used for stream data, affecting both performance characteristics and storage costs.
   *
   * Available storage tiers:
   *
   * - `HOT` - Optimized for frequent access with the lowest latency and highest performance. Ideal for real-time applications and frequently accessed data.
   * - `WARM` - Balanced performance and cost for moderately accessed data. Suitable for data that is accessed regularly but not continuously.
   *
   * @public
   */
  DefaultStorageTier: DefaultStorageTier | undefined;
}

/**
 * @public
 */
export interface CreateStreamInput {
  /**
   * The name of the device that is writing to the stream.
   *
   * > **Note:** In the current implementation, Kinesis Video Streams doesn't use this name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * A name for the stream that you are creating.
   *
   * The stream name is an identifier for the stream, and must be unique for each account and region.
   *
   * @public
   */
  StreamName: string | undefined;

  /**
   * The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the `MediaType`, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
   *
   * Example valid values include "video/h264" and "video/h264,audio/aac".
   *
   * This parameter is optional; the default value is `null` (or empty in JSON).
   *
   * @public
   */
  MediaType?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data.
   *
   * If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
   *
   * For more information, see [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters).
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.
   *
   * The default value is 0, indicating that the stream does not persist data. The minimum is 1 hour.
   *
   * When the `DataRetentionInHours` value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.
   *
   * @public
   */
  DataRetentionInHours?: number | undefined;

  /**
   * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration for the stream's storage, including the default storage tier for stream data. This configuration determines how stream data is stored and accessed, with different tiers offering varying levels of performance and cost optimization.
   *
   * If not specified, the stream will use the default storage configuration with HOT tier for optimal performance.
   *
   * @public
   */
  StreamStorageConfiguration?: StreamStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateStreamOutput {
  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeConfigurationInput {
  /**
   * The name of the stream from which to delete the edge configuration. Specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream. Specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeConfigurationOutput {}

/**
 * @public
 */
export interface DeleteSignalingChannelInput {
  /**
   * The Amazon Resource Name (ARN) of the signaling channel that you want to delete.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the `DescribeSignalingChannel` or `ListSignalingChannels` API operations.
   *
   * @public
   */
  CurrentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSignalingChannelOutput {}

/**
 * @public
 */
export interface DeleteStreamInput {
  /**
   * The Amazon Resource Name (ARN) of the stream that you want to delete.
   *
   * @public
   */
  StreamARN: string | undefined;

  /**
   * Optional: The version of the stream that you want to delete.
   *
   * Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the `DescribeStream` API.
   *
   * If not specified, only the `CreationTime` is checked before deleting the stream.
   *
   * @public
   */
  CurrentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamOutput {}

/**
 * The configuration details that include the maximum size of the media (`MaxLocalMediaSizeInMB`) that you want to store for a stream on the Edge Agent, as well as the strategy that should be used (`StrategyOnFullSize`) when a stream's maximum size has been reached.
 *
 * @public
 */
export interface LocalSizeConfig {
  /**
   * The overall maximum size of the media that you want to store for a stream on the Edge Agent.
   *
   * @public
   */
  MaxLocalMediaSizeInMB?: number | undefined;

  /**
   * The strategy to perform when a stream’s `MaxLocalMediaSizeInMB` limit is reached.
   *
   * @public
   */
  StrategyOnFullSize?: StrategyOnFullSize | undefined;
}

/**
 * The configuration details required to delete the connection of the stream from the Edge Agent.
 *
 * @public
 */
export interface DeletionConfig {
  /**
   * The number of hours that you want to retain the data in the stream on the Edge Agent. The default value of the retention time is 720 hours, which translates to 30 days.
   *
   * @public
   */
  EdgeRetentionInHours?: number | undefined;

  /**
   * The value of the local size required in order to delete the edge configuration.
   *
   * @public
   */
  LocalSizeConfig?: LocalSizeConfig | undefined;

  /**
   * The `boolean` value used to indicate whether or not you want to mark the media for deletion, once it has been uploaded to the Kinesis Video Stream cloud. The media files can be deleted if any of the deletion configuration values are set to `true`, such as when the limit for the `EdgeRetentionInHours`, or the `MaxLocalMediaSizeInMB`, has been reached.
   *
   * Since the default value is set to `true`, configure the uploader schedule such that the media files are not being deleted before they are initially uploaded to the Amazon Web Services cloud.
   *
   * @public
   */
  DeleteAfterUpload?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeEdgeConfigurationInput {
  /**
   * The name of the stream whose edge configuration you want to update. Specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream. Specify either the `StreamName`or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * The latest status of a stream's edge recording job.
 *
 * @public
 */
export interface LastRecorderStatus {
  /**
   * A description of a recorder job’s latest status.
   *
   * @public
   */
  JobStatusDetails?: string | undefined;

  /**
   * The timestamp at which the recorder job was last executed and media stored to local disk.
   *
   * @public
   */
  LastCollectedTime?: Date | undefined;

  /**
   * The timestamp at which the recorder status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The status of the latest recorder job.
   *
   * @public
   */
  RecorderStatus?: RecorderStatus | undefined;
}

/**
 * The latest status of a stream’s edge to cloud uploader job.
 *
 * @public
 */
export interface LastUploaderStatus {
  /**
   * A description of an uploader job’s latest status.
   *
   * @public
   */
  JobStatusDetails?: string | undefined;

  /**
   * The timestamp at which the uploader job was last executed and media collected to the cloud.
   *
   * @public
   */
  LastCollectedTime?: Date | undefined;

  /**
   * The timestamp at which the uploader status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The status of the latest uploader job.
   *
   * @public
   */
  UploaderStatus?: UploaderStatus | undefined;
}

/**
 * An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent.
 *
 * @public
 */
export interface EdgeAgentStatus {
  /**
   * The latest status of a stream’s edge recording job.
   *
   * @public
   */
  LastRecorderStatus?: LastRecorderStatus | undefined;

  /**
   * The latest status of a stream’s edge to cloud uploader job.
   *
   * @public
   */
  LastUploaderStatus?: LastUploaderStatus | undefined;
}

/**
 * The configuration details that consist of the credentials required (`MediaUriSecretArn` and `MediaUriType`) to access the media files that are streamed to the camera.
 *
 * @public
 */
export interface MediaSourceConfig {
  /**
   * The Amazon Web Services Secrets Manager ARN for the username and password of the camera, or a local media file location.
   *
   * @public
   */
  MediaUriSecretArn: string | undefined;

  /**
   * The Uniform Resource Identifier (URI) type. The `FILE_URI` value can be used to stream local media files.
   *
   * > **Note:** Preview only supports the `RTSP_URI` media source URI format .
   *
   * @public
   */
  MediaUriType: MediaUriType | undefined;
}

/**
 * This API enables you to specify the duration that the camera, or local media file, should record onto the Edge Agent. The `ScheduleConfig` consists of the `ScheduleExpression` and the `DurationInMinutes` attributes.
 *
 * If the `ScheduleConfig` is not provided in the `RecorderConfig`, then the Edge Agent will always be set to recording mode.
 *
 * If the `ScheduleConfig` is not provided in the `UploaderConfig`, then the Edge Agent will upload at regular intervals (every 1 hour).
 *
 * @public
 */
export interface ScheduleConfig {
  /**
   * The Quartz cron expression that takes care of scheduling jobs to record from the camera, or local media file, onto the Edge Agent. If the `ScheduleExpression` is not provided for the `RecorderConfig`, then the Edge Agent will always be set to recording mode.
   *
   * For more information about Quartz, refer to the [*Cron Trigger Tutorial*](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) page to understand the valid expressions and its use.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * The total duration to record the media. If the `ScheduleExpression` attribute is provided, then the `DurationInSeconds` attribute should also be specified.
   *
   * @public
   */
  DurationInSeconds: number | undefined;
}

/**
 * The recorder configuration consists of the local `MediaSourceConfig` details that are used as credentials to access the local media files streamed on the camera.
 *
 * @public
 */
export interface RecorderConfig {
  /**
   * The configuration details that consist of the credentials required (`MediaUriSecretArn` and `MediaUriType`) to access the media files streamed to the camera.
   *
   * @public
   */
  MediaSourceConfig: MediaSourceConfig | undefined;

  /**
   * The configuration that consists of the `ScheduleExpression` and the `DurationInMinutes` details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the `ScheduleExpression` attribute is not provided, then the Edge Agent will always be set to recording mode.
   *
   * @public
   */
  ScheduleConfig?: ScheduleConfig | undefined;
}

/**
 * The configuration that consists of the `ScheduleExpression` and the `DurationInMinutes` details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the `ScheduleConfig` is not provided in the `UploaderConfig`, then the Edge Agent will upload at regular intervals (every 1 hour).
 *
 * @public
 */
export interface UploaderConfig {
  /**
   * The configuration that consists of the `ScheduleExpression` and the `DurationInMinutes` details that specify the scheduling to record from a camera, or local media file, onto the Edge Agent. If the `ScheduleConfig` is not provided in this `UploaderConfig`, then the Edge Agent will upload at regular intervals (every 1 hour).
   *
   * @public
   */
  ScheduleConfig: ScheduleConfig | undefined;
}

/**
 * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
 *
 * @public
 */
export interface EdgeConfig {
  /**
   * The "**Internet of Things (IoT) Thing**" Arn of the stream.
   *
   * @public
   */
  HubDeviceArn: string | undefined;

  /**
   * The recorder configuration consists of the local `MediaSourceConfig` details, that are used as credentials to access the local media files streamed on the camera.
   *
   * @public
   */
  RecorderConfig: RecorderConfig | undefined;

  /**
   * The uploader configuration contains the `ScheduleExpression` details that are used to schedule upload jobs for the recorded media files from the Edge Agent to a Kinesis Video Stream.
   *
   * @public
   */
  UploaderConfig?: UploaderConfig | undefined;

  /**
   * The deletion configuration is made up of the retention time (`EdgeRetentionInHours`) and local size configuration (`LocalSizeConfig`) details that are used to make the deletion.
   *
   * @public
   */
  DeletionConfig?: DeletionConfig | undefined;
}

/**
 * @public
 */
export interface DescribeEdgeConfigurationOutput {
  /**
   * The name of the stream from which the edge configuration was updated.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The timestamp at which a stream’s edge configuration was first created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp at which a stream’s edge configuration was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The latest status of the edge configuration update.
   *
   * @public
   */
  SyncStatus?: SyncStatus | undefined;

  /**
   * A description of the generated failure status.
   *
   * @public
   */
  FailedStatusDetails?: string | undefined;

  /**
   * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
   *
   * @public
   */
  EdgeConfig?: EdgeConfig | undefined;

  /**
   * An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent.
   *
   * @public
   */
  EdgeAgentStatus?: EdgeAgentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeImageGenerationConfigurationInput {
  /**
   * The name of the stream from which to retrieve the image generation configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * The structure that contains the information required to deliver images to a customer.
 *
 * @public
 */
export interface ImageGenerationDestinationConfig {
  /**
   * The Uniform Resource Identifier (URI) that identifies where the images will be delivered.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The Amazon Web Services Region of the S3 bucket where images will be delivered. This `DestinationRegion` must match the Region where the stream is located.
   *
   * @public
   */
  DestinationRegion: string | undefined;
}

/**
 * The structure that contains the information required for the KVS images delivery. If null, the configuration will be deleted from the stream.
 *
 * @public
 */
export interface ImageGenerationConfiguration {
  /**
   * Indicates whether the `ContinuousImageGenerationConfigurations` API is enabled or disabled.
   *
   * @public
   */
  Status: ConfigurationStatus | undefined;

  /**
   * The origin of the Server or Producer timestamps to use to generate the images.
   *
   * @public
   */
  ImageSelectorType: ImageSelectorType | undefined;

  /**
   * The structure that contains the information required to deliver images to a customer.
   *
   * @public
   */
  DestinationConfig: ImageGenerationDestinationConfig | undefined;

  /**
   * The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 200 ms. If the timestamp range is less than the sampling interval, the Image from the `StartTimestamp` will be returned if available.
   *
   * @public
   */
  SamplingInterval: number | undefined;

  /**
   * The accepted image format.
   *
   * @public
   */
  Format: Format | undefined;

  /**
   * The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The `FormatConfig` key is the `JPEGQuality`, which indicates the JPEG quality key to be used to generate the image. The `FormatConfig` value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the `JPEGQuality` key will be set to 80.
   *
   * @public
   */
  FormatConfig?: Partial<Record<FormatConfigKey, string>> | undefined;

  /**
   * The width of the output image that is used in conjunction with the `HeightPixels` parameter. When both `WidthPixels` and `HeightPixels` parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the `WidthPixels` parameter is provided, its original aspect ratio will be used to calculate the `HeightPixels` ratio. If neither parameter is provided, the original image size will be returned.
   *
   * @public
   */
  WidthPixels?: number | undefined;

  /**
   * The height of the output image that is used in conjunction with the `WidthPixels` parameter. When both `HeightPixels` and `WidthPixels` parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the `HeightPixels` parameter is provided, its original aspect ratio will be used to calculate the `WidthPixels` ratio. If neither parameter is provided, the original image size will be returned.
   *
   * @public
   */
  HeightPixels?: number | undefined;
}

/**
 * @public
 */
export interface DescribeImageGenerationConfigurationOutput {
  /**
   * The structure that contains the information required for the Kinesis video stream (KVS) images delivery. If this structure is null, the configuration will be deleted from the stream.
   *
   * @public
   */
  ImageGenerationConfiguration?: ImageGenerationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeMappedResourceConfigurationInput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to provide in your next request, to get another batch of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that encapsulates, or contains, the media storage configuration properties.
 *
 * @public
 */
export interface MappedResourceConfigurationListItem {
  /**
   * The type of the associated resource for the kinesis video stream.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis Video Stream resource, associated with the stream.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMappedResourceConfigurationOutput {
  /**
   * A structure that encapsulates, or contains, the media storage configuration properties.
   *
   * @public
   */
  MappedResourceConfigurationList?: MappedResourceConfigurationListItem[] | undefined;

  /**
   * The token that was used in the `NextToken`request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMediaStorageConfigurationInput {
  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the channel.
   *
   * @public
   */
  ChannelARN?: string | undefined;
}

/**
 * A structure that encapsulates, or contains, the media storage configuration properties.
 *
 * - If `StorageStatus` is enabled, the data will be stored in the `StreamARN` provided. In order for WebRTC Ingestion to work, the stream must have data retention enabled.
 * - If `StorageStatus` is disabled, no data will be stored, and the `StreamARN` parameter will not be needed.
 *
 * @public
 */
export interface MediaStorageConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The status of the media storage configuration.
   *
   * @public
   */
  Status: MediaStorageConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeMediaStorageConfigurationOutput {
  /**
   * A structure that encapsulates, or contains, the media storage configuration properties.
   *
   * @public
   */
  MediaStorageConfiguration?: MediaStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationConfigurationInput {
  /**
   * The name of the stream from which to retrieve the notification configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the `StreamName` or the StreamARN.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * The structure that contains the information required to deliver a notification to a customer.
 *
 * @public
 */
export interface NotificationDestinationConfig {
  /**
   * The Uniform Resource Identifier (URI) that identifies where the images will be delivered.
   *
   * @public
   */
  Uri: string | undefined;
}

/**
 * Use this API to configure Amazon Simple Notification Service (Amazon SNS) notifications for when fragments become available in a stream. If this parameter is null, the configuration will be deleted from the stream.
 *
 * See [Notifications in Kinesis Video Streams](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/notifications.html) for more information.
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * Indicates if a notification configuration is enabled or disabled.
   *
   * @public
   */
  Status: ConfigurationStatus | undefined;

  /**
   * The destination information required to deliver a notification to a customer.
   *
   * @public
   */
  DestinationConfig: NotificationDestinationConfig | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationConfigurationOutput {
  /**
   * The structure that contains the information required for notifications. If the structure is null, the configuration will be deleted from the stream.
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeSignalingChannelInput {
  /**
   * The name of the signaling channel that you want to describe.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The ARN of the signaling channel that you want to describe.
   *
   * @public
   */
  ChannelARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSignalingChannelOutput {
  /**
   * A structure that encapsulates the specified signaling channel's metadata and properties.
   *
   * @public
   */
  ChannelInfo?: ChannelInfo | undefined;
}

/**
 * @public
 */
export interface DescribeStreamInput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * An object describing a Kinesis video stream.
 *
 * @public
 */
export interface StreamInfo {
  /**
   * The name of the device that is associated with the stream.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The `MediaType` of the stream.
   *
   * @public
   */
  MediaType?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key that Kinesis Video Streams uses to encrypt data on the stream.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The version of the stream.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The status of the stream.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * A time stamp that indicates when the stream was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * How long the stream retains data, in hours.
   *
   * @public
   */
  DataRetentionInHours?: number | undefined;
}

/**
 * @public
 */
export interface DescribeStreamOutput {
  /**
   * An object that describes the stream.
   *
   * @public
   */
  StreamInfo?: StreamInfo | undefined;
}

/**
 * @public
 */
export interface DescribeStreamStorageConfigurationInput {
  /**
   * The name of the stream for which you want to retrieve the storage configuration.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream for which you want to retrieve the storage configuration.
   *
   * @public
   */
  StreamARN?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamStorageConfigurationOutput {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The current storage configuration for the stream, including the default storage tier and other storage-related settings.
   *
   * @public
   */
  StreamStorageConfiguration?: StreamStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDataEndpointInput {
  /**
   * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a `StreamARN` in the request.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a `StreamName` in the request.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name of the API action for which to get an endpoint.
   *
   * @public
   */
  APIName: APIName | undefined;
}

/**
 * @public
 */
export interface GetDataEndpointOutput {
  /**
   * The endpoint value. To read data from the stream or to write data to it, specify this endpoint in your application.
   *
   * @public
   */
  DataEndpoint?: string | undefined;
}

/**
 * An object that contains the endpoint configuration for the `SINGLE_MASTER` channel type.
 *
 * @public
 */
export interface SingleMasterChannelEndpointConfiguration {
  /**
   * This property is used to determine the nature of communication over this `SINGLE_MASTER` signaling channel. If `WSS` is specified, this API returns a websocket endpoint. If `HTTPS` is specified, this API returns an `HTTPS` endpoint.
   *
   * @public
   */
  Protocols?: ChannelProtocol[] | undefined;

  /**
   * This property is used to determine messaging permissions in this `SINGLE_MASTER` signaling channel. If `MASTER` is specified, this API returns an endpoint that a client can use to receive offers from and send answers to any of the viewers on this signaling channel. If `VIEWER` is specified, this API returns an endpoint that a client can use only to send offers to another `MASTER` client on this signaling channel.
   *
   * @public
   */
  Role?: ChannelRole | undefined;
}

/**
 * @public
 */
export interface GetSignalingChannelEndpointInput {
  /**
   * The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * A structure containing the endpoint configuration for the `SINGLE_MASTER` channel type.
   *
   * @public
   */
  SingleMasterChannelEndpointConfiguration?: SingleMasterChannelEndpointConfiguration | undefined;
}

/**
 * An object that describes the endpoint of the signaling channel returned by the `GetSignalingChannelEndpoint` API.
 *
 * The media server endpoint will correspond to the `WEBRTC` Protocol.
 *
 * @public
 */
export interface ResourceEndpointListItem {
  /**
   * The protocol of the signaling channel returned by the `GetSignalingChannelEndpoint` API.
   *
   * @public
   */
  Protocol?: ChannelProtocol | undefined;

  /**
   * The endpoint of the signaling channel returned by the `GetSignalingChannelEndpoint` API.
   *
   * @public
   */
  ResourceEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetSignalingChannelEndpointOutput {
  /**
   * A list of endpoints for the specified signaling channel.
   *
   * @public
   */
  ResourceEndpointList?: ResourceEndpointListItem[] | undefined;
}

/**
 * @public
 */
export interface ListEdgeAgentConfigurationsInput {
  /**
   * The "Internet of Things (IoT) Thing" Arn of the edge agent.
   *
   * @public
   */
  HubDeviceArn: string | undefined;

  /**
   * The maximum number of edge configurations to return in the response. The default is 5.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If you specify this parameter, when the result of a `ListEdgeAgentConfigurations` operation is truncated, the call returns the `NextToken` in the response. To get another batch of edge configurations, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A description of a single stream's edge configuration.
 *
 * @public
 */
export interface ListEdgeAgentConfigurationsEdgeConfig {
  /**
   * The name of the stream.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The timestamp when the stream first created the edge config.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp when the stream last updated the edge config.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The current sync status of the stream's edge configuration.
   *
   * @public
   */
  SyncStatus?: SyncStatus | undefined;

  /**
   * A description of the generated failure status.
   *
   * @public
   */
  FailedStatusDetails?: string | undefined;

  /**
   * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
   *
   * @public
   */
  EdgeConfig?: EdgeConfig | undefined;
}

/**
 * @public
 */
export interface ListEdgeAgentConfigurationsOutput {
  /**
   * A description of a single stream's edge configuration.
   *
   * @public
   */
  EdgeConfigs?: ListEdgeAgentConfigurationsEdgeConfig[] | undefined;

  /**
   * If the response is truncated, the call returns this element with a given token. To get the next batch of edge configurations, use this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSignalingChannelsInput {
  /**
   * The maximum number of channels to return in the response. The default is 500.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If you specify this parameter, when the result of a `ListSignalingChannels` operation is truncated, the call returns the `NextToken` in the response. To get another batch of channels, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional: Returns only the channels that satisfy a specific condition.
   *
   * @public
   */
  ChannelNameCondition?: ChannelNameCondition | undefined;
}

/**
 * @public
 */
export interface ListSignalingChannelsOutput {
  /**
   * An array of `ChannelInfo` objects.
   *
   * @public
   */
  ChannelInfoList?: ChannelInfo[] | undefined;

  /**
   * If the response is truncated, the call returns this element with a token. To get the next batch of streams, use this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Specifies the condition that streams must satisfy to be returned when you list streams (see the `ListStreams` API). A condition has a comparison operation and a value. Currently, you can specify only the `BEGINS_WITH` operator, which finds streams whose names start with a given prefix.
 *
 * @public
 */
export interface StreamNameCondition {
  /**
   * A comparison operator. Currently, you can specify only the `BEGINS_WITH` operator, which finds streams whose names start with a given prefix.
   *
   * @public
   */
  ComparisonOperator?: ComparisonOperator | undefined;

  /**
   * A value to compare.
   *
   * @public
   */
  ComparisonValue?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamsInput {
  /**
   * The maximum number of streams to return in the response. The default is 10,000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If you specify this parameter, when the result of a `ListStreams` operation is truncated, the call returns the `NextToken` in the response. To get another batch of streams, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Optional: Returns only streams that satisfy a specific condition. Currently, you can specify only the prefix of a stream name as a condition.
   *
   * @public
   */
  StreamNameCondition?: StreamNameCondition | undefined;
}

/**
 * @public
 */
export interface ListStreamsOutput {
  /**
   * An array of `StreamInfo` objects.
   *
   * @public
   */
  StreamInfoList?: StreamInfo[] | undefined;

  /**
   * If the response is truncated, the call returns this element with a token. To get the next batch of streams, use this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * If you specify this parameter and the result of a `ListTagsForResource` call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * If you specify this parameter and the result of a `ListTagsForResource` call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A map of tag keys and values associated with the specified signaling channel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForStreamInput {
  /**
   * If you specify this parameter and the result of a `ListTagsForStream` call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name of the stream that you want to list tags for.
   *
   * @public
   */
  StreamName?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForStreamOutput {
  /**
   * If you specify this parameter and the result of a `ListTags` call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A map of tag keys and values associated with the specified stream.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartEdgeConfigurationUpdateInput {
  /**
   * The name of the stream whose edge configuration you want to update. Specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream. Specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The edge configuration details required to invoke the update process.
   *
   * @public
   */
  EdgeConfig: EdgeConfig | undefined;
}

/**
 * @public
 */
export interface StartEdgeConfigurationUpdateOutput {
  /**
   * The name of the stream from which the edge configuration was updated.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The timestamp at which a stream’s edge configuration was first created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp at which a stream’s edge configuration was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The current sync status of the stream's edge configuration. When you invoke this API, the sync status will be set to the `SYNCING` state. Use the `DescribeEdgeConfiguration` API to get the latest status of the edge configuration.
   *
   * @public
   */
  SyncStatus?: SyncStatus | undefined;

  /**
   * A description of the generated failure status.
   *
   * @public
   */
  FailedStatusDetails?: string | undefined;

  /**
   * A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.
   *
   * @public
   */
  EdgeConfig?: EdgeConfig | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name of the stream that you want to add the tag or tags to.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of the keys of the tags that you want to remove.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The name of the stream that you want to remove tags from.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * A list of the keys of the tags that you want to remove.
   *
   * @public
   */
  TagKeyList: string[] | undefined;
}

/**
 * @public
 */
export interface UntagStreamOutput {}

/**
 * @public
 */
export interface UpdateDataRetentionInput {
  /**
   * The name of the stream whose retention period you want to change.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The version of the stream whose retention period you want to change. To get the version, call either the `DescribeStream` or the `ListStreams` API.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Indicates whether you want to increase or decrease the retention period.
   *
   * @public
   */
  Operation: UpdateDataRetentionOperation | undefined;

  /**
   * The number of hours to adjust the current retention by. The value you specify is added to or subtracted from the current value, depending on the `operation`.
   *
   * The minimum value for data retention is 0 and the maximum value is 87600 (ten years).
   *
   * @public
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
   * The name of the stream from which to update the image generation configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The structure that contains the information required for the KVS images delivery. If the structure is null, the configuration will be deleted from the stream.
   *
   * @public
   */
  ImageGenerationConfiguration?: ImageGenerationConfiguration | undefined;
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
   * The Amazon Resource Name (ARN) of the channel.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * A structure that encapsulates, or contains, the media storage configuration properties.
   *
   * @public
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
   * The name of the stream from which to update the notification configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the `StreamName` or the `StreamARN`.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The structure containing the information required for notifications. If the structure is null, the configuration will be deleted from the stream.
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;
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
   * The Amazon Resource Name (ARN) of the signaling channel that you want to update.
   *
   * @public
   */
  ChannelARN: string | undefined;

  /**
   * The current version of the signaling channel that you want to update.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * The structure containing the configuration for the `SINGLE_MASTER` type of the signaling channel that you want to update. This parameter and the channel message's time-to-live are required for channels with the `SINGLE_MASTER` channel type.
   *
   * @public
   */
  SingleMasterConfiguration?: SingleMasterConfiguration | undefined;
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
   * The name of the stream whose metadata you want to update.
   *
   * The stream name is an identifier for the stream, and must be unique for each account and region.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The ARN of the stream whose metadata you want to update.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The version of the stream whose metadata you want to update.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * The name of the device that is writing to the stream.
   *
   * > **Note:** In the current implementation, Kinesis Video Streams does not use this name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The stream's media type. Use `MediaType` to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the `MediaType`, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2).
   *
   * To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify `video/h264` as the `MediaType`.
   *
   * @public
   */
  MediaType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamOutput {}

/**
 * @public
 */
export interface UpdateStreamStorageConfigurationInput {
  /**
   * The name of the stream for which you want to update the storage configuration.
   *
   * @public
   */
  StreamName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stream for which you want to update the storage configuration.
   *
   * @public
   */
  StreamARN?: string | undefined;

  /**
   * The version of the stream whose storage configuration you want to change. To get the version, call either the `DescribeStream` or the `ListStreams` API.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * The new storage configuration for the stream. This includes the default storage tier that determines how stream data is stored and accessed.
   *
   * Different storage tiers offer varying levels of performance and cost optimization to match your specific use case requirements.
   *
   * @public
   */
  StreamStorageConfiguration: StreamStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateStreamStorageConfigurationOutput {}
