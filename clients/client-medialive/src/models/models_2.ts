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
  InputDeviceRequest,
  InputDeviceType,
  InputDeviceUhdSettings,
  InputSecurityGroup,
  InputSourceRequest,
  InputSpecification,
  InputWhitelistRuleCidr,
  LogLevel,
  MaintenanceStatus,
  MediaConnectFlowRequest,
  MultiplexOutputDestination,
  MultiplexState,
  OutputDestination,
  VpcOutputSettingsDescription,
} from "./models_0";
import {
  Channel,
  EncoderSettings,
  InputDeviceConfigurableSettings,
  MaintenanceUpdateSettings,
  Multiplex,
  MultiplexProgram,
  MultiplexProgramSettings,
  MultiplexSettings,
  PipelineDetail,
  RenewalSettings,
  Reservation,
} from "./models_1";

/**
 * Placeholder documentation for StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * Placeholder documentation for StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   */
  ChannelId: string | undefined;
}

/**
 * Placeholder documentation for StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceStatus;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * Settings for VPC output
   */
  Vpc?: VpcOutputSettingsDescription;
}

/**
 * Placeholder documentation for StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

/**
 * Placeholder documentation for StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;
}

/**
 * A request to transfer an input device.
 */
export interface TransferInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The AWS account ID (12 digits) for the recipient of the device transfer.
   */
  TargetCustomerId?: string;

  /**
   * The target AWS region to transfer the device.
   */
  TargetRegion?: string;

  /**
   * An optional message for the recipient. Maximum 280 characters.
   */
  TransferMessage?: string;
}

/**
 * Placeholder documentation for TransferInputDeviceResponse
 */
export interface TransferInputDeviceResponse {}

/**
 * A request to update a channel.
 */
export interface UpdateChannelRequest {
  /**
   * Specification of CDI inputs for this channel
   */
  CdiInputSpecification?: CdiInputSpecification;

  /**
   * channel ID
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * The encoder settings for this channel.
   */
  EncoderSettings?: EncoderSettings;

  /**
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: InputAttachment[];

  /**
   * Specification of network and file inputs for this channel
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Maintenance settings for this channel.
   */
  Maintenance?: MaintenanceUpdateSettings;

  /**
   * The name of the channel.
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;
}

/**
 * Placeholder documentation for UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

/**
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassRequest {
  /**
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: ChannelClass | string | undefined;

  /**
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

/**
 * A request to update an input.
 */
export interface UpdateInputRequest {
  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];
}

/**
 * Placeholder documentation for UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

/**
 * A request to update an input device.
 */
export interface UpdateInputDeviceRequest {
  /**
   * The settings that you want to apply to the HD input device.
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   */
  Name?: string;

  /**
   * The settings that you want to apply to the UHD input device.
   */
  UhdDeviceSettings?: InputDeviceConfigurableSettings;
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The status of software on the input device.
   */
  DeviceUpdateStatus?: DeviceUpdateStatus | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type UHD.
   */
  UhdDeviceSettings?: InputDeviceUhdSettings;
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to update.
   */
  InputSecurityGroupId: string | undefined;

  /**
   * A collection of key-value pairs.
   */
  Tags?: Record<string, string>;

  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

/**
 * A request to update a multiplex.
 */
export interface UpdateMultiplexRequest {
  /**
   * ID of the multiplex to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * Name of the multiplex.
   */
  Name?: string;
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   */
  Multiplex?: Multiplex;
}

/**
 * A request to update a program in a multiplex.
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The ID of the multiplex of the program to update.
   */
  MultiplexId: string | undefined;

  /**
   * The new settings for a multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The name of the program to update.
   */
  ProgramName: string | undefined;
}

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

/**
 * Request to update a reservation
 */
export interface UpdateReservationRequest {
  /**
   * Name of the reservation
   */
  Name?: string;

  /**
   * Renewal settings for the reservation
   */
  RenewalSettings?: RenewalSettings;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

/**
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

/**
 * @internal
 */
export const StartMultiplexRequestFilterSensitiveLog = (obj: StartMultiplexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartMultiplexResponseFilterSensitiveLog = (obj: StartMultiplexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopChannelRequestFilterSensitiveLog = (obj: StopChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopChannelResponseFilterSensitiveLog = (obj: StopChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMultiplexRequestFilterSensitiveLog = (obj: StopMultiplexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopMultiplexResponseFilterSensitiveLog = (obj: StopMultiplexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransferInputDeviceRequestFilterSensitiveLog = (obj: TransferInputDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransferInputDeviceResponseFilterSensitiveLog = (obj: TransferInputDeviceResponse): any => ({
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

/**
 * @internal
 */
export const UpdateChannelClassRequestFilterSensitiveLog = (obj: UpdateChannelClassRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelClassResponseFilterSensitiveLog = (obj: UpdateChannelClassResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInputRequestFilterSensitiveLog = (obj: UpdateInputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInputResponseFilterSensitiveLog = (obj: UpdateInputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInputDeviceRequestFilterSensitiveLog = (obj: UpdateInputDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInputDeviceResponseFilterSensitiveLog = (obj: UpdateInputDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInputSecurityGroupRequestFilterSensitiveLog = (obj: UpdateInputSecurityGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInputSecurityGroupResponseFilterSensitiveLog = (obj: UpdateInputSecurityGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMultiplexRequestFilterSensitiveLog = (obj: UpdateMultiplexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMultiplexResponseFilterSensitiveLog = (obj: UpdateMultiplexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMultiplexProgramRequestFilterSensitiveLog = (obj: UpdateMultiplexProgramRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMultiplexProgramResponseFilterSensitiveLog = (obj: UpdateMultiplexProgramResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReservationRequestFilterSensitiveLog = (obj: UpdateReservationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateReservationResponseFilterSensitiveLog = (obj: UpdateReservationResponse): any => ({
  ...obj,
});
