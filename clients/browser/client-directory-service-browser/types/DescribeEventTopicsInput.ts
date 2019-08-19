import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes event topics.</p>
 */
export interface DescribeEventTopicsInput {
  /**
   * <p>The Directory ID for which to get the list of associated SNS topics. If this member is null, associations for all Directory IDs are returned.</p>
   */
  DirectoryId?: string;

  /**
   * <p>A list of SNS topic names for which to obtain the information. If this member is null, all associations for the specified Directory ID are returned.</p> <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
   */
  TopicNames?: Array<string> | Iterable<string>;

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
