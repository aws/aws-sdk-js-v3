/**
 * <p>Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleetTimeline {
  /**
   * <p>The time and date the instance fleet was created.</p>
   */
  CreationDateTime?: Date | string | number;

  /**
   * <p>The time and date the instance fleet was ready to run jobs.</p>
   */
  ReadyDateTime?: Date | string | number;

  /**
   * <p>The time and date the instance fleet terminated.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledInstanceFleetTimeline
  extends _InstanceFleetTimeline {
  /**
   * <p>The time and date the instance fleet was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The time and date the instance fleet was ready to run jobs.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The time and date the instance fleet terminated.</p>
   */
  EndDateTime?: Date;
}
