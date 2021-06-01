// Please do not touch this file. It's generated from template in:
// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/sts-client-defaultRoleAssumers.ts
import {
  DefaultCredentialProvider,
  getDefaultRoleAssumer as StsGetDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity as StsGetDefaultRoleAssumerWithWebIdentity,
  RoleAssumer,
  RoleAssumerWithWebIdentity,
} from "./defaultStsRoleAssumers";
import { STSClient, STSClientConfig } from "./STSClient";

/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 */
export const getDefaultRoleAssumer = (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler"> = {}
): RoleAssumer => StsGetDefaultRoleAssumer(stsOptions, STSClient);

/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 */
export const getDefaultRoleAssumerWithWebIdentity = (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler"> = {}
): RoleAssumerWithWebIdentity => StsGetDefaultRoleAssumerWithWebIdentity(stsOptions, STSClient);

/**
 * The default credential providers depend STS client to assume role with desired API: sts:assumeRole,
 * sts:assumeRoleWithWebIdentity, etc. This function decorates the default credential provider with role assumers which
 * encapsulates the process of calling STS commands. This can only be imported by AWS client packages to avoid circular
 * dependencies.
 *
 * @internal
 */
export const decorateDefaultCredentialProvider =
  (provider: DefaultCredentialProvider): DefaultCredentialProvider =>
  (input: any) =>
    provider({
      roleAssumer: getDefaultRoleAssumer(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
      ...input,
    });
