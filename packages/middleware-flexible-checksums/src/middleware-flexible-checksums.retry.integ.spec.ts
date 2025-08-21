import { S3 } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

describe("middleware-flexible-checksums.retry", () => {
  it("retry reuses the checksum", async () => {
    const maxAttempts = 3;
    const client = new S3({
      maxAttempts,
      requestHandler: {
        handle: async () => ({
          response: new HttpResponse({
            statusCode: 500, // Fake Trasient Error
          }),
        }),
      },
    });

    let flexChecksCalls = 0;
    client.middlewareStack.addRelativeTo(
      (next: any) => async (args: any) => {
        console.log("after flexChecks");
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
        console.log("after retryMiddleware");
        retryMiddlewareCalls++;
        return next(args);
      },
      {
        toMiddleware: "retryMiddleware",
        relation: "after",
      }
    );

    client.middlewareStack.identifyOnResolve(true);

    await client
      .putObject({
        Bucket: "b",
        Key: "k",
        Body: "hello",
      })
      .catch((err) => {
        console.log({ err });
        // Expected, since we're faking transient error which is retried.
      });

    // Validate that flexibleChecksumsMiddleware is called once.
    expect(flexChecksCalls).toEqual(1);
    // Validate that retryMiddleware is called maxAttempts times.
    expect(retryMiddlewareCalls).toEqual(maxAttempts);
  });
});
