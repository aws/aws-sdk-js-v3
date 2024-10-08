import { setCredentialFeature } from "@aws-sdk/core/client";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { CredentialsProviderError } from "@smithy/property-provider";
import { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";
import fs from "fs/promises";

import { checkUrl } from "./checkUrl";
import type { FromHttpOptions } from "./fromHttpTypes";
import { createGetRequest, getCredentials } from "./requestHelpers";
import { retryWrapper } from "./retry-wrapper";

const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
const AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";

/**
 * Creates a provider that gets credentials via HTTP request.
 */
export const fromHttp = (options: FromHttpOptions = {}): AwsCredentialIdentityProvider => {
  options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
  let host: string;

  const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
  const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
  const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
  const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];

  const warn: (warning: string) => void =
    options.logger?.constructor?.name === "NoOpLogger" || !options.logger ? console.warn : options.logger.warn;

  if (relative && full) {
    warn(
      "@aws-sdk/credential-provider-http: " +
        "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."
    );
    warn("awsContainerCredentialsFullUri will take precedence.");
  }

  if (token && tokenFile) {
    warn(
      "@aws-sdk/credential-provider-http: " +
        "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."
    );
    warn("awsContainerAuthorizationToken will take precedence.");
  }

  if (full) {
    host = full;
  } else if (relative) {
    host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
  } else {
    throw new CredentialsProviderError(
      `No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,
      { logger: options.logger }
    );
  }

  // throws if invalid format.
  const url = new URL(host);

  // throws if not to spec for provider.
  checkUrl(url, options.logger);

  const requestHandler = new NodeHttpHandler({
    requestTimeout: options.timeout ?? 1000,
    connectionTimeout: options.timeout ?? 1000,
  });

  return retryWrapper(
    async (): Promise<AwsCredentialIdentity> => {
      const request = createGetRequest(url);

      if (token) {
        request.headers.Authorization = token;
      } else if (tokenFile) {
        // Note: specification requires a file read on each request
        // to allow for updates to the file contents.
        request.headers.Authorization = (await fs.readFile(tokenFile)).toString();
      }
      try {
        const result = await requestHandler.handle(request);
        return getCredentials(result.response).then((creds) => setCredentialFeature(creds, "CREDENTIALS_HTTP", "z"));
      } catch (e: unknown) {
        throw new CredentialsProviderError(String(e), { logger: options.logger });
      }
    },
    options.maxRetries ?? 3,
    options.timeout ?? 1000
  );
};
