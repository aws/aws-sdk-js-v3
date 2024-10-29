import "@aws-sdk/signature-v4-crt";

import { FinalizeRequestMiddleware } from "@aws-sdk/types";
import { describe, expect, test as it } from "vitest";

import { EventBridge } from "../src/EventBridge";

describe("EventBridge", () => {
  const client = new EventBridge({
    region: "us-west-2",
    credentials: {
      accessKeyId: "CLIENT_TEST",
      secretAccessKey: "CLIENT_TEST",
    },
  });
  // Middleware intercept request and return it before reaching the HTTP client. It records the request and context
  // and return them in the Metadata.
  const interceptionMiddleware: FinalizeRequestMiddleware<any, any> = (next, context) => (args) => {
    return Promise.resolve({ output: { $metadata: { request: args.request } }, response: "" as any });
  };
  client.middlewareStack.add(interceptionMiddleware, { step: "finalizeRequest", name: "interceptionMiddleware" });
  describe("putEvents", () => {
    it("should use sign request with sigv4a with EventId presents", async () => {
      const endpointId = "endpoint.id";
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await client.putEvents({
        Entries: [],
        EndpointId: endpointId,
      });
      expect(request.hostname).eql(`${endpointId}.endpoint.events.amazonaws.com`);
      expect(request.headers["X-Amz-Region-Set"]).eql("*");
      expect(request.headers["Authorization"]).includes("AWS4-ECDSA-P256-SHA256");
    });
  });
});
