import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateQualificationWithWorkerInput shape
 */
export interface AssociateQualificationWithWorkerInput {
  /**
   * <p>The ID of the Qualification type to use for the assigned Qualification.</p>
   */
  QualificationTypeId: string;

  /**
   * <p> The ID of the Worker to whom the Qualification is being assigned. Worker IDs are included with submitted HIT assignments and Qualification requests. </p>
   */
  WorkerId: string;

  /**
   * <p>The value of the Qualification to assign.</p>
   */
  IntegerValue?: number;

  /**
   * <p> Specifies whether to send a notification email message to the Worker saying that the qualification was assigned to the Worker. Note: this is true by default. </p>
   */
  SendNotification?: boolean;

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
