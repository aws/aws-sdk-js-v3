import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _DeleteRequest shape
 */
export interface _DeleteRequest {
    /**
     * _Key shape
     */
    Key: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
}

export interface _UnmarshalledDeleteRequest extends _DeleteRequest {
    /**
     * _Key shape
     */
    Key: {[key: string]: _UnmarshalledAttributeValue};
}