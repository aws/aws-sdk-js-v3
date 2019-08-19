/**
 * <p>A key-value pair that describes a property of a pipeline object. The value is specified as either a string value (<code>StringValue</code>) or a reference to another object (<code>RefValue</code>) but not as both.</p>
 */
export interface _Field {
  /**
   * <p>The field identifier.</p>
   */
  key: string;

  /**
   * <p>The field value, expressed as a String.</p>
   */
  stringValue?: string;

  /**
   * <p>The field value, expressed as the identifier of another object.</p>
   */
  refValue?: string;
}

export type _UnmarshalledField = _Field;
