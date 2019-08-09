import {
  _RecencyDimension,
  _UnmarshalledRecencyDimension
} from "./_RecencyDimension";

/**
 * <p>Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 */
export interface _SegmentBehaviors {
  /**
   * <p>The dimension settings that are based on how recently an endpoint was active.</p>
   */
  Recency?: _RecencyDimension;
}

export interface _UnmarshalledSegmentBehaviors extends _SegmentBehaviors {
  /**
   * <p>The dimension settings that are based on how recently an endpoint was active.</p>
   */
  Recency?: _UnmarshalledRecencyDimension;
}
