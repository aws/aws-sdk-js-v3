import { getDefaultRoleAssumerWithWebIdentity, STSClientConfig } from "@aws-sdk/client-sts";
import {
  fromTokenFile as _fromTokenFile,
  FromTokenFileInit as _FromTokenFileInit,
} from "@aws-sdk/credential-provider-web-identity";
import { CredentialProvider } from "@aws-sdk/types";

export interface FromTokenFileInit extends _FromTokenFileInit {
  stsConfig?: STSClientConfig;
}

export const fromTokenFile = (init: FromTokenFileInit = {}): CredentialProvider =>
  _fromTokenFile({
    ...init,
    roleAssumerWithWebIdentity: init.roleAssumerWithWebIdentity ?? getDefaultRoleAssumerWithWebIdentity(init.stsConfig),
  });
