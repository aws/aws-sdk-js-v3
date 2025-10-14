import { cbor } from "@smithy/core/cbor";
import { error as registerError } from "@smithy/core/schema";
import { HttpResponse } from "@smithy/protocol-http";
import type { NumericSchema, StringSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { AwsSmithyRpcV2CborProtocol } from "./AwsSmithyRpcV2CborProtocol";

describe(AwsSmithyRpcV2CborProtocol.name, () => {
  it("should support awsQueryCompatible", async () => {
    const protocol = new AwsSmithyRpcV2CborProtocol({
      defaultNamespace: "ns",
      awsQueryCompatible: true,
    });

    class MyQueryError extends Error {}

    registerError(
      "ns",
      "MyQueryError",
      { error: "client" },
      ["Message", "Prop2"],
      [0 satisfies StringSchema, 1 satisfies NumericSchema],
      MyQueryError
    );

    const body = cbor.serialize({
      Message: "oh no",
      Prop2: 9999,
    });

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
