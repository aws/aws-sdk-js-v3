import { HttpRequest } from "@aws-sdk/protocol-http";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { sdkStreamMixin } from "@smithy/util-stream";

import { MetadataServiceOptions } from "./MetadataServiceOptions";
import { getMetadataServiceHost } from "./getMetadataServiceHost";

export class MetadataService {
  endpoint: string;
  httpOptions: {
    timeout: number;
  };
  maxRetries: number;
  retryDelayOptions: any;
  ec2MetadataV1Disabled: boolean;
  profile: string;
  filename: string;

  /**
   * Creates a new MetadataService object with a given set of options.
   */
  constructor(options?: MetadataServiceOptions) {
    const host = options?.host || "169.254.169.254";
    this.endpoint = getMetadataServiceHost();
    this.httpOptions = {
      timeout: options?.httpOptions?.timeout || 0,
    };
    this.maxRetries = options?.maxRetries || 3; // Assuming a default of 3 retries if not specified
    this.retryDelayOptions = options?.retryDelayOptions || {};
    this.ec2MetadataV1Disabled = options?.ec2MetadataV1Disabled || false;
    this.profile = options?.profile || "";
    this.filename = options?.filename || "";
  }

  async request(path: string, options: { method?: string; headers?: Record<string, string> }): Promise<string> {
    const handler = new NodeHttpHandler();
    const endpointUrl = new URL(this.endpoint);
    const request = new HttpRequest({
      method: options.method || "GET", // Default to GET if no method is specified
      headers: options.headers || {}, // Using provided headers or default to an empty object
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
    // Define the request to fetch the metadata token
    const handler = new NodeHttpHandler();
    const endpointUrl = new URL(this.endpoint);
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
        // Handle response.body as a stream
        return sdkStreamMixin(response.body).transformToString();
      } else {
        throw new Error(`Failed to fetch metadata token with status code ${response.statusCode}`);
      }
    } catch (error) {
      throw new Error(`Error fetching metadata token: ${error}`);
    }
  }

  async requestWithToken(
    path: string,
    options?: { method?: string; headers?: Record<string, string> }
  ): Promise<string> {
    const token = await this.fetchMetadataToken();
    const endpointUrl = new URL(this.endpoint);
    const handler = new NodeHttpHandler();
    const request = new HttpRequest({
      method: options?.method || "GET",
      headers: {
        ...options?.headers,
        "X-aws-ec2-metadata-token": token,
      },
      hostname: endpointUrl.hostname,
      path: endpointUrl.pathname + path,
      protocol: endpointUrl.protocol,
    });

    try {
      const { response } = await handler.handle(request, {} as HttpHandlerOptions);
      if (response.statusCode === 200 && response.body) {
        return sdkStreamMixin(response.body).transformToString();
      } else {
        throw new Error(`Request failed with status code: ${response.statusCode}`);
      }
    } catch (error) {
      throw new Error(`Error making request with token to the metadata service: ${error}`);
    }
  }
}
