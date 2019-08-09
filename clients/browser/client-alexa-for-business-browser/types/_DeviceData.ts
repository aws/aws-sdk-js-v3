import {
  _DeviceStatusInfo,
  _UnmarshalledDeviceStatusInfo
} from "./_DeviceStatusInfo";

/**
 * <p>Device attributes.</p>
 */
export interface _DeviceData {
  /**
   * <p>The ARN of a device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The serial number of a device.</p>
   */
  DeviceSerialNumber?: string;

  /**
   * <p>The type of a device.</p>
   */
  DeviceType?: string;

  /**
   * <p>The name of a device.</p>
   */
  DeviceName?: string;

  /**
   * <p>The software version of a device.</p>
   */
  SoftwareVersion?: string;

  /**
   * <p>The MAC address of a device.</p>
   */
  MacAddress?: string;

  /**
   * <p>The status of a device.</p>
   */
  DeviceStatus?:
    | "READY"
    | "PENDING"
    | "WAS_OFFLINE"
    | "DEREGISTERED"
    | "FAILED"
    | string;

  /**
   * <p>The ARN of the network profile associated with a device.</p>
   */
  NetworkProfileArn?: string;

  /**
   * <p>The name of the network profile associated with a device.</p>
   */
  NetworkProfileName?: string;

  /**
   * <p>The room ARN associated with a device.</p>
   */
  RoomArn?: string;

  /**
   * <p>The name of the room associated with a device.</p>
   */
  RoomName?: string;

  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: _DeviceStatusInfo;
}

export interface _UnmarshalledDeviceData extends _DeviceData {
  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: _UnmarshalledDeviceStatusInfo;
}
