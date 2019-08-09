/**
 * <p>The timeline of the instance lifecycle.</p>
 */
export interface _InstanceTimeline {
  /**
   * <p>The creation date and time of the instance.</p>
   */
  CreationDateTime?: Date | string | number;

  /**
   * <p>The date and time when the instance was ready to perform tasks.</p>
   */
  ReadyDateTime?: Date | string | number;

  /**
   * <p>The date and time when the instance was terminated.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledInstanceTimeline extends _InstanceTimeline {
  /**
   * <p>The creation date and time of the instance.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the instance was ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date and time when the instance was terminated.</p>
   */
  EndDateTime?: Date;
}
