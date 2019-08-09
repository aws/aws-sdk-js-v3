import { _InviteAction, _UnmarshalledInviteAction } from "./_InviteAction";
import { _RemoveAction, _UnmarshalledRemoveAction } from "./_RemoveAction";

/**
 * <p> The actions to carry out if a proposal is <code>APPROVED</code>. </p>
 */
export interface _ProposalActions {
  /**
   * <p> The actions to perform for an <code>APPROVED</code> proposal to invite an AWS account to create a member and join the network. </p>
   */
  Invitations?: Array<_InviteAction> | Iterable<_InviteAction>;

  /**
   * <p> The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network. </p>
   */
  Removals?: Array<_RemoveAction> | Iterable<_RemoveAction>;
}

export interface _UnmarshalledProposalActions extends _ProposalActions {
  /**
   * <p> The actions to perform for an <code>APPROVED</code> proposal to invite an AWS account to create a member and join the network. </p>
   */
  Invitations?: Array<_UnmarshalledInviteAction>;

  /**
   * <p> The actions to perform for an <code>APPROVED</code> proposal to remove a member from the network, which deletes the member and all associated member resources from the network. </p>
   */
  Removals?: Array<_UnmarshalledRemoveAction>;
}
