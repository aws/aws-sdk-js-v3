import { _Device, _UnmarshalledDevice } from "./_Device";

/**
 * Information about a device definition version.
 */
export interface _DeviceDefinitionVersion {
  /**
   * A list of devices in the definition version.
   */
  Devices?: Array<_Device> | Iterable<_Device>;
}

export interface _UnmarshalledDeviceDefinitionVersion
  extends _DeviceDefinitionVersion {
  /**
   * A list of devices in the definition version.
   */
  Devices?: Array<_UnmarshalledDevice>;
}
