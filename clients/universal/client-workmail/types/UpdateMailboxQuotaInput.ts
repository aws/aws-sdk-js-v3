import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMailboxQuotaInput shape
 */
export interface UpdateMailboxQuotaInput {
  /**
   * <p>The identifier for the organization that contains the user for whom to update the mailbox quota.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifer for the user for whom to update the mailbox quota.</p>
   */
  UserId: string;

  /**
   * <p>The updated mailbox quota, in MB, for the specified user.</p>
   */
  MailboxQuota: number;

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
