import type { AwsIdentityProperties, CredentialProviderOptions } from "@aws-sdk/types";
import { CredentialsProviderError } from "@smithy/property-provider";
import { Logger } from "@smithy/types";

import { CognitoProviderParameters } from "./CognitoProviderParameters";
import { CognitoIdentityCredentialProvider, fromCognitoIdentity } from "./fromCognitoIdentity";
import { localStorage } from "./localStorage";
import { resolveLogins } from "./resolveLogins";
import { Storage } from "./Storage";

/**
 * @internal
 *
 * Retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from
 * `GetCredentialsForIdentity` are not.
 */
export function fromCognitoIdentityPool({
  accountId,
  cache = localStorage(),
  client,
  clientConfig,
  customRoleArn,
  identityPoolId,
  logins,
  userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : undefined,
  logger,
  parentClientConfig,
}: FromCognitoIdentityPoolParameters): CognitoIdentityCredentialProvider {
  logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
  const cacheKey: string | undefined = userIdentifier
    ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}`
    : undefined;

  let provider: CognitoIdentityCredentialProvider = async (awsIdentityProperties?: AwsIdentityProperties) => {
    const { GetIdCommand, CognitoIdentityClient } = await import("./loadCognitoIdentity");
    const _client =
      client ??
      new CognitoIdentityClient(
        Object.assign({}, clientConfig ?? {}, {
          region:
            clientConfig?.region ?? parentClientConfig?.region ?? awsIdentityProperties?.callerClientConfig?.region,
        })
      );

    let identityId: string | undefined = (cacheKey && (await cache.getItem(cacheKey))) as string | undefined;
    if (!identityId) {
      const { IdentityId = throwOnMissingId(logger) } = await _client.send(
        new GetIdCommand({
          AccountId: accountId,
          IdentityPoolId: identityPoolId,
          Logins: logins ? await resolveLogins(logins) : undefined,
        })
      );
      identityId = IdentityId as string;
      if (cacheKey) {
        Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => {});
      }
    }

    provider = fromCognitoIdentity({
      client: _client,
      customRoleArn,
      logins,
      identityId,
    });

    return provider(awsIdentityProperties);
  };

  return (awsIdentityProperties?: AwsIdentityProperties) =>
    provider(awsIdentityProperties).catch(async (err) => {
      if (cacheKey) {
        Promise.resolve(cache.removeItem(cacheKey)).catch(() => {});
      }

      throw err;
    });
}

/**
 * @internal
 */
export interface FromCognitoIdentityPoolParameters extends CognitoProviderParameters, CredentialProviderOptions {
  /**
   * A standard AWS account ID (9+ digits).
   */
  accountId?: string;

  /**
   * A cache in which to store resolved Cognito IdentityIds. If not supplied,
   * the credential provider will attempt to store IdentityIds in one of the
   * following (in order of preference):
   *   1. IndexedDB
   *   2. LocalStorage
   *   3. An in-memory cache object that will not persist between pages.
   *
   * IndexedDB is preferred to maximize data sharing between top-level
   * browsing contexts and web workers.
   *
   * The provider will not cache IdentityIds of authenticated users unless a
   * separate `userIdentitifer` parameter is supplied.
   */
  cache?: Storage;

  /**
   * The unique identifier for the identity pool from which an identity should
   * be retrieved or generated.
   */
  identityPoolId: string;

  /**
   * A unique identifier for the user. This is distinct from a Cognito
   * IdentityId and should instead be an identifier meaningful to your
   * application. Used to cache Cognito IdentityIds on a per-user basis.
   */
  userIdentifier?: string;
}

function throwOnMissingId(logger?: Logger): never {
  throw new CredentialsProviderError("Response from Amazon Cognito contained no identity ID", { logger });
}
