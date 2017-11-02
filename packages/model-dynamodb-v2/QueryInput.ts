import {_Condition} from './_Condition';
import {_AttributeValue} from './_AttributeValue';

/**
 * QueryInput shape
 */
export interface QueryInput {
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _IndexName shape
     */
    IndexName?: string;
    
    /**
     * _Select shape
     */
    Select?: 'ALL_ATTRIBUTES'|'ALL_PROJECTED_ATTRIBUTES'|'SPECIFIC_ATTRIBUTES'|'COUNT'|string;
    
    /**
     * _AttributeNameList shape
     */
    AttributesToGet?: Array<string>|Iterable<string>;
    
    /**
     * _PositiveIntegerObject shape
     */
    Limit?: number;
    
    /**
     * _ConsistentRead shape
     */
    ConsistentRead?: boolean;
    
    /**
     * _KeyConditions shape
     */
    KeyConditions?: {[key: string]: _Condition}|Iterable<[string, _Condition]>;
    
    /**
     * _FilterConditionMap shape
     */
    QueryFilter?: {[key: string]: _Condition}|Iterable<[string, _Condition]>;
    
    /**
     * _ConditionalOperator shape
     */
    ConditionalOperator?: 'AND'|'OR'|string;
    
    /**
     * _BooleanObject shape
     */
    ScanIndexForward?: boolean;
    
    /**
     * _Key shape
     */
    ExclusiveStartKey?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _ReturnConsumedCapacity shape
     */
    ReturnConsumedCapacity?: 'INDEXES'|'TOTAL'|'NONE'|string;
    
    /**
     * _ProjectionExpression shape
     */
    ProjectionExpression?: string;
    
    /**
     * _ConditionExpression shape
     */
    FilterExpression?: string;
    
    /**
     * _KeyExpression shape
     */
    KeyConditionExpression?: string;
    
    /**
     * _ExpressionAttributeNameMap shape
     */
    ExpressionAttributeNames?: {[key: string]: string}|Iterable<[string, string]>;
    
    /**
     * _ExpressionAttributeValueMap shape
     */
    ExpressionAttributeValues?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
}