import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDashboardEmbedUrlInput shape
 */
export interface GetDashboardEmbedUrlInput {
  /**
   * <p>AWS account ID that contains the dashboard you are embedding.</p>
   */
  AwsAccountId: string;

  /**
   * <p>The ID for the dashboard, also added to IAM policy</p>
   */
  DashboardId: string;

  /**
   * <p>The authentication method the user uses to sign in (IAM only).</p>
   */
  IdentityType: "IAM" | "QUICKSIGHT" | string;

  /**
   * <p>How many minutes the session is valid. The session lifetime must be between 15 and 600 minutes.</p>
   */
  SessionLifetimeInMinutes?: number;

  /**
   * <p>Remove the undo/redo button on embedded dashboard. The default is FALSE, which enables the undo/redo button.</p>
   */
  UndoRedoDisabled?: boolean;

  /**
   * <p>Remove the reset button on embedded dashboard. The default is FALSE, which allows the reset button.</p>
   */
  ResetDisabled?: boolean;

  /**
   * <p>The Amazon QuickSight user's ARN, for use with <code>QUICKSIGHT</code> identity type. You can use this for any of the following:</p> <ul> <li> <p>Amazon QuickSight users in your account (readers, authors, or admins)</p> </li> <li> <p>AD users</p> </li> <li> <p>Invited non-federated users</p> </li> <li> <p>Federated IAM users</p> </li> <li> <p>Federated IAM role-based sessions</p> </li> </ul>
   */
  UserArn?: string;

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
