/**
 * <p>Gender of the face and the confidence level in the determination.</p>
 */
export interface _Gender {
  /**
   * <p>Gender of the face.</p>
   */
  Value?: "Male" | "Female" | string;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledGender = _Gender;
