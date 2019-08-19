import {
  _SegmentDimensions,
  _UnmarshalledSegmentDimensions
} from "./_SegmentDimensions";
import {
  _SegmentReference,
  _UnmarshalledSegmentReference
} from "./_SegmentReference";

/**
 * <p>Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.</p>
 */
export interface _SegmentGroup {
  /**
   * <p>An array that defines the dimensions for the segment.</p>
   */
  Dimensions?: Array<_SegmentDimensions> | Iterable<_SegmentDimensions>;

  /**
   * <p>The base segment to build the segment on. A base segment, also referred to as a <i>source segment</i>, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.</p> <p>You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.</p>
   */
  SourceSegments?: Array<_SegmentReference> | Iterable<_SegmentReference>;

  /**
   * <p>Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.</p>
   */
  SourceType?: "ALL" | "ANY" | "NONE" | string;

  /**
   * <p>Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.</p>
   */
  Type?: "ALL" | "ANY" | "NONE" | string;
}

export interface _UnmarshalledSegmentGroup extends _SegmentGroup {
  /**
   * <p>An array that defines the dimensions for the segment.</p>
   */
  Dimensions?: Array<_UnmarshalledSegmentDimensions>;

  /**
   * <p>The base segment to build the segment on. A base segment, also referred to as a <i>source segment</i>, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.</p> <p>You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.</p>
   */
  SourceSegments?: Array<_UnmarshalledSegmentReference>;
}
