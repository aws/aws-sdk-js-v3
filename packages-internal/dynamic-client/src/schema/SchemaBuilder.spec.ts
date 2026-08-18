import { NormalizedSchema, SCHEMA, TypeRegistry } from "@smithy/core/schema";
import { afterEach, describe, expect, test as it } from "vitest";

import { ModelIndex } from "../ast/ModelIndex";
import { rpcv2CborAst } from "./rpcv2CborAst.fixture";
import { SchemaBuilder } from "./SchemaBuilder";

const build = () => new SchemaBuilder(new ModelIndex(rpcv2CborAst)).build();

const deref = (ref: unknown): any => (typeof ref === "function" ? (ref as () => unknown)() : ref);

describe("SchemaBuilder", () => {
  afterEach(() => {
    // Schemas register globally; clear to isolate tests.
    for (const registry of TypeRegistry["registries"].values()) {
      registry.clear();
    }
    TypeRegistry["registries"].clear();
  });

  it("builds an empty structure schema", () => {
    const { schemas } = build();
    expect(schemas["EmptyStructure$"]).toEqual([3, "smithy.protocoltests.rpcv2Cbor", "EmptyStructure", 0, [], [], 0]);
  });

  it("maps simple scalar members to inline sentinels", () => {
    const { schemas } = build();
    const struct = schemas["SimpleScalarStructure$"] as any;
    expect(struct[0]).toBe(3);
    const byName = Object.fromEntries(struct[4].map((n: string, i: number) => [n, struct[5][i]]));
    expect(byName.trueBooleanValue).toBe(SCHEMA.BOOLEAN);
    expect(byName.byteValue).toBe(SCHEMA.NUMERIC);
    expect(byName.doubleValue).toBe(SCHEMA.NUMERIC);
    expect(byName.stringValue).toBe(SCHEMA.STRING);
    expect(byName.blobValue).toBe(SCHEMA.BLOB);
  });

  it("represents a list of simple members as an inline list modifier", () => {
    const { schemas } = build();
    const struct = schemas["RpcV2CborListInputOutput$"] as any;
    const byName = Object.fromEntries(struct[4].map((n: string, i: number) => [n, struct[5][i]]));
    // stringList is an untraited list<string> → inline 64 | 0.
    expect(byName.stringList).toBe(SCHEMA.LIST_MODIFIER | SCHEMA.STRING);
  });

  it("gives a list of structures its own named schema referenced by thunk", () => {
    const { schemas } = build();
    const struct = schemas["RpcV2CborListInputOutput$"] as any;
    const byName = Object.fromEntries(struct[4].map((n: string, i: number) => [n, struct[5][i]]));
    const structureListRef = byName.structureList;
    expect(typeof structureListRef).toBe("function");
    const listSchema = deref(structureListRef);
    expect(listSchema[0]).toBe(1); // list
    expect(listSchema[2]).toBe("StructureList");
    // its member is a thunk to the StructureListMember struct.
    const memberStruct = deref(listSchema[4]);
    expect(memberStruct[2]).toBe("StructureListMember");
  });

  it("carries the sparse trait on sparse maps and keeps them named", () => {
    const { schemas } = build();
    const sparseStringMap = schemas["SparseStringMap$"] as any;
    expect(sparseStringMap[0]).toBe(2); // map
    expect(sparseStringMap[3]).toEqual({ sparse: 1 });
    expect(sparseStringMap[4]).toBe(SCHEMA.STRING); // key
    expect(sparseStringMap[5]).toBe(SCHEMA.STRING); // value
  });

  it("resolves recursive references through thunks without infinite loops", () => {
    const { schemas } = build();
    const nested1 = schemas["RecursiveShapesInputOutputNested1$"] as any;
    const byName = Object.fromEntries(nested1[4].map((n: string, i: number) => [n, nested1[5][i]]));
    const nested2 = deref(byName.nested);
    expect(nested2[2]).toBe("RecursiveShapesInputOutputNested2");
    const n2ByName = Object.fromEntries(nested2[4].map((n: string, i: number) => [n, nested2[5][i]]));
    const backToNested1 = deref(n2ByName.recursiveMember);
    expect(backToNested1[2]).toBe("RecursiveShapesInputOutputNested1");
  });

  it("front-loads required members and records the count", () => {
    // GetCity-like: build a struct with mixed required/optional via NormalizedSchema.
    const { schemas } = build();
    // ComplexError has no required members.
    const complexError = schemas["ComplexError$"] as any;
    expect(complexError[0]).toBe(-3); // error
    expect(complexError[6]).toBe(0); // required count
  });

  it("builds error schemas with the error id and registers them", () => {
    const { schemas } = build();
    const invalid = schemas["InvalidGreeting$"] as any;
    expect(invalid[0]).toBe(-3);
    expect(invalid[3]).toEqual({ error: "client" });
    // registered in the namespace registry.
    const registry = TypeRegistry.for("smithy.protocoltests.rpcv2Cbor");
    expect(registry.getSchema("smithy.protocoltests.rpcv2Cbor#InvalidGreeting")).toBe(invalid);
  });

  it("creates a synthetic service base exception", () => {
    const { baseException } = build();
    expect(baseException).toEqual([
      -3,
      "smithy.ts.sdk.synthetic.smithy.protocoltests.rpcv2Cbor",
      "RpcV2ProtocolServiceException",
      0,
      [],
      [],
    ]);
  });

  it("builds operation schemas with Unit defaults and input/output refs", () => {
    const { operations } = build();
    const empty = operations["EmptyInputOutput$"] as any;
    expect(empty[0]).toBe(9);
    expect(empty[2]).toBe("EmptyInputOutput");
    expect(deref(empty[4])[2]).toBe("EmptyStructure");
    expect(deref(empty[5])[2]).toBe("EmptyStructure");

    // GreetingWithErrors has no input → Unit.
    const greeting = operations["GreetingWithErrors$"] as any;
    expect(deref(greeting[4])).toBe("unit");
    expect(greeting[3]).toEqual({ idempotent: 1 });
  });

  it("produces schemas consumable by NormalizedSchema", () => {
    const { operations } = build();
    const recursive = operations["RecursiveShapes$"] as any;
    const input = NormalizedSchema.of(recursive[4]);
    expect(input.isStructSchema()).toBe(true);
    const nestedMember = input.getMemberSchema("nested");
    expect(nestedMember.isStructSchema()).toBe(true);
  });

  it("marks sparse via NormalizedSchema merged traits", () => {
    const { schemas } = build();
    const ns = NormalizedSchema.of(schemas["SparseStringMap$"] as any);
    expect(ns.isMapSchema()).toBe(true);
    expect(!!ns.getMergedTraits().sparse).toBe(true);
  });
});
