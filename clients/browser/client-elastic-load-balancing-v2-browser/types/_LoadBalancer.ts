import {
  _LoadBalancerState,
  _UnmarshalledLoadBalancerState
} from "./_LoadBalancerState";
import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Information about a load balancer.</p>
 */
export interface _LoadBalancer {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The public DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone associated with the load balancer.</p>
   */
  CanonicalHostedZoneId?: string;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.</p> <p>The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.</p>
   */
  Scheme?: "internet-facing" | "internal" | string;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VpcId?: string;

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: _LoadBalancerState;

  /**
   * <p>The type of load balancer.</p>
   */
  Type?: "application" | "network" | string;

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<_AvailabilityZone> | Iterable<_AvailabilityZone>;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The type of IP addresses used by the subnets for your load balancer. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses).</p>
   */
  IpAddressType?: "ipv4" | "dualstack" | string;
}

export interface _UnmarshalledLoadBalancer extends _LoadBalancer {
  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The state of the load balancer.</p>
   */
  State?: _UnmarshalledLoadBalancerState;

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;

  /**
   * <p>The IDs of the security groups for the load balancer.</p>
   */
  SecurityGroups?: Array<string>;
}
