/**
 * <p>Describes the state of a network interface permission.</p>
 */
export interface _NetworkInterfacePermissionState {
  /**
   * <p>The state of the permission.</p>
   */
  State?: "pending" | "granted" | "revoking" | "revoked" | string;

  /**
   * <p>A status message, if applicable.</p>
   */
  StatusMessage?: string;
}

export type _UnmarshalledNetworkInterfacePermissionState = _NetworkInterfacePermissionState;
