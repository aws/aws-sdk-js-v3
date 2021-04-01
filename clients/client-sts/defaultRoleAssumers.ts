import {
  DefaultCredentialProvider,
  getDefaultRoleAssumer as StsGetDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity as StsGetDefaultRoleAssumerWithWebIdentity,
  RoleAssumer,
  RoleAssumerWithWebIdentity,
} from "./defaultStsRoleAssumers";
import { STSClient, STSClientConfig } from "./STSClient";

export const getDefaultRoleAssumer = (stsOptions: Pick<STSClientConfig, "logger" | "region">): RoleAssumer =>
  StsGetDefaultRoleAssumer(stsOptions, STSClient);

export const getDefaultRoleAssumerWithWebIdentity = (
  stsOptions: Pick<STSClientConfig, "logger" | "region">
): RoleAssumerWithWebIdentity => StsGetDefaultRoleAssumerWithWebIdentity(stsOptions, STSClient);

export const decorateDefaultCredentialProvider = (provider: DefaultCredentialProvider): DefaultCredentialProvider => (
  input: any
) =>
  provider({
    roleAssumer: getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
  });
