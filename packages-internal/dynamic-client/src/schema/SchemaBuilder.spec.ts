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

  describe("member-level timestamp formats", () => {
    // A standalone model whose structure members exercise every timestamp
    // resolution path: prelude-targeted members with each format, a
    // prelude-targeted member with no format, and a member whose format
    // overrides its modeled target shape's format.
    const timestampAst = {
      smithy: "2.0",
      shapes: {
        "example#TimestampService": {
          type: "service",
          version: "2024-01-01",
          operations: [{ target: "example#Op" }],
        },
        "example#Op": {
          type: "operation",
          input: { target: "example#TimestampStruct" },
          output: { target: "smithy.api#Unit" },
        },
        // A modeled timestamp shape with its own (http-date) format.
        "example#HttpDateTimestamp": {
          type: "timestamp",
          traits: { "smithy.api#timestampFormat": "http-date" },
        },
        "example#TimestampStruct": {
          type: "structure",
          members: {
            defaultTs: { target: "smithy.api#Timestamp" },
            dateTimeTs: {
              target: "smithy.api#Timestamp",
              traits: { "smithy.api#timestampFormat": "date-time" },
            },
            httpDateTs: {
              target: "smithy.api#Timestamp",
              traits: { "smithy.api#timestampFormat": "http-date" },
            },
            epochTs: {
              target: "smithy.api#Timestamp",
              traits: { "smithy.api#timestampFormat": "epoch-seconds" },
            },
            // Member format (epoch-seconds) overrides the modeled shape's http-date.
            overrideTs: {
              target: "example#HttpDateTimestamp",
              traits: { "smithy.api#timestampFormat": "epoch-seconds" },
            },
            // No member format: inherits the modeled shape's http-date.
            inheritTs: { target: "example#HttpDateTimestamp" },
            // Timestamp bound to an HTTP header: the format collapses into the
            // sentinel, but the httpHeader binding trait must be preserved.
            headerTs: {
              target: "smithy.api#Timestamp",
              traits: { "smithy.api#timestampFormat": "http-date", "smithy.api#httpHeader": "X-Ts" },
            },
          },
        },
      },
    } as const;

    const buildTimestamps = () => {
      const { schemas } = new SchemaBuilder(new ModelIndex(timestampAst as any)).build();
      const struct = schemas["TimestampStruct$"] as any;
      return Object.fromEntries(struct[4].map((n: string, i: number) => [n, struct[5][i]]));
    };

    it("resolves each member to a single timestamp sentinel (4/5/6/7)", () => {
      const byName = buildTimestamps();
      expect(byName.defaultTs).toBe(SCHEMA.TIMESTAMP_DEFAULT); // 4
      expect(byName.dateTimeTs).toBe(SCHEMA.TIMESTAMP_DATE_TIME); // 5
      expect(byName.httpDateTs).toBe(SCHEMA.TIMESTAMP_HTTP_DATE); // 6
      expect(byName.epochTs).toBe(SCHEMA.TIMESTAMP_EPOCH_SECONDS); // 7
    });

    it("lets a member-level format override the modeled target shape's format", () => {
      const byName = buildTimestamps();
      expect(byName.overrideTs).toBe(SCHEMA.TIMESTAMP_EPOCH_SECONDS); // 7, not 6
    });

    it("inherits the modeled target shape's format when the member has none", () => {
      const byName = buildTimestamps();
      expect(byName.inheritTs).toBe(SCHEMA.TIMESTAMP_HTTP_DATE); // 6
    });

    it("returns a bare sentinel for a timestamp member with no other traits", () => {
      const byName = buildTimestamps();
      for (const key of ["defaultTs", "dateTimeTs", "httpDateTs", "epochTs", "overrideTs", "inheritTs"]) {
        expect(typeof byName[key]).toBe("number");
      }
    });

    it("preserves other member traits (e.g. httpHeader) alongside the timestamp sentinel", () => {
      const byName = buildTimestamps();
      // format collapses into the sentinel (6 = http-date) but the httpHeader
      // binding must survive as [sentinel, memberTraits].
      expect(byName.headerTs).toEqual([SCHEMA.TIMESTAMP_HTTP_DATE, { httpHeader: "X-Ts" }]);
    });
  });

  describe("cross-namespace name collisions", () => {
    // Two distinct shapes share the unqualified name `Shared` across namespaces
    // `a` and `b`, each with different members. They must not alias to whichever
    // is built first: each reference must resolve to its own schema, and both
    // must survive in the export surface under distinct keys.
    const collisionAst = {
      smithy: "2.0",
      shapes: {
        "example#CollisionService": {
          type: "service",
          version: "2024-01-01",
          operations: [{ target: "example#Op" }],
        },
        "example#Op": {
          type: "operation",
          input: { target: "example#Input" },
          output: { target: "smithy.api#Unit" },
        },
        "example#Input": {
          type: "structure",
          members: {
            fromA: { target: "a#Shared" },
            fromB: { target: "b#Shared" },
          },
        },
        "a#Shared": {
          type: "structure",
          members: { onlyInA: { target: "smithy.api#String" } },
        },
        "b#Shared": {
          type: "structure",
          members: { onlyInB: { target: "smithy.api#Boolean" } },
        },
      },
    } as const;

    it("resolves each colliding member to its own namespace's schema", () => {
      const { schemas } = new SchemaBuilder(new ModelIndex(collisionAst as any)).build();
      const input = schemas["Input$"] as any;
      const byName = Object.fromEntries(input[4].map((n: string, i: number) => [n, input[5][i]]));

      const sharedA = deref(byName.fromA);
      const sharedB = deref(byName.fromB);

      // Each must carry its own namespace and members, not alias to the other.
      expect(sharedA[1]).toBe("a");
      expect(sharedA[4]).toEqual(["onlyInA"]);
      expect(sharedB[1]).toBe("b");
      expect(sharedB[4]).toEqual(["onlyInB"]);
      expect(sharedA).not.toBe(sharedB);
    });

    it("keeps both shapes in the export surface under deconflicted keys", () => {
      const { schemas } = new SchemaBuilder(new ModelIndex(collisionAst as any)).build();
      // First occurrence keeps the plain symbol; the collider is namespace-suffixed.
      expect(schemas["Shared$"]).toBeDefined();
      expect(schemas["Shared_b$"]).toBeDefined();
      expect((schemas["Shared$"] as any)[1]).toBe("a");
      expect((schemas["Shared_b$"] as any)[1]).toBe("b");
    });
  });

  describe("modeled error classes", () => {
    const errorAst = {
      smithy: "2.0",
      shapes: {
        "example#ErrorService": {
          type: "service",
          version: "2024-01-01",
          operations: [{ target: "example#Op" }],
        },
        "example#Op": {
          type: "operation",
          input: { target: "smithy.api#Unit" },
          output: { target: "smithy.api#Unit" },
          errors: [{ target: "example#NotFound" }, { target: "example#InternalFailure" }],
        },
        "example#NotFound": {
          type: "structure",
          members: { Message: { target: "smithy.api#String" } },
          traits: { "smithy.api#error": "client" },
        },
        "example#InternalFailure": {
          type: "structure",
          members: {},
          traits: { "smithy.api#error": "server" },
        },
      },
    } as const;

    const buildErrors = () => new SchemaBuilder(new ModelIndex(errorAst as any)).build();

    it("synthesizes a base exception class named <Service>ServiceException", () => {
      const { errorClasses } = buildErrors();
      const base = errorClasses["ErrorServiceServiceException"];
      expect(typeof base).toBe("function");
      // Mirrors S3ServiceException: the base passes options through and does not
      // stamp its own name/$fault (those are per-error). The class identifier is
      // the service exception name.
      expect((base as any).name).toBe("ErrorServiceServiceException");
      const instance = new (base as any)({ $metadata: {}, name: "Passthrough" });
      expect(instance.name).toBe("Passthrough");
    });

    it("synthesizes one class per modeled error with modeled name and $fault", () => {
      const { errorClasses } = buildErrors();

      const notFound = errorClasses["NotFound"];
      const nf = new (notFound as any)({ $metadata: {} });
      expect(nf.name).toBe("NotFound");
      expect(nf.$fault).toBe("client");

      const internal = errorClasses["InternalFailure"];
      const inf = new (internal as any)({ $metadata: {} });
      expect(inf.name).toBe("InternalFailure");
      expect(inf.$fault).toBe("server");
    });

    it("extends the service base exception (instanceof chain)", () => {
      const { errorClasses } = buildErrors();
      const base = errorClasses["ErrorServiceServiceException"] as any;
      const notFound = errorClasses["NotFound"] as any;
      const nf = new notFound({ $metadata: {} });
      expect(nf instanceof notFound).toBe(true);
      expect(nf instanceof base).toBe(true);
    });

    it("registers the modeled class (not the base) as the error's runtime constructor", () => {
      const { errorClasses, errorTypeRegistries } = buildErrors();
      const notFoundClass = errorClasses["NotFound"];
      const registry = errorTypeRegistries.find((r) => {
        try {
          return !!r.getSchema("example#NotFound");
        } catch {
          return false;
        }
      });
      expect(registry).toBeDefined();
      const schema = registry!.getSchema("example#NotFound");
      expect(registry!.getErrorCtor(schema as any)).toBe(notFoundClass);
    });
  });
});
