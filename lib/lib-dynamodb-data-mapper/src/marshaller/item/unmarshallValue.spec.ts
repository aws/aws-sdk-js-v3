import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { describe, expect, it } from "vitest";

import { TupleType } from "../../schema";
import { unmarshallValue } from "./unmarshallValue";

const epoch = 946684800;
const buffer = new Uint8Array([1, 2, 3]);

describe("unmarshallValue", () => {
  it("should unmarshall a string", () => {
    expect(unmarshallValue({ type: "String" }, { S: "hello" })).toBe("hello");
  });

  it("should unmarshall a number", () => {
    expect(unmarshallValue({ type: "Number" }, { N: "123" })).toBe(123);
  });

  it("should unmarshall a boolean", () => {
    expect(unmarshallValue({ type: "Boolean" }, { BOOL: true })).toBe(true);
  });

  it("should unmarshall a date", () => {
    expect(unmarshallValue({ type: "Date" }, { N: epoch.toString() })).toEqual(new Date(epoch * 1000));
  });

  it("should unmarshall null to null", () => {
    expect(unmarshallValue({ type: "Null" }, { NULL: true })).toBeNull();
  });

  it("should unmarshall list of numbers", () => {
    expect(unmarshallValue({ type: "List", memberType: { type: "Number" } }, { L: [{ N: "1" }, { N: "2" }] })).toEqual([
      1, 2,
    ]);
  });

  it("should unmarshall map of strings", () => {
    expect(unmarshallValue({ type: "Map", memberType: { type: "String" } }, { M: { x: { S: "y" } } })).toEqual({
      x: "y",
    });
  });

  it("should unmarshall a tuple", () => {
    expect(
      unmarshallValue(
        {
          type: "Tuple",
          members: [{ type: "Boolean" }, { type: "Number" }],
        },
        { L: [{ BOOL: true }, { N: "99" }] }
      )
    ).toEqual([true, 99]);
  });

  it("should unmarshall string set", () => {
    expect(unmarshallValue({ type: "Set", memberType: "String" }, { SS: ["a", "b"] })).toEqual(new Set(["a", "b"]));
  });

  it("should unmarshall number set", () => {
    expect(unmarshallValue({ type: "Set", memberType: "Number" }, { NS: ["1", "2"] })).toEqual(new Set([1, 2]));
  });

  it("should unmarshall binary set", () => {
    expect(unmarshallValue({ type: "Set", memberType: "Binary" }, { BS: [buffer] })).toEqual(new Set([buffer]));
  });

  it("should unmarshall document deeply", () => {
    expect(
      unmarshallValue(
        {
          type: "Document",
          members: {
            nested: { type: "Document", members: { id: { type: "String" } } },
          },
          valueConstructor: class {},
        },
        { M: { nested: { M: { id: { S: "x" } } } } }
      )
    ).toEqual({ nested: { id: "x" } });
  });

  it("should wrap number with wrapNumbers: true", () => {
    const schema = { type: "Number" } as const;
    const attr = { N: "42" };
    const result = unmarshallValue(schema, attr, { wrapNumbers: true });
    expect(result).toEqual({ value: "42" });
  });

  it("should wrap number using custom wrapNumbers function", () => {
    const schema = { type: "Number" } as const;
    const attr = { N: "12345678901234567890" };
    const result = unmarshallValue(schema, attr, {
      wrapNumbers: (s) => BigInt(s),
    });
    expect(result).toEqual(BigInt("12345678901234567890"));
  });

  it("should unmarshall NULL to empty string for String schema", () => {
    expect(unmarshallValue({ type: "String" }, { NULL: true })).toBe("");
  });

  it("should unmarshall NULL to empty Uint8Array for Binary schema", () => {
    expect(unmarshallValue({ type: "Binary" }, { NULL: true })).toEqual(new Uint8Array(0));
  });

  it("should return undefined for invalid number input (e.g., string instead of N)", () => {
    const schema = { type: "Number" } as const;
    const attr = { S: "oops" };
    expect(unmarshallValue(schema, attr as any)).toBeUndefined();
  });

  it("returns undefined for missing Tuple items", () => {
    const schema: TupleType = {
      type: "Tuple",
      members: [{ type: "String" }, { type: "Number" }],
    };
    const attr = { L: [] };
    const result = unmarshallValue(schema, attr);
    expect(result).toEqual([undefined, undefined]);
  });
});

describe("unmarshallValue - error handling", () => {
  it("throws on unsupported schema type", () => {
    const schema = { type: "Bogus" } as any;
    const attr: AttributeValue = { S: "value" };
    expect(() => unmarshallValue(schema, attr)).toThrow("Unsupported schema type");
  });

  it("returns undefined for unsupported set member type", () => {
    const schema = { type: "Set", memberType: "Fake" as any } as const;
    const attr: AttributeValue = { SS: ["a", "b"] };
    const result = unmarshallValue(schema, attr);
    expect(result).toBeUndefined();
  });

  it("returns undefined for unsupported Tuple value", () => {
    const schema: TupleType = {
      type: "Tuple",
      members: [{ type: "String" }, { type: "Number" }],
    };
    const result = unmarshallValue(schema, { L: [] });
    expect(result).toEqual([undefined, undefined]);
  });

  it("wraps number with wrapNumbers: true", () => {
    const schema = { type: "Number" } as const;
    const attr = { N: "42" };
    const result = unmarshallValue(schema, attr, { wrapNumbers: true });
    expect(result).toEqual({ value: "42" });
  });

  it("wraps number using custom wrapNumbers function", () => {
    const schema = { type: "Number" } as const;
    const attr = { N: "12345678901234567890" };
    const result = unmarshallValue(schema, attr, {
      wrapNumbers: (s) => BigInt(s),
    });
    expect(result).toEqual(BigInt("12345678901234567890"));
  });
});
