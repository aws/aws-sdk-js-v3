import { HttpResponse } from "@smithy/core/protocols";
import { error as registerError, TypeRegistry } from "@smithy/core/schema";
import { fromUtf8 } from "@smithy/core/serde";
import type { NumericSchema, StaticErrorSchema, StringSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { context } from "../test-schema.spec";
import { AwsSmithyRpcV2JsonProtocol } from "./AwsSmithyRpcV2JsonProtocol";

const json = (value: unknown) => fromUtf8(JSON.stringify(value));

const unitOperation = {
  namespace: "ns",
  name: "Operation",
  traits: 0,
  input: "unit",
  output: "unit",
} as const;

describe(AwsSmithyRpcV2JsonProtocol.name, () => {
  it("should support awsQueryCompatible", async () => {
    const protocol = new AwsSmithyRpcV2JsonProtocol({
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

    const error = await protocol
      .deserializeResponse(
        unitOperation,
        {} as any,
        new HttpResponse({
          statusCode: 400,
          headers: {
            "x-amzn-query-error": "MyQueryError;Client",
          },
          body: json({
            Message: "oh no",
            Prop2: 9999,
          }),
        })
      )
      .catch((e: any) => e);

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

  it("adds the x-amzn-query-mode header only when awsQueryCompatible", async () => {
    const endpointContext = {
      ...context,
      endpoint: async () => ({ protocol: "https:", hostname: "example.com", path: "/" }),
    } as any;

    const compatRequest = await new AwsSmithyRpcV2JsonProtocol({
      defaultNamespace: "ns",
      awsQueryCompatible: true,
    }).serializeRequest(unitOperation, {}, endpointContext);
    expect(compatRequest.headers["x-amzn-query-mode"]).toEqual("true");
    expect(compatRequest.headers["smithy-protocol"]).toEqual("rpc-v2-json");

    const plainRequest = await new AwsSmithyRpcV2JsonProtocol({
      defaultNamespace: "ns",
    }).serializeRequest(unitOperation, {}, endpointContext);
    expect(plainRequest.headers["x-amzn-query-mode"]).toBeUndefined();
  });

  it("deserializes a modeled error identified by its __type shape ID", async () => {
    const protocol = new AwsSmithyRpcV2JsonProtocol({
      defaultNamespace: "ns",
    });

    class MyJsonError extends Error {}

    const MyJsonError$: StaticErrorSchema = [
      -3,
      "ns",
      "MyJsonError",
      { error: "client" },
      ["message", "Count"],
      [0 satisfies StringSchema, 1 satisfies NumericSchema],
    ];
    TypeRegistry.for("ns").registerError(MyJsonError$, MyJsonError);

    const error = await protocol
      .deserializeResponse(
        unitOperation,
        context,
        new HttpResponse({
          statusCode: 400,
          headers: {},
          body: json({
            __type: "ns#MyJsonError",
            message: "bad input",
            Count: 3,
          }),
        })
      )
      .catch((e: any) => e);

    expect(error).toBeInstanceOf(MyJsonError);
    expect(error).toMatchObject({
      $fault: "client",
      message: "bad input",
      Count: 3,
      $metadata: {
        httpStatusCode: 400,
      },
    });
  });

  it("decorates service exceptions with unmodeled fields", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 400,
      headers: {},
      body: json({
        UnmodeledField: "Oh no",
      }),
    });

    const protocol = new AwsSmithyRpcV2JsonProtocol({
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

  it("has a shapeId of smithy.protocols#rpcv2Json", () => {
    const protocol = new AwsSmithyRpcV2JsonProtocol({
      defaultNamespace: "ns",
      awsQueryCompatible: true,
    });
    expect(protocol.getShapeId()).toEqual("smithy.protocols#rpcv2Json");
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

    const protocol = new (class extends AwsSmithyRpcV2JsonProtocol {
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
