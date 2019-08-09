import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExportConfigurationsInput shape
 */
export interface DescribeExportConfigurationsInput {
  /**
   * <p>A list of continuous export ids to search for.</p>
   */
  exportIds?: Array<string> | Iterable<string>;

  /**
   * <p>A number between 1 and 100 specifying the maximum number of continuous export descriptions returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
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
