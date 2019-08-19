/**
 * <p>Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 */
export interface _RecencyDimension {
  /**
   * <p>The duration to use when determining whether an endpoint is active or inactive.</p>
   */
  Duration: "HR_24" | "DAY_7" | "DAY_14" | "DAY_30" | string;

  /**
   * <p>The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.</p>
   */
  RecencyType: "ACTIVE" | "INACTIVE" | string;
}

export type _UnmarshalledRecencyDimension = _RecencyDimension;
