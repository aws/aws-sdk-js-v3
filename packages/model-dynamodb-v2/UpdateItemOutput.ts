import {_UnmarshalledAttributeValue} from './_AttributeValue';
import {_UnmarshalledConsumedCapacity} from './_ConsumedCapacity';
import {_UnmarshalledItemCollectionMetrics} from './_ItemCollectionMetrics';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * UpdateItemOutput shape
 */
export interface UpdateItemOutput {
    /**
     * _AttributeMap shape
     */
    Attributes?: {[key: string]: _UnmarshalledAttributeValue};
    
    /**
     * _ConsumedCapacity shape
     */
    ConsumedCapacity?: _UnmarshalledConsumedCapacity;
    
    /**
     * _ItemCollectionMetrics shape
     */
    ItemCollectionMetrics?: _UnmarshalledItemCollectionMetrics;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}