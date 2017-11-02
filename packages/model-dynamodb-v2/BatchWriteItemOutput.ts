import {_UnmarshalledWriteRequest} from './_WriteRequest';
import {_UnmarshalledItemCollectionMetrics} from './_ItemCollectionMetrics';
import {_UnmarshalledConsumedCapacity} from './_ConsumedCapacity';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * BatchWriteItemOutput shape
 */
export interface BatchWriteItemOutput {
    /**
     * _BatchWriteItemRequestMap shape
     */
    UnprocessedItems?: {[key: string]: Array<_UnmarshalledWriteRequest>};
    
    /**
     * _ItemCollectionMetricsPerTable shape
     */
    ItemCollectionMetrics?: {[key: string]: Array<_UnmarshalledItemCollectionMetrics>};
    
    /**
     * _ConsumedCapacityMultiple shape
     */
    ConsumedCapacity?: Array<_UnmarshalledConsumedCapacity>;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}