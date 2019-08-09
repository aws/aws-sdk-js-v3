import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListFunctionsInput shape
 */
export interface ListFunctionsInput {
  /**
   * <p>For Lambda@Edge functions, the AWS Region of the master function. For example, <code>us-east-2</code> or <code>ALL</code>. If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.</p>
   */
  MasterRegion?: string;

  /**
   * <p>Set to <code>ALL</code> to include entries for all published versions of each function.</p>
   */
  FunctionVersion?: "ALL" | string;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Specify a value between 1 and 50 to limit the number of functions in the response.</p>
   */
  MaxItems?: number;

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
