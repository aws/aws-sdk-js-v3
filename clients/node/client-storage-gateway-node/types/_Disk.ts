/**
 * <p>Represents a gateway's local disk.</p>
 */
export interface _Disk {
  /**
   * <p>The unique device ID or other distinguishing data that identifies a local disk.</p>
   */
  DiskId?: string;

  /**
   * <p>The path of a local disk in the gateway virtual machine (VM).</p>
   */
  DiskPath?: string;

  /**
   * <p>The device node of a local disk as assigned by the virtualization environment.</p>
   */
  DiskNode?: string;

  /**
   * <p>A value that represents the status of a local disk.</p>
   */
  DiskStatus?: string;

  /**
   * <p>The local disk size in bytes.</p>
   */
  DiskSizeInBytes?: number;

  /**
   * <p>One of the <code>DiskAllocationType</code> enumeration values that identifies how a local disk is used. Valid values: <code>UPLOAD_BUFFER</code>, <code>CACHE_STORAGE</code> </p>
   */
  DiskAllocationType?: string;

  /**
   * <p>The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the response if the local disk is not defined as an iSCSI target. The format of this field is <i>targetIqn::LUNNumber::region-volumeId</i>. </p>
   */
  DiskAllocationResource?: string;

  /**
   * <p>A list of values that represents attributes of a local disk.</p>
   */
  DiskAttributeList?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDisk extends _Disk {
  /**
   * <p>A list of values that represents attributes of a local disk.</p>
   */
  DiskAttributeList?: Array<string>;
}
