/**
 * <p>Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node.</p>
 */
export interface _Event {
  /**
   * <p>The source of the event. For example, if the event occurred at the node level, the source would be the node ID.</p>
   */
  SourceName?: string;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a node ID, etc.</p>
   */
  SourceType?: "CLUSTER" | "PARAMETER_GROUP" | "SUBNET_GROUP" | string;

  /**
   * <p>A user-defined message associated with the event.</p>
   */
  Message?: string;

  /**
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date | string | number;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>The date and time when the event occurred.</p>
   */
  Date?: Date;
}
