import { _Filter } from "./_Filter";
import { _Sort } from "./_Sort";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchContactsInput shape
 */
export interface SearchContactsInput {
  /**
   * <p>The filters to use to list a specified set of address books. The supported filter keys are DisplayName, FirstName, LastName, and AddressBookArns.</p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The sort order to use in listing the specified set of contacts. The supported sort keys are DisplayName, FirstName, and LastName.</p>
   */
  SortCriteria?: Array<_Sort> | Iterable<_Sort>;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
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
