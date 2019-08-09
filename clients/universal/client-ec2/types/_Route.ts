/**
 * <p>Describes a route in a route table.</p>
 */
export interface _Route {
  /**
   * <p>The IPv4 CIDR block used for the destination match.</p>
   */
  DestinationCidrBlock?: string;

  /**
   * <p>The IPv6 CIDR block used for the destination match.</p>
   */
  DestinationIpv6CidrBlock?: string;

  /**
   * <p>The prefix of the AWS service.</p>
   */
  DestinationPrefixListId?: string;

  /**
   * <p>The ID of the egress-only internet gateway.</p>
   */
  EgressOnlyInternetGatewayId?: string;

  /**
   * <p>The ID of a gateway attached to your VPC.</p>
   */
  GatewayId?: string;

  /**
   * <p>The ID of a NAT instance in your VPC.</p>
   */
  InstanceId?: string;

  /**
   * <p>The AWS account ID of the owner of the instance.</p>
   */
  InstanceOwnerId?: string;

  /**
   * <p>The ID of a NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>The ID of a transit gateway.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>Describes how the route was created.</p> <ul> <li> <p> <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p> </li> <li> <p> <code>CreateRoute</code> - The route was manually added to the route table.</p> </li> <li> <p> <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p> </li> </ul>
   */
  Origin?:
    | "CreateRouteTable"
    | "CreateRoute"
    | "EnableVgwRoutePropagation"
    | string;

  /**
   * <p>The state of the route. The <code>blackhole</code> state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, or the specified NAT instance has been terminated).</p>
   */
  State?: "active" | "blackhole" | string;

  /**
   * <p>The ID of a VPC peering connection.</p>
   */
  VpcPeeringConnectionId?: string;
}

export type _UnmarshalledRoute = _Route;
