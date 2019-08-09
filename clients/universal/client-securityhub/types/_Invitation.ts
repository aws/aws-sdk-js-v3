/**
 * <p>Details about an invitation.</p>
 */
export interface _Invitation {
  /**
   * <p>The account ID of the Security Hub master account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date | string | number;

  /**
   * <p>The current status of the association between member and master accounts.</p>
   */
  MemberStatus?: string;
}

export interface _UnmarshalledInvitation extends _Invitation {
  /**
   * <p>The timestamp of when the invitation was sent.</p>
   */
  InvitedAt?: Date;
}
