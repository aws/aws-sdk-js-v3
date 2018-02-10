import {_UnmarshalledUnprocessedIdentityId} from './_UnprocessedIdentityId';
import * as __aws_types from '@aws/types';

/**
 * <p>Returned in response to a successful <code>DeleteIdentities</code> operation.</p>
 */
export interface DeleteIdentitiesOutput {
    /**
     * <p>An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.</p>
     */
    UnprocessedIdentityIds?: Array<_UnmarshalledUnprocessedIdentityId>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
