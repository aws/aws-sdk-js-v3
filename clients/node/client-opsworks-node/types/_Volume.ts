/**
 * <p>Describes an instance's Amazon EBS volume.</p>
 */
export interface _Volume {
  /**
   * <p>The volume ID.</p>
   */
  VolumeId?: string;

  /**
   * <p>The Amazon EC2 volume ID.</p>
   */
  Ec2VolumeId?: string;

  /**
   * <p>The volume name.</p>
   */
  Name?: string;

  /**
   * <p>The RAID array ID.</p>
   */
  RaidArrayId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The value returned by <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeVolumes.html">DescribeVolumes</a>.</p>
   */
  Status?: string;

  /**
   * <p>The volume size.</p>
   */
  Size?: number;

  /**
   * <p>The device name.</p>
   */
  Device?: string;

  /**
   * <p>The volume mount point. For example, "/mnt/disk1".</p>
   */
  MountPoint?: string;

  /**
   * <p>The AWS region. For more information about AWS regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  Region?: string;

  /**
   * <p>The volume Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html"> Amazon EBS Volume Types</a>.</p> <ul> <li> <p> <code>standard</code> - Magnetic. Magnetic volumes must have a minimum size of 1 GiB and a maximum size of 1024 GiB.</p> </li> <li> <p> <code>io1</code> - Provisioned IOPS (SSD). PIOPS volumes must have a minimum size of 4 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>gp2</code> - General Purpose (SSD). General purpose volumes must have a minimum size of 1 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>st1</code> - Throughput Optimized hard disk drive (HDD). Throughput optimized HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p> </li> <li> <p> <code>sc1</code> - Cold HDD. Cold HDD volumes must have a minimum size of 500 GiB and a maximum size of 16384 GiB.</p> </li> </ul>
   */
  VolumeType?: string;

  /**
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;

  /**
   * <p>Specifies whether an Amazon EBS volume is encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS Encryption</a>.</p>
   */
  Encrypted?: boolean;
}

export type _UnmarshalledVolume = _Volume;
