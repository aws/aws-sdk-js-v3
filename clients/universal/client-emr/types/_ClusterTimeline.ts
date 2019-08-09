/**
 * <p>Represents the timeline of the cluster's lifecycle.</p>
 */
export interface _ClusterTimeline {
  /**
   * <p>The creation date and time of the cluster.</p>
   */
  CreationDateTime?: Date | string | number;

  /**
   * <p>The date and time when the cluster was ready to execute steps.</p>
   */
  ReadyDateTime?: Date | string | number;

  /**
   * <p>The date and time when the cluster was terminated.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledClusterTimeline extends _ClusterTimeline {
  /**
   * <p>The creation date and time of the cluster.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the cluster was ready to execute steps.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date and time when the cluster was terminated.</p>
   */
  EndDateTime?: Date;
}
