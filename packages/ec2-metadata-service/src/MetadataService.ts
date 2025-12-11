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
  }

  async request(path: string, options: { method?: string; headers?: Record<string, string> }): Promise<string> {
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
        headers["x-aws-ec2-metadata-token"] = await this.fetchMetadataToken();
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
      port: endpointUrl.port ? parseInt(endpointUrl.port) : undefined,
    });
    try {
      const { response } = await handler.handle(request, {} as HttpHandlerOptions);
      if (response.statusCode === 200 && response.body) {
        // handle response.body as stream
        return sdkStreamMixin(response.body).transformToString();
      } else {
        throw new Error(`Request failed with status code ${response.statusCode}`);
      }
    } catch (error) {
      throw new Error(`Error making request to the metadata service: ${error}`);
    }
  }

  async fetchMetadataToken(): Promise<string> {
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
        "x-aws-ec2-metadata-token-ttl-seconds": "21600", // 6 hours;
      },
      hostname: endpointUrl.hostname,
      path: "/latest/api/token",
      protocol: endpointUrl.protocol,
      port: endpointUrl.port ? parseInt(endpointUrl.port) : undefined,
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
          statusCode: response.statusCode,
        });
      }
    } catch (error) {
      if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
        this.disableFetchToken = true; // as per JSv2 and fromInstanceMetadata implementations
        throw new Error(`Error fetching metadata token: ${error}. [disableFetchToken] is now set to true.`);
      }
      throw new Error(`Error fetching metadata token: ${error}`);
    }
  }
}
