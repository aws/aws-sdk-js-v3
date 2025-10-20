// smithy-typescript generated code
// Please do not touch this file. It's generated from template in:
// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/sts-client-defaultStsRoleAssumers.ts
import { setCredentialFeature } from "@aws-sdk/core/client";
import type { CredentialProviderOptions } from "@aws-sdk/types";
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
export type STSRoleAssumerOptions = Pick<STSClientConfig, "logger" | "region" | "requestHandler" | "profile"> & {
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

interface AssumedRoleUser {
  /**
   * The ARN of the temporary security credentials that are returned from the AssumeRole action.
   */
  Arn?: string;

  /**
   * A unique identifier that contains the role ID and the role session name of the role that is being assumed.
   */
  AssumedRoleId?: string;
}

/**
 * @internal
 */
const getAccountIdFromAssumedRoleUser = (assumedRoleUser?: AssumedRoleUser) => {
  if (typeof assumedRoleUser?.Arn === "string") {
    const arnComponents = assumedRoleUser.Arn.split(":");
    if (arnComponents.length > 4 && arnComponents[4] !== "") {
      return arnComponents[4];
    }
  }
  return undefined;
};

/**
 * @internal
 *
 * Default to the parent client region or us-east-1 if no region is specified.
 */
const resolveRegion = async (
  _region: string | Provider<string> | undefined,
  _parentRegion: string | Provider<string> | undefined,
  credentialProviderLogger?: Logger
): Promise<string> => {
  const region: string | undefined = typeof _region === "function" ? await _region() : _region;
  const parentRegion: string | undefined = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;

  credentialProviderLogger?.debug?.(
    "@aws-sdk/client-sts::resolveRegion",
    "accepting first of:",
    `${region} (provider)`,
    `${parentRegion} (parent client)`,
    `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`
  );
  return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
};

/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 * @internal
 */
export const getDefaultRoleAssumer = (
  stsOptions: STSRoleAssumerOptions,
  STSClient: new (options: STSClientConfig) => STSClient
): RoleAssumer => {
  let stsClient: STSClient;
  let closureSourceCreds: AwsCredentialIdentity;
  return async (sourceCreds, params) => {
    closureSourceCreds = sourceCreds;
    if (!stsClient) {
      const {
        logger = stsOptions?.parentClientConfig?.logger,
        profile = stsOptions?.parentClientConfig?.profile,
        region,
        requestHandler = stsOptions?.parentClientConfig?.requestHandler,
        credentialProviderLogger,
      } = stsOptions;
      const resolvedRegion = await resolveRegion(
        region,
        stsOptions?.parentClientConfig?.region,
        credentialProviderLogger
      );
      const isCompatibleRequestHandler = !isH2(requestHandler);

      stsClient = new STSClient({
        ...stsOptions,
        profile,
        // A hack to make sts client uses the credential in current closure.
        credentialDefaultProvider: () => async () => closureSourceCreds,
        region: resolvedRegion,
        requestHandler: isCompatibleRequestHandler ? (requestHandler as any) : undefined,
        logger: logger as any,
      });
    }
    const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
    }

    const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);

    const credentials = {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
      // TODO(credentialScope): access normally when shape is updated.
      ...((Credentials as any).CredentialScope && { credentialScope: (Credentials as any).CredentialScope }),
      ...(accountId && { accountId }),
    };
    setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
    return credentials;
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
  STSClient: new (options: STSClientConfig) => STSClient
): RoleAssumerWithWebIdentity => {
  let stsClient: STSClient;
  return async (params) => {
    if (!stsClient) {
      const {
        logger = stsOptions?.parentClientConfig?.logger,
        profile = stsOptions?.parentClientConfig?.profile,
        region,
        requestHandler = stsOptions?.parentClientConfig?.requestHandler,
        credentialProviderLogger,
      } = stsOptions;
      const resolvedRegion = await resolveRegion(
        region,
        stsOptions?.parentClientConfig?.region,
        credentialProviderLogger
      );
      const isCompatibleRequestHandler = !isH2(requestHandler);

      stsClient = new STSClient({
        ...stsOptions,
        profile,
        region: resolvedRegion,
        requestHandler: isCompatibleRequestHandler ? (requestHandler as any) : undefined,
        logger: logger as any,
      });
    }
    const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
      throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
    }

    const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);

    const credentials = {
      accessKeyId: Credentials.AccessKeyId,
      secretAccessKey: Credentials.SecretAccessKey,
      sessionToken: Credentials.SessionToken,
      expiration: Credentials.Expiration,
      // TODO(credentialScope): access normally when shape is updated.
      ...((Credentials as any).CredentialScope && { credentialScope: (Credentials as any).CredentialScope }),
      ...(accountId && { accountId }),
    };
    if (accountId) {
      setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
    }
    setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
    return credentials;
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

const isH2 = (requestHandler: any): boolean => {
  return requestHandler?.metadata?.handlerProtocol === "h2";
};
