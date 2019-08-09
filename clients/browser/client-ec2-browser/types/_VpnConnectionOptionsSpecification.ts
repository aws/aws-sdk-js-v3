import {
  _VpnTunnelOptionsSpecification,
  _UnmarshalledVpnTunnelOptionsSpecification
} from "./_VpnTunnelOptionsSpecification";

/**
 * <p>Describes VPN connection options.</p>
 */
export interface _VpnConnectionOptionsSpecification {
  /**
   * <p>Indicate whether the VPN connection uses static routes only. If you are creating a VPN connection for a device that does not support BGP, you must specify <code>true</code>. Use <a>CreateVpnConnectionRoute</a> to create a static route.</p> <p>Default: <code>false</code> </p>
   */
  StaticRoutesOnly?: boolean;

  /**
   * <p>The tunnel options for the VPN connection.</p>
   */
  TunnelOptions?:
    | Array<_VpnTunnelOptionsSpecification>
    | Iterable<_VpnTunnelOptionsSpecification>;
}

export interface _UnmarshalledVpnConnectionOptionsSpecification
  extends _VpnConnectionOptionsSpecification {
  /**
   * <p>The tunnel options for the VPN connection.</p>
   */
  TunnelOptions?: Array<_UnmarshalledVpnTunnelOptionsSpecification>;
}
