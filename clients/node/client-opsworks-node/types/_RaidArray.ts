/**
 * <p>Describes an instance's RAID array.</p>
 */
export interface _RaidArray {
  /**
   * <p>The array ID.</p>
   */
  RaidArrayId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The array name.</p>
   */
  Name?: string;

  /**
   * <p>The <a href="http://en.wikipedia.org/wiki/Standard_RAID_levels">RAID level</a>.</p>
   */
  RaidLevel?: number;

  /**
   * <p>The number of disks in the array.</p>
   */
  NumberOfDisks?: number;

  /**
   * <p>The array's size.</p>
   */
  Size?: number;

  /**
   * <p>The array's Linux device. For example /dev/mdadm0.</p>
   */
  Device?: string;

  /**
   * <p>The array's mount point.</p>
   */
  MountPoint?: string;

  /**
   * <p>The array's Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>When the RAID array was created.</p>
   */
  CreatedAt?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The volume type, standard or PIOPS.</p>
   */
  VolumeType?: string;

  /**
   * <p>For PIOPS volumes, the IOPS per disk.</p>
   */
  Iops?: number;
}

export type _UnmarshalledRaidArray = _RaidArray;
