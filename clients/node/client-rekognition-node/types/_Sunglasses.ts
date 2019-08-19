/**
 * <p>Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.</p>
 */
export interface _Sunglasses {
  /**
   * <p>Boolean value that indicates whether the face is wearing sunglasses or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledSunglasses = _Sunglasses;
