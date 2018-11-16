/**
 * _AnnotationValue shape
 */
export interface _AnnotationValue {
    /**
     * _NullableDouble shape
     */
    NumberValue?: number;

    /**
     * _NullableBoolean shape
     */
    BooleanValue?: boolean;

    /**
     * _String shape
     */
    StringValue?: string;
}

export type _UnmarshalledAnnotationValue = _AnnotationValue;