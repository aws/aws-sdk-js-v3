import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeSpotInstanceRequests.</p>
 */
export interface DescribeSpotInstanceRequestsInput {
  /**
   * <p>One or more filters.</p> <ul> <li> <p> <code>availability-zone-group</code> - The Availability Zone group.</p> </li> <li> <p> <code>create-time</code> - The time stamp when the Spot Instance request was created.</p> </li> <li> <p> <code>fault-code</code> - The fault code related to the request.</p> </li> <li> <p> <code>fault-message</code> - The fault message related to the request.</p> </li> <li> <p> <code>instance-id</code> - The ID of the instance that fulfilled the request.</p> </li> <li> <p> <code>launch-group</code> - The Spot Instance launch group.</p> </li> <li> <p> <code>launch.block-device-mapping.delete-on-termination</code> - Indicates whether the EBS volume is deleted on instance termination.</p> </li> <li> <p> <code>launch.block-device-mapping.device-name</code> - The device name for the volume in the block device mapping (for example, <code>/dev/sdh</code> or <code>xvdh</code>).</p> </li> <li> <p> <code>launch.block-device-mapping.snapshot-id</code> - The ID of the snapshot for the EBS volume.</p> </li> <li> <p> <code>launch.block-device-mapping.volume-size</code> - The size of the EBS volume, in GiB.</p> </li> <li> <p> <code>launch.block-device-mapping.volume-type</code> - The type of EBS volume: <code>gp2</code> for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized HDD, <code>sc1</code>for Cold HDD, or <code>standard</code> for Magnetic.</p> </li> <li> <p> <code>launch.group-id</code> - The ID of the security group for the instance.</p> </li> <li> <p> <code>launch.group-name</code> - The name of the security group for the instance.</p> </li> <li> <p> <code>launch.image-id</code> - The ID of the AMI.</p> </li> <li> <p> <code>launch.instance-type</code> - The type of instance (for example, <code>m3.medium</code>).</p> </li> <li> <p> <code>launch.kernel-id</code> - The kernel ID.</p> </li> <li> <p> <code>launch.key-name</code> - The name of the key pair the instance launched with.</p> </li> <li> <p> <code>launch.monitoring-enabled</code> - Whether detailed monitoring is enabled for the Spot Instance.</p> </li> <li> <p> <code>launch.ramdisk-id</code> - The RAM disk ID.</p> </li> <li> <p> <code>launched-availability-zone</code> - The Availability Zone in which the request is launched.</p> </li> <li> <p> <code>network-interface.addresses.primary</code> - Indicates whether the IP address is the primary private IP address.</p> </li> <li> <p> <code>network-interface.delete-on-termination</code> - Indicates whether the network interface is deleted when the instance is terminated.</p> </li> <li> <p> <code>network-interface.description</code> - A description of the network interface.</p> </li> <li> <p> <code>network-interface.device-index</code> - The index of the device for the network interface attachment on the instance.</p> </li> <li> <p> <code>network-interface.group-id</code> - The ID of the security group associated with the network interface.</p> </li> <li> <p> <code>network-interface.network-interface-id</code> - The ID of the network interface.</p> </li> <li> <p> <code>network-interface.private-ip-address</code> - The primary private IP address of the network interface.</p> </li> <li> <p> <code>network-interface.subnet-id</code> - The ID of the subnet for the instance.</p> </li> <li> <p> <code>product-description</code> - The product description associated with the instance (<code>Linux/UNIX</code> | <code>Windows</code>).</p> </li> <li> <p> <code>spot-instance-request-id</code> - The Spot Instance request ID.</p> </li> <li> <p> <code>spot-price</code> - The maximum hourly price for any Spot Instance launched to fulfill the request.</p> </li> <li> <p> <code>state</code> - The state of the Spot Instance request (<code>open</code> | <code>active</code> | <code>closed</code> | <code>cancelled</code> | <code>failed</code>). Spot request status information can help you track your Amazon EC2 Spot Instance requests. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-bid-status.html">Spot Request Status</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </li> <li> <p> <code>status-code</code> - The short code describing the most recent evaluation of your Spot Instance request.</p> </li> <li> <p> <code>status-message</code> - The message explaining the status of the Spot Instance request.</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>type</code> - The type of Spot Instance request (<code>one-time</code> | <code>persistent</code>).</p> </li> <li> <p> <code>valid-from</code> - The start date of the request.</p> </li> <li> <p> <code>valid-until</code> - The end date of the request.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>One or more Spot Instance request IDs.</p>
   */
  SpotInstanceRequestIds?: Array<string> | Iterable<string>;

  /**
   * <p>The token to request the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call. Specify a value between 5 and 1000. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
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
