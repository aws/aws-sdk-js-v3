import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServersInput shape
 */
export interface ListServersInput {
  /**
   * <p>Specifies the number of servers to return as a response to the <code>ListServers</code> query.</p>
   */
  MaxResults?: number;

  /**
   * <p>When additional results are obtained from the ListServers command, a <code>NextToken</code> parameter is returned in the output. You can then pass the <code>NextToken</code> parameter in a subsequent command to continue listing additional servers.</p>
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
