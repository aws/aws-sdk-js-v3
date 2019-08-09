/**
 * <p>An object representing the status of a virtual service.</p>
 */
export interface _VirtualServiceStatus {
  /**
   * <p>The current status of the virtual service.</p>
   */
  status: "ACTIVE" | "DELETED" | "INACTIVE" | string;
}

export type _UnmarshalledVirtualServiceStatus = _VirtualServiceStatus;
