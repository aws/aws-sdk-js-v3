import {
  _ClientVpnEndpointStatus,
  _UnmarshalledClientVpnEndpointStatus
} from "./_ClientVpnEndpointStatus";
import {
  _AssociatedTargetNetwork,
  _UnmarshalledAssociatedTargetNetwork
} from "./_AssociatedTargetNetwork";
import {
  _ClientVpnAuthentication,
  _UnmarshalledClientVpnAuthentication
} from "./_ClientVpnAuthentication";
import {
  _ConnectionLogResponseOptions,
  _UnmarshalledConnectionLogResponseOptions
} from "./_ConnectionLogResponseOptions";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a Client VPN endpoint.</p>
 */
export interface _ClientVpnEndpoint {
  /**
   * <p>The ID of the Client VPN endpoint.</p>
   */
  ClientVpnEndpointId?: string;

  /**
   * <p>A brief description of the endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: _ClientVpnEndpointStatus;

  /**
   * <p>The date and time the Client VPN endpoint was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time the Client VPN endpoint was deleted, if applicable.</p>
   */
  DeletionTime?: string;

  /**
   * <p>The DNS name to be used by clients when connecting to the Client VPN endpoint.</p>
   */
  DnsName?: string;

  /**
   * <p>The IPv4 address range, in CIDR notation, from which client IP addresses are assigned.</p>
   */
  ClientCidrBlock?: string;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   */
  DnsServers?: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether split-tunnel is enabled in the AWS Client VPN endpoint endpoint.</p> <p>For information about split-tunnel VPN endpoints, see <a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html">Split-Tunnel AWS Client VPN Endpoint</a> in the <i>AWS Client VPN Administrator Guide</i>.</p>
   */
  SplitTunnel?: boolean;

  /**
   * <p>The protocol used by the VPN session.</p>
   */
  VpnProtocol?: "openvpn" | string;

  /**
   * <p>The transport protocol used by the Client VPN endpoint.</p>
   */
  TransportProtocol?: "tcp" | "udp" | string;

  /**
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   */
  AssociatedTargetNetworks?:
    | Array<_AssociatedTargetNetwork>
    | Iterable<_AssociatedTargetNetwork>;

  /**
   * <p>The ARN of the server certificate.</p>
   */
  ServerCertificateArn?: string;

  /**
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   */
  AuthenticationOptions?:
    | Array<_ClientVpnAuthentication>
    | Iterable<_ClientVpnAuthentication>;

  /**
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   */
  ConnectionLogOptions?: _ConnectionLogResponseOptions;

  /**
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledClientVpnEndpoint extends _ClientVpnEndpoint {
  /**
   * <p>The current state of the Client VPN endpoint.</p>
   */
  Status?: _UnmarshalledClientVpnEndpointStatus;

  /**
   * <p>Information about the DNS servers to be used for DNS resolution. </p>
   */
  DnsServers?: Array<string>;

  /**
   * <p>Information about the associated target networks. A target network is a subnet in a VPC.</p>
   */
  AssociatedTargetNetworks?: Array<_UnmarshalledAssociatedTargetNetwork>;

  /**
   * <p>Information about the authentication method used by the Client VPN endpoint.</p>
   */
  AuthenticationOptions?: Array<_UnmarshalledClientVpnAuthentication>;

  /**
   * <p>Information about the client connection logging options for the Client VPN endpoint.</p>
   */
  ConnectionLogOptions?: _UnmarshalledConnectionLogResponseOptions;

  /**
   * <p>Any tags assigned to the Client VPN endpoint.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
