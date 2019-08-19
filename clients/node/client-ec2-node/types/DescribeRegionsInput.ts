import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRegionsInput shape
 */
export interface DescribeRegionsInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>endpoint</code> - The endpoint of the Region (for example, <code>ec2.us-east-1.amazonaws.com</code>).</p> </li> <li> <p> <code>region-name</code> - The name of the Region (for example, <code>us-east-1</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</p>
   */
  RegionNames?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Indicates whether to display all Regions, including Regions that are disabled for your account.</p>
   */
  AllRegions?: boolean;

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
