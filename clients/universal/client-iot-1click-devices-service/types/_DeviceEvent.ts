import { _Device, _UnmarshalledDevice } from "./_Device";

/**
 * _DeviceEvent shape
 */
export interface _DeviceEvent {
  /**
   * <p>An object representing the device associated with the event.</p>
   */
  Device?: _Device;

  /**
   * <p>A serialized JSON object representing the device-type specific event.</p>
   */
  StdEvent?: string;
}

export interface _UnmarshalledDeviceEvent extends _DeviceEvent {
  /**
   * <p>An object representing the device associated with the event.</p>
   */
  Device?: _UnmarshalledDevice;
}
