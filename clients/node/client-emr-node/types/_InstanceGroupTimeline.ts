/**
 * <p>The timeline of the instance group lifecycle.</p>
 */
export interface _InstanceGroupTimeline {
  /**
   * <p>The creation date and time of the instance group.</p>
   */
  CreationDateTime?: Date | string | number;

  /**
   * <p>The date and time when the instance group became ready to perform tasks.</p>
   */
  ReadyDateTime?: Date | string | number;

  /**
   * <p>The date and time when the instance group terminated.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledInstanceGroupTimeline
  extends _InstanceGroupTimeline {
  /**
   * <p>The creation date and time of the instance group.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the instance group became ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date and time when the instance group terminated.</p>
   */
  EndDateTime?: Date;
}
