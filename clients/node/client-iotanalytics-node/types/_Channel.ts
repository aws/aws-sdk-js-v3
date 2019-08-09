import {
  _ChannelStorage,
  _UnmarshalledChannelStorage
} from "./_ChannelStorage";
import {
  _RetentionPeriod,
  _UnmarshalledRetentionPeriod
} from "./_RetentionPeriod";

/**
 * <p>A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline.</p>
 */
export interface _Channel {
  /**
   * <p>The name of the channel.</p>
   */
  name?: string;

  /**
   * <p>Where channel data is stored.</p>
   */
  storage?: _ChannelStorage;

  /**
   * <p>The ARN of the channel.</p>
   */
  arn?: string;

  /**
   * <p>The status of the channel.</p>
   */
  status?: "CREATING" | "ACTIVE" | "DELETING" | string;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: _RetentionPeriod;

  /**
   * <p>When the channel was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>When the channel was last updated.</p>
   */
  lastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledChannel extends _Channel {
  /**
   * <p>Where channel data is stored.</p>
   */
  storage?: _UnmarshalledChannelStorage;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: _UnmarshalledRetentionPeriod;

  /**
   * <p>When the channel was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the channel was last updated.</p>
   */
  lastUpdateTime?: Date;
}
