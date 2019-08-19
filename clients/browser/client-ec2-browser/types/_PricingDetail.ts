/**
 * <p>Describes a Reserved Instance offering.</p>
 */
export interface _PricingDetail {
  /**
   * <p>The number of reservations available for the price.</p>
   */
  Count?: number;

  /**
   * <p>The price per instance.</p>
   */
  Price?: number;
}

export type _UnmarshalledPricingDetail = _PricingDetail;
