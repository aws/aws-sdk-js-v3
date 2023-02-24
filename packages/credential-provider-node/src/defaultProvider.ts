import { fromEnv } from "@aws-sdk/credential-provider-env";
import { RemoteProviderInit } from "@aws-sdk/credential-provider-imds";
import { fromIni, FromIniInit } from "@aws-sdk/credential-provider-ini";
import { fromProcess, FromProcessInit } from "@aws-sdk/credential-provider-process";
import { fromSSO, FromSSOInit } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile, FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import { chain, CredentialsProviderError, memoize } from "@aws-sdk/property-provider";
import { ENV_PROFILE } from "@aws-sdk/shared-ini-file-loader";
import { AwsCredentialIdentity, MemoizedProvider } from "@aws-sdk/types";

import { remoteProvider } from "./remoteProvider";

export type DefaultProviderInit = FromIniInit & RemoteProviderInit & FromProcessInit & FromSSOInit & FromTokenFileInit;

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
 * @see {@link fromEnv}                 The function used to source credentials from
 *                              environment variables
 * @see {@link fromSSO}                 The function used to source credentials from
 *                              resolved SSO token cache
 * @see {@link fromTokenFile}           The function used to source credentials from
 *                              token file
 * @see {@link fromIni}                The function used to source credentials from INI
 *                              files
 * @see {@link fromProcess}             The function used to sources credentials from
 *                              credential_process in INI files
 * @see {@link fromInstanceMetadata}    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see {@link fromContainerMetadata}   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
export const defaultProvider = (init: DefaultProviderInit = {}): MemoizedProvider<AwsCredentialIdentity> =>
  memoize(
    chain(
      ...(init.profile || process.env[ENV_PROFILE] ? [] : [fromEnv()]),
      fromSSO(init),
      fromIni(init),
      fromProcess(init),
      fromTokenFile(init),
      remoteProvider(init),
      async () => {
        throw new CredentialsProviderError("Could not load credentials from any providers", false);
      }
    ),
    (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000,
    (credentials) => credentials.expiration !== undefined
  );
