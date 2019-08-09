/**
 * <p>Describes a Region.</p>
 */
export interface _Region {
  /**
   * <p>The Region service endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The Region opt-in status. The possible values are <code>opt-in-not-required</code>, <code>opted-in</code>, and <code>not-opted-in</code>.</p>
   */
  OptInStatus?: string;
}

export type _UnmarshalledRegion = _Region;
