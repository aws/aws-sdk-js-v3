import { markNonRecoverable, setCredentialFeature } from "@aws-sdk/core/client";
import { fromSso as getSsoTokenProvider } from "@aws-sdk/token-providers";
import type { SSOToken } from "@smithy/core/config";
import { CredentialsProviderError, getSSOTokenFromFile } from "@smithy/core/config";
import type { AwsCredentialIdentity } from "@smithy/types";

import type { FromSSOInit, SsoCredentialsParameters } from "./fromSSO";
import type { GetRoleCredentialsCommandOutput } from "./loadSso";

const SHOULD_FAIL_CREDENTIAL_CHAIN = false;

/**
 * @internal
 */
export const resolveSSOCredentials = async ({
  ssoStartUrl,
  ssoSession,
  ssoAccountId,
  ssoRegion,
  ssoRoleName,
  ssoClient,
  clientConfig,
  parentClientConfig,
  callerClientConfig,
  profile,
  filepath,
  configFilepath,
  ignoreCache,
  logger,
}: FromSSOInit & SsoCredentialsParameters): Promise<AwsCredentialIdentity> => {
  let token: SSOToken;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;

  if (ssoSession) {
    try {
      const _token = await getSsoTokenProvider({
        profile,
        filepath,
        configFilepath,
        ignoreCache,
        clientConfig,
        parentClientConfig,
        logger,
      })({ callerClientConfig });
      token = {
        accessToken: _token.token,
        expiresAt: new Date(_token.expiration!).toISOString(),
      };
    } catch (e) {
      const error = new CredentialsProviderError(e.message, {
        tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
        logger,
      });
      // Non-recoverable: a `TokenProviderError` means the cached SSO token is expired, missing or
      // malformed, and the token provider has already tried to refresh it. Only `aws sso login` can
      // produce a usable one. Anything else here, such as a filesystem error reading the config
      // files, may be transient, so it stays recoverable and the lifecycle backs off instead.
      throw e?.name === "TokenProviderError" ? markNonRecoverable(error) : error;
    }
  } else {
    try {
      token = await getSSOTokenFromFile(ssoStartUrl);
    } catch (e) {
      // Non-recoverable: the legacy token file is absent or unparseable. Re-reading it cannot
      // change that, and only `aws sso login` recreates it.
      throw markNonRecoverable(
        new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger,
        })
      );
    }
  }

  if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
    // Non-recoverable: the token is past its own expiry, so SSO would reject it. Detected locally,
    // before `GetRoleCredentials` is called, and only `aws sso login` issues a replacement.
    throw markNonRecoverable(
      new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
        tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
        logger,
      })
    );
  }

  const { accessToken } = token;

  const { SSOClient, GetRoleCredentialsCommand } = await import("./loadSso.js");

  const sso =
    ssoClient ||
    new SSOClient(
      Object.assign({}, clientConfig ?? {}, {
        logger: clientConfig?.logger ?? callerClientConfig?.logger ?? parentClientConfig?.logger,
        // regions from outer clients are not used here because the credential set must include a region.
        // the only possible override is from the clientConfig property of the credential provider.
        region: clientConfig?.region ?? ssoRegion,
        userAgentAppId:
          clientConfig?.userAgentAppId ?? callerClientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId,
      })
    );
  let ssoResp: GetRoleCredentialsCommandOutput;
  try {
    ssoResp = await sso.send(
      new GetRoleCredentialsCommand({
        accountId: ssoAccountId,
        roleName: ssoRoleName,
        accessToken,
      })
    );
  } catch (e) {
    const error = new CredentialsProviderError(e, {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger,
    });
    // Non-recoverable: `UnauthorizedException` means SSO rejected the token itself, so sending the
    // same token again cannot succeed until the customer re-runs `aws sso login`. Other failures,
    // such as throttling or a 5xx, may be transient and stay recoverable.
    throw e?.name === "UnauthorizedException" ? markNonRecoverable(error) : error;
  }

  const {
    roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {},
  } = ssoResp as unknown as {
    roleCredentials: {
      accessKeyId?: string;
      secretAccessKey?: string;
      sessionToken?: string;
      expiration?: Date | string;
      credentialScope?: string;
      accountId?: string;
    };
  };

  if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
    throw new CredentialsProviderError("SSO returns an invalid temporary credential.", {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger,
    });
  }

  const credentials = {
    accessKeyId,
    secretAccessKey,
    sessionToken,
    expiration: new Date(expiration),
    ...(credentialScope && { credentialScope }),
    ...(accountId && { accountId }),
  };

  if (ssoSession) {
    setCredentialFeature(credentials, "CREDENTIALS_SSO", "s");
  } else {
    setCredentialFeature(credentials, "CREDENTIALS_SSO_LEGACY", "u");
  }

  return credentials;
};
