/**
 * <p>A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.</p>
 */
export interface _StatusCodes {
  /**
   * <p>The number of status codes.</p>
   */
  Quantity: number;

  /**
   * <p>The items (status codes) for an origin group.</p>
   */
  Items: Array<number> | Iterable<number>;
}

export interface _UnmarshalledStatusCodes extends _StatusCodes {
  /**
   * <p>The items (status codes) for an origin group.</p>
   */
  Items: Array<number>;
}
