/**
 * <p>Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.</p>
 */
export interface _EbsBlockDevice {
  /**
   * <p>The snapshot ID.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.</p>
   */
  Iops?: number;

  /**
   * <p>The volume size, in GiB. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a>.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. <code>gp2</code> for General Purpose (SSD) volumes, <code>io1</code> for Provisioned IOPS (SSD) volumes, <code>st1</code> for Throughput Optimized hard disk drives (HDD), <code>sc1</code> for Cold HDD,and <code>standard</code> for Magnetic volumes.</p> <p>If you specify the <code>io1</code> volume type, you must also specify a value for the <code>Iops</code> attribute. The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB) specified in the AMI attributes to set IOPS to 50 x (volume size).</p>
   */
  VolumeType?: "gp2" | "io1" | "standard" | string;

  /**
   * <p>Whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;
}

export type _UnmarshalledEbsBlockDevice = _EbsBlockDevice;
