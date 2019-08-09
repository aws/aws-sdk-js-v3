/**
 * <p>Describes a Spot Instance state change.</p>
 */
export interface _SpotInstanceStateFault {
  /**
   * <p>The reason code for the Spot Instance state change.</p>
   */
  Code?: string;

  /**
   * <p>The message for the Spot Instance state change.</p>
   */
  Message?: string;
}

export type _UnmarshalledSpotInstanceStateFault = _SpotInstanceStateFault;
