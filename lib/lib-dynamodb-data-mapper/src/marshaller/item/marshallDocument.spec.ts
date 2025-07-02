import { describe, expect, it } from "vitest";

import type { DocumentType } from "../../schema";
import { marshallDocument } from "./marshallDocument";

class Profile {
  bio!: string;
  age!: number;
}

const schema: DocumentType = {
  type: "Document",
  members: {
    bio: { type: "String" },
    age: { type: "Number" },
  },
  valueConstructor: Profile,
};

describe("marshallDocument", () => {
  it("should marshall nested object correctly", () => {
    const value = { bio: "developer", age: 30 };
    const result = marshallDocument(value, schema);

    expect(result).toEqual({
      M: {
        bio: { S: "developer" },
        age: { N: "30" },
      },
    });
  });

  it("should produce M map with expected keys", () => {
    const result = marshallDocument({ bio: "test", age: 1 }, schema);
    expect(result.M).toHaveProperty("bio");
    expect(result.M).toHaveProperty("age");
  });
});

describe("marshallDocument - error handling", () => {
  it("returns empty object if no members match", () => {
    const schema = {
      type: "Document" as const,
      members: {
        bio: { type: "String" as const },
      },
    };

    const input = {};
    const result = marshallDocument(input, schema, {});
    expect(result).toEqual({ M: {} });
  });
});
