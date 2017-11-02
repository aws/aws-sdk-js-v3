import {_KeysAndAttributes} from './_KeysAndAttributes';

/**
 * BatchGetItemInput shape
 */
export interface BatchGetItemInput {
    /**
     * _BatchGetRequestMap shape
     */
    RequestItems: {[key: string]: _KeysAndAttributes}|Iterable<[string, _KeysAndAttributes]>;
    
    /**
     * _ReturnConsumedCapacity shape
     */
    ReturnConsumedCapacity?: 'INDEXES'|'TOTAL'|'NONE'|string;
}