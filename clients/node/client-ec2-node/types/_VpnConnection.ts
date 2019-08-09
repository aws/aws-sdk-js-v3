import {
  _VpnConnectionOptions,
  _UnmarshalledVpnConnectionOptions
} from "./_VpnConnectionOptions";
import {
  _VpnStaticRoute,
  _UnmarshalledVpnStaticRoute
} from "./_VpnStaticRoute";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _VgwTelemetry, _UnmarshalledVgwTelemetry } from "./_VgwTelemetry";

/**
 * <p>Describes a VPN connection.</p>
 */
export interface _VpnConnection {
  /**
   * <p>The configuration information for the VPN connection's customer gateway (in the native XML format). This element is always present in the <a>CreateVpnConnection</a> response; however, it's present in the <a>DescribeVpnConnections</a> response only if the VPN connection is in the <code>pending</code> or <code>available</code> state.</p>
   */
  CustomerGatewayConfiguration?: string;

  /**
   * <p>The ID of the customer gateway at your end of the VPN connection.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The category of the VPN connection. A value of <code>VPN</code> indicates an AWS VPN connection. A value of <code>VPN-Classic</code> indicates an AWS Classic VPN connection.</p>
   */
  Category?: string;

  /**
   * <p>The current state of the VPN connection.</p>
   */
  State?: "pending" | "available" | "deleting" | "deleted" | string;

  /**
   * <p>The type of VPN connection.</p>
   */
  Type?: "ipsec.1" | string;

  /**
   * <p>The ID of the VPN connection.</p>
   */
  VpnConnectionId?: string;

  /**
   * <p>The ID of the virtual private gateway at the AWS side of the VPN connection.</p>
   */
  VpnGatewayId?: string;

  /**
   * <p>The ID of the transit gateway associated with the VPN connection.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The VPN connection options.</p>
   */
  Options?: _VpnConnectionOptions;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: Array<_VpnStaticRoute> | Iterable<_VpnStaticRoute>;

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: Array<_VgwTelemetry> | Iterable<_VgwTelemetry>;
}

export interface _UnmarshalledVpnConnection extends _VpnConnection {
  /**
   * <p>The VPN connection options.</p>
   */
  Options?: _UnmarshalledVpnConnectionOptions;

  /**
   * <p>The static routes associated with the VPN connection.</p>
   */
  Routes?: Array<_UnmarshalledVpnStaticRoute>;

  /**
   * <p>Any tags assigned to the VPN connection.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * <p>Information about the VPN tunnel.</p>
   */
  VgwTelemetry?: Array<_UnmarshalledVgwTelemetry>;
}
