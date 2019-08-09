import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLogSubscriptionInput shape
 */
export interface CreateLogSubscriptionInput {
  /**
   * <p>Identifier (ID) of the directory to which you want to subscribe and receive real-time logs to your specified CloudWatch log group.</p>
   */
  DirectoryId: string;

  /**
   * <p>The name of the CloudWatch log group where the real-time domain controller logs are forwarded.</p>
   */
  LogGroupName: string;

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
