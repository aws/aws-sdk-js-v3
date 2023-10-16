// smithy-typescript generated code
import {
  CdiInputSpecification,
  ChannelClass,
  ChannelEgressEndpoint,
  ChannelState,
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  Input,
  InputAttachment,
  InputDestinationRequest,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceOutputType,
  InputDeviceRequest,
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
  InputDeviceConfigurableSettings,
  Multiplex,
  MultiplexProgram,
  MultiplexProgramSettings,
  MultiplexSettings,
  PipelineDetail,
  RenewalSettings,
  Reservation,
} from "./models_1";

/**
 * @public
 * Placeholder documentation for ListMultiplexesResponse
 */
export interface ListMultiplexesResponse {
  /**
   * @public
   * List of multiplexes.
   */
  Multiplexes?: MultiplexSummary[];

  /**
   * @public
   * Token for the next ListMultiplexes request.
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListMultiplexProgramsRequest
 */
export interface ListMultiplexProgramsRequest {
  /**
   * @public
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * @public
   * The ID of the multiplex that the programs belong to.
   */
  MultiplexId: string | undefined;

  /**
   * @public
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListMultiplexProgramsResponse
 */
export interface ListMultiplexProgramsResponse {
  /**
   * @public
   * List of multiplex programs.
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * @public
   * Token for the next ListMultiplexProgram request.
   */
  NextToken?: string;
}

/**
 * @public
 * Placeholder documentation for ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * @public
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * @public
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   */
  ChannelConfiguration?: string;

  /**
   * @public
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * @public
   * Filter by offering duration, e.g. '12'
   */
  Duration?: string;

  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * @public
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * @public
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * @public
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * @public
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * @public
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;
}

/**
 * @public
 * Placeholder documentation for ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * @public
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * @public
   * List of offerings
   */
  Offerings?: Offering[];
}

/**
 * @public
 * Placeholder documentation for ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * @public
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * @public
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'
   */
  Codec?: string;

  /**
   * @public
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * @public
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * @public
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * @public
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * @public
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * @public
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * @public
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * @public
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;
}

/**
 * @public
 * Placeholder documentation for ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * @public
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * @public
   * List of reservations
   */
  Reservations?: Reservation[];
}

/**
 * @public
 * Placeholder documentation for ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * Placeholder documentation for ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * Placeholder documentation for Tags
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for MaintenanceUpdateSettings
 */
export interface MaintenanceUpdateSettings {
  /**
   * @public
   * Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.
   */
  MaintenanceDay?: MaintenanceDay;

  /**
   * @public
   * Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.
   */
  MaintenanceScheduledDate?: string;

  /**
   * @public
   * Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.
   */
  MaintenanceStartTime?: string;
}

/**
 * @public
 * Placeholder documentation for PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * @public
   * Number of resources
   */
  Count: number | undefined;

  /**
   * @public
   * Name for the new reservation
   */
  Name?: string;

  /**
   * @public
   * Offering to purchase, e.g. '87654321'
   */
  OfferingId: string | undefined;

  /**
   * @public
   * Renewal settings for the reservation
   */
  RenewalSettings?: RenewalSettings;

  /**
   * @public
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   */
  RequestId?: string;

  /**
   * @public
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   */
  Start?: string;

  /**
   * @public
   * A collection of key-value pairs
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * @public
   * Reserved resources available to use
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
 * @public
 * A request to reboot an AWS Elemental device.
 */
export interface RebootInputDeviceRequest {
  /**
   * @public
   * Force a reboot of an input device. If the device is streaming, it will stop streaming and begin rebooting within a few seconds of sending the command. If the device was streaming prior to the reboot, the device will resume streaming when the reboot completes.
   */
  Force?: RebootInputDeviceForce;

  /**
   * @public
   * The unique ID of the input device to reboot. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for RebootInputDeviceResponse
 */
export interface RebootInputDeviceResponse {}

/**
 * @public
 * Placeholder documentation for RejectInputDeviceTransferRequest
 */
export interface RejectInputDeviceTransferRequest {
  /**
   * @public
   * The unique ID of the input device to reject. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for RejectInputDeviceTransferResponse
 */
export interface RejectInputDeviceTransferResponse {}

/**
 * @public
 * Placeholder documentation for StartChannelRequest
 */
export interface StartChannelRequest {
  /**
   * @public
   * A request to start a channel
   */
  ChannelId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StartChannelResponse
 */
export interface StartChannelResponse {
  /**
   * @public
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass;

  /**
   * @public
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @public
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * @public
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * @public
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * @public
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * @public
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * @public
 * Placeholder documentation for StartInputDeviceRequest
 */
export interface StartInputDeviceRequest {
  /**
   * @public
   * The unique ID of the input device to reboot. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StartInputDeviceResponse
 */
export interface StartInputDeviceResponse {}

/**
 * @public
 * Placeholder documentation for StartInputDeviceMaintenanceWindowRequest
 */
export interface StartInputDeviceMaintenanceWindowRequest {
  /**
   * @public
   * The unique ID of the input device to start a maintenance window for. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StartInputDeviceMaintenanceWindowResponse
 */
export interface StartInputDeviceMaintenanceWindowResponse {}

/**
 * @public
 * Placeholder documentation for StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * @public
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * @public
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * @public
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * @public
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * @public
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * @public
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * @public
   * The current state of the multiplex.
   */
  State?: MultiplexState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * Placeholder documentation for StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * @public
   * A request to stop a running channel
   */
  ChannelId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * @public
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass;

  /**
   * @public
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * @public
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * @public
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * @public
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * @public
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * @public
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * @public
 * Placeholder documentation for StopInputDeviceRequest
 */
export interface StopInputDeviceRequest {
  /**
   * @public
   * The unique ID of the input device to reboot. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StopInputDeviceResponse
 */
export interface StopInputDeviceResponse {}

/**
 * @public
 * Placeholder documentation for StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * @public
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * @public
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * @public
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * @public
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * @public
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * @public
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * @public
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * @public
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * @public
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * @public
   * The current state of the multiplex.
   */
  State?: MultiplexState;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * A request to transfer an input device.
 */
export interface TransferInputDeviceRequest {
  /**
   * @public
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * @public
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   */
  TargetCustomerId?: string;

  /**
   * @public
   * The target AWS region to transfer the device.
   */
  TargetRegion?: string;

  /**
   * @public
   * An optional message for the recipient. Maximum 280 characters.
   */
  TransferMessage?: string;
}

/**
 * @public
 * Placeholder documentation for TransferInputDeviceResponse
 */
export interface TransferInputDeviceResponse {}

/**
 * @public
 * List of account configuration parameters to update.
 */
export interface UpdateAccountConfigurationRequest {
  /**
   * @public
   * Placeholder documentation for AccountConfiguration
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * @public
 * Placeholder documentation for UpdateAccountConfigurationResponse
 */
export interface UpdateAccountConfigurationResponse {
  /**
   * @public
   * Placeholder documentation for AccountConfiguration
   */
  AccountConfiguration?: AccountConfiguration;
}

/**
 * @public
 * A request to update a channel.
 */
export interface UpdateChannelRequest {
  /**
   * @public
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * @public
   * channel ID
   */
  ChannelId: string | undefined;

  /**
   * @public
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * @public
   * The encoder settings for this channel.
   */
  EncoderSettings?: EncoderSettings;

  /**
   * @public
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: InputAttachment[];

  /**
   * @public
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * @public
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel;

  /**
   * @public
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceUpdateSettings;

  /**
   * @public
   * The name of the channel.
   */
  Name?: string;

  /**
   * @public
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;
}

/**
 * @public
 * Placeholder documentation for UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * @public
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

/**
 * @public
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassRequest {
  /**
   * @public
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: ChannelClass | undefined;

  /**
   * @public
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];
}

/**
 * @public
 * Placeholder documentation for UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * @public
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

/**
 * @public
 * A request to update an input.
 */
export interface UpdateInputRequest {
  /**
   * @public
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * @public
   * Settings for the devices.
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * @public
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * @public
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * @public
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * @public
   * Name of the input.
   */
  Name?: string;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * @public
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];
}

/**
 * @public
 * Placeholder documentation for UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * @public
   * Placeholder documentation for Input
   */
  Input?: Input;
}

/**
 * @public
 * A request to update an input device.
 */
export interface UpdateInputDeviceRequest {
  /**
   * @public
   * The settings that you want to apply to the HD input device.
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * @public
   * The unique ID of the input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * @public
   * The name that you assigned to this input device (not the unique ID).
   */
  Name?: string;

  /**
   * @public
   * The settings that you want to apply to the UHD input device.
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * @public
   * The Availability Zone you want associated with this input device.
   */
  AvailabilityZone?: string;
}

/**
 * @public
 * Placeholder documentation for UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * @public
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * @public
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState;

  /**
   * @public
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState;

  /**
   * @public
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus;

  /**
   * @public
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * @public
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * @public
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * @public
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * @public
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * @public
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * @public
   * The type of the input device.
   */
  Type?: InputDeviceType;

  /**
   * @public
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * The Availability Zone associated with this input device.
   */
  AvailabilityZone?: string;

  /**
   * @public
   * An array of the ARNs for the MediaLive inputs attached to the device. Returned only if the outputType is MEDIALIVE_INPUT.
   */
  MedialiveInputArns?: string[];

  /**
   * @public
   * The output attachment type of the input device. Specifies MEDIACONNECT_FLOW if this device is the source for a MediaConnect flow. Specifies MEDIALIVE_INPUT if this device is the source for a MediaLive input.
   */
  OutputType?: InputDeviceOutputType;
}

/**
 * @public
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * @public
   * The id of the Input Security Group to update.
   */
  InputSecurityGroupId: string | undefined;

  /**
   * @public
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * @public
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * @public
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * @public
 * A request to update a multiplex.
 */
export interface UpdateMultiplexRequest {
  /**
   * @public
   * ID of the multiplex to update.
   */
  MultiplexId: string | undefined;

  /**
   * @public
   * The new settings for a multiplex.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * @public
   * Name of the multiplex.
   */
  Name?: string;
}

/**
 * @public
 * Placeholder documentation for UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * @public
   * The updated multiplex.
   */
  Multiplex?: Multiplex;
}

/**
 * @public
 * A request to update a program in a multiplex.
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * @public
   * The ID of the multiplex of the program to update.
   */
  MultiplexId: string | undefined;

  /**
   * @public
   * The new settings for a multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * @public
   * The name of the program to update.
   */
  ProgramName: string | undefined;
}

/**
 * @public
 * Placeholder documentation for UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * @public
   * The updated multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * @public
 * Request to update a reservation
 */
export interface UpdateReservationRequest {
  /**
   * @public
   * Name of the reservation
   */
  Name?: string;

  /**
   * @public
   * Renewal settings for the reservation
   */
  RenewalSettings?: RenewalSettings;

  /**
   * @public
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

/**
 * @public
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * @public
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}
