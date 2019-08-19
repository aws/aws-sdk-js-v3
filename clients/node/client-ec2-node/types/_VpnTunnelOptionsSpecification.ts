/**
 * <p>The tunnel options for a VPN connection.</p>
 */
export interface _VpnTunnelOptionsSpecification {
  /**
   * <p>The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway. </p> <p>Constraints: A size /30 CIDR block from the <code>169.254.0.0/16</code> range. The following CIDR blocks are reserved and cannot be used:</p> <ul> <li> <p> <code>169.254.0.0/30</code> </p> </li> <li> <p> <code>169.254.1.0/30</code> </p> </li> <li> <p> <code>169.254.2.0/30</code> </p> </li> <li> <p> <code>169.254.3.0/30</code> </p> </li> <li> <p> <code>169.254.4.0/30</code> </p> </li> <li> <p> <code>169.254.5.0/30</code> </p> </li> <li> <p> <code>169.254.169.252/30</code> </p> </li> </ul>
   */
  TunnelInsideCidr?: string;

  /**
   * <p>The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.</p> <p>Constraints: Allowed characters are alphanumeric characters and ._. Must be between 8 and 64 characters in length and cannot start with zero (0).</p>
   */
  PreSharedKey?: string;
}

export type _UnmarshalledVpnTunnelOptionsSpecification = _VpnTunnelOptionsSpecification;
