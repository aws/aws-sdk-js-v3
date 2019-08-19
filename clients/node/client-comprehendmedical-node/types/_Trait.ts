/**
 * <p> Provides contextual information about the extracted entity. </p>
 */
export interface _Trait {
  /**
   * <p> Provides a name or contextual description about the trait. </p>
   */
  Name?: "SIGN" | "SYMPTOM" | "DIAGNOSIS" | "NEGATION" | string;

  /**
   * <p> The level of confidence that Comprehend Medical has in the accuracy of this trait.</p>
   */
  Score?: number;
}

export type _UnmarshalledTrait = _Trait;
