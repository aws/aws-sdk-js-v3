import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateStateMachineInput shape
 */
export interface UpdateStateMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the state machine.</p>
   */
  stateMachineArn: string;

  /**
   * <p>The Amazon States Language definition of the state machine. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a>.</p>
   */
  definition?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role of the state machine.</p>
   */
  roleArn?: string;

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
