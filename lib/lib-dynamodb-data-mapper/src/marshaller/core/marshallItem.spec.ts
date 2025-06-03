import { describe, expect, it } from "vitest";

import type { ItemSchema } from "../../schema/";
import { marshallItem } from "./marshallItem";

describe("marshallItem", () => {
  it("should marshall a complete object", () => {
    const ItemSchema: ItemSchema = {
      id: { type: "String" },
      age: { type: "Number" },
    };
    const input = { id: "abc", age: 25 };
    const result = marshallItem(ItemSchema, input);
    expect(result).toEqual({ id: { S: "abc" }, age: { N: "25" } });
  });

  it("should skip undefined values", () => {
    const ItemSchema: ItemSchema = {
      id: { type: "String" },
      age: { type: "Number" },
    };
    const input = { id: "abc" };
    const result = marshallItem(ItemSchema, input);
    expect(result).toEqual({ id: { S: "abc" } });
  });

  it("should map attribute names if provided", () => {
    const ItemSchema: ItemSchema = {
      name: { type: "String", attributeName: "full_name" },
    };
    const input = { name: "Alice" };
    const result = marshallItem(ItemSchema, input);
    expect(result).toEqual({ full_name: { S: "Alice" } });
  });
});
