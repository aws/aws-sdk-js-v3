import { error as registerError, op } from "@smithy/core/schema";
import { HttpResponse } from "@smithy/protocol-http";
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

    registerError(
      "ns",
      "MyQueryError",
      { error: "client" },
      ["Message", "Prop2"],
      [0 satisfies StringSchema, 1 satisfies NumericSchema],
      MyQueryError
    );

    const body = fromUtf8(
      JSON.stringify({
        Message: "oh no",
        Prop2: 9999,
      })
    );

    const error = await (async () => {
      return protocol.deserializeResponse(
        op("ns", "Operation", 0, "unit", "unit"),
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

    expect(error.$response).toEqual(
      new HttpResponse({
        body,
        headers: {
          "x-amzn-query-error": "MyQueryError;Client",
        },
        reason: undefined,
        statusCode: 400,
      })
    );

    expect(error.Code).toEqual(MyQueryError.name);
    expect(error.Error.Code).toEqual(MyQueryError.name);

    expect(error.Message).toEqual("oh no");
    expect(error.Prop2).toEqual(9999);

    expect(error.Error.Message).toEqual("oh no");
    expect(error.Error.Prop2).toEqual(9999);

    expect(error).toMatchObject({
      $fault: "client",
      Message: "oh no",
      message: "oh no",
      Prop2: 9999,
      Error: {
        Code: "MyQueryError",
        Message: "oh no",
        Type: "Client",
        Prop2: 9999,
      },
      Type: "Client",
      Code: "MyQueryError",
    });
  });
});
