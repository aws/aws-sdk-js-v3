import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteMailboxPermissionsInput shape
 */
export interface DeleteMailboxPermissionsInput {
  /**
   * <p>The identifier of the organization under which the member (user or group) exists.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier of the member (user or group)that owns the mailbox.</p>
   */
  EntityId: string;

  /**
   * <p>The identifier of the member (user or group) for which to delete granted permissions.</p>
   */
  GranteeId: string;

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
