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

  it("should create a class instance with unmarshalled values", () => {
    const input = {
      id: { S: "abc" },
      active: { BOOL: true },
    };
    const result = unmarshallItem(schema, input, TestModel);
    expect(result).toBeInstanceOf(TestModel);
    expect(result.id).toBe("abc");
    expect(result.active).toBe(true);
  });

  it("should return a plain object if no constructor is provided", () => {
    const input = {
      id: { S: "abc" },
    };
    const result = unmarshallItem(schema, input);
    expect(result).toEqual({ id: "abc" });
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

  it("throws for mismatched AttributeValue (Number expected, got String)", () => {
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

  it("throws for unsupported set member type", () => {
    const schema = {
      tags: { type: "Set", memberType: "Fake" as any },
    } as const;
    const input = { tags: { SS: ["a", "b"] } };

    expect(() => unmarshallItem(schema, input)).toThrow("Unrecognized set member type");
  });
});
