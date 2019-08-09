/**
 * _Invitation shape
 */
export interface _Invitation {
  /**
   * <p>Inviter account ID</p>
   */
  AccountId?: string;

  /**
   * <p>This value is used to validate the inviter account to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * <p>Timestamp at which the invitation was sent</p>
   */
  InvitedAt?: string;
}

export type _UnmarshalledInvitation = _Invitation;
