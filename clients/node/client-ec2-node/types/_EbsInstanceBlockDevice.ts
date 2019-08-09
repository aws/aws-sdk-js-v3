/**
 * <p>Describes a parameter used to set up an EBS volume in a block device mapping.</p>
 */
export interface _EbsInstanceBlockDevice {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date | string | number;

  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The attachment state.</p>
   */
  Status?: "attaching" | "attached" | "detaching" | "detached" | string;

  /**
   * <p>The ID of the EBS volume.</p>
   */
  VolumeId?: string;
}

export interface _UnmarshalledEbsInstanceBlockDevice
  extends _EbsInstanceBlockDevice {
  /**
   * <p>The time stamp when the attachment initiated.</p>
   */
  AttachTime?: Date;
}
