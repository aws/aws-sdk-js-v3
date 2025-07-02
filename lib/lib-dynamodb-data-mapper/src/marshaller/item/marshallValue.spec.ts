import { describe, expect, it } from "vitest";

import { marshallValue } from "./marshallValue";

const iso8601 = "2000-01-01T00:00:00Z";
const epoch = 946684800;

const buffer = new Uint8Array([1, 2, 3]);

describe("marshallValue", () => {
  it("should marshall a string", () => {
    expect(marshallValue({ type: "String" }, "hello")).toEqual({ S: "hello" });
  });

  it("should marshall a number", () => {
    expect(marshallValue({ type: "Number" }, 123)).toEqual({ N: "123" });
  });

  it("should marshall a boolean", () => {
    expect(marshallValue({ type: "Boolean" }, false)).toEqual({ BOOL: false });
  });

  it("should marshall a date (object)", () => {
    const date = new Date(iso8601);
    expect(marshallValue({ type: "Date" }, date)).toEqual({ N: epoch.toString() });
  });

  it("should marshall a date (string)", () => {
    expect(marshallValue({ type: "Date" }, iso8601)).toEqual({ N: epoch.toString() });
  });

  it("should marshall a date (epoch number)", () => {
    const millis = epoch * 1000;
    expect(marshallValue({ type: "Date" }, millis)).toEqual({ N: epoch.toString() });
  });

  it("should marshall null as { NULL: true }", () => {
    expect(marshallValue({ type: "String" }, null)).toEqual({ NULL: true });
  });

  it("should marshall a binary field (Uint8Array)", () => {
    expect(marshallValue({ type: "Binary" }, buffer)).toEqual({ B: buffer });
  });

  it("should marshall an empty binary field as NULL", () => {
    expect(marshallValue({ type: "Binary" }, new Uint8Array())).toEqual({ NULL: true });
  });

  it("should marshall a list of strings", () => {
    expect(marshallValue({ type: "List", memberType: { type: "String" } }, ["a", "b"])).toEqual({
      L: [{ S: "a" }, { S: "b" }],
    });
  });

  it("should marshall a map of booleans", () => {
    expect(marshallValue({ type: "Map", memberType: { type: "Boolean" } }, { a: true, b: false })).toEqual({
      M: { a: { BOOL: true }, b: { BOOL: false } },
    });
  });

  it("should marshall a tuple", () => {
    expect(marshallValue({ type: "Tuple", members: [{ type: "Boolean" }, { type: "Number" }] }, [true, 42])).toEqual({
      L: [{ BOOL: true }, { N: "42" }],
    });
  });

  it("should marshall a string set", () => {
    expect(marshallValue({ type: "Set", memberType: "String" }, new Set(["a", "b"]))).toEqual({ SS: ["a", "b"] });
  });

  it("should marshall a number set", () => {
    expect(marshallValue({ type: "Set", memberType: "Number" }, new Set([1, 2]))).toEqual({ NS: ["1", "2"] });
  });

  it("should marshall a binary set", () => {
    expect(marshallValue({ type: "Set", memberType: "Binary" }, new Set([buffer]))).toEqual({ BS: [buffer] });
  });

  it("should marshall document deeply", () => {
    expect(
      marshallValue(
        {
          type: "Document",
          members: {
            nested: { type: "Document", members: { id: { type: "String" } } },
          },
        },
        { nested: { id: "x" } }
      )
    ).toEqual({ M: { nested: { M: { id: { S: "x" } } } } });
  });
});

describe("marshallValue - error handling", () => {
  it("throws on unsupported schema type", () => {
    const badSchema = { type: "Invalid" } as any;
    expect(() => marshallValue(badSchema, "value")).toThrow("Unsupported schema type");
  });

  it("throws for overly large numbers", () => {
    const schema = { type: "Number" as const };
    const value = Number.MAX_SAFE_INTEGER + 100;
    expect(() => marshallValue(schema, value)).toThrow(/exceeds MAX_SAFE_INTEGER/);
  });

  it("throws on unknown Set memberType", () => {
    const schema = { type: "Set", memberType: "Unknown" as any } as const;
    const value = new Set(["a", "b"]);
    expect(() => marshallValue(schema, value)).toThrow(/Unsupported set member type/);
  });
});

describe("marshallValue - List support with iterable", () => {
  it("should marshall an iterable of strings", () => {
    function* stringGen() {
      yield "a";
      yield "b";
    }
    const schema = { type: "List", memberType: { type: "String" } } as const;
    const result = marshallValue(schema, stringGen());
    expect(result).toEqual({ L: [{ S: "a" }, { S: "b" }] });
  });
});

describe("marshallValue - Any with mixed list types", () => {
  it("should marshall a mixed-type list using Any", () => {
    const buffer = new Uint8Array([1, 2]);
    const input = ["a", 123, true, buffer, { nested: "yes" }];
    const schema = { type: "Any" as const };
    const result = marshallValue(schema, input);

    expect(result).toEqual({
      L: [{ S: "a" }, { N: "123" }, { BOOL: true }, { B: buffer }, { M: { nested: { S: "yes" } } }],
    });
  });
});
