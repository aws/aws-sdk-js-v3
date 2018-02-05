import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface InitiateJobOutput {
    /**
     * <p>The relative URI path of the job.</p>
     */
    location?: string;

    /**
     * <p>The ID of the job.</p>
     */
    jobId?: string;

    /**
     * <p>The path to the location of where the select results are stored.</p>
     */
    jobOutputPath?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}