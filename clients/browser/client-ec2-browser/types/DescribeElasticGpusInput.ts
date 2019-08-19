import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeElasticGpusInput shape
 */
export interface DescribeElasticGpusInput {
  /**
   * <p>The Elastic Graphics accelerator IDs.</p>
   */
  ElasticGpuIds?: Array<string> | Iterable<string>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The filters.</p> <ul> <li> <p> <code>availability-zone</code> - The Availability Zone in which the Elastic Graphics accelerator resides.</p> </li> <li> <p> <code>elastic-gpu-health</code> - The status of the Elastic Graphics accelerator (<code>OK</code> | <code>IMPAIRED</code>).</p> </li> <li> <p> <code>elastic-gpu-state</code> - The state of the Elastic Graphics accelerator (<code>ATTACHED</code>).</p> </li> <li> <p> <code>elastic-gpu-type</code> - The type of Elastic Graphics accelerator; for example, <code>eg1.medium</code>.</p> </li> <li> <p> <code>instance-id</code> - The ID of the instance to which the Elastic Graphics accelerator is associated.</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. This value can be between 5 and 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to request the next page of results.</p>
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
