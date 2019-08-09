import { _Filter } from "./_Filter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePlacementGroupsInput shape
 */
export interface DescribePlacementGroupsInput {
  /**
   * <p>The filters.</p> <ul> <li> <p> <code>group-name</code> - The name of the placement group.</p> </li> <li> <p> <code>state</code> - The state of the placement group (<code>pending</code> | <code>available</code> | <code>deleting</code> | <code>deleted</code>).</p> </li> <li> <p> <code>strategy</code> - The strategy of the placement group (<code>cluster</code> | <code>spread</code> | <code>partition</code>).</p> </li> </ul>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The names of the placement groups.</p> <p>Default: Describes all your placement groups, or only those otherwise specified.</p>
   */
  GroupNames?: Array<string> | Iterable<string>;

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
