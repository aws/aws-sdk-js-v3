import { _AuditMitigationActionsTaskTarget } from "./_AuditMitigationActionsTaskTarget";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartAuditMitigationActionsTaskInput shape
 */
export interface StartAuditMitigationActionsTaskInput {
  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply them to a type of audit check, to all findings from an audit, or to a speecific set of findings.</p>
   */
  target: _AuditMitigationActionsTaskTarget;

  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.</p>
   */
  auditCheckToActionsMapping:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken: string;

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
