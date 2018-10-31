import {_UnmarshalledDifference} from './_Difference';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetDifferencesOutput shape
 */
export interface GetDifferencesOutput {
    /**
     * <p>A differences data type object that contains information about the differences, including whether the difference is added, modified, or deleted (A, D, M).</p>
     */
    differences?: Array<_UnmarshalledDifference>;

    /**
     * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
