/**
 * <p>Lists iSCSI information about a volume.</p>
 */
export interface _VolumeiSCSIAttributes {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume target.</p>
   */
  TargetARN?: string;

  /**
   * <p>The network interface identifier.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The port used to communicate with iSCSI targets.</p>
   */
  NetworkInterfacePort?: number;

  /**
   * <p>The logical disk number.</p>
   */
  LunNumber?: number;

  /**
   * <p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>
   */
  ChapEnabled?: boolean;
}

export type _UnmarshalledVolumeiSCSIAttributes = _VolumeiSCSIAttributes;
