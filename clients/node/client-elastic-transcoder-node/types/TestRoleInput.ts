import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> The <code>TestRoleRequest</code> structure. </p>
 */
export interface TestRoleInput {
  /**
   * <p>The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.</p>
   */
  Role: string;

  /**
   * <p>The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.</p>
   */
  InputBucket: string;

  /**
   * <p>The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.</p>
   */
  OutputBucket: string;

  /**
   * <p>The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.</p>
   */
  Topics: Array<string> | Iterable<string>;

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
