import {_UnmarshalledGlobalTableDescription} from './_GlobalTableDescription';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DescribeGlobalTableOutput shape
 */
export interface DescribeGlobalTableOutput {
    /**
     * <p>Contains the details of the global table.</p>
     */
    GlobalTableDescription?: _UnmarshalledGlobalTableDescription;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
