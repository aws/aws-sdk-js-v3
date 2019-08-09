/**
 * <p>Indicates whether or not the mouth on the face is open, and the confidence level in the determination.</p>
 */
export interface _MouthOpen {
  /**
   * <p>Boolean value that indicates whether the mouth on the face is open or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledMouthOpen = _MouthOpen;
