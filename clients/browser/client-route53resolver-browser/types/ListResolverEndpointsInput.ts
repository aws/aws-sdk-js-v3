import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResolverEndpointsInput shape
 */
export interface ListResolverEndpointsInput {
  /**
   * <p>The maximum number of resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request. If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 resolver endpoints. </p>
   */
  MaxResults?: number;

  /**
   * <p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p> <p>If you have more than <code>MaxResults</code> resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request to get the next group of resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   */
  NextToken?: string;

  /**
   * <p>An optional specification to return a subset of resolver endpoints, such as all inbound resolver endpoints.</p> <note> <p>If you submit a second or subsequent <code>ListResolverEndpoints</code> request and specify the <code>NextToken</code> parameter, you must use the same values for <code>Filters</code>, if any, as in the previous request.</p> </note>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

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
