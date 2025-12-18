import { HttpHandlerOptions } from "@aws-sdk/types";
import { loadConfig } from "@smithy/node-config-provider";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { HttpRequest } from "@smithy/protocol-http";
import { sdkStreamMixin } from "@smithy/util-stream";

import { ENDPOINT_SELECTORS, IMDSv1_DISABLED_SELECTORS } from "./ConfigLoaders";
import { MetadataServiceOptions } from "./MetadataServiceOptions";

/**
 * @public
 */
export class MetadataService {
  private disableFetchToken: boolean;
  private config: Promise<MetadataServiceOptions>;
  private retries: number;
  private backoffFn: (numFailures: number) => Promise<void> | number;
  private tokenTtl: number;
  // can be set explicitly, or extracted from endpoint, or use a default value (80). See `resolvePort()` below.
  private port?: number;

  /**
   * Creates a new MetadataService object with a given set of options.
   */
  constructor(options: MetadataServiceOptions = {}) {
    this.config = (async () => {
      const profile = options?.profile || process.env.AWS_PROFILE;
      return {
        endpoint: options.endpoint ?? (await loadConfig(ENDPOINT_SELECTORS, { profile })()),
        httpOptions: {
          timeout: options?.httpOptions?.timeout || 0,
        },
        ec2MetadataV1Disabled:
          options?.ec2MetadataV1Disabled ?? (await loadConfig(IMDSv1_DISABLED_SELECTORS, { profile })()),
      };
    })();
    this.disableFetchToken = options?.disableFetchToken || false;
    this.retries = options?.retries ?? 3;
    this.backoffFn = this.createBackoffFunction(options?.backoff);
    this.tokenTtl = this.validateTokenTtl(options?.tokenTtl ?? 21600);
    this.port = options?.port;
  }

  private validateTokenTtl(tokenTtl: number): number {
    if (!Number.isInteger(tokenTtl) || tokenTtl <= 0) {
      throw new Error("tokenTtl must be a positive integer");
    }
    return tokenTtl;
  }

  private resolvePort(endpointUrl: URL): number | undefined {
    // Priority: explicit port option > port from endpoint URL > protocol default (undefined lets URL handle it)
    if (this.port !== undefined) {
      return this.port;
    }
    if (endpointUrl.port) {
      return parseInt(endpointUrl.port);
    }
    return undefined;
  }

  private createBackoffFunction(
    backoff?: number | ((numFailures: number) => Promise<void> | number)
  ): (numFailures: number) => Promise<void> | number {
    // backoff in seconds
    if (typeof backoff === "function") {
      return backoff;
    }
    if (typeof backoff === "number") {
      return () => backoff;
    }
    // Default exponential backoff
    return (numFailures: number) => Math.pow(1.2, numFailures);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async retryWithBackoff<T>(operation: () => Promise<T>): Promise<T> {
    let lastError: Error;

    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;

        // Don't retry on final attempt
        if (attempt === this.retries) {
          break;
        }

        if (this.shouldNotRetry(error as any)) {
          throw error;
        }

        const backoffResult = this.backoffFn(attempt);
        if (typeof backoffResult === "number") {
          await this.sleep(backoffResult * 1000); // seconds to milliseconds
        } else {
          await backoffResult;
        }
      }
    }

    throw lastError!;
  }

  private shouldNotRetry(error: any): boolean {
    // 400/403 errors for token fetch MUST NOT be retried
    // 404 errors for metadata fetch MUST NOT be retried
    const statusCode = error.statusCode || error.$metadata?.httpStatusCode;
    return statusCode === 400 || statusCode === 403 || statusCode === 404;
  }

  async request(path: string, options: { method?: string; headers?: Record<string, string> }): Promise<string> {
    return this.retryWithBackoff(async () => {
      const { endpoint, ec2MetadataV1Disabled, httpOptions } = await this.config;
      const handler = new NodeHttpHandler({
        requestTimeout: httpOptions?.timeout,
        throwOnRequestTimeout: true,
        connectionTimeout: httpOptions?.timeout,
      });
      const endpointUrl = new URL(endpoint!);
      const headers = options.headers || {};
      /**
       * If IMDSv1 is disabled and disableFetchToken is true, throw an error
       * Refer: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html
       */
      if (this.disableFetchToken && ec2MetadataV1Disabled) {
        throw new Error("IMDSv1 is disabled and fetching token is disabled, cannot make the request.");
      }
      /**
       * Make request with token if disableFetchToken is not true (IMDSv2).
       * Note that making the request call with token will result in an additional request to fetch the token.
       */
      if (!this.disableFetchToken) {
        try {
          headers["x-aws-ec2-metadata-token"] = await this.fetchMetadataTokenInternal();
        } catch (err) {
          if (ec2MetadataV1Disabled) {
            // If IMDSv1 is disabled and token fetch fails (IMDSv2 fails), rethrow the error
            throw err;
          }
          // If token fetch fails and IMDSv1 is not disabled, proceed without token (IMDSv1 fallback)
        }
      } // else, IMDSv1 fallback mode
      const request = new HttpRequest({
        method: options.method || "GET", // Default to GET if no method is specified
        headers: headers,
        hostname: endpointUrl.hostname,
        path: endpointUrl.pathname + path,
        protocol: endpointUrl.protocol,
        port: this.resolvePort(endpointUrl),
      });
      try {
        const { response } = await handler.handle(request, {} as HttpHandlerOptions);
        if (response.statusCode === 200 && response.body) {
          // handle response.body as stream
          return sdkStreamMixin(response.body).transformToString();
        } else {
          throw Object.assign(new Error(`Request failed with status code ${response.statusCode}`), {
            $metadata: { httpStatusCode: response.statusCode },
          });
        }
      } catch (error) {
        const wrappedError = new Error(`Error making request to the metadata service: ${error}`);
        const { $metadata } = error as any;
        if ($metadata?.httpStatusCode !== undefined) {
          Object.assign(wrappedError, { $metadata });
        }
        throw wrappedError;
      }
    });
  }

  async fetchMetadataToken(): Promise<string> {
    return this.retryWithBackoff(() => this.fetchMetadataTokenInternal());
  }

  private async fetchMetadataTokenInternal(): Promise<string> {
    /**
     * Refer: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-metadata-v2-how-it-works.html
     */
    const { endpoint, httpOptions } = await this.config;
    const handler = new NodeHttpHandler({
      requestTimeout: httpOptions?.timeout,
      throwOnRequestTimeout: true,
      connectionTimeout: httpOptions?.timeout,
    });
    const endpointUrl = new URL(endpoint!);
    const tokenRequest = new HttpRequest({
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": String(this.tokenTtl),
      },
      hostname: endpointUrl.hostname,
      path: "/latest/api/token",
      protocol: endpointUrl.protocol,
      port: this.resolvePort(endpointUrl),
    });
    try {
      const { response } = await handler.handle(tokenRequest, {} as HttpHandlerOptions);

      let bodyString = "";
      if (response.body) {
        bodyString = await sdkStreamMixin(response.body).transformToString();
      }

      if (response.statusCode === 200 && bodyString) {
        return bodyString;
      } else {
        throw Object.assign(new Error(`Failed to fetch metadata token with status code ${response.statusCode}`), {
          $metadata: { httpStatusCode: response.statusCode },
        });
      }
    } catch (error) {
      if (
        error.message === "TimeoutError" ||
        [403, 404, 405].includes((error as any).statusCode || (error as any).$metadata?.httpStatusCode)
      ) {
        this.disableFetchToken = true; // as per JSv2 and fromInstanceMetadata implementations
        throw new Error(`Error fetching metadata token: ${error}. [disableFetchToken] is now set to true.`);
      }
      throw new Error(`Error fetching metadata token: ${error}`);
    }
  }
}
