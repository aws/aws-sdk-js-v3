import {
  _ClientVpnConnectionStatus,
  _UnmarshalledClientVpnConnectionStatus
} from "./_ClientVpnConnectionStatus";

/**
 * <p>Information about a terminated Client VPN endpoint client connection.</p>
 */
export interface _TerminateConnectionStatus {
  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: _ClientVpnConnectionStatus;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: _ClientVpnConnectionStatus;
}

export interface _UnmarshalledTerminateConnectionStatus
  extends _TerminateConnectionStatus {
  /**
   * <p>The state of the client connection.</p>
   */
  PreviousStatus?: _UnmarshalledClientVpnConnectionStatus;

  /**
   * <p>A message about the status of the client connection, if applicable.</p>
   */
  CurrentStatus?: _UnmarshalledClientVpnConnectionStatus;
}
