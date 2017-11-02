import {_AttributeValue} from './_AttributeValue';
import {_ExpectedAttributeValue} from './_ExpectedAttributeValue';

/**
 * PutItemInput shape
 */
export interface PutItemInput {
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _PutItemInputAttributeMap shape
     */
    Item: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _ExpectedAttributeMap shape
     */
    Expected?: {[key: string]: _ExpectedAttributeValue}|Iterable<[string, _ExpectedAttributeValue]>;
    
    /**
     * _ReturnValue shape
     */
    ReturnValues?: 'NONE'|'ALL_OLD'|'UPDATED_OLD'|'ALL_NEW'|'UPDATED_NEW'|string;
    
    /**
     * _ReturnConsumedCapacity shape
     */
    ReturnConsumedCapacity?: 'INDEXES'|'TOTAL'|'NONE'|string;
    
    /**
     * _ReturnItemCollectionMetrics shape
     */
    ReturnItemCollectionMetrics?: 'SIZE'|'NONE'|string;
    
    /**
     * _ConditionalOperator shape
     */
    ConditionalOperator?: 'AND'|'OR'|string;
    
    /**
     * _ConditionExpression shape
     */
    ConditionExpression?: string;
    
    /**
     * _ExpressionAttributeNameMap shape
     */
    ExpressionAttributeNames?: {[key: string]: string}|Iterable<[string, string]>;
    
    /**
     * _ExpressionAttributeValueMap shape
     */
    ExpressionAttributeValues?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
}