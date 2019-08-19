/**
 * <p>Describes a disk.</p>
 */
export interface _DiskInfo {
  /**
   * <p>The disk name.</p>
   */
  name?: string;

  /**
   * <p>The disk path.</p>
   */
  path?: string;

  /**
   * <p>The size of the disk in GB (e.g., <code>32</code>).</p>
   */
  sizeInGb?: number;

  /**
   * <p>A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).</p>
   */
  isSystemDisk?: boolean;
}

export type _UnmarshalledDiskInfo = _DiskInfo;
