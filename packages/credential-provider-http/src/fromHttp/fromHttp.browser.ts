import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";

import { checkUrl } from "./checkUrl";
import type { FromHttpOptions } from "./fromHttpTypes";
import { createGetRequest, getCredentials } from "./requestHelpers";
import { retryWrapper } from "./retry-wrapper";

/**
 * Creates a provider that gets credentials via HTTP request.
 */
export const fromHttp = (options: FromHttpOptions): AwsCredentialIdentityProvider => {
  let host: string;

  const full = options.credentialsFullUri;

  if (full) {
    host = full;
  } else {
    throw new CredentialsProviderError("No HTTP credential provider host provided.");
  }

  // throws if invalid format.
  const url = new URL(host);

  // throws if not to spec for provider.
  checkUrl(url);

  const requestHandler = new FetchHttpHandler();

  return retryWrapper(
    async (): Promise<AwsCredentialIdentity> => {
      const request = createGetRequest(url);
      if (options.authorizationToken) {
        request.headers.Authorization = options.authorizationToken;
      }
      const result = await requestHandler.handle(request);
      return getCredentials(result.response);
    },
    options.maxRetries ?? 3,
    options.timeout ?? 1000
  );
};
