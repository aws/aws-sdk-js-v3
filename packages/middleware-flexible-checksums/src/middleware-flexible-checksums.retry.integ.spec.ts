import { S3 } from "@aws-sdk/client-s3";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

import { flexibleChecksumsMiddlewareOptions } from "./flexibleChecksumsMiddleware";

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

    let flexChecksCallCount = 0;
    function flexChecksCallCountMiddleware(next: any) {
      return async function (args: any) {
        console.log("after flexChecks");
        flexChecksCallCount++;
        return next(args);
      };
    }
    client.middlewareStack.add(flexChecksCallCountMiddleware, {
      name: flexChecksCallCountMiddleware.name,
      step: flexibleChecksumsMiddlewareOptions.step,
    });

    client.middlewareStack.identifyOnResolve(true);

    await client
      .putObject({
        Bucket: "b",
        Key: "k",
        Body: "hello",
      })
      .catch((err) => {
        console.log({ err, flexChecksCallCount });
        // Expected, since we're faking transient error which is retried.

        // Validate that flexibleChecksumsMiddleware is called once.
        expect(flexChecksCallCount).toEqual(1);
        // Validate that retryMiddleware is called maxAttempts times.
        expect(err.$metadata.attempts).toEqual(maxAttempts);
      });

    expect.assertions(2);
  });
});
