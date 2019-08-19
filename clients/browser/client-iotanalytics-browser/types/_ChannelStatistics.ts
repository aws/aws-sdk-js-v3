import {
  _EstimatedResourceSize,
  _UnmarshalledEstimatedResourceSize
} from "./_EstimatedResourceSize";

/**
 * <p>Statistics information about the channel.</p>
 */
export interface _ChannelStatistics {
  /**
   * <p>The estimated size of the channel.</p>
   */
  size?: _EstimatedResourceSize;
}

export interface _UnmarshalledChannelStatistics extends _ChannelStatistics {
  /**
   * <p>The estimated size of the channel.</p>
   */
  size?: _UnmarshalledEstimatedResourceSize;
}
