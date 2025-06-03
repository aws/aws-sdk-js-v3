import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { describe, expect, it } from "vitest";

import type { DocumentType } from "../../schema";
import { unmarshallDocument } from "./unmarshallDocument";

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

describe("unmarshallDocument", () => {
  it("should return undefined for undefined input", () => {
    const result = unmarshallDocument(undefined, schema);
    expect(result).toBeUndefined();
  });

  it("should hydrate a class instance from M record", () => {
    const input: Record<string, AttributeValue> = {
      bio: { S: "engineer" },
      age: { N: "42" },
    };

    const result = unmarshallDocument(input, schema);
    expect(result).toBeInstanceOf(Profile);
    expect(result.bio).toBe("engineer");
    expect(result.age).toBe(42);
  });
});

const docSchema = {
  members: {
    bio: { type: "String" as const },
    age: { type: "Number" as const },
  },
  type: "Document" as const,
};

describe("unmarshallDocument - error handling", () => {
  it("returns undefined when document map is missing", () => {
    expect(unmarshallDocument(undefined, docSchema)).toBeUndefined();
  });

  it("skips nested fields if M is empty", () => {
    const result = unmarshallDocument({}, docSchema);
    expect(result).toEqual({});
  });

  it("assigns default for missing member if defaultProvider exists", () => {
    const schemaWithDefault = {
      members: {
        name: { type: "String" as const, defaultProvider: () => "N/A" },
      },
      type: "Document" as const,
    };

    const result = unmarshallDocument({}, schemaWithDefault);
    expect(result).toEqual({ name: "N/A" });
  });
});
