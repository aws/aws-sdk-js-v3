import { setCredentialFeature } from "@aws-sdk/core/client";
import { fromSso as getSsoTokenProvider } from "@aws-sdk/token-providers";
import { CredentialsProviderError } from "@smithy/property-provider";
import { getSSOTokenFromFile, SSOToken } from "@smithy/shared-ini-file-loader";
import { AwsCredentialIdentity } from "@smithy/types";

import { FromSSOInit, SsoCredentialsParameters } from "./fromSSO";
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
  profile,
  logger,
}: FromSSOInit & SsoCredentialsParameters): Promise<AwsCredentialIdentity> => {
  let token: SSOToken;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;

  if (ssoSession) {
    try {
      const _token = await getSsoTokenProvider({ profile })();
      token = {
        accessToken: _token.token,
        expiresAt: new Date(_token.expiration!).toISOString(),
      };
    } catch (e) {
      throw new CredentialsProviderError(e.message, {
        tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
        logger,
      });
    }
  } else {
    try {
      token = await getSSOTokenFromFile(ssoStartUrl);
    } catch (e) {
      throw new CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
        tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
        logger,
      });
    }
  }

  if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
    throw new CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger,
    });
  }

  const { accessToken } = token;

  const { SSOClient, GetRoleCredentialsCommand } = await import("./loadSso");

  const sso =
    ssoClient ||
    new SSOClient(
      Object.assign({}, clientConfig ?? {}, {
        region: clientConfig?.region ?? ssoRegion,
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
    throw new CredentialsProviderError(e, {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger,
    });
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
