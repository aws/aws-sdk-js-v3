// Please do not touch this file. It's generated from template in:
// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/sts-client-defaultStsRoleAssumers.ts
import { Credentials, Provider } from "@aws-sdk/types";

import { AssumeRoleCommand, AssumeRoleCommandInput } from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityCommandInput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import type { STSClient, STSClientConfig, STSClientResolvedConfig } from "./STSClient";

/**
 * @internal
 */
export type RoleAssumer = (sourceCreds: Credentials, params: AssumeRoleCommandInput) => Promise<Credentials>;

const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";

/**
 * Inject the fallback STS region of us-east-1.
 */
const decorateDefaultRegion = (region: string | Provider<string> | undefined): string | Provider<string> => {
  if (typeof region !== "function") {
    return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
  }
  return async () => {
    try {
      return await region();
    } catch (e) {
      return ASSUME_ROLE_DEFAULT_REGION;
    }
  };
};

/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 * @internal
 */
export const getDefaultRoleAssumer = (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler">,
  stsClientCtor: new (options: STSClientConfig) => STSClient
): RoleAssumer => {
  let stsClient: STSClient;
  let closureSourceCreds: Credentials;
  return async (sourceCreds, params) => {
    closureSourceCreds = sourceCreds;
    if (!stsClient) {
      const { logger, region, requestHandler } = stsOptions;
      stsClient = new stsClientCtor({
        logger,
        // A hack to make sts client uses the credential in current closure.
        credentialDefaultProvider: () => async () => closureSourceCreds,
        region: decorateDefaultRegion(region || stsOptions.region),
        ...(requestHandler ? { requestHandler } : {}),
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
    };
  };
};

/**
 * @internal
 */
export type RoleAssumerWithWebIdentity = (params: AssumeRoleWithWebIdentityCommandInput) => Promise<Credentials>;

/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 * @internal
 */
export const getDefaultRoleAssumerWithWebIdentity = (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler">,
  stsClientCtor: new (options: STSClientConfig) => STSClient
): RoleAssumerWithWebIdentity => {
  let stsClient: STSClient;
  return async (params) => {
    if (!stsClient) {
      const { logger, region, requestHandler } = stsOptions;
      stsClient = new stsClientCtor({
        logger,
        region: decorateDefaultRegion(region || stsOptions.region),
        ...(requestHandler ? { requestHandler } : {}),
      });
    }
    const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
    }
    return {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
    };
  };
};

/**
 * @internal
 */
export type DefaultCredentialProvider = (input: any) => Provider<Credentials>;

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
  (input: STSClientResolvedConfig) =>
    provider({
      roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
      ...input,
    });
