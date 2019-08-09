import { _Disk, _UnmarshalledDisk } from "./_Disk";

/**
 * <p>Describes the hardware for the instance.</p>
 */
export interface _InstanceHardware {
  /**
   * <p>The number of vCPUs the instance has.</p>
   */
  cpuCount?: number;

  /**
   * <p>The disks attached to the instance.</p>
   */
  disks?: Array<_Disk> | Iterable<_Disk>;

  /**
   * <p>The amount of RAM in GB on the instance (e.g., <code>1.0</code>).</p>
   */
  ramSizeInGb?: number;
}

export interface _UnmarshalledInstanceHardware extends _InstanceHardware {
  /**
   * <p>The disks attached to the instance.</p>
   */
  disks?: Array<_UnmarshalledDisk>;
}
