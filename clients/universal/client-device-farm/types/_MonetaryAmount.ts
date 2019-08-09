/**
 * <p>A number representing the monetary amount for an offering or transaction.</p>
 */
export interface _MonetaryAmount {
  /**
   * <p>The numerical amount of an offering or transaction.</p>
   */
  amount?: number;

  /**
   * <p>The currency code of a monetary amount. For example, <code>USD</code> means "U.S. dollars."</p>
   */
  currencyCode?: "USD" | string;
}

export type _UnmarshalledMonetaryAmount = _MonetaryAmount;
