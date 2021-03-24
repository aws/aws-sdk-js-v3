import { Credentials, Provider } from "@aws-sdk/types";

import { AssumeRoleCommand, AssumeRoleCommandInput } from "./commands/AssumeRoleCommand";
import {
  AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityCommandInput,
} from "./commands/AssumeRoleWithWebIdentityCommand";
import { STSClient, STSClientConfig } from "./STSClient";

type RoleAssumer = (sourceCreds: Credentials, params: AssumeRoleCommandInput) => Promise<Credentials>;

const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";

/**
 * Inject the fallback STS region of us-east-1.
 */
const decorateDefaultRegion = (region: STSClientConfig["region"]): STSClientConfig["region"] => {
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
 * The default role assumer that used by credential providers when STS.AssumeRole API is needed.
 */
const getDefaultAssumer = (stsOptions: STSClientConfig): RoleAssumer => {
  let stsClient: STSClient;
  return async (sourceCreds, params) => {
    if (!stsClient) {
      const { logger } = stsOptions;
      stsClient = new STSClient({
        logger,
        credentials: sourceCreds,
        region: decorateDefaultRegion(stsOptions.region),
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

type RoleAssumerWithWebIdentity = (params: AssumeRoleWithWebIdentityCommandInput) => Promise<Credentials>;

/**
 * The default role assumer that used by credential providers when STS.AssumeRole API is needed.
 */
const getDefaultAssumerWithWebIdentity = (stsOptions: STSClientConfig): RoleAssumerWithWebIdentity => {
  let stsClient: STSClient;
  return async (params) => {
    if (!stsClient) {
      const { logger } = stsOptions;
      stsClient = new STSClient({
        logger,
        region: decorateDefaultRegion(stsOptions.region),
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

type DefaultCredentialProvider = (input: any) => Provider<Credentials>;

/**
 * The default credential providers depend STS client to assume role with desired API: sts:assumeRole,
 * sts:assumeRoleWithWebIdentity, etc. This function decorates the default credential provider with role assumers which
 * encapsulates the process of calling STS commands. This can only be imported by AWS client packages to avoid circular
 * dependencies.
 *
 * @internal
 */
export const decorateDefaultCredentialProvider = (provider: DefaultCredentialProvider): DefaultCredentialProvider => (
  input: any
) =>
  provider({
    roleAssumer: getDefaultAssumer(input),
    roleAssumerWithWebIdentity: getDefaultAssumerWithWebIdentity(input),
    ...input,
  });
