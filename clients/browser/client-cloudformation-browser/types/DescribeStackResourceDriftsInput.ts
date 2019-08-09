import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStackResourceDriftsInput shape
 */
export interface DescribeStackResourceDriftsInput {
  /**
   * <p>The name of the stack for which you want drift information.</p>
   */
  StackName: string;

  /**
   * <p>The resource drift status values to use as filters for the resource drift results returned.</p> <ul> <li> <p> <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has been deleted.</p> </li> <li> <p> <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p> </li> <li> <p> <code>IN_SYNC</code>: The resources's actual configuration matches its expected template configuration.</p> </li> <li> <p> <code>NOT_CHECKED</code>: AWS CloudFormation does not currently return this value.</p> </li> </ul>
   */
  StackResourceDriftStatusFilters?:
    | Array<"IN_SYNC" | "MODIFIED" | "DELETED" | "NOT_CHECKED" | string>
    | Iterable<"IN_SYNC" | "MODIFIED" | "DELETED" | "NOT_CHECKED" | string>;

  /**
   * <p>A string that identifies the next page of stack resource drift results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>
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
