import { getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import * as core from "@aws-sdk/credential-provider-web-identity";
import { CredentialProvider } from "@aws-sdk/types";

export interface FromTokenFileInit extends core.FromTokenFileInit {
  stsConfig?: STSClientConfig;
}

export const fromTokenFile = (init: FromTokenFileInit = {}): CredentialProvider =>
  core.fromTokenFile({
    ...init,
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.stsConfig),
  });
