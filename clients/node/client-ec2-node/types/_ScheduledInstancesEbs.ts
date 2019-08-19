/**
 * <p>Describes an EBS volume for a Scheduled Instance.</p>
 */
export interface _ScheduledInstancesEbs {
  /**
   * <p>Indicates whether the volume is deleted on instance termination.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>Indicates whether the volume is encrypted. You can attached encrypted volumes only to instances that support them.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For io1 volumes, this represents the number of IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. For more information about <code>gp2</code> baseline performance, I/O credits, and bursting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Constraint: Range is 100-20000 IOPS for <code>io1</code> volumes and 100-10000 IOPS for <code>gp2</code> volumes.</p> <p>Condition: This parameter is required for requests to create <code>io1</code>volumes; it is not used in requests to create <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The size of the volume, in GiB.</p> <p>Default: If you're creating the volume from a snapshot and don't specify a volume size, the default is the snapshot size.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. <code>gp2</code> for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, Throughput Optimized HDD for <code>st1</code>, Cold HDD for <code>sc1</code>, or <code>standard</code> for Magnetic.</p> <p>Default: <code>standard</code> </p>
   */
  VolumeType?: string;
}

export type _UnmarshalledScheduledInstancesEbs = _ScheduledInstancesEbs;
