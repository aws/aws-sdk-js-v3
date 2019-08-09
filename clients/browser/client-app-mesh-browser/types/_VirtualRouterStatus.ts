/**
 * <p>An object representing the status of a virtual router. </p>
 */
export interface _VirtualRouterStatus {
  /**
   * <p>The current status of the virtual router.</p>
   */
  status: "ACTIVE" | "DELETED" | "INACTIVE" | string;
}

export type _UnmarshalledVirtualRouterStatus = _VirtualRouterStatus;
