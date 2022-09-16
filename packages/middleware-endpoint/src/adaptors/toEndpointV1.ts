import { Endpoint, EndpointV2 } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

export const toEndpointV1 = (endpoint: string | Endpoint | EndpointV2): Endpoint => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      // v2
      return parseUrl(endpoint.url);
    }
    // v1
    return endpoint;
  }
  return parseUrl(endpoint);
};
