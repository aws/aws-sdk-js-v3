/**
 * <p>Describes information used to set up an EBS volume specified in a block device mapping.</p>
 */
export interface _EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

export type _UnmarshalledEbsInstanceBlockDeviceSpecification = _EbsInstanceBlockDeviceSpecification;
