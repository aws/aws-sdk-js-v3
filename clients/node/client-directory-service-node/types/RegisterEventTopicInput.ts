import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Registers a new event topic.</p>
 */
export interface RegisterEventTopicInput {
  /**
   * <p>The Directory ID that will publish status messages to the SNS topic.</p>
   */
  DirectoryId: string;

  /**
   * <p>The SNS topic name to which the directory will publish status messages. This SNS topic must be in the same region as the specified Directory ID.</p>
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
