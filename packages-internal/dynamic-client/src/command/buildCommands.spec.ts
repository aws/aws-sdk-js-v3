import { TypeRegistry } from "@smithy/core/schema";
import { afterEach, describe, expect, test as it } from "vitest";

import { ModelIndex } from "../ast/ModelIndex";
import { rpcv2CborAst } from "../schema/rpcv2CborAst.fixture";
import { SchemaBuilder } from "../schema/SchemaBuilder";
import { buildCommands } from "./buildCommands";

describe("buildCommands", () => {
  afterEach(() => {
    for (const registry of TypeRegistry["registries"].values()) {
      registry.clear();
    }
    TypeRegistry["registries"].clear();
  });

  const setup = () => {
    const index = new ModelIndex(rpcv2CborAst);
    const { operations } = new SchemaBuilder(index).build();
    return buildCommands("RpcV2Protocol", "RpcV2ProtocolClient", operations, index.getOperationIds());
  };

  it("creates one command per operation, keyed by <Op>Command", () => {
    const commands = setup();
    expect(Object.keys(commands).sort()).toEqual(
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

  it("exposes getEndpointParameterInstructions as a static method", () => {
    const commands = setup();
    const Ctor = commands["EmptyInputOutputCommand"] as any;
    expect(typeof Ctor.getEndpointParameterInstructions).toBe("function");
    expect(Ctor.getEndpointParameterInstructions()).toHaveProperty("Region");
    expect(Ctor.getEndpointParameterInstructions()).toHaveProperty("Endpoint");
  });

  it("attaches the operation schema to command instances", () => {
    const commands = setup();
    const Ctor = commands["EmptyInputOutputCommand"] as any;
    const instance = new Ctor({});
    expect(instance.schema[0]).toBe(9); // operation id
    expect(instance.schema[2]).toBe("EmptyInputOutput");
    expect(instance.input).toEqual({});
  });

  it("defaults input to an empty object when omitted", () => {
    const commands = setup();
    const Ctor = commands["GreetingWithErrorsCommand"] as any;
    const instance = new Ctor();
    expect(instance.input).toEqual({});
  });
});
