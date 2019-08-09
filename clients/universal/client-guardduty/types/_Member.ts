/**
 * _Member shape
 */
export interface _Member {
  /**
   * <p>Member account ID.</p>
   */
  AccountId: string;

  /**
   * <p>Member account's detector ID.</p>
   */
  DetectorId?: string;

  /**
   * <p>Master account ID.</p>
   */
  MasterId: string;

  /**
   * <p>Member account's email address.</p>
   */
  Email: string;

  /**
   * <p>The status of the relationship between the member and the master.</p>
   */
  RelationshipStatus: string;

  /**
   * <p>Timestamp at which the invitation was sent</p>
   */
  InvitedAt?: string;

  /**
   * <p>Member last updated timestamp.</p>
   */
  UpdatedAt: string;
}

export type _UnmarshalledMember = _Member;
