import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import { fromIni as _fromIni, FromIniInit as _FromIniInit } from "@aws-sdk/credential-provider-ini";
import { CredentialProvider } from "@aws-sdk/types";

export interface FromIniInit extends _FromIniInit {
  stsOptions?: STSClientConfig;
}
export const fromIni = (init: FromIniInit = {}): CredentialProvider =>
  _fromIni({
    ...init,
    roleAssumer: init.roleAssumer ?? getDefaultRoleAssumer(init.stsOptions),
    roleAssumerWithWebIdentity:
      init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.stsOptions),
  });
