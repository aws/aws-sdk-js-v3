import { getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import * as core from "@aws-sdk/credential-provider-web-identity";
import { CredentialProvider } from "@aws-sdk/types";

export interface FromWebTokenInit extends core.FromWebTokenInit {
  stsClientConfig?: STSClientConfig;
}
export const fromWebToken = (init: FromWebTokenInit): CredentialProvider =>
  core.fromWebToken({
    ...init,
    roleAssumerWithWebIdentity:
      init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.stsClientConfig),
  });
