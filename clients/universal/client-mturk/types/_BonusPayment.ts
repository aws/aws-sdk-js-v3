/**
 * <p>An object representing a Bonus payment paid to a Worker.</p>
 */
export interface _BonusPayment {
  /**
   * <p>The ID of the Worker to whom the bonus was paid.</p>
   */
  WorkerId?: string;

  /**
   * <p>A string representing a currency amount.</p>
   */
  BonusAmount?: string;

  /**
   * <p>The ID of the assignment associated with this bonus payment.</p>
   */
  AssignmentId?: string;

  /**
   * <p>The Reason text given when the bonus was granted, if any.</p>
   */
  Reason?: string;

  /**
   * <p>The date and time of when the bonus was granted.</p>
   */
  GrantTime?: Date | string | number;
}

export interface _UnmarshalledBonusPayment extends _BonusPayment {
  /**
   * <p>The date and time of when the bonus was granted.</p>
   */
  GrantTime?: Date;
}
