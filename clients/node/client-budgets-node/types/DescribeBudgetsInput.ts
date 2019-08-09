import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request of DescribeBudgets </p>
 */
export interface DescribeBudgetsInput {
  /**
   * <p>The <code>accountId</code> that is associated with the budgets that you want descriptions of.</p>
   */
  AccountId: string;

  /**
   * <p>An optional integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that you include in your request to indicate the next set of results that you want to retrieve.</p>
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
