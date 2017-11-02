/**
 * _AttributeValue shape
 */
export interface _AttributeValue {
    /**
     * _StringAttributeValue shape
     */
    S?: string;
    
    /**
     * _NumberAttributeValue shape
     */
    N?: string;
    
    /**
     * _BinaryAttributeValue shape
     */
    B?: ArrayBuffer|ArrayBufferView|string;
    
    /**
     * _StringSetAttributeValue shape
     */
    SS?: Array<string>|Iterable<string>;
    
    /**
     * _NumberSetAttributeValue shape
     */
    NS?: Array<string>|Iterable<string>;
    
    /**
     * _BinarySetAttributeValue shape
     */
    BS?: Array<ArrayBuffer|ArrayBufferView|string>|Iterable<ArrayBuffer|ArrayBufferView|string>;
    
    /**
     * _MapAttributeValue shape
     */
    M?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _ListAttributeValue shape
     */
    L?: Array<_AttributeValue>|Iterable<_AttributeValue>;
    
    /**
     * _NullAttributeValue shape
     */
    NULL?: boolean;
    
    /**
     * _BooleanAttributeValue shape
     */
    BOOL?: boolean;
}

export interface _UnmarshalledAttributeValue extends _AttributeValue {
    /**
     * _BinaryAttributeValue shape
     */
    B?: Uint8Array;
    
    /**
     * _StringSetAttributeValue shape
     */
    SS?: Array<string>;
    
    /**
     * _NumberSetAttributeValue shape
     */
    NS?: Array<string>;
    
    /**
     * _BinarySetAttributeValue shape
     */
    BS?: Array<Uint8Array>;
    
    /**
     * _MapAttributeValue shape
     */
    M?: {[key: string]: _UnmarshalledAttributeValue};
    
    /**
     * _ListAttributeValue shape
     */
    L?: Array<_UnmarshalledAttributeValue>;
}