import {
  _ClientVpnConnectionStatus,
  _UnmarshalledClientVpnConnectionStatus
} from "./_ClientVpnConnectionStatus";

/**
 * <p>Describes a client connection.</p>
 */
export interface _ClientVpnConnection {
  /**
   * <p>The ID of the Client VPN endpoint to which the client is connected.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>The current date and time.</p>
   */
  Timestamp?: string;

  /**
   * <p>The ID of the client connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The username of the client who established the client connection. This information is only provided if Active Directory client authentication is used.</p>
   */
  Username?: string;

  /**
   * <p>The date and time the client connection was established.</p>
   */
  ConnectionEstablishedTime?: string;

  /**
   * <p>The number of bytes sent by the client.</p>
   */
  IngressBytes?: string;

  /**
   * <p>The number of bytes received by the client.</p>
   */
  EgressBytes?: string;

  /**
   * <p>The number of packets sent by the client.</p>
   */
  IngressPackets?: string;

  /**
   * <p>The number of packets received by the client.</p>
   */
  EgressPackets?: string;

  /**
   * <p>The IP address of the client.</p>
   */
  ClientIp?: string;

  /**
   * <p>The common name associated with the client. This is either the name of the client certificate, or the Active Directory user name.</p>
   */
  CommonName?: string;

  /**
   * <p>The current state of the client connection.</p>
   */
  Status?: _ClientVpnConnectionStatus;

  /**
   * <p>The date and time the client connection was terminated.</p>
   */
  ConnectionEndTime?: string;
}

export interface _UnmarshalledClientVpnConnection extends _ClientVpnConnection {
  /**
   * <p>The current state of the client connection.</p>
   */
  Status?: _UnmarshalledClientVpnConnectionStatus;
}
