// smithy-typescript generated code
import {
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelPipelineIdToRestart,
  ChannelState,
  ChannelSummary,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  Input,
  InputAttachment,
  InputDestinationRequest,
  InputDeviceCodec,
  InputDeviceConfigurableAudioChannelPairConfig,
  InputDeviceConfiguredInput,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceOutputType,
  InputDeviceRequest,
  InputDeviceSummary,
  InputDeviceType,
  InputDeviceUhdSettings,
  InputSecurityGroup,
  InputSourceRequest,
  InputSpecification,
  InputWhitelistRuleCidr,
  LogLevel,
  MaintenanceDay,
  MaintenanceStatus,
  MediaConnectFlowRequest,
  MultiplexOutputDestination,
  MultiplexProgramSummary,
  MultiplexState,
  MultiplexSummary,
  Offering,
  OutputDestination,
  VpcOutputSettingsDescription,
} from "./models_0";

import {
  AccountConfiguration,
  Channel,
  EncoderSettings,
  Multiplex,
  MultiplexProgram,
  MultiplexProgramSettings,
  MultiplexSettings,
  PipelineDetail,
  RenewalSettings,
  Reservation,
  ThumbnailDetail,
  TransferringInputDeviceSummary,
} from "./models_1";

/**
 * Placeholder documentation for DescribeThumbnailsRequest
 * @public
 */
export interface DescribeThumbnailsRequest {
  /**
   * Unique ID of the channel
   * @public
   */
  ChannelId: string | undefined;

  /**
   * Pipeline ID ("0" or "1")
   * @public
   */
  PipelineId: string | undefined;

  /**
   * thumbnail type
   * @public
   */
  ThumbnailType: string | undefined;
}

/**
 * Placeholder documentation for DescribeThumbnailsResponse
 * @public
 */
export interface DescribeThumbnailsResponse {
  /**
   * Placeholder documentation for __listOfThumbnailDetail
   * @public
   */
  ThumbnailDetails?: ThumbnailDetail[];
}

/**
 * Parameters required to attach a MediaConnect flow to the device.
 * @public
 */
export interface InputDeviceMediaConnectConfigurableSettings {
  /**
   * The ARN of the MediaConnect flow to attach this device to.
   * @public
   */
  FlowArn?: string;

  /**
   * The ARN for the role that MediaLive assumes to access the attached flow and secret. For more information about how to create this role, see the MediaLive user guide.
   * @public
   */
  RoleArn?: string;

  /**
   * The ARN for the secret that holds the encryption key to encrypt the content output by the device.
   * @public
   */
  SecretArn?: string;

  /**
   * The name of the MediaConnect Flow source to stream to.
   * @public
   */
  SourceName?: string;
}

/**
 * Configurable settings for the input device.
 * @public
 */
export interface InputDeviceConfigurableSettings {
  /**
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   * @public
   */
  ConfiguredInput?: InputDeviceConfiguredInput;

  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   * @public
   */
  MaxBitrate?: number;

  /**
   * The Link device's buffer size (latency) in milliseconds (ms).
   * @public
   */
  LatencyMs?: number;

  /**
   * Choose the codec for the video that the device produces. Only UHD devices can specify this parameter.
   * @public
   */
  Codec?: InputDeviceCodec;

  /**
   * To attach this device to a MediaConnect flow, specify these parameters. To detach an existing flow, enter \{\} for the value of mediaconnectSettings. Only UHD devices can specify this parameter.
   * @public
   */
  MediaconnectSettings?: InputDeviceMediaConnectConfigurableSettings;

  /**
   * An array of eight audio configurations, one for each audio pair in the source. Set up each audio configuration either to exclude the pair, or to format it and include it in the output from the device. This parameter applies only to UHD devices, and only when the device is configured as the source for a MediaConnect flow. For an HD device, you configure the audio by setting up audio selectors in the channel configuration.
   * @public
   */
  AudioChannelPairs?: InputDeviceConfigurableAudioChannelPairConfig[];
}

/**
 * Placeholder documentation for ListChannelsRequest
 * @public
 */
export interface ListChannelsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListChannelsResponse
 * @public
 */
export interface ListChannelsResponse {
  /**
   * Placeholder documentation for __listOfChannelSummary
   * @public
   */
  Channels?: ChannelSummary[];

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputDevicesRequest
 * @public
 */
export interface ListInputDevicesRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputDevicesResponse
 * @public
 */
export interface ListInputDevicesResponse {
  /**
   * The list of input devices.
   * @public
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * A token to get additional list results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputDeviceTransfersRequest
 * @public
 */
export interface ListInputDeviceTransfersRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __string
   * @public
   */
  TransferType: string | undefined;
}

/**
 * Placeholder documentation for ListInputDeviceTransfersResponse
 * @public
 */
export interface ListInputDeviceTransfersResponse {
  /**
   * The list of devices that you are transferring or are being transferred to you.
   * @public
   */
  InputDeviceTransfers?: TransferringInputDeviceSummary[];

  /**
   * A token to get additional list results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputsRequest
 * @public
 */
export interface ListInputsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputsResponse
 * @public
 */
export interface ListInputsResponse {
  /**
   * Placeholder documentation for __listOfInput
   * @public
   */
  Inputs?: Input[];

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputSecurityGroupsRequest
 * @public
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 * @public
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * List of input security groups
   * @public
   */
  InputSecurityGroups?: InputSecurityGroup[];

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexesRequest
 * @public
 */
export interface ListMultiplexesRequest {
  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexesResponse
 * @public
 */
export interface ListMultiplexesResponse {
  /**
   * List of multiplexes.
   * @public
   */
  Multiplexes?: MultiplexSummary[];

  /**
   * Token for the next ListMultiplexes request.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexProgramsRequest
 * @public
 */
export interface ListMultiplexProgramsRequest {
  /**
   * The maximum number of items to return.
   * @public
   */
  MaxResults?: number;

  /**
   * The ID of the multiplex that the programs belong to.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The token to retrieve the next page of results.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListMultiplexProgramsResponse
 * @public
 */
export interface ListMultiplexProgramsResponse {
  /**
   * List of multiplex programs.
   * @public
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * Token for the next ListMultiplexProgram request.
   * @public
   */
  NextToken?: string;
}

/**
 * Placeholder documentation for ListOfferingsRequest
 * @public
 */
export interface ListOfferingsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   * @public
   */
  ChannelClass?: string;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   * @public
   */
  ChannelConfiguration?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   * @public
   */
  Codec?: string;

  /**
   * Filter by offering duration, e.g. '12'
   * @public
   */
  Duration?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   * @public
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   * @public
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   * @public
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   * @public
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   * @public
   */
  VideoQuality?: string;
}

/**
 * Placeholder documentation for ListOfferingsResponse
 * @public
 */
export interface ListOfferingsResponse {
  /**
   * Token to retrieve the next page of results
   * @public
   */
  NextToken?: string;

  /**
   * List of offerings
   * @public
   */
  Offerings?: Offering[];
}

/**
 * Placeholder documentation for ListReservationsRequest
 * @public
 */
export interface ListReservationsRequest {
  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   * @public
   */
  ChannelClass?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   * @public
   */
  Codec?: string;

  /**
   * Placeholder documentation for MaxResults
   * @public
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   * @public
   */
  MaximumBitrate?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   * @public
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for __string
   * @public
   */
  NextToken?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   * @public
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   * @public
   */
  ResourceType?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   * @public
   */
  SpecialFeature?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   * @public
   */
  VideoQuality?: string;
}

/**
 * Placeholder documentation for ListReservationsResponse
 * @public
 */
export interface ListReservationsResponse {
  /**
   * Token to retrieve the next page of results
   * @public
   */
  NextToken?: string;

  /**
   * List of reservations
   * @public
   */
  Reservations?: Reservation[];
}

/**
 * Placeholder documentation for ListTagsForResourceRequest
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Placeholder documentation for __string
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * Placeholder documentation for ListTagsForResourceResponse
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Placeholder documentation for Tags
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for MaintenanceUpdateSettings
 * @public
 */
export interface MaintenanceUpdateSettings {
  /**
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   * @public
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.
   * @public
   */
  MaintenanceScheduledDate?: string;

  /**
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   * @public
   */
  MaintenanceStartTime?: string;
}

/**
 * Placeholder documentation for PurchaseOfferingRequest
 * @public
 */
export interface PurchaseOfferingRequest {
  /**
   * Number of resources
   * @public
   */
  Count: number | undefined;

  /**
   * Name for the new reservation
   * @public
   */
  Name?: string;

  /**
   * Offering to purchase, e.g. '87654321'
   * @public
   */
  OfferingId: string | undefined;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   * @public
   */
  RequestId?: string;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   * @public
   */
  Start?: string;

  /**
   * A collection of key-value pairs
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for PurchaseOfferingResponse
 * @public
 */
export interface PurchaseOfferingResponse {
  /**
   * Reserved resources available to use
   * @public
   */
  Reservation?: Reservation;
}

/**
 * @public
 * @enum
 */
export const RebootInputDeviceForce = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type RebootInputDeviceForce = (typeof RebootInputDeviceForce)[keyof typeof RebootInputDeviceForce];

/**
 * A request to reboot an AWS Elemental device.
 * @public
 */
export interface RebootInputDeviceRequest {
  /**
   * Force a reboot of an input device. If the device is streaming, it will stop streaming and begin rebooting within a few seconds of sending the command. If the device was streaming prior to the reboot, the device will resume streaming when the reboot completes.
   * @public
   */
  Force?: RebootInputDeviceForce;

  /**
   * The unique ID of the input device to reboot. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for RebootInputDeviceResponse
 * @public
 */
export interface RebootInputDeviceResponse {}

/**
 * Placeholder documentation for RejectInputDeviceTransferRequest
 * @public
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * The unique ID of the input device to reject. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for RejectInputDeviceTransferResponse
 * @public
 */
export interface RejectInputDeviceTransferResponse {}

/**
 * Pipelines to restart.
 * @public
 */
export interface RestartChannelPipelinesRequest {
  /**
   * ID of channel
   * @public
   */
  ChannelId: string | undefined;

  /**
   * An array of pipelines to restart in this channel. Format PIPELINE_0 or PIPELINE_1.
   * @public
   */
  PipelineIds?: ChannelPipelineIdToRestart[];
}

/**
 * Placeholder documentation for RestartChannelPipelinesResponse
 * @public
 */
export interface RestartChannelPipelinesResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The time in milliseconds by when the PVRE restart must occur.
   * @public
   */
  MaintenanceStatus?: string;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * Placeholder documentation for StartChannelRequest
 * @public
 */
export interface StartChannelRequest {
  /**
   * A request to start a channel
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for StartChannelResponse
 * @public
 */
export interface StartChannelResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * Placeholder documentation for StartInputDeviceRequest
 * @public
 */
export interface StartInputDeviceRequest {
  /**
   * The unique ID of the input device to start. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for StartInputDeviceResponse
 * @public
 */
export interface StartInputDeviceResponse {}

/**
 * Placeholder documentation for StartInputDeviceMaintenanceWindowRequest
 * @public
 */
export interface StartInputDeviceMaintenanceWindowRequest {
  /**
   * The unique ID of the input device to start a maintenance window for. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for StartInputDeviceMaintenanceWindowResponse
 * @public
 */
export interface StartInputDeviceMaintenanceWindowResponse {}

/**
 * Placeholder documentation for StartMultiplexRequest
 * @public
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   * @public
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for StartMultiplexResponse
 * @public
 */
export interface StartMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for StopChannelRequest
 * @public
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   * @public
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for StopChannelResponse
 * @public
 */
export interface StopChannelResponse {
  /**
   * The unique arn of the channel.
   * @public
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   * @public
   */
  ChannelClass?: ChannelClass;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   * @public
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   * @public
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   * @public
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   * @public
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   * @public
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   * @public
   */
  State?: ChannelState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   * @public
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * Placeholder documentation for StopInputDeviceRequest
 * @public
 */
export interface StopInputDeviceRequest {
  /**
   * The unique ID of the input device to stop. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;
}

/**
 * Placeholder documentation for StopInputDeviceResponse
 * @public
 */
export interface StopInputDeviceResponse {}

/**
 * Placeholder documentation for StopMultiplexRequest
 * @public
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   * @public
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for StopMultiplexResponse
 * @public
 */
export interface StopMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   * @public
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   * @public
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   * @public
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   * @public
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   * @public
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   * @public
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   * @public
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   * @public
   */
  State?: MultiplexState;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * A request to transfer an input device.
 * @public
 */
export interface TransferInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;

  /**
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   * @public
   */
  TargetCustomerId?: string;

  /**
   * The target AWS region to transfer the device.
   * @public
   */
  TargetRegion?: string;

  /**
   * An optional message for the recipient. Maximum 280 characters.
   * @public
   */
  TransferMessage?: string;
}

/**
 * Placeholder documentation for TransferInputDeviceResponse
 * @public
 */
export interface TransferInputDeviceResponse {}

/**
 * List of account configuration parameters to update.
 * @public
 */
export interface UpdateAccountConfigurationRequest {
  /**
   * Placeholder documentation for AccountConfiguration
   * @public
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * Placeholder documentation for UpdateAccountConfigurationResponse
 * @public
 */
export interface UpdateAccountConfigurationResponse {
  /**
   * Placeholder documentation for AccountConfiguration
   * @public
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * A request to update a channel.
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   * @public
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * channel ID
   * @public
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   * @public
   */
  Destinations?: OutputDestination[];

  /**
   * The encoder settings for this channel.
   * @public
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Placeholder documentation for __listOfInputAttachment
   * @public
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   * @public
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   * @public
   */
  LogLevel?: LogLevel;

  /**
   * Maintenance settings for this channel.
   * @public
   */
  Maintenance?: MaintenanceUpdateSettings;

  /**
   * The name of the channel.
   * @public
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   * @public
   */
  RoleArn?: string;
}

/**
 * Placeholder documentation for UpdateChannelResponse
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   * @public
   */
  Channel?: Channel;
}

/**
 * Channel class that the channel should be updated to.
 * @public
 */
export interface UpdateChannelClassRequest {
  /**
   * The channel class that you wish to update this channel to use.
   * @public
   */
  ChannelClass: ChannelClass | undefined;

  /**
   * Channel Id of the channel whose class should be updated.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   * @public
   */
  Destinations?: OutputDestination[];
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 * @public
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   * @public
   */
  Channel?: Channel;
}

/**
 * A request to update an input.
 * @public
 */
export interface UpdateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   * @public
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   * @public
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * Unique ID of the input.
   * @public
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   * @public
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   * @public
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   * @public
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   * @public
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   * @public
   */
  Sources?: InputSourceRequest[];
}

/**
 * Placeholder documentation for UpdateInputResponse
 * @public
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   * @public
   */
  Input?: Input;
}

/**
 * A request to update an input device.
 * @public
 */
export interface UpdateInputDeviceRequest {
  /**
   * The settings that you want to apply to the HD input device.
   * @public
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   * @public
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   * @public
   */
  Name?: string;

  /**
   * The settings that you want to apply to the UHD input device.
   * @public
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The Availability Zone you want associated with this input device.
   * @public
   */
  AvailabilityZone?: string;
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 * @public
 */
export interface UpdateInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   * @public
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   * @public
   */
  ConnectionState?: InputDeviceConnectionState;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   * @public
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState;

  /**
   * The status of software on the input device.
   * @public
   */
  DeviceUpdateStatus?: DeviceUpdateStatus;

  /**
   * Settings that describe an input device that is type HD.
   * @public
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   * @public
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   * @public
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   * @public
   */
  Name?: string;

  /**
   * The network settings for the input device.
   * @public
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   * @public
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   * @public
   */
  Type?: InputDeviceType;

  /**
   * Settings that describe an input device that is type UHD.
   * @public
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * The Availability Zone associated with this input device.
   * @public
   */
  AvailabilityZone?: string;

  /**
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   * @public
   */
  MedialiveInputArns?: string[];

  /**
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   * @public
   */
  OutputType?: InputDeviceOutputType;
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 * @public
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to update.
   * @public
   */
  InputSecurityGroupId: string | undefined;

  /**
   * A collection of key-value pairs.
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   * @public
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 * @public
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   * @public
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * A request to update a multiplex.
 * @public
 */
export interface UpdateMultiplexRequest {
  /**
   * ID of the multiplex to update.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex.
   * @public
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * Name of the multiplex.
   * @public
   */
  Name?: string;
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 * @public
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   * @public
   */
  Multiplex?: Multiplex;
}

/**
 * A request to update a program in a multiplex.
 * @public
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The ID of the multiplex of the program to update.
   * @public
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex program.
   * @public
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The name of the program to update.
   * @public
   */
  ProgramName: string | undefined;
}

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 * @public
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   * @public
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * Request to update a reservation
 * @public
 */
export interface UpdateReservationRequest {
  /**
   * Name of the reservation
   * @public
   */
  Name?: string;

  /**
   * Renewal settings for the reservation
   * @public
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique reservation ID, e.g. '1234567'
   * @public
   */
  ReservationId: string | undefined;
}

/**
 * Placeholder documentation for UpdateReservationResponse
 * @public
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   * @public
   */
  Reservation?: Reservation;
}
