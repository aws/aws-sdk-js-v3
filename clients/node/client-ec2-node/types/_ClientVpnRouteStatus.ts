/**
 * <p>Describes the state of a Client VPN endpoint route.</p>
 */
export interface _ClientVpnRouteStatus {
  /**
   * <p>The state of the Client VPN endpoint route.</p>
   */
  Code?: "creating" | "active" | "failed" | "deleting" | string;

  /**
   * <p>A message about the status of the Client VPN endpoint route, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledClientVpnRouteStatus = _ClientVpnRouteStatus;
