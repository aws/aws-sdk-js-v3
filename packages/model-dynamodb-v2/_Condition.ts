import {_AttributeValue, _UnmarshalledAttributeValue} from './_AttributeValue';

/**
 * _Condition shape
 */
export interface _Condition {
    /**
     * _AttributeValueList shape
     */
    AttributeValueList?: Array<_AttributeValue>|Iterable<_AttributeValue>;
    
    /**
     * _ComparisonOperator shape
     */
    ComparisonOperator: 'EQ'|'NE'|'IN'|'LE'|'LT'|'GE'|'GT'|'BETWEEN'|'NOT_NULL'|'NULL'|'CONTAINS'|'NOT_CONTAINS'|'BEGINS_WITH'|string;
}

export interface _UnmarshalledCondition extends _Condition {
    /**
     * _AttributeValueList shape
     */
    AttributeValueList?: Array<_UnmarshalledAttributeValue>;
}