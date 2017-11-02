import {_WriteRequest} from './_WriteRequest';

/**
 * BatchWriteItemInput shape
 */
export interface BatchWriteItemInput {
    /**
     * _BatchWriteItemRequestMap shape
     */
    RequestItems: {[key: string]: Array<_WriteRequest>|Iterable<_WriteRequest>}|Iterable<[string, Array<_WriteRequest>|Iterable<_WriteRequest>]>;
    
    /**
     * _ReturnConsumedCapacity shape
     */
    ReturnConsumedCapacity?: 'INDEXES'|'TOTAL'|'NONE'|string;
    
    /**
     * _ReturnItemCollectionMetrics shape
     */
    ReturnItemCollectionMetrics?: 'SIZE'|'NONE'|string;
}