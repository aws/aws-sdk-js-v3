import {_UnmarshalledTableDescription} from './_TableDescription';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DescribeTableOutput shape
 */
export interface DescribeTableOutput {
    /**
     * _TableDescription shape
     */
    Table?: _UnmarshalledTableDescription;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}