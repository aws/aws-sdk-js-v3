import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the inputs for the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesInput {
  /**
   * <p>A list of identifiers of the directories for which to obtain the information. If this member is null, all directories that belong to the current account are returned.</p> <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  DirectoryIds?: Array<string> | Iterable<string>;

  /**
   * <p>The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeDirectories</a>. Pass null if this is the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.</p>
   */
  Limit?: number;

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
