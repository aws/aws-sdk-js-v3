/**
 * <p>A custom key-value pair associated with an ML object, such as an ML model.</p>
 */
export interface _Tag {
    /**
     * <p>A unique identifier for the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.</p>
     */
    Key?: string;

    /**
     * <p>An optional string, typically used to describe or define the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.</p>
     */
    Value?: string;
}

export type _UnmarshalledTag = _Tag;