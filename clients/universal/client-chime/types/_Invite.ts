/**
 * <p>Invitation object returned after emailing users to invite them to join the Amazon Chime <code>Team</code> account.</p>
 */
export interface _Invite {
  /**
   * <p>The invite ID.</p>
   */
  InviteId?: string;

  /**
   * <p>The status of the invite.</p>
   */
  Status?: "Pending" | "Accepted" | "Failed" | string;

  /**
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: "NotSent" | "Sent" | "Failed" | string;
}

export type _UnmarshalledInvite = _Invite;
