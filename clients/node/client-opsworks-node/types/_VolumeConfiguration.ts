/**
 * <p>Describes an Amazon EBS volume configuration.</p>
 */
export interface _VolumeConfiguration {
  /**
   * <p>The volume mount point. For example "/dev/sdh".</p>
   */
  MountPoint: string;

  /**
   * <p>The volume <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.</p>
   */
  RaidLevel?: number;

  /**
   * <p>The number of disks in the volume.</p>
   */
  NumberOfDisks: number;

  /**
   * <p>The volume size.</p>
   */
  Size: number;

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

export type _UnmarshalledVolumeConfiguration = _VolumeConfiguration;
