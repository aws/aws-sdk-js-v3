import { _TargetDescription } from "./_TargetDescription";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterTargetsInput shape
 */
export interface RegisterTargetsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  TargetGroupArn: string;

  /**
   * <p>The targets.</p> <p>To register a target by instance ID, specify the instance ID. To register a target by IP address, specify the IP address. To register a Lambda function, specify the ARN of the Lambda function.</p>
   */
  Targets: Array<_TargetDescription> | Iterable<_TargetDescription>;

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
