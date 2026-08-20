import { SmithyRpcV2CborProtocol } from "@smithy/core/cbor";
import { TypeRegistry } from "@smithy/core/schema";
import { afterEach, describe, expect, test as it } from "vitest";

import { createDynamicClient } from "./createDynamicClient";
import { rpcv2CborAst } from "./schema/rpcv2CborAst.fixture";

describe("createDynamicClient", () => {
  afterEach(() => {
    for (const registry of TypeRegistry["registries"].values()) {
      registry.clear();
    }
    TypeRegistry["registries"].clear();
  });

  it("exports the client class keyed by <Service>Client", () => {
    const exports = createDynamicClient(rpcv2CborAst);
    expect(typeof exports["RpcV2ProtocolClient"]).toBe("function");
  });

  it("exports one <Op>Command constructor per operation", () => {
    const exports = createDynamicClient(rpcv2CborAst);
    const commandNames = Object.keys(exports).filter((k) => k.endsWith("Command"));
    expect(commandNames.sort()).toEqual(
      [
        "EmptyInputOutputCommand",
        "SimpleScalarPropertiesCommand",
        "RecursiveShapesCommand",
        "RpcV2CborListsCommand",
        "RpcV2CborSparseMapsCommand",
        "GreetingWithErrorsCommand",
      ].sort()
    );
  });

  it("exports named shape schemas as <Shape>$ symbols", () => {
    const exports = createDynamicClient(rpcv2CborAst);
    for (const symbol of [
      "EmptyStructure$",
      "SimpleScalarStructure$",
      "RecursiveShapesInputOutputNested1$",
      "StructureList$",
      "SparseStringMap$",
      "InvalidGreeting$",
      "EmptyInputOutput$",
    ]) {
      expect(exports[symbol], symbol).toBeDefined();
    }
  });

  it("exports an aggregated client with lowercased operation methods", () => {
    const exports = createDynamicClient(rpcv2CborAst);
    const AggregatedClass = exports["RpcV2Protocol"] as any;
    expect(AggregatedClass).toBeDefined();
    expect(typeof AggregatedClass.prototype.emptyInputOutput).toBe("function");
    expect(typeof AggregatedClass.prototype.greetingWithErrors).toBe("function");
  });

  it("does not attach aggregated methods to the bare-bones client", () => {
    const exports = createDynamicClient(rpcv2CborAst);
    const ClientClass = exports["RpcV2ProtocolClient"] as any;
    expect(ClientClass.prototype.emptyInputOutput).toBeUndefined();
  });

  it("constructs a working client instance with a command", () => {
    const exports = createDynamicClient(rpcv2CborAst);
    const ClientClass = exports["RpcV2ProtocolClient"] as any;
    const CommandClass = exports["EmptyInputOutputCommand"] as any;
    const client = new ClientClass({
      region: "us-east-1",
      endpoint: "https://example.com",
      requestHandler: { handle: async () => ({ response: {} }), destroy() {} },
    });
    const command = new CommandClass({});
    expect(client.config.protocol).toBeInstanceOf(SmithyRpcV2CborProtocol);
    expect(command.schema[2]).toBe("EmptyInputOutput");
  });

  it("throws for an unsupported protocol", () => {
    class OtherProtocol {
      public getShapeId(): string {
        return "aws.protocols#restJson1";
      }
    }
    expect(() => createDynamicClient(rpcv2CborAst, [OtherProtocol as any])).toThrow(/none of the candidate protocols/);
  });
});
