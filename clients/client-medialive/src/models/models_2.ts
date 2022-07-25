// smithy-typescript generated code
import {
  DeviceSettingsSyncState,
  DeviceUpdateStatus,
  Input,
  InputDeviceConnectionState,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceType,
  InputDeviceUhdSettings,
  InputSecurityGroup,
  InputWhitelistRuleCidr,
} from "./models_0";
import {
  InputDeviceConfigurableSettings,
  Multiplex,
  MultiplexProgram,
  MultiplexProgramSettings,
  MultiplexSettings,
  RenewalSettings,
  Reservation,
} from "./models_1";

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
