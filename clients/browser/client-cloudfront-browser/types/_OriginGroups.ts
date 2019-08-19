import { _OriginGroup, _UnmarshalledOriginGroup } from "./_OriginGroup";

/**
 * <p>A complex data type for the origin groups specified for a distribution.</p>
 */
export interface _OriginGroups {
  /**
   * <p>The number of origin groups.</p>
   */
  Quantity: number;

  /**
   * <p>The items (origin groups) in a distribution.</p>
   */
  Items?: Array<_OriginGroup> | Iterable<_OriginGroup>;
}

export interface _UnmarshalledOriginGroups extends _OriginGroups {
  /**
   * <p>The items (origin groups) in a distribution.</p>
   */
  Items?: Array<_UnmarshalledOriginGroup>;
}
