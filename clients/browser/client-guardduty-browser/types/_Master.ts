/**
 * _Master shape
 */
export interface _Master {
  /**
   * <p>Master account ID</p>
   */
  AccountId?: string;

  /**
   * <p>This value is used to validate the master account to the member account.</p>
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the master and member accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * <p>Timestamp at which the invitation was sent</p>
   */
  InvitedAt?: string;
}

export type _UnmarshalledMaster = _Master;
