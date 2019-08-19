/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing multiple requests to be executed in parallel.</p>
 */
export interface _Segment {
  /**
   * <p>The zero-based index number of the this segment. For example, if the total number of segments is 4, SegmentNumber values will range from zero through three.</p>
   */
  SegmentNumber: number;

  /**
   * <p>The total numer of segments.</p>
   */
  TotalSegments: number;
}

export type _UnmarshalledSegment = _Segment;
