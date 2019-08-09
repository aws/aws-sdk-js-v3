import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDomainsInput shape
 */
export interface ListDomainsInput {
  /**
   * <p>If <code>NextPageToken</code> is returned there are more results available. The value of <code>NextPageToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 60 seconds. Using an expired pagination token will return a <code>400</code> error: "<code>Specified token has exceeded its maximum lifetime</code>". </p> <p>The configured <code>maximumPageSize</code> determines how many results can be returned in a single call. </p>
   */
  nextPageToken?: string;

  /**
   * <p>Specifies the registration status of the domains to list.</p>
   */
  registrationStatus: "REGISTERED" | "DEPRECATED" | string;

  /**
   * <p>The maximum number of results that are returned per call. Use <code>nextPageToken</code> to obtain further pages of results. </p>
   */
  maximumPageSize?: number;

  /**
   * <p>When set to <code>true</code>, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by <code>name</code> of the domains.</p>
   */
  reverseOrder?: boolean;

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
