import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.</p>
 */
export interface GetOpenIdTokenForDeveloperIdentityOutput {
    /**
     * <p>A unique identifier in the format REGION:GUID.</p>
     */
    IdentityId?: string;

    /**
     * <p>An OpenID token.</p>
     */
    Token?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
