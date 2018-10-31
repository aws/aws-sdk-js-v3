import {_RoleMapping} from './_RoleMapping';
import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Input to the <code>SetIdentityPoolRoles</code> action.</p>
 */
export interface SetIdentityPoolRolesInput {
    /**
     * <p>An identity pool ID in the format REGION:GUID.</p>
     */
    IdentityPoolId: string;

    /**
     * <p>The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.</p>
     */
    Roles: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * <p>How users for a specific identity provider are to mapped to roles. This is a string to <a>RoleMapping</a> object map. The string identifies the identity provider, for example, "graph.facebook.com" or "cognito-idp-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p> <p>Up to 25 rules can be specified per identity provider.</p>
     */
    RoleMappings?: {[key: string]: _RoleMapping}|Iterable<[string, _RoleMapping]>;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}