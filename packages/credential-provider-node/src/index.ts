import { fromEnv } from "@aws-sdk/credential-provider-env";
import {
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata,
  fromInstanceMetadata,
  RemoteProviderInit,
} from "@aws-sdk/credential-provider-imds";
import { fromIni, FromIniInit } from "@aws-sdk/credential-provider-ini";
import { fromProcess, FromProcessInit } from "@aws-sdk/credential-provider-process";
import { fromSSO, FromSSOInit } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile, FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import { chain, CredentialsProviderError, memoize } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";
import { CredentialProvider } from "@aws-sdk/types";
import { ENV_PROFILE } from "@aws-sdk/util-credentials";

export const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";

/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * SSO credentials from token cache
 *   * Web identity token credentials
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromSSO                 The function used to source credentials from
 *                              resolved SSO token cache
 * @see fromTokenFile           The function used to source credentials from
 *                              token file
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromProcess             The function used to sources credentials from
 *                              credential_process in INI files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
export const defaultProvider = (
  init: FromIniInit & RemoteProviderInit & FromProcessInit & FromSSOInit & FromTokenFileInit = {}
): CredentialProvider => {
  const options = { profile: process.env[ENV_PROFILE], ...init };
  if (!options.loadedConfig) options.loadedConfig = loadSharedConfigFiles(init);
  const providers = [
    fromSSO(options),
    fromIni(options),
    fromProcess(options),
    fromTokenFile(options),
    remoteProvider(options),
    async () => {
      throw new CredentialsProviderError("Could not load credentials from any providers", false);
    },
  ];
  if (!options.profile) providers.unshift(fromEnv());
  const providerChain = chain(...providers);

  return memoize(
    providerChain,
    (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000,
    (credentials) => credentials.expiration !== undefined
  );
};

const remoteProvider = (init: RemoteProviderInit): CredentialProvider => {
  if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
    return fromContainerMetadata(init);
  }

  if (process.env[ENV_IMDS_DISABLED]) {
    return () => Promise.reject(new CredentialsProviderError("EC2 Instance Metadata Service access disabled"));
  }

  return fromInstanceMetadata(init);
};
