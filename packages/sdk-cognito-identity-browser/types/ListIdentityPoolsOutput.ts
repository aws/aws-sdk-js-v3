import {_UnmarshalledIdentityPoolShortDescription} from './_IdentityPoolShortDescription';
import * as __aws_types from '@aws/types';

/**
 * <p>The result of a successful ListIdentityPools action.</p>
 */
export interface ListIdentityPoolsOutput {
    /**
     * <p>The identity pools returned by the ListIdentityPools action.</p>
     */
    IdentityPools?: Array<_UnmarshalledIdentityPoolShortDescription>;

    /**
     * <p>A pagination token.</p>
     */
    NextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
