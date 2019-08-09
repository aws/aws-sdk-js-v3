import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVolumesInput shape
 */
export interface DescribeVolumesInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>attachment.attach-time</code> - The time stamp when the attachment initiated.</p> </li> <li> <p> <code>attachment.delete-on-termination</code> - Whether the volume is deleted on instance termination.</p> </li> <li> <p> <code>attachment.device</code> - The device name specified in the block device mapping (for example, <code>/dev/sda1</code>).</p> </li> <li> <p> <code>attachment.instance-id</code> - The ID of the instance the volume is attached to.</p> </li> <li> <p> <code>attachment.status</code> - The attachment state (<code>attaching</code> | <code>attached</code> | <code>detaching</code>).</p> </li> <li> <p> <code>availability-zone</code> - The Availability Zone in which the volume was created.</p> </li> <li> <p> <code>create-time</code> - The time stamp when the volume was created.</p> </li> <li> <p> <code>encrypted</code> - Indicates whether the volume is encrypted (<code>true</code> | <code>false</code>)</p> </li> <li> <p> <code>size</code> - The size of the volume, in GiB.</p> </li> <li> <p> <code>snapshot-id</code> - The snapshot from which the volume was created.</p> </li> <li> <p> <code>status</code> - The status of the volume (<code>creating</code> | <code>available</code> | <code>in-use</code> | <code>deleting</code> | <code>deleted</code> | <code>error</code>).</p> </li> <li> <p> <code>tag</code>:&lt;key&gt; - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key <code>Owner</code> and the value <code>TeamA</code>, specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> <li> <p> <code>volume-id</code> - The volume ID.</p> </li> <li> <p> <code>volume-type</code> - The Amazon EBS volume type. This can be <code>gp2</code> for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for Magnetic volumes.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The volume IDs.</p>
   */
  VolumeIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The maximum number of volume results returned by <code>DescribeVolumes</code> in paginated output. When this parameter is used, <code>DescribeVolumes</code> only returns <code>MaxResults</code> results in a single page along with a <code>NextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeVolumes</code> request with the returned <code>NextToken</code> value. This value can be between 5 and 500; if <code>MaxResults</code> is given a value larger than 500, only 500 results are returned. If this parameter is not used, then <code>DescribeVolumes</code> returns all results. You cannot specify this parameter and the volume IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The <code>NextToken</code> value returned from a previous paginated <code>DescribeVolumes</code> request where <code>MaxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>NextToken</code> value. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

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
