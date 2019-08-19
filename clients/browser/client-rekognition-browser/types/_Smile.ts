/**
 * <p>Indicates whether or not the face is smiling, and the confidence level in the determination.</p>
 */
export interface _Smile {
  /**
   * <p>Boolean value that indicates whether the face is smiling or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledSmile = _Smile;
