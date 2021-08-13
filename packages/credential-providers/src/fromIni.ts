import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import * as core from "@aws-sdk/credential-provider-ini";
import { CredentialProvider } from "@aws-sdk/types";

export interface FromIniInit extends core.FromIniInit {
  stsOptions?: STSClientConfig;
}
export const fromIni = (init: FromIniInit = {}): CredentialProvider =>
  core.fromIni({
    ...init,
    roleAssumer: init.roleAssumer ?? getDefaultRoleAssumer(init.stsOptions),
    roleAssumerWithWebIdentity:
      init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.stsOptions),
  });
