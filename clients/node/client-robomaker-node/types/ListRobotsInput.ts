import { _Filter } from "./_Filter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRobotsInput shape
 */
export interface ListRobotsInput {
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListRobots</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListRobots</code> in paginated output. When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobots</code> returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>
   */
  filters?: Array<_Filter> | Iterable<_Filter>;

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
