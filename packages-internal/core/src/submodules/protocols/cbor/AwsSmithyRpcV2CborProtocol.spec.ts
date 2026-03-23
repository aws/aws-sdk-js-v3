import { cbor } from "@smithy/core/cbor";
import { error as registerError, TypeRegistry } from "@smithy/core/schema";
import { HttpResponse } from "@smithy/protocol-http";
import type { NumericSchema, StaticErrorSchema, StringSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { context } from "../test-schema.spec";
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

    // set by deserializer middleware, not Protocol.
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

  it("decorates service exceptions with unmodeled fields", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 400,
      headers: {},
      body: cbor.serialize({
        UnmodeledField: "Oh no",
      }),
    });

    const protocol = new AwsSmithyRpcV2CborProtocol({
      defaultNamespace: "",
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

  it("has a shapeId of smithy.protocols#rpcv2Cbor", () => {
    const protocol = new AwsSmithyRpcV2CborProtocol({
      defaultNamespace: "ns",
      awsQueryCompatible: true,
    });
    expect(protocol.getShapeId()).toEqual("smithy.protocols#rpcv2Cbor");
  });

  it("uses compositeErrorRegistries from instantiation", () => {
    const GenericServiceException$: StaticErrorSchema = [
      -3,
      "com.amazonaws.sdk.example",
      "GenericServiceException",
      0,
      [],
      [],
    ];
    class GenericServiceException extends Error {}

    const registry = TypeRegistry.for("com.amazonaws.sdk.example");
    registry.registerError(GenericServiceException$, GenericServiceException);

    const protocol = new (class extends AwsSmithyRpcV2CborProtocol {
      public getCompositeErrorRegistry() {
        return this.compositeErrorRegistry;
      }
    })({
      defaultNamespace: "ns",
      awsQueryCompatible: true,
      errorTypeRegistries: [registry],
    });

    expect(protocol.getCompositeErrorRegistry()).not.toBe(registry);
    expect(protocol.getCompositeErrorRegistry().getSchema("com.amazonaws.sdk.example#GenericServiceException")).toBe(
      GenericServiceException$
    );
  });
});
