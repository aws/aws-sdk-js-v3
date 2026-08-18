import { cbor, SmithyRpcV2CborProtocol } from "@smithy/core/cbor";
import { HttpResponse } from "@smithy/core/protocols";
import { TypeRegistry } from "@smithy/core/schema";
import type { HttpRequest } from "@smithy/types";
import { afterEach, describe, expect, test as it } from "vitest";

import { createDynamicClient } from "./createDynamicClient";
import { rpcv2CborAst } from "./schema/rpcv2CborAst.fixture";

/**
 * A mock request handler that records the outgoing request and replies with a
 * caller-provided CBOR body. This exercises the full serialize/deserialize
 * round-trip of the dynamically built client without any network I/O.
 */
class MockHandler {
  public lastRequest?: HttpRequest;

  public constructor(
    private readonly statusCode: number,
    private readonly responseBody: Uint8Array
  ) {}

  public async handle(request: HttpRequest): Promise<{ response: HttpResponse }> {
    this.lastRequest = request;
    return {
      response: new HttpResponse({
        statusCode: this.statusCode,
        headers: { "smithy-protocol": "rpc-v2-cbor" },
        body: this.responseBody,
      }),
    };
  }

  public destroy(): void {}
}

const clientWith = (handler: MockHandler) => {
  const exports = createDynamicClient(rpcv2CborAst, [SmithyRpcV2CborProtocol as any]);
  const ClientClass = exports["RpcV2ProtocolClient"] as any;
  const client = new ClientClass({ region: "us-east-1", endpoint: "https://localhost", requestHandler: handler });
  return { exports, client };
};

describe("@smithy/dynamic-client integration (rpcv2Cbor)", () => {
  afterEach(() => {
    for (const registry of TypeRegistry["registries"].values()) {
      registry.clear();
    }
    TypeRegistry["registries"].clear();
  });

  it("serializes an empty operation request and deserializes an empty response", async () => {
    const handler = new MockHandler(200, cbor.serialize({}));
    const { exports, client } = clientWith(handler);
    const Command = exports["EmptyInputOutputCommand"] as any;

    const output = await client.send(new Command({}));

    // The RPCv2 CBOR protocol targets POST /service/<Service>/operation/<Op>.
    expect(handler.lastRequest?.method).toBe("POST");
    expect(handler.lastRequest?.path).toContain("EmptyInputOutput");
    expect(handler.lastRequest?.headers["smithy-protocol"]).toBe("rpc-v2-cbor");
    expect(output.$metadata.httpStatusCode).toBe(200);
  });

  it("round-trips scalar properties through CBOR", async () => {
    const responseValue = {
      trueBooleanValue: true,
      byteValue: 7,
      doubleValue: 1.5,
      stringValue: "hello",
    };
    const handler = new MockHandler(200, cbor.serialize(responseValue));
    const { exports, client } = clientWith(handler);
    const Command = exports["SimpleScalarPropertiesCommand"] as any;

    const output = await client.send(new Command({ stringValue: "request", trueBooleanValue: false, byteValue: 1 }));

    // Request body is CBOR-encoded and decodes back to the input.
    const sentBody = cbor.deserialize(handler.lastRequest!.body as Uint8Array);
    expect(sentBody).toMatchObject({ stringValue: "request", trueBooleanValue: false, byteValue: 1 });

    // Response body deserializes into the output shape.
    expect(output.stringValue).toBe("hello");
    expect(output.trueBooleanValue).toBe(true);
    expect(output.byteValue).toBe(7);
    expect(output.doubleValue).toBe(1.5);
  });

  it("round-trips recursive shapes", async () => {
    const nested = {
      nested: {
        foo: "a",
        nested: {
          bar: "b",
          recursiveMember: { foo: "c" },
        },
      },
    };
    const handler = new MockHandler(200, cbor.serialize(nested));
    const { exports, client } = clientWith(handler);
    const Command = exports["RecursiveShapesCommand"] as any;

    const output = await client.send(new Command(nested));

    const sentBody = cbor.deserialize(handler.lastRequest!.body as Uint8Array);
    expect(sentBody).toMatchObject(nested);
    expect(output.nested.nested.recursiveMember.foo).toBe("c");
  });

  it("deserializes a modeled error response into a thrown exception", async () => {
    const handler = new MockHandler(
      400,
      cbor.serialize({
        __type: "smithy.protocoltests.rpcv2Cbor#InvalidGreeting",
        Message: "nope",
      })
    );
    const { exports, client } = clientWith(handler);
    const Command = exports["GreetingWithErrorsCommand"] as any;

    await expect(client.send(new Command({}))).rejects.toMatchObject({
      message: "nope",
    });
  });

  it("installs runtime typechecking that flags input mismatches", async () => {
    const handler = new MockHandler(200, cbor.serialize({}));
    // stringValue is modeled as a string; pass a number to trigger RTTC.
    const exports = createDynamicClient(rpcv2CborAst, [SmithyRpcV2CborProtocol as any], { input: "throw" });
    const ClientClass = exports["RpcV2ProtocolClient"] as any;
    const Command = exports["SimpleScalarPropertiesCommand"] as any;
    const client = new ClientClass({ region: "us-east-1", endpoint: "https://localhost", requestHandler: handler });

    await expect(client.send(new Command({ stringValue: 123 }))).rejects.toThrow(/input validation/);
  });

  it("can disable runtime typechecking", async () => {
    const handler = new MockHandler(200, cbor.serialize({}));
    const exports = createDynamicClient(rpcv2CborAst, [SmithyRpcV2CborProtocol as any], {
      input: false,
      output: false,
    });
    const ClientClass = exports["RpcV2ProtocolClient"] as any;
    const Command = exports["SimpleScalarPropertiesCommand"] as any;
    const client = new ClientClass({ region: "us-east-1", endpoint: "https://localhost", requestHandler: handler });

    // With RTTC disabled, the mismatched input does not throw.
    await expect(client.send(new Command({ stringValue: 123 }))).resolves.toBeDefined();
  });
});
