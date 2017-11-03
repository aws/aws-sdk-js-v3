import {_UnmarshalledTableDescription} from './_TableDescription';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a <code>CreateTable</code> operation.</p>
 */
export interface CreateTableOutput {
    /**
     * <p>Represents the properties of the table.</p>
     */
    TableDescription?: _UnmarshalledTableDescription;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}