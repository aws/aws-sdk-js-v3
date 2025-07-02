import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { describe, expect, it } from "vitest";

import type { ItemSchema } from "../../schema";
import { unmarshallPlainObject as unmarshallObject } from "./unmarshallPlainObject";

describe("unmarshallObject", () => {
  it("should unmarshall string and number fields correctly", () => {
    const ItemSchema: ItemSchema = {
      id: { type: "String" },
      age: { type: "Number" },
    };

    const item: Record<string, AttributeValue> = {
      id: { S: "abc123" },
      age: { N: "42" },
    };

    const result = unmarshallObject(item, ItemSchema);

    expect(result).toEqual({
      id: "abc123",
      age: 42,
    });
  });

  it("should handle missing attributes gracefully", () => {
    const ItemSchema: ItemSchema = {
      id: { type: "String" },
      optional: { type: "String" },
    };

    const item: Record<string, AttributeValue> = {
      id: { S: "abc123" },
    };

    const result = unmarshallObject(item, ItemSchema);

    expect(result).toEqual({
      id: "abc123",
    });
  });

  it("should unmarshall boolean and null fields correctly", () => {
    const ItemSchema: ItemSchema = {
      active: { type: "Boolean" },
      deleted: { type: "Null" },
    };

    const item: Record<string, AttributeValue> = {
      active: { BOOL: true },
      deleted: { NULL: true },
    };

    const result = unmarshallObject(item, ItemSchema);

    expect(result).toEqual({
      active: true,
      deleted: null,
    });
  });

  it("should unmarshall nested Map values", () => {
    const ItemSchema: ItemSchema = {
      metadata: {
        type: "Map",
        memberType: { type: "String" },
      },
    };

    const item: Record<string, AttributeValue> = {
      metadata: {
        M: {
          source: { S: "imported" },
          version: { S: "1.2.3" },
        },
      },
    };

    const result = unmarshallObject(item, ItemSchema);

    expect(result).toEqual({
      metadata: {
        source: "imported",
        version: "1.2.3",
      },
    });
  });

  it("should unmarshall list of numbers correctly", () => {
    const ItemSchema: ItemSchema = {
      scores: {
        type: "List",
        memberType: { type: "Number" },
      },
    };

    const item: Record<string, AttributeValue> = {
      scores: {
        L: [{ N: "1" }, { N: "2" }, { N: "3" }],
      },
    };

    const result = unmarshallObject(item, ItemSchema);

    expect(result).toEqual({
      scores: [1, 2, 3],
    });
  });
});
