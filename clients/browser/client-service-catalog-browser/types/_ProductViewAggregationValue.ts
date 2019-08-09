/**
 * <p>A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.</p>
 */
export interface _ProductViewAggregationValue {
  /**
   * <p>The value of the product view aggregation.</p>
   */
  Value?: string;

  /**
   * <p>An approximate count of the products that match the value.</p>
   */
  ApproximateCount?: number;
}

export type _UnmarshalledProductViewAggregationValue = _ProductViewAggregationValue;
