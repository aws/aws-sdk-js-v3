import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAvailabilityZonesInput shape
 */
export interface DescribeAvailabilityZonesInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>message</code> - Information about the Availability Zone.</p> </li> <li> <p> <code>region-name</code> - The name of the Region for the Availability Zone (for example, <code>us-east-1</code>).</p> </li> <li> <p> <code>state</code> - The state of the Availability Zone (<code>available</code> | <code>information</code> | <code>impaired</code> | <code>unavailable</code>).</p> </li> <li> <p> <code>zone-id</code> - The ID of the Availability Zone (for example, <code>use1-az1</code>).</p> </li> <li> <p> <code>zone-name</code> - The name of the Availability Zone (for example, <code>us-east-1a</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The names of the Availability Zones.</p>
   */
  ZoneNames?: Array<string> | Iterable<string>;

  /**
   * <p>The IDs of the Availability Zones.</p>
   */
  ZoneIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
