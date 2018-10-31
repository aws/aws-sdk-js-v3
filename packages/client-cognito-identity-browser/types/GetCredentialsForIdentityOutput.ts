import {_UnmarshalledCredentials} from './_Credentials';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.</p>
 */
export interface GetCredentialsForIdentityOutput {
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;

    /**
     * <p>Credentials for the provided identity ID.</p>
     */
    Credentials?: _UnmarshalledCredentials;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
