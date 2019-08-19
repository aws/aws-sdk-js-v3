import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIpGroupsInput shape
 */
export interface DescribeIpGroupsInput {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
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
