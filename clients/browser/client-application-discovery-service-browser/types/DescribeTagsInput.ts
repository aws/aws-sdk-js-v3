import { _TagFilter } from "./_TagFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTagsInput shape
 */
export interface DescribeTagsInput {
  /**
   * <p>You can filter the list using a <i>key</i>-<i>value</i> format. You can separate these items by using logical operators. Allowed filters include <code>tagKey</code>, <code>tagValue</code>, and <code>configurationId</code>. </p>
   */
  filters?: Array<_TagFilter> | Iterable<_TagFilter>;

  /**
   * <p>The total number of items to return in a single page of output. The maximum value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  nextToken?: string;

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
