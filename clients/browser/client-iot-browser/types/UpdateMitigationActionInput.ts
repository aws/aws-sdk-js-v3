import { _MitigationActionParams } from "./_MitigationActionParams";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMitigationActionInput shape
 */
export interface UpdateMitigationActionInput {
  /**
   * <p>The friendly name for the mitigation action. You can't change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and re-create the mitigation action with the new name.</p>
   */
  actionName: string;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: _MitigationActionParams;

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
