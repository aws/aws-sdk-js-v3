import {_AttributeValue} from './_AttributeValue';

/**
 * GetItemInput shape
 */
export interface GetItemInput {
    /**
     * _TableName shape
     */
    TableName: string;
    
    /**
     * _Key shape
     */
    Key: {[key: string]: _AttributeValue}|Iterable<[string, _AttributeValue]>;
    
    /**
     * _AttributeNameList shape
     */
    AttributesToGet?: Array<string>|Iterable<string>;
    
    /**
     * _ConsistentRead shape
     */
    ConsistentRead?: boolean;
    
    /**
     * _ReturnConsumedCapacity shape
     */
    ReturnConsumedCapacity?: 'INDEXES'|'TOTAL'|'NONE'|string;
    
    /**
     * _ProjectionExpression shape
     */
    ProjectionExpression?: string;
    
    /**
     * _ExpressionAttributeNameMap shape
     */
    ExpressionAttributeNames?: {[key: string]: string}|Iterable<[string, string]>;
}