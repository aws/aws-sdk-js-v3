/**
 * <p>The attributes allowed or specified with a parameter object.</p>
 */
export interface _ParameterAttribute {
  /**
   * <p>The field identifier.</p>
   */
  key: string;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue: string;
}

export type _UnmarshalledParameterAttribute = _ParameterAttribute;
