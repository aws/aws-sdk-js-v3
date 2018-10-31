import {_UnmarshalledGlacierJobDescription} from './_GlacierJobDescription';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface ListJobsOutput {
    /**
     * <p>A list of job objects. Each job object contains metadata describing the job.</p>
     */
    JobList?: Array<_UnmarshalledGlacierJobDescription>;

    /**
     * <p> An opaque string used for pagination that specifies the job at which the listing of jobs should begin. You get the <code>marker</code> value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of the results started in a previous List Jobs request. </p>
     */
    Marker?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
