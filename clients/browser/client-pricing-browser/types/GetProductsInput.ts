import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetProductsInput shape
 */
export interface GetProductsInput {
  /**
   * <p>The code for the service whose products you want to retrieve. </p>
   */
  ServiceCode?: string;

  /**
   * <p>The list of filters that limit the returned products. only products that match all filters are returned.</p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The format version that you want the response to be in.</p> <p>Valid values are: <code>aws_v1</code> </p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
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
