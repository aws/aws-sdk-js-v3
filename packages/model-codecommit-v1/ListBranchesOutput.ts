import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a list branches operation.</p>
 */
export interface ListBranchesOutput {
    /**
     * <p>The list of branch names.</p>
     */
    branches?: Array<string>;
    
    /**
     * <p>An enumeration token that returns the batch of the results.</p>
     */
    nextToken?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}