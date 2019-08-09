import { _DateInterval } from "./_DateInterval";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTagsInput shape
 */
export interface GetTagsInput {
  /**
   * <p>The value that you want to search for.</p>
   */
  SearchString?: string;

  /**
   * <p>The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: _DateInterval;

  /**
   * <p>The key of the tag that you want to return values for.</p>
   */
  TagKey?: string;

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

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
