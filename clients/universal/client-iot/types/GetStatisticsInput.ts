import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetStatisticsInput shape
 */
export interface GetStatisticsInput {
  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   */
  indexName?: string;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all indexed things in your AWS account.</p>
   */
  queryString: string;

  /**
   * <p>The aggregation field name. Currently not supported.</p>
   */
  aggregationField?: string;

  /**
   * <p>The version of the query used to search.</p>
   */
  queryVersion?: string;

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
