import {_UnmarshalledIdentityDescription} from './_IdentityDescription';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>The response to a ListIdentities request.</p>
 */
export interface ListIdentitiesOutput {
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;

    /**
     * <p>An object containing a set of identities and associated mappings.</p>
     */
    Identities?: Array<_UnmarshalledIdentityDescription>;

    /**
     * <p>A pagination token.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
