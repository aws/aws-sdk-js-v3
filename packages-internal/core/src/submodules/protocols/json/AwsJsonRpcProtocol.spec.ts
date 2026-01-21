import { TypeRegistry } from "@smithy/core/schema";
import { HttpResponse } from "@smithy/protocol-http";
import type { NumericSchema, StaticErrorSchema, StringSchema, TimestampEpochSecondsSchema } from "@smithy/types";
import { fromUtf8 } from "@smithy/util-utf8";
import { describe, expect, test as it } from "vitest";

import { AwsJsonRpcProtocol } from "./AwsJsonRpcProtocol";

describe(AwsJsonRpcProtocol.name, () => {
  const protocol = new (class extends AwsJsonRpcProtocol {
    constructor() {
      super({ defaultNamespace: "ns", serviceTarget: "", awsQueryCompatible: true });
    }

    getShapeId(): string {
      throw new Error("Method not implemented.");
    }

    protected getJsonRpcVersion(): "1.1" | "1.0" {
      throw new Error("Method not implemented.");
    }
  })();

  it("has expected codec settings", async () => {
    const codec = protocol.getPayloadCodec();
    expect(codec.settings).toEqual({
      jsonName: false,
      timestampFormat: {
        default: 7 satisfies TimestampEpochSecondsSchema,
        useTrait: true,
      },
    });
  });

  it("should support awsQueryCompatible", async () => {
    class MyQueryError extends Error {}

    const errorSchema: StaticErrorSchema = [
      -3,
      "ns",
      "MyQueryError",
      { error: "client" },
      ["Message", "Prop2"],
      [0 satisfies StringSchema, 1 satisfies NumericSchema],
    ];

    TypeRegistry.for(`${errorSchema[1]}#${errorSchema[2]}`).registerError(errorSchema, MyQueryError);

    const body = fromUtf8(
      JSON.stringify({
        Message: "oh no",
        Prop2: 9999,
      })
    );

    const error = await (async () => {
      return protocol.deserializeResponse(
        {
          namespace: "ns",
          name: "Operation",
          traits: 0,
          input: "unit",
          output: "unit",
        },
        {} as any,
        new HttpResponse({
          statusCode: 400,
          headers: {
            "x-amzn-query-error": "MyQueryError;Client",
          },
          body,
        })
      );
    })().catch((e: any) => e);

    expect(error.$metadata).toEqual({
      cfId: undefined,
      extendedRequestId: undefined,
      httpStatusCode: 400,
      requestId: undefined,
    });

    // set by deserializer middleware, not protocol
    expect(error.$response).toEqual(undefined);

    expect(error).toMatchObject({
      $fault: "client",
      message: "oh no",
      Prop2: 9999,
      Error: {
        Code: MyQueryError.name,
        Message: "oh no",
        Type: "Client",
        Prop2: 9999,
      },
      Type: "Client",
      Code: MyQueryError.name,
    });
  });
});
