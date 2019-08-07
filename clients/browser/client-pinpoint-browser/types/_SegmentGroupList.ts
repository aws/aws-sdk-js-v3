import { _SegmentGroup, _UnmarshalledSegmentGroup } from "./_SegmentGroup";

/**
 * Segment group definition.
 */
export interface _SegmentGroupList {
  /**
   * A set of segment criteria to evaluate.
   */
  Groups?: Array<_SegmentGroup> | Iterable<_SegmentGroup>;

  /**
   * Specify how to handle multiple segment groups. For example, if the segment includes three segment groups, should the resulting segment include endpoints that are matched by all, any, or none of the segment groups you created. Acceptable values: ALL, ANY, or NONE.
   */
  Include?: "ALL" | "ANY" | "NONE" | string;
}

export interface _UnmarshalledSegmentGroupList extends _SegmentGroupList {
  /**
   * A set of segment criteria to evaluate.
   */
  Groups?: Array<_UnmarshalledSegmentGroup>;
}
