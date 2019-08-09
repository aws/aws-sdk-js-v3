/**
 * <p>The details about a member account.</p>
 */
export interface _Member {
  /**
   * <p>The AWS account ID of the member account.</p>
   */
  AccountId?: string;

  /**
   * <p>The email address of the member account.</p>
   */
  Email?: string;

  /**
   * <p>The AWS account ID of the Security Hub master account associated with this member account.</p>
   */
  MasterId?: string;

  /**
   * <p>The status of the relationship between the member account and its master account. </p>
   */
  MemberStatus?: string;

  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member account.</p>
   */
  InvitedAt?: Date | string | number;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date | string | number;
}

export interface _UnmarshalledMember extends _Member {
  /**
   * <p>A timestamp for the date and time when the invitation was sent to the member account.</p>
   */
  InvitedAt?: Date;

  /**
   * <p>The timestamp for the date and time when the member account was updated.</p>
   */
  UpdatedAt?: Date;
}
