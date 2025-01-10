export { CreateTokenCommand, SSOOIDCClient } from "./nested-sso-oidc/index";

export type { SSOOIDCClientConfig, CreateTokenCommandInput } from "./nested-sso-oidc";

export {
  AssumeRoleCommand,
  AssumeRoleWithWebIdentityCommand,
  STSClient,
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
} from "./nested-sts/index";

export type { AssumeRoleCommandInput, STSClientConfig } from "./nested-sts";
