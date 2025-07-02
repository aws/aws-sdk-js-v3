import { describe, expect, it } from "vitest";

import type { ItemSchema } from "../../schema";
import { unmarshallItem } from "./unmarshallItem";

class TestModel {
  id?: string;
  active?: boolean;
}

describe("unmarshallItem", () => {
  const schema: ItemSchema = {
    id: { type: "String" },
    active: { type: "Boolean" },
  };

  it("should return a plain object if no constructor is provided", () => {
    const input = {
      id: { S: "abc" },
    };
    const result = unmarshallItem(schema, input);
    expect(result).toEqual({ id: "abc" });
  });

  it("should unmarshall fields using attributeName if provided", () => {
    const schema = {
      binary: { type: "Binary", attributeName: "bin" },
    } as const;
    const input = { bin: { B: new Uint8Array([1, 2, 3]) } };
    const result = unmarshallItem(schema, input);
    expect(result).toEqual({ binary: new Uint8Array([1, 2, 3]) });
  });

  it("should ignore fields not in schema", () => {
    const schema = { known: { type: "String" } } as const;
    const input = { unknown: { S: "ignore me" } };
    expect(unmarshallItem(schema, input)).toEqual({});
  });

  it("should ignore fields with wrong types", () => {
    const schema = { binary: { type: "Binary" } } as const;
    const input = { binary: { S: "oops" } };
    expect(unmarshallItem(schema, input)).toEqual({});
  });
});

describe("error handling", () => {
  it("throws for unknown schema type", () => {
    const schema = {
      field: { type: "Unknown" as any },
    };
    const input = { field: { S: "value" } };

    expect(() => unmarshallItem(schema, input)).toThrow("Unsupported schema type");
  });

  it("returns undefined for mismatched AttributeValue (Number expected, got String)", () => {
    const schema = {
      score: { type: "Number" as const },
    };
    const input = { score: { S: "not-a-number" } };

    const result = unmarshallItem(schema, input);
    expect(result.score).toBeUndefined();
  });

  it("handles missing fields as undefined", () => {
    const schema = {
      name: { type: "String" as const },
    };
    const input = {}; // field is missing

    const result = unmarshallItem(schema, input);
    expect(result.name).toBeUndefined();
  });

  it("returns undefined for unsupported set member type", () => {
    const schema = {
      tags: { type: "Set", memberType: "Fake" as any },
    } as const;
    const input = { tags: { SS: ["a", "b"] } };

    const result = unmarshallItem(schema, input);
    expect(result.tags).toBeUndefined();
  });
});
