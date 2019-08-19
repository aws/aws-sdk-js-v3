/**
 * <p>Describes VPN connection options.</p>
 */
export interface _VpnConnectionOptions {
  /**
   * <p>Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.</p>
   */
  StaticRoutesOnly?: boolean;
}

export type _UnmarshalledVpnConnectionOptions = _VpnConnectionOptions;
