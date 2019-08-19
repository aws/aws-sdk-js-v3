import {
  _SegmentDimensions,
  _UnmarshalledSegmentDimensions
} from "./_SegmentDimensions";
import {
  _SegmentGroupList,
  _UnmarshalledSegmentGroupList
} from "./_SegmentGroupList";

/**
 * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
 */
export interface _WriteSegmentRequest {
  /**
   * <p>The criteria that define the dimensions for the segment.</p>
   */
  Dimensions?: _SegmentDimensions;

  /**
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * <p>The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.</p>
   */
  SegmentGroups?: _SegmentGroupList;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledWriteSegmentRequest extends _WriteSegmentRequest {
  /**
   * <p>The criteria that define the dimensions for the segment.</p>
   */
  Dimensions?: _UnmarshalledSegmentDimensions;

  /**
   * <p>The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.</p>
   */
  SegmentGroups?: _UnmarshalledSegmentGroupList;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}
