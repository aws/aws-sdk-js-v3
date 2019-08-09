/**
 * <p>An object representing the current status of the virtual node.</p>
 */
export interface _VirtualNodeStatus {
  /**
   * <p>The current status of the virtual node.</p>
   */
  status: "ACTIVE" | "DELETED" | "INACTIVE" | string;
}

export type _UnmarshalledVirtualNodeStatus = _VirtualNodeStatus;
