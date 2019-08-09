import { _Origin, _UnmarshalledOrigin } from "./_Origin";

/**
 * <p>A complex type that contains information about origins and origin groups for this distribution. </p>
 */
export interface _Origins {
  /**
   * <p>The number of origins or origin groups for this distribution.</p>
   */
  Quantity: number;

  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   */
  Items: Array<_Origin> | Iterable<_Origin>;
}

export interface _UnmarshalledOrigins extends _Origins {
  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   */
  Items: Array<_UnmarshalledOrigin>;
}
