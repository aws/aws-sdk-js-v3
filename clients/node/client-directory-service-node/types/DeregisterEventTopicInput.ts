import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
 */
export interface DeregisterEventTopicInput {
  /**
   * <p>The Directory ID to remove as a publisher. This directory will no longer send messages to the specified SNS topic.</p>
   */
  DirectoryId: string;

  /**
   * <p>The name of the SNS topic from which to remove the directory as a publisher.</p>
   */
  TopicName: string;

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
