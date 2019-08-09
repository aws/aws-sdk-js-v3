import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEnabledStandardsInput shape
 */
export interface GetEnabledStandardsInput {
  /**
   * <p>A list of the standards subscription ARNs for the standards to retrieve.</p>
   */
  StandardsSubscriptionArns?: Array<string> | Iterable<string>;

  /**
   * <p>Paginates results. On your first call to the <code>GetEnabledStandards</code> operation, set the value of this parameter to <code>NULL</code>. For subsequent calls to the operation, fill <code>nextToken</code> in the request with the value of <code>nextToken</code> from the previous response to continue listing data.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
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
