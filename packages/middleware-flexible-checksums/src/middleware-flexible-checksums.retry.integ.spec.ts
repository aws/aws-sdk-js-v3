import { S3 } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

describe("middleware-flexible-checksums.retry", () => {
  it("retry reuses the checksum", async () => {
    const maxAttempts = 3;
    class CustomHandler extends NodeHttpHandler {
      async handle() {
        return {
          response: new HttpResponse({
            statusCode: 500, // Fake Trasient Error
            headers: {},
          }),
        };
      }
    }
    const requestHandler = new CustomHandler();
    const client = new S3({ maxAttempts, requestHandler });

    let flexChecksCalls = 0;
    client.middlewareStack.addRelativeTo(
      (next: any) => async (args: any) => {
        flexChecksCalls++;
        return next(args);
      },
      {
        toMiddleware: "flexibleChecksumsMiddleware",
        relation: "after",
      }
    );

    let retryMiddlewareCalls = 0;
    client.middlewareStack.addRelativeTo(
      (next: any) => async (args: any) => {
        retryMiddlewareCalls++;
        return next(args);
      },
      {
        toMiddleware: "retryMiddleware",
        relation: "after",
      }
    );

    await client
      .putObject({
        Bucket: "b",
        Key: "k",
        Body: "hello",
      })
      .catch(() => {
        // Expected, since we're faking transient error which is retried.
      });

    // Validate that flexibleChecksumsMiddleware is called once.
    expect(flexChecksCalls).toEqual(1);
    // Validate that retryMiddleware is called maxAttempts times.
    expect(retryMiddlewareCalls).toEqual(maxAttempts);
  });
});
