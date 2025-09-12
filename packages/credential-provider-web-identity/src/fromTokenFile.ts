import { setCredentialFeature } from "@aws-sdk/core/client";
import { AttributedAwsCredentialIdentity, CredentialProviderOptions } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { externalDataInterceptor } from "@smithy/shared-ini-file-loader";
import type { AwsCredentialIdentityProvider } from "@smithy/types";
import { readFileSync } from "fs";

import { fromWebToken, FromWebTokenInit } from "./fromWebToken";

const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";

/**
 * @public
 */
export interface FromTokenFileInit
  extends Partial<Omit<FromWebTokenInit, "webIdentityToken">>,
    CredentialProviderOptions {
  /**
   * File location of where the `OIDC` token is stored.
   */
  webIdentityTokenFile?: string;
}

/**
 * @internal
 *
 * Represents OIDC credentials from a file on disk.
 */
export const fromTokenFile =
  (init: FromTokenFileInit = {}): AwsCredentialIdentityProvider =>
  async () => {
    init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];

    if (!webIdentityTokenFile || !roleArn) {
      throw new CredentialsProviderError("Web identity configuration not specified", {
        logger: init.logger,
      });
    }

    const credentials: AttributedAwsCredentialIdentity = await fromWebToken({
      ...init,
      webIdentityToken:
        externalDataInterceptor?.getTokenRecord?.()[webIdentityTokenFile] ??
        readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
      roleArn,
      roleSessionName,
    })();

    if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
      setCredentialFeature(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
    }

    return credentials;
  };
