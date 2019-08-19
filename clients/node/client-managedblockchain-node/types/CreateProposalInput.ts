import { _ProposalActions } from "./_ProposalActions";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProposalInput shape
 */
export interface CreateProposalInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken: string;

  /**
   * <p> The unique identifier of the network for which the proposal is made.</p>
   */
  NetworkId: string;

  /**
   * <p>The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.</p>
   */
  MemberId: string;

  /**
   * <p>The type of actions proposed, such as inviting a member or removing a member. The types of <code>Actions</code> in a proposal are mutually exclusive. For example, a proposal with <code>Invitations</code> actions cannot also contain <code>Removals</code> actions.</p>
   */
  Actions: _ProposalActions;

  /**
   * <p>A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."</p>
   */
  Description?: string;

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
