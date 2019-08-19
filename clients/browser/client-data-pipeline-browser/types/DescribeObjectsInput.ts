import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for DescribeObjects.</p>
 */
export interface DescribeObjectsInput {
  /**
   * <p>The ID of the pipeline that contains the object definitions.</p>
   */
  pipelineId: string;

  /**
   * <p>The IDs of the pipeline objects that contain the definitions to be described. You can pass as many as 25 identifiers in a single call to <code>DescribeObjects</code>.</p>
   */
  objectIds: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether any expressions in the object should be evaluated when the object descriptions are returned.</p>
   */
  evaluateExpressions?: boolean;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call <code>DescribeObjects</code> with the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;

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
