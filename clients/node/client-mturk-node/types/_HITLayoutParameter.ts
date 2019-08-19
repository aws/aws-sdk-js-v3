/**
 * <p> The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. </p>
 */
export interface _HITLayoutParameter {
  /**
   * <p> The name of the parameter in the HITLayout. </p>
   */
  Name: string;

  /**
   * <p>The value substituted for the parameter referenced in the HITLayout. </p>
   */
  Value: string;
}

export type _UnmarshalledHITLayoutParameter = _HITLayoutParameter;
