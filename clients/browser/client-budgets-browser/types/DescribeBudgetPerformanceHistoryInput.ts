import { _TimePeriod } from "./_TimePeriod";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBudgetPerformanceHistoryInput shape
 */
export interface DescribeBudgetPerformanceHistoryInput {
  /**
   * <p>The account ID of the user. It should be a 12-digit number.</p>
   */
  AccountId: string;

  /**
   * <p> A string that represents the budget name. The ":" and "\" characters aren't allowed.</p>
   */
  BudgetName: string;

  /**
   * <p>Retrieves how often the budget went into an <code>ALARM</code> state for the specified time period.</p>
   */
  TimePeriod?: _TimePeriod;

  /**
   * <p> An integer that represents how many entries a paginated response contains. The maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p> A generic string.</p>
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
