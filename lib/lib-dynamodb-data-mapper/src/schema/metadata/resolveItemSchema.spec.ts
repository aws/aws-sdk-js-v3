import { describe, expect, it } from "vitest";

import { ItemSchema } from "../item";
import { DynamoDbSchema, DynamoDbTable } from "../symbols";
import { resolveMetadataFromCtor } from "./resolveItemSchema";

describe("resolveMetadataFromCtor", () => {
  it("should return schema and table name from class prototype metadata", () => {
    class User {
      id!: string;
      name!: string;
    }

    const schema: ItemSchema = {
      id: { type: "String", keyType: "HASH" },
      name: { type: "String" },
    };

    Object.defineProperty(User.prototype, DynamoDbSchema, { value: schema });
    Object.defineProperty(User.prototype, DynamoDbTable, { value: "Users" });

    const { schema: resolvedSchema, tableName } = resolveMetadataFromCtor(User);

    expect(resolvedSchema).toEqual(schema);
    expect(tableName).toBe("Users");
  });

  it("throws if schema metadata is missing", () => {
    class NoSchema {}

    expect(() => resolveMetadataFromCtor(NoSchema)).toThrow(/schema/i);
  });

  it("throws if table name metadata is missing", () => {
    class NoTable {}
    const schema: ItemSchema = {
      id: { type: "String", keyType: "HASH" },
    };
    Object.defineProperty(NoTable.prototype, DynamoDbSchema, { value: schema });

    expect(() => resolveMetadataFromCtor(NoTable)).toThrow(/table/i);
  });
});
