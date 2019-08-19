import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InviteMembersInput shape
 */
export interface InviteMembersInput {
  /**
   * <p>The unique ID of the detector of the GuardDuty account with which you want to invite members.</p>
   */
  DetectorId: string;

  /**
   * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as members.</p>
   */
  AccountIds: Array<string> | Iterable<string>;

  /**
   * <p>A boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members.</p>
   */
  DisableEmailNotification?: boolean;

  /**
   * <p>The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members.</p>
   */
  Message?: string;

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
