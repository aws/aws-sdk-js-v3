import {
  _SecurityGroupIdentifier,
  _UnmarshalledSecurityGroupIdentifier
} from "./_SecurityGroupIdentifier";
import { _DnsEntry, _UnmarshalledDnsEntry } from "./_DnsEntry";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a VPC endpoint.</p>
 */
export interface _VpcEndpoint {
  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of endpoint.</p>
   */
  VpcEndpointType?: "Interface" | "Gateway" | string;

  /**
   * <p>The ID of the VPC to which the endpoint is associated.</p>
   */
  VpcId?: string;

  /**
   * <p>The name of the service to which the endpoint is associated.</p>
   */
  ServiceName?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  State?:
    | "PendingAcceptance"
    | "Pending"
    | "Available"
    | "Deleting"
    | "Deleted"
    | "Rejected"
    | "Failed"
    | "Expired"
    | string;

  /**
   * <p>The policy document associated with the endpoint, if applicable.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route tables associated with the endpoint.</p>
   */
  RouteTableIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) One or more subnets in which the endpoint is located.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) Information about the security groups associated with the network interface.</p>
   */
  Groups?: Array<_SecurityGroupIdentifier> | Iterable<_SecurityGroupIdentifier>;

  /**
   * <p>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * <p>Indicates whether the VPC endpoint is being managed by its service.</p>
   */
  RequesterManaged?: boolean;

  /**
   * <p>(Interface endpoint) One or more network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: Array<_DnsEntry> | Iterable<_DnsEntry>;

  /**
   * <p>The date and time the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date | string | number;

  /**
   * <p>Any tags assigned to the VPC endpoint.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of the AWS account that owns the VPC endpoint.</p>
   */
  OwnerId?: string;
}

export interface _UnmarshalledVpcEndpoint extends _VpcEndpoint {
  /**
   * <p>(Gateway endpoint) One or more route tables associated with the endpoint.</p>
   */
  RouteTableIds?: Array<string>;

  /**
   * <p>(Interface endpoint) One or more subnets in which the endpoint is located.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>(Interface endpoint) Information about the security groups associated with the network interface.</p>
   */
  Groups?: Array<_UnmarshalledSecurityGroupIdentifier>;

  /**
   * <p>(Interface endpoint) One or more network interfaces for the endpoint.</p>
   */
  NetworkInterfaceIds?: Array<string>;

  /**
   * <p>(Interface endpoint) The DNS entries for the endpoint.</p>
   */
  DnsEntries?: Array<_UnmarshalledDnsEntry>;

  /**
   * <p>The date and time the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>Any tags assigned to the VPC endpoint.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
