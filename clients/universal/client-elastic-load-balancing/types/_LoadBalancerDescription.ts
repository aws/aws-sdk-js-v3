import {
  _ListenerDescription,
  _UnmarshalledListenerDescription
} from "./_ListenerDescription";
import { _Policies, _UnmarshalledPolicies } from "./_Policies";
import {
  _BackendServerDescription,
  _UnmarshalledBackendServerDescription
} from "./_BackendServerDescription";
import { _Instance, _UnmarshalledInstance } from "./_Instance";
import { _HealthCheck, _UnmarshalledHealthCheck } from "./_HealthCheck";
import {
  _SourceSecurityGroup,
  _UnmarshalledSourceSecurityGroup
} from "./_SourceSecurityGroup";

/**
 * <p>Information about a load balancer.</p>
 */
export interface _LoadBalancerDescription {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The DNS name of the load balancer.</p>
   */
  DNSName?: string;

  /**
   * <p>The DNS name of the load balancer.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html">Configure a Custom Domain Name</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  CanonicalHostedZoneName?: string;

  /**
   * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
   */
  CanonicalHostedZoneNameID?: string;

  /**
   * <p>The listeners for the load balancer.</p>
   */
  ListenerDescriptions?:
    | Array<_ListenerDescription>
    | Iterable<_ListenerDescription>;

  /**
   * <p>The policies defined for the load balancer.</p>
   */
  Policies?: _Policies;

  /**
   * <p>Information about your EC2 instances.</p>
   */
  BackendServerDescriptions?:
    | Array<_BackendServerDescription>
    | Iterable<_BackendServerDescription>;

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The IDs of the subnets for the load balancer.</p>
   */
  Subnets?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the VPC for the load balancer.</p>
   */
  VPCId?: string;

  /**
   * <p>The IDs of the instances for the load balancer.</p>
   */
  Instances?: Array<_Instance> | Iterable<_Instance>;

  /**
   * <p>Information about the health checks conducted on the load balancer.</p>
   */
  HealthCheck?: _HealthCheck;

  /**
   * <p>The security group for the load balancer, which you can use as part of your inbound rules for your registered instances. To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.</p>
   */
  SourceSecurityGroup?: _SourceSecurityGroup;

  /**
   * <p>The security groups for the load balancer. Valid only for load balancers in a VPC.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The type of load balancer. Valid only for load balancers in a VPC.</p> <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer has a public DNS name that resolves to a public IP address.</p> <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public DNS name that resolves to a private IP address.</p>
   */
  Scheme?: string;
}

export interface _UnmarshalledLoadBalancerDescription
  extends _LoadBalancerDescription {
  /**
   * <p>The listeners for the load balancer.</p>
   */
  ListenerDescriptions?: Array<_UnmarshalledListenerDescription>;

  /**
   * <p>The policies defined for the load balancer.</p>
   */
  Policies?: _UnmarshalledPolicies;

  /**
   * <p>Information about your EC2 instances.</p>
   */
  BackendServerDescriptions?: Array<_UnmarshalledBackendServerDescription>;

  /**
   * <p>The Availability Zones for the load balancer.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The IDs of the subnets for the load balancer.</p>
   */
  Subnets?: Array<string>;

  /**
   * <p>The IDs of the instances for the load balancer.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * <p>Information about the health checks conducted on the load balancer.</p>
   */
  HealthCheck?: _UnmarshalledHealthCheck;

  /**
   * <p>The security group for the load balancer, which you can use as part of your inbound rules for your registered instances. To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.</p>
   */
  SourceSecurityGroup?: _UnmarshalledSourceSecurityGroup;

  /**
   * <p>The security groups for the load balancer. Valid only for load balancers in a VPC.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>The date and time the load balancer was created.</p>
   */
  CreatedTime?: Date;
}
