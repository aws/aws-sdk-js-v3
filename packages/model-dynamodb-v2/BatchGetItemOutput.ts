import {_UnmarshalledAttributeValue} from './_AttributeValue';
import {_UnmarshalledKeysAndAttributes} from './_KeysAndAttributes';
import {_UnmarshalledConsumedCapacity} from './_ConsumedCapacity';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * BatchGetItemOutput shape
 */
export interface BatchGetItemOutput {
    /**
     * _BatchGetResponseMap shape
     */
    Responses?: {[key: string]: Array<{[key: string]: _UnmarshalledAttributeValue}>};
    
    /**
     * _BatchGetRequestMap shape
     */
    UnprocessedKeys?: {[key: string]: _UnmarshalledKeysAndAttributes};
    
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