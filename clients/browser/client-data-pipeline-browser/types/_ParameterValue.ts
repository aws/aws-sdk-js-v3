/**
 * <p>A value or list of parameter values. </p>
 */
export interface _ParameterValue {
  /**
   * <p>The ID of the parameter value.</p>
   */
  id: string;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue: string;
}

export type _UnmarshalledParameterValue = _ParameterValue;
