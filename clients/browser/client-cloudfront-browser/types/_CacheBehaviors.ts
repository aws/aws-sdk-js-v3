import { _CacheBehavior, _UnmarshalledCacheBehavior } from "./_CacheBehavior";

/**
 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements. </p>
 */
export interface _CacheBehaviors {
  /**
   * <p>The number of cache behaviors for this distribution. </p>
   */
  Quantity: number;

  /**
   * <p>Optional: A complex type that contains cache behaviors for this distribution. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: Array<_CacheBehavior> | Iterable<_CacheBehavior>;
}

export interface _UnmarshalledCacheBehaviors extends _CacheBehaviors {
  /**
   * <p>Optional: A complex type that contains cache behaviors for this distribution. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: Array<_UnmarshalledCacheBehavior>;
}
