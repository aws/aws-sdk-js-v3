import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _KeysAndAttributes shape
 */
export interface _KeysAndAttributes {
    /**
     * _KeyList shape
     */
    Keys: Array<{[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>>|Iterable<{[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>>;
    
    /**
     * _AttributeNameList shape
     */
    AttributesToGet?: Array<string>|Iterable<string>;
    
    /**
     * _ConsistentRead shape
     */
    ConsistentRead?: boolean;
    
    /**
     * _ProjectionExpression shape
     */
    ProjectionExpression?: string;
    
    /**
     * _ExpressionAttributeNameMap shape
     */
    ExpressionAttributeNames?: {[key: string]: string}|Iterable<[string, string]>;
}

export interface _UnmarshalledKeysAndAttributes extends _KeysAndAttributes {
    /**
     * _KeyList shape
     */
    Keys: Array<{[key: string]: _UnmarshalledAttributeValue}>;
    
    /**
     * _AttributeNameList shape
     */
    AttributesToGet?: Array<string>;
    
    /**
     * _ExpressionAttributeNameMap shape
     */
    ExpressionAttributeNames?: {[key: string]: string};
}