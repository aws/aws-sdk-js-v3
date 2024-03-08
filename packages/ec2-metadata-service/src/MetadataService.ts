import { HttpRequest } from "@aws-sdk/protocol-http";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { sdkStreamMixin } from "@smithy/util-stream";
import { loadConfig } from "@smithy/node-config-provider";
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

  async request(
    path: string,
    options: { method?: string; headers?: Record<string, string> },
    withToken?: boolean
  ): Promise<string> {
    const { endpoint, ec2MetadataV1Disabled } = await this.config;
    if (this.disableFetchToken && !withToken && ec2MetadataV1Disabled) {
      throw new Error(
        "In IMDSv1 fallback mode and ec2MetadataV1Disabled option is set to true, no request can be made."
      );
    }
    const handler = new NodeHttpHandler();
    const endpointUrl = new URL(endpoint);
    const headers = options.headers || {}; // Using provided headers or default to an empty object
    /**
     * Make request with token.
     * Note that making the request call with token will result in an additional request to fetch the token.
     */
    if (withToken) {
      headers["x-aws-ec2-metadata-token"] = await this.fetchMetadataToken();
    }
    const request = new HttpRequest({
      method: options.method || "GET", // Default to GET if no method is specified
      headers: headers,
      hostname: endpointUrl.hostname,
      path: endpointUrl.pathname + path,
      protocol: endpointUrl.protocol,
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

    // Define the request to fetch the metadata token
    const { endpoint } = await this.config;
    const handler = new NodeHttpHandler();
    const endpointUrl = new URL(endpoint);
    const tokenRequest = new HttpRequest({
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600", // 6 hours;
      },
      hostname: endpointUrl.hostname,
      path: "/latest/api/token",
      protocol: endpointUrl.protocol,
    });
    try {
      const { response } = await handler.handle(tokenRequest, {} as HttpHandlerOptions);
      if (response.statusCode === 200 && response.body) {
        // handle response.body as a stream
        return sdkStreamMixin(response.body).transformToString();
      } else {
        throw new Error(`Failed to fetch metadata token with status code ${response.statusCode}`);
      }
    } catch (error) {
      throw new Error(`Error fetching metadata token: ${error}`);
    }
  }
}
