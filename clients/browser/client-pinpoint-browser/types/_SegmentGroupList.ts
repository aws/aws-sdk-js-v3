import { _SegmentGroup, _UnmarshalledSegmentGroup } from "./_SegmentGroup";

/**
 * <p>Specifies the settings that define the relationships between segment groups for a segment.</p>
 */
export interface _SegmentGroupList {
  /**
   * <p>An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.</p>
   */
  Groups?: Array<_SegmentGroup> | Iterable<_SegmentGroup>;

  /**
   * <p>Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.</p>
   */
  Include?: "ALL" | "ANY" | "NONE" | string;
}

export interface _UnmarshalledSegmentGroupList extends _SegmentGroupList {
  /**
   * <p>An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.</p>
   */
  Groups?: Array<_UnmarshalledSegmentGroup>;
}
