import { getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import {
  fromTokenFile as _fromTokenFile,
  FromTokenFileInit as _FromTokenFileInit,
} from "@aws-sdk/credential-provider-web-identity";
import { AwsCredentialIdentityProvider, Pluggable } from "@aws-sdk/types";

export interface FromTokenFileInit extends _FromTokenFileInit {
  clientConfig?: STSClientConfig;
  clientPlugins?: Pluggable<any, any>[];
}

/**
 * Creates a credential provider function that reads OIDC token from given file, then call STS.AssumeRoleWithWebIdentity
 * API. The configurations must be specified in environmental variables:
 *
 * - Reads file location of where the OIDC token is stored from either provided option `webIdentityTokenFile` or
 *   environment variable `AWS_WEB_IDENTITY_TOKEN_FILE`.
 * - Reads IAM role wanting to be assumed from either provided option `roleArn` or environment variable `AWS_ROLE_ARN`.
 * - Reads optional role session name to be used to distinguish sessions from provided option `roleSessionName` or
 *   environment variable `AWS_ROLE_SESSION_NAME`.
 *   If session name is not defined, it comes up with a role session name.
 * - Reads OIDC token from file on disk.
 * - Calls sts:AssumeRoleWithWebIdentity via `roleAssumerWithWebIdentity` option to get credentials.
 *
 * ```javascript
 * import { fromTokenFile } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromTokenFile } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   credentials: fromTokenFile({
 *     // Optional. STS client config to make the assume role request.
 *     clientConfig: { region }
 *     // Optional. Custom STS client middleware plugin to modify the client default behavior.
 *     // e.g. adding custom headers.
 *     clientPlugins: [addFooHeadersPlugin],
 *   });
 * });
 * ```
 */
export const fromTokenFile = (init: FromTokenFileInit = {}): AwsCredentialIdentityProvider =>
  _fromTokenFile({
    ...init,
    roleAssumerWithWebIdentity:
      init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.clientConfig, init.clientPlugins),
  });
