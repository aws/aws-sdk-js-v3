/**
 * <p>Indicates whether or not the face has a beard, and the confidence level in the determination.</p>
 */
export interface _Beard {
  /**
   * <p>Boolean value that indicates whether the face has beard or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledBeard = _Beard;
