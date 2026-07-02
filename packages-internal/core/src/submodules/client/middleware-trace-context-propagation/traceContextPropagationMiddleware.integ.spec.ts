// @ts-ignore
import { InvokeStore, InvokeStoreBase } from "@aws/lambda-invoke-store";
import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { describe, expect, test as it } from "vitest";

import { getTraceContextPropagationPlugin } from "./getTraceContextPropagationPlugin";

const TRACEPARENT = "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01";
const TRACESTATE = "rojo=00f067aa0ba902b7";
const BAGGAGE = "userId=alice,serverNode=DF%2028";

describe("middleware-trace-context-propagation", () => {
  describe(S3.name, () => {
    it("propagates W3C trace context from the InvokeStore onto an outbound request", async () => {
      const client = new S3({ region: "us-west-2" });
      // The plugin is not registered on generated clients by default, so add it
      // explicitly to exercise the build-step middleware on a real client stack.
      client.middlewareStack.use(getTraceContextPropagationPlugin({}));

      // Intercept the outbound request before it leaves the client (no network).
      requireRequestsFrom(client).toMatch({
        headers: {
          traceparent: TRACEPARENT,
          tracestate: TRACESTATE,
          baggage: BAGGAGE,
        },
      });

      // Run the call inside an InvokeStore context that carries trace context,
      // the same way a Lambda invoke would.
      const store = await InvokeStore.getInstanceAsync();
      await store.run(
        {
          [InvokeStoreBase.PROTECTED_KEYS.TRACEPARENT]: TRACEPARENT,
          [InvokeStoreBase.PROTECTED_KEYS.TRACESTATE]: TRACESTATE,
          [InvokeStoreBase.PROTECTED_KEYS.BAGGAGE]: BAGGAGE,
        },
        async () => {
          await client.listBuckets({});
        }
      );

      expect.hasAssertions();
    });
  });
});
