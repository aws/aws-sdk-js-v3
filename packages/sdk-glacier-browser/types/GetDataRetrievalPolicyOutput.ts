import {_UnmarshalledDataRetrievalPolicy} from './_DataRetrievalPolicy';
import * as __aws_types from '@aws/types';

/**
 * <p>Contains the Amazon Glacier response to the <code>GetDataRetrievalPolicy</code> request.</p>
 */
export interface GetDataRetrievalPolicyOutput {
    /**
     * <p>Contains the returned data retrieval policy in JSON format.</p>
     */
    Policy?: _UnmarshalledDataRetrievalPolicy;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
