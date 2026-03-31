// smithy-typescript generated code
// Please do not touch this file. It's generated from template in:
// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/sts-client-defaultRoleAssumers.ts
import type { Pluggable } from "@smithy/types";

import type { RoleAssumer, RoleAssumerWithWebIdentity, STSRoleAssumerOptions } from "./defaultStsRoleAssumers";
import {
  getDefaultRoleAssumer as StsGetDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity as StsGetDefaultRoleAssumerWithWebIdentity,
} from "./defaultStsRoleAssumers";
import type { ServiceInputTypes, ServiceOutputTypes, STSClientConfig } from "./STSClient";
import { STSClient } from "./STSClient";

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
  stsOptions: STSRoleAssumerOptions = {},
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
): RoleAssumer => StsGetDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));

/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 */
export const getDefaultRoleAssumerWithWebIdentity = (
  stsOptions: STSRoleAssumerOptions = {},
  stsPlugins?: Pluggable<ServiceInputTypes, ServiceOutputTypes>[]
): RoleAssumerWithWebIdentity =>
  StsGetDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
