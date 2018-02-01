import {_UnmarshalledUnprocessedIdentityId} from './_UnprocessedIdentityId';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned in response to a successful <code>DeleteIdentities</code> operation.</p>
 */
export interface DeleteIdentitiesOutput {
    /**
     * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.</p>
     */
    UnprocessedIdentityIds?: Array<_UnmarshalledUnprocessedIdentityId>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}