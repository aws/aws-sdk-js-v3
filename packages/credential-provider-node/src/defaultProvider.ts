import { ENV_KEY, ENV_SECRET, fromEnv } from "@aws-sdk/credential-provider-env";
import type { FromHttpOptions } from "@aws-sdk/credential-provider-http";
import type { FromIniInit } from "@aws-sdk/credential-provider-ini";
import type { FromProcessInit } from "@aws-sdk/credential-provider-process";
import type { FromSSOInit, SsoCredentialsParameters } from "@aws-sdk/credential-provider-sso";
import type { FromTokenFileInit } from "@aws-sdk/credential-provider-web-identity";
import type { RemoteProviderInit } from "@smithy/credential-provider-imds";
import { chain, CredentialsProviderError, memoize } from "@smithy/property-provider";
import { ENV_PROFILE } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentity, MemoizedProvider } from "@smithy/types";

import { remoteProvider } from "./remoteProvider";

/**
 * @public
 */
export type DefaultProviderInit = FromIniInit &
  FromHttpOptions &
  RemoteProviderInit &
  FromProcessInit &
  (FromSSOInit & Partial<SsoCredentialsParameters>) &
  FromTokenFileInit;

/**
 * @internal
 */
let multipleCredentialSourceWarningEmitted = false;

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
 * @see {@link fromEnv}         The function used to source credentials from
 *                              environment variables.
 * @see {@link fromSSO}         The function used to source credentials from
 *                              resolved SSO token cache.
 * @see {@link fromTokenFile}   The function used to source credentials from
 *                              token file.
 * @see {@link fromIni}         The function used to source credentials from INI
 *                              files.
 * @see {@link fromProcess}     The function used to sources credentials from
 *                              credential_process in INI files.
 * @see {@link fromInstanceMetadata}    The function used to source credentials from the
 *                                      EC2 Instance Metadata Service.
 * @see {@link fromContainerMetadata}   The function used to source credentials from the
 *                                      ECS Container Metadata Service.
 */
export const defaultProvider = (init: DefaultProviderInit = {}): MemoizedProvider<AwsCredentialIdentity> =>
  memoize(
    chain(
      async () => {
        const profile = init.profile ?? process.env[ENV_PROFILE];
        if (profile) {
          const envStaticCredentialsAreSet = process.env[ENV_KEY] && process.env[ENV_SECRET];
          if (envStaticCredentialsAreSet) {
            if (!multipleCredentialSourceWarningEmitted) {
              const warnFn =
                init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger"
                  ? init.logger.warn.bind(init.logger)
                  : console.warn;
              warnFn(
                `@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`
              );
              multipleCredentialSourceWarningEmitted = true;
            }
          }
          throw new CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
            logger: init.logger,
            tryNextLink: true,
          });
        }
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
        return fromEnv(init)();
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
        const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
        if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
          throw new CredentialsProviderError(
            "Skipping SSO provider in default chain (inputs do not include SSO fields).",
            { logger: init.logger }
          );
        }
        const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
        return fromSSO(init)();
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
        const { fromIni } = await import("@aws-sdk/credential-provider-ini");
        return fromIni(init)();
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
        const { fromProcess } = await import("@aws-sdk/credential-provider-process");
        return fromProcess(init)();
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
        const { fromTokenFile } = await import("@aws-sdk/credential-provider-web-identity");
        return fromTokenFile(init)();
      },
      async () => {
        init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
        return (await remoteProvider(init))();
      },
      async () => {
        throw new CredentialsProviderError("Could not load credentials from any providers", {
          tryNextLink: false,
          logger: init.logger,
        });
      }
    ),
    credentialsTreatedAsExpired,
    credentialsWillNeedRefresh
  );

/**
 * @internal
 *
 * @returns credentials have expiration.
 */
export const credentialsWillNeedRefresh = (credentials: AwsCredentialIdentity) => credentials?.expiration !== undefined;

/**
 * @internal
 *
 * @returns credentials with less than 5 minutes left.
 */
export const credentialsTreatedAsExpired = (credentials: AwsCredentialIdentity) =>
  credentials?.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000;
