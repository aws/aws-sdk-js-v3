import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateQualificationFromWorkerInput shape
 */
export interface DisassociateQualificationFromWorkerInput {
  /**
   * <p>The ID of the Worker who possesses the Qualification to be revoked.</p>
   */
  WorkerId: string;

  /**
   * <p>The ID of the Qualification type of the Qualification to be revoked.</p>
   */
  QualificationTypeId: string;

  /**
   * <p>A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.</p>
   */
  Reason?: string;

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
