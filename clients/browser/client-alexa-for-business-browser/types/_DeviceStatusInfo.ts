import {
  _DeviceStatusDetail,
  _UnmarshalledDeviceStatusDetail
} from "./_DeviceStatusDetail";

/**
 * <p>Detailed information about a device's status.</p>
 */
export interface _DeviceStatusInfo {
  /**
   * <p>One or more device status detail descriptions.</p>
   */
  DeviceStatusDetails?:
    | Array<_DeviceStatusDetail>
    | Iterable<_DeviceStatusDetail>;

  /**
   * <p>The latest available information about the connection status of a device. </p>
   */
  ConnectionStatus?: "ONLINE" | "OFFLINE" | string;
}

export interface _UnmarshalledDeviceStatusInfo extends _DeviceStatusInfo {
  /**
   * <p>One or more device status detail descriptions.</p>
   */
  DeviceStatusDetails?: Array<_UnmarshalledDeviceStatusDetail>;
}
