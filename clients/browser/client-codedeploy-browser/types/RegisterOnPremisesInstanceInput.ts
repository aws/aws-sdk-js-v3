import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of the register on-premises instance operation.</p>
 */
export interface RegisterOnPremisesInstanceInput {
  /**
   * <p>The name of the on-premises instance to register.</p>
   */
  instanceName: string;

  /**
   * <p>The ARN of the IAM session to associate with the on-premises instance.</p>
   */
  iamSessionArn?: string;

  /**
   * <p>The ARN of the IAM user to associate with the on-premises instance.</p>
   */
  iamUserArn?: string;

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
