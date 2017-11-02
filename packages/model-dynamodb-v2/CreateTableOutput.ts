import {_UnmarshalledTableDescription} from './_TableDescription';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * CreateTableOutput shape
 */
export interface CreateTableOutput {
    /**
     * _TableDescription shape
     */
    TableDescription?: _UnmarshalledTableDescription;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}