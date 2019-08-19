/**
 * <p>Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.</p>
 */
export interface _Event {
  /**
   * <p>The identifier for the source of the event. For example, if the event occurred at the cluster level, the identifier would be the name of the cluster.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the origin of this event - a cluster, a parameter group, a security group, etc.</p>
   */
  SourceType?:
    | "cache-cluster"
    | "cache-parameter-group"
    | "cache-security-group"
    | "cache-subnet-group"
    | "replication-group"
    | string;

  /**
   * <p>The text of the event.</p>
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
