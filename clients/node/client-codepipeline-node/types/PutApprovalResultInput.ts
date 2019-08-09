import { _ApprovalResult } from "./_ApprovalResult";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>PutApprovalResult</code> action.</p>
 */
export interface PutApprovalResultInput {
  /**
   * <p>The name of the pipeline that contains the action. </p>
   */
  pipelineName: string;

  /**
   * <p>The name of the stage that contains the action.</p>
   */
  stageName: string;

  /**
   * <p>The name of the action for which approval is requested.</p>
   */
  actionName: string;

  /**
   * <p>Represents information about the result of the approval request.</p>
   */
  result: _ApprovalResult;

  /**
   * <p>The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the <a>GetPipelineState</a> action and is used to validate that the approval request corresponding to this token is still valid.</p>
   */
  token: string;

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
