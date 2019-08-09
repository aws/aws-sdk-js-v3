import {
  _QueueReference,
  _UnmarshalledQueueReference
} from "./_QueueReference";

/**
 * <p>A <code>Dimensions</code> object that includes the Channel and Queue for the metric.</p>
 */
export interface _Dimensions {
  /**
   * <p>A <code>QueueReference</code> object used as one part of dimension for the metrics results.</p>
   */
  Queue?: _QueueReference;

  /**
   * <p>The channel used for grouping and filters. Only VOICE is supported.</p>
   */
  Channel?: "VOICE" | string;
}

export interface _UnmarshalledDimensions extends _Dimensions {
  /**
   * <p>A <code>QueueReference</code> object used as one part of dimension for the metrics results.</p>
   */
  Queue?: _UnmarshalledQueueReference;
}
