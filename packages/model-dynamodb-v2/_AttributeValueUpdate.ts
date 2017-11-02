import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _AttributeValueUpdate shape
 */
export interface _AttributeValueUpdate {
    /**
     * _AttributeValue shape
     */
    Value?: _AttributeValue;
    
    /**
     * _AttributeAction shape
     */
    Action?: 'ADD'|'PUT'|'DELETE'|string;
}

export interface _UnmarshalledAttributeValueUpdate extends _AttributeValueUpdate {
    /**
     * _AttributeValue shape
     */
    Value?: _UnmarshalledAttributeValue;
}