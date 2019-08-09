import {
  _DeviceiSCSIAttributes,
  _UnmarshalledDeviceiSCSIAttributes
} from "./_DeviceiSCSIAttributes";

/**
 * <p>Represents a device object associated with a tape gateway.</p>
 */
export interface _VTLDevice {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).</p>
   */
  VTLDeviceARN?: string;

  /**
   * <p>Specifies the type of device that the VTL device emulates.</p>
   */
  VTLDeviceType?: string;

  /**
   * <p>Specifies the vendor of the device that the VTL device object emulates.</p>
   */
  VTLDeviceVendor?: string;

  /**
   * <p>Specifies the model number of device that the VTL device emulates.</p>
   */
  VTLDeviceProductIdentifier?: string;

  /**
   * <p>A list of iSCSI information about a VTL device.</p>
   */
  DeviceiSCSIAttributes?: _DeviceiSCSIAttributes;
}

export interface _UnmarshalledVTLDevice extends _VTLDevice {
  /**
   * <p>A list of iSCSI information about a VTL device.</p>
   */
  DeviceiSCSIAttributes?: _UnmarshalledDeviceiSCSIAttributes;
}
