import {_Condition} from './_Condition';
import {_AttributeValue} from './_AttributeValue';

/**
 * ScanInput shape
 */
export interface ScanInput {
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _IndexName shape
     */
    IndexName?: string;
    
    /**
     * _AttributeNameList shape
     */
    AttributesToGet?: Array<string>|Iterable<string>;
    
    /**
     * _PositiveIntegerObject shape
     */
    Limit?: number;
    
    /**
     * _Select shape
     */
    Select?: 'ALL_ATTRIBUTES'|'ALL_PROJECTED_ATTRIBUTES'|'SPECIFIC_ATTRIBUTES'|'COUNT'|string;
    
    /**
     * _FilterConditionMap shape
     */
    ScanFilter?: {[key: string]: _Condition}|Iterable<[string, _Condition]>;
    
    /**
     * _ConditionalOperator shape
     */
    ConditionalOperator?: 'AND'|'OR'|string;
    
    /**
     * _Key shape
     */
    ExclusiveStartKey?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _ReturnConsumedCapacity shape
     */
    ReturnConsumedCapacity?: 'INDEXES'|'TOTAL'|'NONE'|string;
    
    /**
     * _ScanTotalSegments shape
     */
    TotalSegments?: number;
    
    /**
     * _ScanSegment shape
     */
    Segment?: number;
    
    /**
     * _ProjectionExpression shape
     */
    ProjectionExpression?: string;
    
    /**
     * _ConditionExpression shape
     */
    FilterExpression?: string;
    
    /**
     * _ExpressionAttributeNameMap shape
     */
    ExpressionAttributeNames?: {[key: string]: string}|Iterable<[string, string]>;
    
    /**
     * _ExpressionAttributeValueMap shape
     */
    ExpressionAttributeValues?: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _ConsistentRead shape
     */
    ConsistentRead?: boolean;
}