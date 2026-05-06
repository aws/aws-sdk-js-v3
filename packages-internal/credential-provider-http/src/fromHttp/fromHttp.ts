import { setCredentialFeature } from "@aws-sdk/core/client";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { CredentialsProviderError } from "@smithy/property-provider";
import type { HttpHandler } from "@smithy/protocol-http";
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
 * Module-level cache of the default {@link NodeHttpHandler}, keyed by
 * timeout. Callers (e.g. EKS Pod Identity) may invoke `fromHttp` repeatedly
 * across credential refreshes; constructing a new handler each time leaks
 * sockets/file descriptors because the previous handler is never destroyed.
 *
 * Memoizing on first use keeps a single shared handler/socket pool for the
 * lifetime of the process. Caller-supplied handlers are respected and never
 * cached here.
 *
 * @internal
 */
const defaultRequestHandlerCache = new Map<number, HttpHandler<any>>();

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

  // Respect a caller-supplied handler; otherwise reuse a single SDK-default
  // handler across calls to avoid leaking sockets on credential refresh.
  let requestHandler: HttpHandler<any>;
  if (options.requestHandler) {
    requestHandler = options.requestHandler;
  } else {
    const timeout = options.timeout ?? 1000;
    let cached = defaultRequestHandlerCache.get(timeout);
    if (!cached) {
      cached = NodeHttpHandler.create({
        requestTimeout: timeout,
        connectionTimeout: timeout,
      });
      defaultRequestHandlerCache.set(timeout, cached);
    }
    requestHandler = cached;
  }

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
