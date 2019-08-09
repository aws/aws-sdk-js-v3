/**
 * <p>Indicates whether or not the eyes on the face are open, and the confidence level in the determination.</p>
 */
export interface _EyeOpen {
  /**
   * <p>Boolean value that indicates whether the eyes on the face are open.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledEyeOpen = _EyeOpen;
