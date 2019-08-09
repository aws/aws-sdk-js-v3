import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeHostsInput shape
 */
export interface DescribeHostsInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>auto-placement</code> - Whether auto-placement is enabled or disabled (<code>on</code> | <code>off</code>).</p> </li> <li> <p> <code>availability-zone</code> - The Availability Zone of the host.</p> </li> <li> <p> <code>client-token</code> - The idempotency token that you provided when you allocated the host.</p> </li> <li> <p> <code>host-reservation-id</code> - The ID of the reservation assigned to this host.</p> </li> <li> <p> <code>instance-type</code> - The instance type size that the Dedicated Host is configured to support.</p> </li> <li> <p> <code>state</code> - The allocation state of the Dedicated Host (<code>available</code> | <code>under-assessment</code> | <code>permanent-failure</code> | <code>released</code> | <code>released-permanent-failure</code>).</p> </li> <li> <p> <code>tag-key</code> - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</p> </li> </ul>
   */
  Filter?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The IDs of the Dedicated Hosts. The IDs are used for targeted instance launches.</p>
   */
  HostIds?: Array<string> | Iterable<string>;

  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p> <p>You cannot specify this parameter and the host IDs parameter in the same request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
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
