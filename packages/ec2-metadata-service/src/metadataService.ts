import { HttpRequest } from "@aws-sdk/protocol-http";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { NodeHttpHandler } from "@smithy/node-http-handler";

import { MetadataServiceOptions } from "./metadataServiceOptions";

export class MetadataService {
  host = "169.254.169.254";
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
    this.host = options?.host || "169.254.169.254";
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
    const request = new HttpRequest({
      method: options.method || "GET", // Default to GET if no method is specified
      headers: options.headers || {}, // Using provided headers or default to an empty object
      hostname: this.host,
      path: path,
      protocol: "http:",
    });
    try {
      const { response } = await handler.handle(request, {} as HttpHandlerOptions);
      if (response.statusCode === 200 && response.body) {
        // Directly read the response body as text
        return response.body;
      } else {
        throw new Error(`Request failed with status code ${response.statusCode}`);
      }
    } catch (error) {
      throw new Error(`Error making request to the metadata service: ${error}`);
    }
  }

  async fetchMetadataToken(): Promise<string> {
    // Define the request to fetch the metadata token
    const tokenRequest = new HttpRequest({
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600", // 6 hours;
      },
      hostname: this.host,
      path: "/latest/api/token",
      protocol: "http:",
    });
    const handler = new NodeHttpHandler();
    try {
      const { response } = await handler.handle(tokenRequest, {} as HttpHandlerOptions);
      if (response.statusCode === 200 && response.body) {
        // Directly read the response body as text
        return response.body;
      } else {
        throw new Error(`Failed to fetch metadata token with status code ${response.statusCode}`);
      }
    } catch (error) {
      throw new Error(`Error fetching metadata token: ${error}`);
    }
  }
}
