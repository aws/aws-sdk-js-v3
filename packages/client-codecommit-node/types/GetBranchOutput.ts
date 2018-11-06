import {_UnmarshalledBranchInfo} from './_BranchInfo';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a get branch operation.</p>
 */
export interface GetBranchOutput {
    /**
     * <p>The name of the branch.</p>
     */
    branch?: _UnmarshalledBranchInfo;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
