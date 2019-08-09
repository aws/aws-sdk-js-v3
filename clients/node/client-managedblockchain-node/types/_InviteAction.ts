/**
 * <p>An action to invite a specific AWS account to create a member and join the network. The <code>InviteAction</code> is carried out when a <code>Proposal</code> is <code>APPROVED</code>.</p>
 */
export interface _InviteAction {
  /**
   * <p>The AWS account ID to invite.</p>
   */
  Principal: string;
}

export type _UnmarshalledInviteAction = _InviteAction;
