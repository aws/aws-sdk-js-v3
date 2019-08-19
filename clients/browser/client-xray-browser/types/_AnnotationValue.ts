/**
 * <p>Value of a segment annotation. Has one of three value types: Number, Boolean or String.</p>
 */
export interface _AnnotationValue {
  /**
   * <p>Value for a Number annotation.</p>
   */
  NumberValue?: number;

  /**
   * <p>Value for a Boolean annotation.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>Value for a String annotation.</p>
   */
  StringValue?: string;
}

export type _UnmarshalledAnnotationValue = _AnnotationValue;
