import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _ExpectedAttributeValue shape
 */
export interface _ExpectedAttributeValue {
    /**
     * _AttributeValue shape
     */
    Value?: _AttributeValue;
    
    /**
     * _BooleanObject shape
     */
    Exists?: boolean;
    
    /**
     * _ComparisonOperator shape
     */
    ComparisonOperator?: 'EQ'|'NE'|'IN'|'LE'|'LT'|'GE'|'GT'|'BETWEEN'|'NOT_NULL'|'NULL'|'CONTAINS'|'NOT_CONTAINS'|'BEGINS_WITH'|string;
    
    /**
     * _AttributeValueList shape
     */
    AttributeValueList?: Array<_AttributeValue>|Iterable<_AttributeValue>;
}

export interface _UnmarshalledExpectedAttributeValue extends _ExpectedAttributeValue {
    /**
     * _AttributeValue shape
     */
    Value?: _UnmarshalledAttributeValue;
    
    /**
     * _AttributeValueList shape
     */
    AttributeValueList?: Array<_UnmarshalledAttributeValue>;
}