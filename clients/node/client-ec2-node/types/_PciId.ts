/**
 * <p>Describes the data that identifies an Amazon FPGA image (AFI) on the PCI bus.</p>
 */
export interface _PciId {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The ID of the vendor.</p>
   */
  VendorId?: string;

  /**
   * <p>The ID of the subsystem.</p>
   */
  SubsystemId?: string;

  /**
   * <p>The ID of the vendor for the subsystem.</p>
   */
  SubsystemVendorId?: string;
}

export type _UnmarshalledPciId = _PciId;
