// smithy-typescript generated code
// Please do not touch this file. It's generated from template in:
// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/sts-client-defaultRoleAssumers.ts
import { Pluggable } from "@aws-sdk/types";

import {
  DefaultCredentialProvider,
  getDefaultRoleAssumer as StsGetDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity as StsGetDefaultRoleAssumerWithWebIdentity,
  RoleAssumer,
  RoleAssumerWithWebIdentity,
} from "./defaultStsRoleAssumers";
import { ServiceInputTypes, ServiceOutputTypes, STSClient, STSClientConfig } from "./STSClient";

const getCustomizableStsClientCtor = (
  baseCtor: new (config: STSClientConfig) => STSClient,
  customizations?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
) => {
  if (!customizations) return baseCtor;
  else
    return class CustomizableSTSClient extends baseCtor {
      constructor(config: STSClientConfig) {
        super(config);
        for (const customization of customizations!) {
          this.middlewareStack.use(customization);
        }
      }
    };
};

/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 */
export const getDefaultRoleAssumer = (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler"> = {},
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
): RoleAssumer => StsGetDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));

/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 */
export const getDefaultRoleAssumerWithWebIdentity = (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler"> = {},
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
): RoleAssumerWithWebIdentity =>
  StsGetDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));

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
