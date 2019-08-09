import { _Input } from "./_Input";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationInputInput shape
 */
export interface AddApplicationInputInput {
  /**
   * <p>The name of your existing application to which you want to add the streaming source.</p>
   */
  ApplicationName: string;

  /**
   * <p>The current version of your application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>The <a>Input</a> to add.</p>
   */
  Input: _Input;

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
