/**
 * @internal
 */
export { CreateTokenCommand, SSOOIDCClient } from "./nested-sso-oidc/index";

/**
 * @internal
 */
export type { CreateTokenCommandInput, SSOOIDCClientConfig } from "./nested-sso-oidc";

/**
 * @internal
 */
export {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
  STSClient,
} from "./nested-sts/index";

/**
 * @internal
 */
export type { AssumeRoleCommandInput, STSClientConfig } from "./nested-sts";
