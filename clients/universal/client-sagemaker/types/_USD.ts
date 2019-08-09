/**
 * <p>Represents an amount of money in United States dollars/</p>
 */
export interface _USD {
  /**
   * <p>The whole number of dollars in the amount.</p>
   */
  Dollars?: number;

  /**
   * <p>The fractional portion, in cents, of the amount. </p>
   */
  Cents?: number;

  /**
   * <p>Fractions of a cent, in tenths.</p>
   */
  TenthFractionsOfACent?: number;
}

export type _UnmarshalledUSD = _USD;
