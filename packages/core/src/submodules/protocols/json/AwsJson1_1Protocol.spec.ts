import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

import { context, deleteObjects } from "../test-schema.spec";
import { AwsJson1_0Protocol } from "./AwsJson1_0Protocol";

/**
 * These tests are cursory since most coverage is provided by protocol tests.
 */
describe(AwsJson1_0Protocol, () => {
  it("is 1.0", async () => {
    const protocol = new AwsJson1_0Protocol({
      defaultNamespace: "",
    });
    expect(protocol.getShapeId()).toEqual("aws.protocols#awsJson1_0");
  });

  it("serializes a request", async () => {
    const protocol = new AwsJson1_0Protocol({
      defaultNamespace: "",
    });
    const httpRequest = await protocol.serializeRequest(
      deleteObjects,
      {
        Delete: {
          Objects: [
            {
              Key: "key1",
            },
            {
              Key: "key2",
            },
          ],
        },
      },
      context
    );

    expect(httpRequest.method).toEqual("POST");
    expect(httpRequest.body).toEqual(
      JSON.stringify({
        Delete: {
          Objects: [
            {
              Key: "key1",
            },
            {
              Key: "key2",
            },
          ],
        },
      })
    );
  });

  it("deserializes a response", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 200,
      headers: {},
    });

    const protocol = new AwsJson1_0Protocol({
      defaultNamespace: "",
    });

    const output = await protocol.deserializeResponse(deleteObjects, context, httpResponse);

    expect(output).toEqual({
      $metadata: {
        httpStatusCode: 200,
        requestId: undefined,
        extendedRequestId: undefined,
        cfId: undefined,
      },
    });
  });
});
