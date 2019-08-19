import { _MitigationActionParams } from "./_MitigationActionParams";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateMitigationActionInput shape
 */
export interface CreateMitigationActionInput {
  /**
   * <p>A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).</p>
   */
  actionName: string;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn: string;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams: _MitigationActionParams;

  /**
   * <p>Metadata that can be used to manage the mitigation action.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
