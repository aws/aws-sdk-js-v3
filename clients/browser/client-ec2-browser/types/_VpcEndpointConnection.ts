import { _DnsEntry, _UnmarshalledDnsEntry } from "./_DnsEntry";

/**
 * <p>Describes a VPC endpoint connection to a service.</p>
 */
export interface _VpcEndpointConnection {
  /**
   * <p>The ID of the service to which the endpoint is connected.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The AWS account ID of the owner of the VPC endpoint.</p>
   */
  VpcEndpointOwner?: string;

  /**
   * <p>The state of the VPC endpoint.</p>
   */
  VpcEndpointState?:
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
   * <p>The date and time the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date | string | number;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: Array<_DnsEntry> | Iterable<_DnsEntry>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledVpcEndpointConnection
  extends _VpcEndpointConnection {
  /**
   * <p>The date and time the VPC endpoint was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The DNS entries for the VPC endpoint.</p>
   */
  DnsEntries?: Array<_UnmarshalledDnsEntry>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the network load balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: Array<string>;
}
