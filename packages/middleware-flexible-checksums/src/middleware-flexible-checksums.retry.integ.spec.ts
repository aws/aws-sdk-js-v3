import { S3 } from "@aws-sdk/client-s3";
import { retryMiddleware } from "@smithy/middleware-retry";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";
import { flexibleChecksumsMiddleware } from "./flexibleChecksumsMiddleware";

describe("middleware-flexible-checksums.retry", () => {
  it("retry reuses the checksum", async () => {
    const maxAttempts = 3;
    const client = new S3({ maxAttempts });

    let flexChecksCallCount = 0;
    client.middlewareStack.addRelativeTo(
      (next: any) => async (args: any) => {
        flexChecksCallCount++;
        return next(args);
      },
      {
        toMiddleware: flexibleChecksumsMiddleware.name,
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
        toMiddleware: retryMiddleware.name,
        relation: "after",
      }
    );

    requireRequestsFrom(client)
      .toMatch({ method: "PUT" })
      .respondWith(
        new HttpResponse({
          statusCode: 500, // Fake Trasient Error
        })
      );

    await client
      .putObject({
        Bucket: "b",
        Key: "k",
        Body: "hello",
      })
      .catch((err) => {
        // Expected, since we're faking transient error which is retried.
      });

    // Validate that flexibleChecksumsMiddleware is called once.
    expect(flexChecksCallCount).toEqual(1);
    // Validate that retryMiddleware is called maxAttempts times.
    expect(retryMiddlewareCalls).toEqual(maxAttempts);
  });
});
