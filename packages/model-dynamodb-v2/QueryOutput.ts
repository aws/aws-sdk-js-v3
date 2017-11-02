import {_UnmarshalledAttributeValue} from './_AttributeValue';
import {_UnmarshalledConsumedCapacity} from './_ConsumedCapacity';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * QueryOutput shape
 */
export interface QueryOutput {
    /**
     * _ItemList shape
     */
    Items?: Array<{[key: string]: _UnmarshalledAttributeValue}>;
    
    /**
     * _Integer shape
     */
    Count?: number;
    
    /**
     * _Integer shape
     */
    ScannedCount?: number;
    
    /**
     * _Key shape
     */
    LastEvaluatedKey?: {[key: string]: _UnmarshalledAttributeValue};
    
    /**
     * _ConsumedCapacity shape
     */
    ConsumedCapacity?: _UnmarshalledConsumedCapacity;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}