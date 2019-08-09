/**
 * <p>Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.</p>
 */
export interface _Eyeglasses {
  /**
   * <p>Boolean value that indicates whether the face is wearing eye glasses or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledEyeglasses = _Eyeglasses;
