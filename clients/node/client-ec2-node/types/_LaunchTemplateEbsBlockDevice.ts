/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface _LaunchTemplateEbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. </p>
   */
  Iops?: number;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) CMK used for encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type.</p>
   */
  VolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;
}

export type _UnmarshalledLaunchTemplateEbsBlockDevice = _LaunchTemplateEbsBlockDevice;
