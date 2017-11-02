import {_AttributeValue} from './_AttributeValue';
import {_AttributeValueUpdate} from './_AttributeValueUpdate';
import {_ExpectedAttributeValue} from './_ExpectedAttributeValue';

/**
 * UpdateItemInput shape
 */
export interface UpdateItemInput {
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _Key shape
     */
    Key: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _AttributeUpdates shape
     */
    AttributeUpdates?: {[key: string]: _AttributeValueUpdate}|Iterable<[string, _AttributeValueUpdate]>;
    
    /**
     * _ExpectedAttributeMap shape
     */
    Expected?: {[key: string]: _ExpectedAttributeValue}|Iterable<[string, _ExpectedAttributeValue]>;
    
    /**
     * _ConditionalOperator shape
     */
    ConditionalOperator?: 'AND'|'OR'|string;
    
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
     * _UpdateExpression shape
     */
    UpdateExpression?: string;
    
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