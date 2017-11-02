import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _PutRequest shape
 */
export interface _PutRequest {
    /**
     * _PutItemInputAttributeMap shape
     */
    Item: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
}

export interface _UnmarshalledPutRequest extends _PutRequest {
    /**
     * _PutItemInputAttributeMap shape
     */
    Item: {[key: string]: _UnmarshalledAttributeValue};
}