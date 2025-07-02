import { describe, expect, it } from "vitest";
import { vi } from "vitest";

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

describe("error handling", () => {
  it("throws for unknown schema type", () => {
    const schema = {
      field: { type: "Bogus" as any },
    };
    const input = { field: "test" };

    expect(() => marshallItem(schema, input)).toThrow("Unsupported schema type");
  });

  it("throws for overly large numbers", () => {
    const schema = {
      score: { type: "Number" as const },
    };
    const input = {
      score: Number.MAX_SAFE_INTEGER + 1,
    };

    expect(() => marshallItem(schema, input)).toThrow(/exceeds MAX_SAFE_INTEGER/);
  });

  it("skips undefined values", () => {
    const schema = {
      optional: { type: "String" as const },
    };
    const input = {};

    const result = marshallItem(schema, input);
    expect(result).not.toHaveProperty("optional");
  });

  it("gracefully returns NULL when Document input is invalid", () => {
    const schema = {
      meta: { type: "Document", members: {} },
    } as const;
    const input = { meta: 123 as any };
    expect(marshallItem(schema, input)).toEqual({ meta: { NULL: true } });
  });

  it("gracefully returns NULL when Map input is invalid", () => {
    const schema = {
      settings: { type: "Map", memberType: { type: "String" } },
    } as const;
    const input = { settings: 123 as any };
    expect(marshallItem(schema, input)).toEqual({ settings: { NULL: true } });
  });
});

describe("marshallItem - default provider", () => {
  it("should call a defined default provider if the input is undefined", () => {
    const defaultProvider = vi.fn(() => "default-value");
    const schema: ItemSchema = {
      name: { type: "String", defaultProvider },
    };
    const input = {};
    const result = marshallItem(schema, input);
    expect(result).toEqual({ name: { S: "default-value" } });
    expect(defaultProvider).toHaveBeenCalledTimes(1);
  });

  it("should not call the default provider if the input is defined", () => {
    const defaultProvider = vi.fn(() => "default-value");
    const schema: ItemSchema = {
      name: { type: "String", defaultProvider },
    };
    const input = { name: "user-provided" };
    const result = marshallItem(schema, input);
    expect(result).toEqual({ name: { S: "user-provided" } });
    expect(defaultProvider).not.toHaveBeenCalled();
  });
});

describe("marshallItem - Map schema", () => {
  it("should throw if a value that cannot be converted to a map is received", () => {
    const schema: ItemSchema = {
      map: { type: "Map", memberType: { type: "String" } },
    };
    expect(() => marshallItem(schema, { map: 123 })).toThrow();
  });
});
