/**
 * <p>Indicates whether or not the face has a mustache, and the confidence level in the determination.</p>
 */
export interface _Mustache {
  /**
   * <p>Boolean value that indicates whether the face has mustache or not.</p>
   */
  Value?: boolean;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledMustache = _Mustache;
