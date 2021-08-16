import { getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import {
  fromWebToken as _fromWebToken,
  FromWebTokenInit as _FromWebTokenInit,
} from "@aws-sdk/credential-provider-web-identity";
import { CredentialProvider } from "@aws-sdk/types";

export interface FromWebTokenInit extends _FromWebTokenInit {
  stsConfig?: STSClientConfig;
}
export const fromWebToken = (init: FromWebTokenInit): CredentialProvider =>
  _fromWebToken({
    ...init,
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.stsConfig),
  });
