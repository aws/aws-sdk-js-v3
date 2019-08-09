/**
 * <p>Describes the price for a Reserved Instance.</p>
 */
export interface _PriceScheduleSpecification {
  /**
   * <p>The currency for transacting the Reserved Instance resale. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>The fixed price for the term.</p>
   */
  Price?: number;

  /**
   * <p>The number of months remaining in the reservation. For example, 2 is the second to the last month before the capacity reservation expires.</p>
   */
  Term?: number;
}

export type _UnmarshalledPriceScheduleSpecification = _PriceScheduleSpecification;
