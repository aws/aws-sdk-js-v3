import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLogSubscriptionsInput shape
 */
export interface ListLogSubscriptionsInput {
  /**
   * <p>If a <i>DirectoryID</i> is provided, lists only the log subscription associated with that directory. If no <i>DirectoryId</i> is provided, lists all log subscriptions associated with your AWS account. If there are no log subscriptions for the AWS account or the directory, an empty list will be returned.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The token for the next set of items to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items returned.</p>
   */
  Limit?: number;

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
