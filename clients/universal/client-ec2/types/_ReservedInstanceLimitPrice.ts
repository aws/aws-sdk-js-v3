/**
 * <p>Describes the limit price of a Reserved Instance offering.</p>
 */
export interface _ReservedInstanceLimitPrice {
  /**
   * <p>Used for Reserved Instance Marketplace offerings. Specifies the limit price on the total order (instanceCount * price).</p>
   */
  Amount?: number;

  /**
   * <p>The currency in which the <code>limitPrice</code> amount is specified. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;
}

export type _UnmarshalledReservedInstanceLimitPrice = _ReservedInstanceLimitPrice;
