import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutMailboxPermissionsInput shape
 */
export interface PutMailboxPermissionsInput {
  /**
   * <p>The identifier of the organization under which the user, group, or resource exists.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier of the user, group, or resource for which to update mailbox permissions.</p>
   */
  EntityId: string;

  /**
   * <p>The identifier of the user, group, or resource to which to grant the permissions.</p>
   */
  GranteeId: string;

  /**
   * <p>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</p>
   */
  PermissionValues:
    | Array<"FULL_ACCESS" | "SEND_AS" | "SEND_ON_BEHALF" | string>
    | Iterable<"FULL_ACCESS" | "SEND_AS" | "SEND_ON_BEHALF" | string>;

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
