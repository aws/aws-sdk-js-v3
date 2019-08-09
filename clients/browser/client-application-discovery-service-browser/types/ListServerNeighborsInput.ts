import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServerNeighborsInput shape
 */
export interface ListServerNeighborsInput {
  /**
   * <p>Configuration ID of the server for which neighbors are being listed.</p>
   */
  configurationId: string;

  /**
   * <p>Flag to indicate if port and protocol information is needed as part of the response.</p>
   */
  portInformationNeeded?: boolean;

  /**
   * <p>List of configuration IDs to test for one-hop-away.</p>
   */
  neighborConfigurationIds?: Array<string> | Iterable<string>;

  /**
   * <p>Maximum number of results to return in a single page of output.</p>
   */
  maxResults?: number;

  /**
   * <p>Token to retrieve the next set of results. For example, if you previously specified 100 IDs for <code>ListServerNeighborsRequest$neighborConfigurationIds</code> but set <code>ListServerNeighborsRequest$maxResults</code> to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.</p>
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
