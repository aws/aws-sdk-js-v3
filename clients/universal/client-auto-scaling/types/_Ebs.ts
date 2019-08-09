/**
 * <p>Describes an Amazon EBS volume. Used in combination with <a>BlockDeviceMapping</a>.</p>
 */
export interface _Ebs {
  /**
   * <p>The snapshot ID of the volume to use. </p> <p>Conditional: This parameter is optional if you specify a volume size. If you specify both <code>SnapshotId</code> and <code>VolumeSize</code>, <code>VolumeSize</code> must be equal or greater than the size of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume size, in Gibibytes (GiB). </p> <p>This can be a number from 1-1,024 for <code>standard</code>, 4-16,384 for <code>io1</code>, 1-16,384 for <code>gp2</code>, and 500-16,384 for <code>st1</code> and <code>sc1</code>. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size.</p> <p>Default: If you create a volume from a snapshot and you don't specify a volume size, the default is the snapshot size.</p> <note> <p>At least one of VolumeSize or SnapshotId is required.</p> </note>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type, which can be <code>standard</code> for Magnetic, <code>io1</code> for Provisioned IOPS SSD, <code>gp2</code> for General Purpose SSD, <code>st1</code> for Throughput Optimized HDD, or <code>sc1</code> for Cold HDD. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>Valid values: <code>standard</code> | <code>io1</code> | <code>gp2</code> | <code>st1</code> | <code>sc1</code> </p>
   */
  VolumeType?: string;

  /**
   * <p>Indicates whether the volume is deleted on instance termination. For Amazon EC2 Auto Scaling, the default value is <code>true</code>.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for the volume. The maximum ratio of IOPS to volume size (in GiB) is 50:1. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>Conditional: This parameter is required when the volume type is <code>io1</code>. (Not used with <code>standard</code>, <code>gp2</code>, <code>st1</code>, or <code>sc1</code> volumes.) </p>
   */
  Iops?: number;

  /**
   * <p>Specifies whether the volume should be encrypted. Encrypted EBS volumes can only be attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported Instance Types</a>. If your AMI uses encrypted volumes, you can also only launch it on supported instance types.</p> <note> <p>If you are creating a volume from a snapshot, you cannot specify an encryption value. Volumes that are created from encrypted snapshots are automatically encrypted, and volumes that are created from unencrypted snapshots are automatically unencrypted. By default, encrypted snapshots use the AWS managed CMK that is used for EBS encryption, but you can specify a custom CMK when you create the snapshot. The ability to encrypt a snapshot during copying also allows you to apply a new CMK to an already-encrypted snapshot. Volumes restored from the resulting copy are only accessible using the new CMK. </p> <p>Enabling <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">encryption by default</a> results in all EBS volumes being encrypted with the AWS managed CMK or a customer managed CMK, whether or not the snapshot was encrypted.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Using Encryption with EBS-Backed AMIs</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/key-policy-requirements-EBS-encryption.html">Required CMK Key Policy for Use with Encrypted Volumes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Encrypted?: boolean;
}

export type _UnmarshalledEbs = _Ebs;
