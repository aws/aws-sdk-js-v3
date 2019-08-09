/**
 * <p>Describes a block storage disk mapping.</p>
 */
export interface _DiskMap {
  /**
   * <p>The original disk path exposed to the instance (for example, <code>/dev/sdh</code>).</p>
   */
  originalDiskPath?: string;

  /**
   * <p>The new disk name (e.g., <code>my-new-disk</code>).</p>
   */
  newDiskName?: string;
}

export type _UnmarshalledDiskMap = _DiskMap;
