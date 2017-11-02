import {_UnmarshalledAttributeValue} from './_AttributeValue';
import {_UnmarshalledConsumedCapacity} from './_ConsumedCapacity';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * GetItemOutput shape
 */
export interface GetItemOutput {
    /**
     * _AttributeMap shape
     */
    Item?: {[key: string]: _UnmarshalledAttributeValue};
    
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