import {_UnmarshalledCredentials} from './_Credentials';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

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
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}