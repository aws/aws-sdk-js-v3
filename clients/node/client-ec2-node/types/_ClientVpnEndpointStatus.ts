/**
 * <p>Describes the state of a Client VPN endpoint.</p>
 */
export interface _ClientVpnEndpointStatus {
  /**
   * <p>The state of the Client VPN endpoint. Possible states include:</p> <ul> <li> <p> <code>pending-associate</code> - The Client VPN endpoint has been created but no target networks have been associated. The Client VPN endpoint cannot accept connections.</p> </li> <li> <p> <code>available</code> - The Client VPN endpoint has been created and a target network has been associated. The Client VPN endpoint can accept connections.</p> </li> <li> <p> <code>deleting</code> - The Client VPN endpoint is being deleted. The Client VPN endpoint cannot accept connections.</p> </li> <li> <p> <code>deleted</code> - The Client VPN endpoint has been deleted. The Client VPN endpoint cannot accept connections.</p> </li> </ul>
   */
  Code?: "pending-associate" | "available" | "deleting" | "deleted" | string;

  /**
   * <p>A message about the status of the Client VPN endpoint.</p>
   */
  Message?: string;
}

export type _UnmarshalledClientVpnEndpointStatus = _ClientVpnEndpointStatus;
