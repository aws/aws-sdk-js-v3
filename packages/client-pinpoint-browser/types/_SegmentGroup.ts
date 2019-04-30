import {
  _SegmentDimensions,
  _UnmarshalledSegmentDimensions
} from "./_SegmentDimensions";
import {
  _SegmentReference,
  _UnmarshalledSegmentReference
} from "./_SegmentReference";

/**
 * Segment group definition.
 */
export interface _SegmentGroup {
  /**
   * List of dimensions to include or exclude.
   */
  Dimensions?: Array<_SegmentDimensions> | Iterable<_SegmentDimensions>;

  /**
   * The base segment that you build your segment on. The source segment defines the starting "universe" of endpoints. When you add dimensions to the segment, it filters the source segment based on the dimensions that you specify. You can specify more than one dimensional segment. You can only specify one imported segment.
   *
   * NOTE: If you specify an imported segment for this attribute, the segment size estimate that appears in the Amazon Pinpoint console shows the size of the imported segment, without any filters applied to it.
   */
  SourceSegments?: Array<_SegmentReference> | Iterable<_SegmentReference>;

  /**
   * Specify how to handle multiple source segments. For example, if you specify three source segments, should the resulting segment be based on any or all of the segments? Acceptable values: ANY or ALL.
   */
  SourceType?: "ALL" | "ANY" | "NONE" | string;

  /**
   * Specify how to handle multiple segment dimensions. For example, if you specify three dimensions, should the resulting segment include endpoints that are matched by all, any, or none of the dimensions? Acceptable values: ALL, ANY, or NONE.
   */
  Type?: "ALL" | "ANY" | "NONE" | string;
}

export interface _UnmarshalledSegmentGroup extends _SegmentGroup {
  /**
   * List of dimensions to include or exclude.
   */
  Dimensions?: Array<_UnmarshalledSegmentDimensions>;

  /**
   * The base segment that you build your segment on. The source segment defines the starting "universe" of endpoints. When you add dimensions to the segment, it filters the source segment based on the dimensions that you specify. You can specify more than one dimensional segment. You can only specify one imported segment.
   *
   * NOTE: If you specify an imported segment for this attribute, the segment size estimate that appears in the Amazon Pinpoint console shows the size of the imported segment, without any filters applied to it.
   */
  SourceSegments?: Array<_UnmarshalledSegmentReference>;
}
