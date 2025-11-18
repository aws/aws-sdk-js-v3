import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

import { context, createNestingWidget, deleteObjects, nestingWidget } from "../test-schema.spec";
import { AwsJson1_1Protocol } from "./AwsJson1_1Protocol";

/**
 * These tests are cursory since most coverage is provided by protocol tests.
 */
describe(AwsJson1_1Protocol, () => {
  const [, namespace, name, traits, input, output] = deleteObjects;
  const deleteObjectsOperation = {
    namespace,
    name,
    traits,
    input,
    output,
  };

  it("is 1.0", async () => {
    const protocol = new AwsJson1_1Protocol({
      defaultNamespace: "",
      serviceTarget: "JsonRpc11",
    });
    expect(protocol.getShapeId()).toEqual("aws.protocols#awsJson1_1");
  });

  it("serializes a request", async () => {
    const protocol = new AwsJson1_1Protocol({
      defaultNamespace: "",
      serviceTarget: "JsonRpc11",
    });
    const httpRequest = await protocol.serializeRequest(
      deleteObjectsOperation,
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

    const protocol = new AwsJson1_1Protocol({
      defaultNamespace: "",
      serviceTarget: "JsonRpc11",
    });

    const output = await protocol.deserializeResponse(deleteObjectsOperation, context, httpResponse);

    expect(output).toEqual({
      $metadata: {
        httpStatusCode: 200,
        requestId: undefined,
        extendedRequestId: undefined,
        cfId: undefined,
      },
    });
  });

  it("decorates service exceptions with unmodeled fields", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 400,
      headers: {},
      body: Buffer.from(`{"UnmodeledField":"Oh no"}`),
    });

    const protocol = new AwsJson1_1Protocol({
      defaultNamespace: "",
      serviceTarget: "JsonRpc11",
    });

    const output = await protocol
      .deserializeResponse(
        {
          namespace: "ns",
          name: "Empty",
          traits: 0,
          input: "unit" as const,
          output: [3, "ns", "EmptyOutput", 0, [], []],
        },
        context,
        httpResponse
      )
      .catch((e) => {
        return e;
      });

    expect(output).toMatchObject({
      UnmodeledField: "Oh no",
      $metadata: {
        httpStatusCode: 400,
      },
    });
  });

  describe("performance baseline", () => {
    const protocol = new AwsJson1_1Protocol({
      defaultNamespace: "",
      serviceTarget: "JsonRpc11",
    });

    it("should serialize objects", async () => {
      const timings: string[] = [];
      const objects = [];

      for (let i = 0; i < 12; ++i) {
        const o = createNestingWidget(2 ** i);
        objects.push(o);
      }

      for (let i = 0; i < objects.length; ++i) {
        const o = objects[i];

        const A = performance.now();
        const request = await protocol.serializeRequest(
          {
            input: nestingWidget,
            output: "unit",
            traits: 0,
            namespace: "operation",
            name: "ns",
          },
          o,
          context
        );
        const B = performance.now();

        timings.push(
          `${(B - A).toFixed(2)}ms (JSON length = ${request.body.length}, ${
            request.body.length / 1024 / (B - A)
          } kb/ms)`
        );
      }

      /**
       * No assertion here.
       * In the initial dual-pass implementation,
       * par time is 0 to 30ms for up to 288899 chars of JSON. Up to 11 kb/ms. (kuhe's computer)
       *
       * In the single-pass implementation using string buildup,
       * par time is 0 to 51ms for up to 288899 chars of JSON. Up to 13 kb/ms. (kuhe's computer)
       */
      console.log(`${protocol.constructor.name} performance timings`, timings);
    });
  });
});
