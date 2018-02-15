import {_UnmarshalledRoleMapping} from './_RoleMapping';
import * as __aws_types from '@aws/types';

/**
 * <p>Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.</p>
 */
export interface GetIdentityPoolRolesOutput {
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId?: string;

    /**
     * <p>The map of roles associated with this pool. Currently only authenticated and unauthenticated roles are supported.</p>
     */
    Roles?: {[key: string]: string};

    /**
     * <p>How users for a specific identity provider are to mapped to roles. This is a String-to-<a>RoleMapping</a> object map. The string identifies the identity provider, for example, "graph.facebook.com" or "cognito-idp-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p>
     */
    RoleMappings?: {[key: string]: _UnmarshalledRoleMapping};

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
