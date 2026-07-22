import { setCredentialFeature } from "@aws-sdk/core/client";
import { CredentialsProviderError } from "@smithy/core/config";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import type { AwsCredentialIdentity, AwsCredentialIdentityProvider } from "@smithy/types";
import fs from "node:fs/promises";

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
    options.logger?.constructor?.name === "NoOpLogger" || !options.logger?.warn
      ? console.warn
      : options.logger.warn.bind(options.logger);

  if (relative && full) {
    warn(
      "@aws-sdk/credential-provider-http: " +
        "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."
    );
    warn("awsContainerCredentialsRelativeUri will take precedence.");
  }

  if (token && tokenFile) {
    warn(
      "@aws-sdk/credential-provider-http: " +
        "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."
    );
    warn("awsContainerAuthorizationTokenFile will take precedence.");
  }

  if (relative) {
    host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
  } else if (full) {
    host = full;
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

  const requestHandler = NodeHttpHandler.create({ connectionTimeout: options.timeout ?? 1000 }) as NodeHttpHandler;
  const requestTimeout = options.timeout ?? 1000;

  const provider = retryWrapper(
    async (): Promise<AwsCredentialIdentity> => {
      const request = createGetRequest(url);

      if (tokenFile) {
        // Note: specification requires a file read on each request
        // to allow for updates to the file contents.
        request.headers.Authorization = validateToken((await fs.readFile(tokenFile)).toString());
      } else if (token) {
        request.headers.Authorization = validateToken(token);
      }
      try {
        const result = await requestHandler.handle(request, { requestTimeout });
        return getCredentials(result.response).then((creds) => setCredentialFeature(creds, "CREDENTIALS_HTTP", "z"));
      } catch (e: unknown) {
        throw new CredentialsProviderError(String(e), { logger: options.logger });
      }
    },
    options.maxRetries ?? 3,
    options.timeout ?? 1000
  );

  return async () => {
    try {
      return await provider();
    } finally {
      requestHandler.destroy?.();
    }
  };
};

/**
 * Validates that the token does not contain the \r\n sequence
 * that would otherwise break the HTTP request.
 * @internal
 */
const validateToken = (token: string): string => {
  if (token.includes("\r\n")) {
    throw new CredentialsProviderError("Authorization token contains invalid \\r\\n sequence.");
  }
  return token;
};
