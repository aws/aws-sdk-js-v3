import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFaceSearchInput shape
 */
export interface GetFaceSearchInput {
  /**
   * <p>The job identifer for the search request. You get the job identifier from an initial call to <code>StartFaceSearch</code>.</p>
   */
  JobId: string;

  /**
   * <p>Maximum number of results to return per paginated call. The largest value you can specify is 1000. If you specify a value greater than 1000, a maximum of 1000 results is returned. The default value is 1000.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more search results to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of search results. </p>
   */
  NextToken?: string;

  /**
   * <p>Sort to use for grouping faces in the response. Use <code>TIMESTAMP</code> to group faces by the time that they are recognized. Use <code>INDEX</code> to sort by recognized faces. </p>
   */
  SortBy?: "INDEX" | "TIMESTAMP" | string;

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
