/// <reference types="mocha" />
import { HttpRequest } from "@aws-sdk/protocol-http";
import { FinalizeRequestMiddleware } from "@aws-sdk/types";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Readable } from "stream";

import { EventBridge } from "../src/EventBridge";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("EventBridge", () => {
  const client = new EventBridge({});
  // Middleware intercept request and return it before reaching the HTTP client. It records the request and context
  // and return them in the Metadata.
  const interceptionMiddleware: FinalizeRequestMiddleware<any, any> = (next, context) => (args) => {
    return Promise.resolve({ output: { $metadata: { request: args.request } }, response: "" as any });
  };
  client.middlewareStack.add(interceptionMiddleware, { step: "finalizeRequest", name: "interceptionMiddleware" });
  describe("putEvents", () => {
    it("should use sign request with sigv4a with EventId presents", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await client.putEvents({
        Entries: [],
        EndpointId: "endpointId",
      });
      expect(request.hostname).eql("abc");
      expect(request.headers["authorization"]).contains(`Credential=abc`);
    });
  });
});
