import {
  _DeviceStatusInfo,
  _UnmarshalledDeviceStatusInfo
} from "./_DeviceStatusInfo";
import {
  _DeviceNetworkProfileInfo,
  _UnmarshalledDeviceNetworkProfileInfo
} from "./_DeviceNetworkProfileInfo";

/**
 * <p>A device with attributes.</p>
 */
export interface _Device {
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
   * <p>The room ARN of a device.</p>
   */
  RoomArn?: string;

  /**
   * <p>The status of a device. If the status is not READY, check the DeviceStatusInfo value for details.</p>
   */
  DeviceStatus?:
    | "READY"
    | "PENDING"
    | "WAS_OFFLINE"
    | "DEREGISTERED"
    | "FAILED"
    | string;

  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: _DeviceStatusInfo;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  NetworkProfileInfo?: _DeviceNetworkProfileInfo;
}

export interface _UnmarshalledDevice extends _Device {
  /**
   * <p>Detailed information about a device's status.</p>
   */
  DeviceStatusInfo?: _UnmarshalledDeviceStatusInfo;

  /**
   * <p>Detailed information about a device's network profile.</p>
   */
  NetworkProfileInfo?: _UnmarshalledDeviceNetworkProfileInfo;
}
