/**
 * <p>Describes a block device for an EBS volume.</p>
 */
export interface _EbsBlockDevice {
  /**
   * <p>Indicates whether the EBS volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For <code>io1</code> volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Constraints: Range is 100-16,000 IOPS for <code>gp2</code> volumes and 100 to 64,000IOPS for <code>io1</code> volumes in most Regions. Maximum <code>io1</code> IOPS of 64,000 is guaranteed only on <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based instances</a>. Other instance families guarantee performance up to 32,000 IOPS. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Condition: This parameter is required for requests to create <code>io1</code> volumes; it is not used in requests to create <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p> <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p> <p>Constraints: 1-16384 for General Purpose SSD (<code>gp2</code>), 4-16384 for Provisioned IOPS SSD (<code>io1</code>), 500-16384 for Throughput Optimized HDD (<code>st1</code>), 500-16384 for Cold HDD (<code>sc1</code>), and 1-1024 for Magnetic (<code>standard</code>) volumes. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. If you set the type to <code>io1</code>, you must also set the <b>Iops</b> property.</p> <p>Default: <code>standard</code> </p>
   */
  VolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;

  /**
   * <p>Indicates whether the encryption state of an EBS volume is changed while being restored from a backing snapshot. The effect of setting the encryption state to <code>true</code> depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-parameters">Amazon EBS Encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>In no case can you remove encryption from an encrypted volume.</p> <p>Encrypted volumes can only be attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported Instance Types</a>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Identifier (key ID, key alias, ID ARN, or alias ARN) for a customer managed CMK under which the EBS volume is encrypted.</p> <p>This parameter is only supported on <code>BlockDeviceMapping</code> objects called by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html">RunInstances</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html">RequestSpotFleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">RequestSpotInstances</a>.</p>
   */
  KmsKeyId?: string;
}

export type _UnmarshalledEbsBlockDevice = _EbsBlockDevice;
