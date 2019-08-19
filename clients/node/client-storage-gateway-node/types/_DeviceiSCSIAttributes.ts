/**
 * <p>Lists iSCSI information about a VTL device.</p>
 */
export interface _DeviceiSCSIAttributes {
  /**
   * <p>Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or media changer target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The network interface identifier of the VTL device.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The port used to communicate with iSCSI VTL device targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;
}

export type _UnmarshalledDeviceiSCSIAttributes = _DeviceiSCSIAttributes;
