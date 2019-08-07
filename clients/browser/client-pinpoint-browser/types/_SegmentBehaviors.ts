import {
  _RecencyDimension,
  _UnmarshalledRecencyDimension
} from "./_RecencyDimension";

/**
 * Segment behavior dimensions
 */
export interface _SegmentBehaviors {
  /**
   * The recency of use.
   */
  Recency?: _RecencyDimension;
}

export interface _UnmarshalledSegmentBehaviors extends _SegmentBehaviors {
  /**
   * The recency of use.
   */
  Recency?: _UnmarshalledRecencyDimension;
}
