import type { CredentialProviderOptions } from "@aws-sdk/types";
import { partition } from "@aws-sdk/util-endpoints";
import { AwsCredentialIdentity, Logger, Provider } from "@smithy/types";

import { AssumeRoleCommand, AssumeRoleCommandInput } from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityCommandInput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import type { STSClient, STSClientConfig, STSClientResolvedConfig } from "./STSClient";

/**
 * @public
 */
export type STSRoleAssumerOptions = Pick<STSClientConfig, "logger" | "region" | "requestHandler"> & {
  credentialProviderLogger?: Logger;
  parentClientConfig?: CredentialProviderOptions["parentClientConfig"];
};

/**
 * @internal
 */
export type RoleAssumer = (
  sourceCreds: AwsCredentialIdentity,
  params: AssumeRoleCommandInput
) => Promise<AwsCredentialIdentity>;

const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";

/**
 * @internal
 *
 * Default to the us-east-1 region for aws partition,
 * or default to the parent client region otherwise.
 */
const resolveRegion = async (
  _region: string | Provider<string> | undefined,
  _parentRegion: string | Provider<string> | undefined,
  credentialProviderLogger?: Logger
): Promise<string> => {
  const region: string | undefined = typeof _region === "function" ? await _region() : _region;
  const parentRegion: string | undefined = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;

  if (!parentRegion || partition(parentRegion).name === "aws") {
    credentialProviderLogger?.debug?.(
      "@aws-sdk/client-sts::resolveRegion",
      "accepting first of:",
      `${region} (provider)`,
      `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`
    );
    return region ?? ASSUME_ROLE_DEFAULT_REGION;
  } else {
    credentialProviderLogger?.debug?.(
      "@aws-sdk/client-sts::resolveRegion",
      "accepting first of:",
      `${region} (provider)`,
      `${parentRegion} (parent client)`,
      `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`
    );
    return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
  }
};

/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 * @internal
 */
export const getDefaultRoleAssumer = (
  stsOptions: STSRoleAssumerOptions,
  stsClientCtor: new (options: STSClientConfig) => STSClient
): RoleAssumer => {
  let stsClient: STSClient;
  let closureSourceCreds: AwsCredentialIdentity;
  return async (sourceCreds, params) => {
    closureSourceCreds = sourceCreds;
    if (!stsClient) {
      const { logger, region, requestHandler, credentialProviderLogger } = stsOptions;
      const resolvedRegion = await resolveRegion(
        region,
        stsOptions?.parentClientConfig?.region,
        credentialProviderLogger
      );
      stsClient = new stsClientCtor({
        logger,
        // A hack to make sts client uses the credential in current closure.
        credentialDefaultProvider: () => async () => closureSourceCreds,
        region: resolvedRegion,
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
      // TODO(credentialScope): access normally when shape is updated.
      credentialScope: (Credentials as any).CredentialScope,
    };
  };
};

/**
 * @internal
 */
export type RoleAssumerWithWebIdentity = (
  params: AssumeRoleWithWebIdentityCommandInput
) => Promise<AwsCredentialIdentity>;

/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 * @internal
 */
export const getDefaultRoleAssumerWithWebIdentity = (
  stsOptions: STSRoleAssumerOptions,
  stsClientCtor: new (options: STSClientConfig) => STSClient
): RoleAssumerWithWebIdentity => {
  let stsClient: STSClient;
  return async (params) => {
    if (!stsClient) {
      const { logger, region, requestHandler, credentialProviderLogger } = stsOptions;
      const resolvedRegion = await resolveRegion(
        region,
        stsOptions?.parentClientConfig?.region,
        credentialProviderLogger
      );
      stsClient = new stsClientCtor({
        logger,
        region: resolvedRegion,
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
      // TODO(credentialScope): access normally when shape is updated.
      credentialScope: (Credentials as any).CredentialScope,
    };
  };
};

/**
 * @internal
 */
export type DefaultCredentialProvider = (input: any) => Provider<AwsCredentialIdentity>;

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
      roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor as new (options: STSClientConfig) => STSClient),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(
        input,
        input.stsClientCtor as new (options: STSClientConfig) => STSClient
      ),
      ...input,
    });
