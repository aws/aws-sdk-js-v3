import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeNetworkInterfaces.</p>
 */
export interface DescribeNetworkInterfacesInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>addresses.private-ip-address</code> - The private IPv4 addresses associated with the network interface.</p> </li> <li> <p> <code>addresses.primary</code> - Whether the private IPv4 address is the primary IP address associated with the network interface. </p> </li> <li> <p> <code>addresses.association.public-ip</code> - The association ID returned when the network interface was associated with the Elastic IP address (IPv4).</p> </li> <li> <p> <code>addresses.association.owner-id</code> - The owner ID of the addresses associated with the network interface.</p> </li> <li> <p> <code>association.association-id</code> - The association ID returned when the network interface was associated with an IPv4 address.</p> </li> <li> <p> <code>association.allocation-id</code> - The allocation ID returned when you allocated the Elastic IP address (IPv4) for your network interface.</p> </li> <li> <p> <code>association.ip-owner-id</code> - The owner of the Elastic IP address (IPv4) associated with the network interface.</p> </li> <li> <p> <code>association.public-ip</code> - The address of the Elastic IP address (IPv4) bound to the network interface.</p> </li> <li> <p> <code>association.public-dns-name</code> - The public DNS name for the network interface (IPv4).</p> </li> <li> <p> <code>attachment.attachment-id</code> - The ID of the interface attachment.</p> </li> <li> <p> <code>attachment.attach-time</code> - The time that the network interface was attached to an instance.</p> </li> <li> <p> <code>attachment.delete-on-termination</code> - Indicates whether the attachment is deleted when an instance is terminated.</p> </li> <li> <p> <code>attachment.device-index</code> - The device index to which the network interface is attached.</p> </li> <li> <p> <code>attachment.instance-id</code> - The ID of the instance to which the network interface is attached.</p> </li> <li> <p> <code>attachment.instance-owner-id</code> - The owner ID of the instance to which the network interface is attached.</p> </li> <li> <p> <code>attachment.nat-gateway-id</code> - The ID of the NAT gateway to which the network interface is attached.</p> </li> <li> <p> <code>attachment.status</code> - The status of the attachment (<code>attaching</code> | <code>attached</code> | <code>detaching</code> | <code>detached</code>).</p> </li> <li> <p> <code>availability-zone</code> - The Availability Zone of the network interface.</p> </li> <li> <p> <code>description</code> - The description of the network interface.</p> </li> <li> <p> <code>group-id</code> - The ID of a security group associated with the network interface.</p> </li> <li> <p> <code>group-name</code> - The name of a security group associated with the network interface.</p> </li> <li> <p> <code>ipv6-addresses.ipv6-address</code> - An IPv6 address associated with the network interface.</p> </li> <li> <p> <code>mac-address</code> - The MAC address of the network interface.</p> </li> <li> <p> <code>network-interface-id</code> - The ID of the network interface.</p> </li> <li> <p> <code>owner-id</code> - The AWS account ID of the network interface owner.</p> </li> <li> <p> <code>private-ip-address</code> - The private IPv4 address or addresses of the network interface.</p> </li> <li> <p> <code>private-dns-name</code> - The private DNS name of the network interface (IPv4).</p> </li> <li> <p> <code>requester-id</code> - The ID of the entity that launched the instance on your behalf (for example, AWS Management Console, Auto Scaling, and so on).</p> </li> <li> <p> <code>requester-managed</code> - Indicates whether the network interface is being managed by an AWS service (for example, AWS Management Console, Auto Scaling, and so on).</p> </li> <li> <p> <code>source-dest-check</code> - Indicates whether the network interface performs source/destination checking. A value of <code>true</code> means checking is enabled, and <code>false</code> means checking is disabled. The value must be <code>false</code> for the network interface to perform network address translation (NAT) in your VPC. </p> </li> <li> <p> <code>status</code> - The status of the network interface. If the network interface is not attached to an instance, the status is <code>available</code>; if a network interface is attached to an instance the status is <code>in-use</code>.</p> </li> <li> <p> <code>subnet-id</code> - The ID of the subnet for the network interface.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>vpc-id</code> - The ID of the VPC for the network interface.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more network interface IDs.</p> <p>Default: Describes all your network interfaces.</p>
   */
  NetworkInterfaceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The token to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
