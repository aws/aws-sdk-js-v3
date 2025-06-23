import { describe, expect, it } from "vitest";

import { ItemSchema } from "../item";
import { DynamoDbSchema, DynamoDbTable } from "../symbols";
import { ConfigurableTableNameOverride } from "../tableNameOverride";
import { resolveModelMetadata } from "./resolveModelMetadata";

describe("resolveModelMetadata", () => {
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
    Object.defineProperty(User, DynamoDbTable, { value: "Users" });

    const { schema: resolvedSchema, tableName } = resolveModelMetadata(
      User,
      ConfigurableTableNameOverride.withConfig()
    );

    expect(resolvedSchema).toEqual(schema);
    expect(tableName).toBe("Users");
  });

  it("throws if schema metadata is missing", () => {
    class NoSchema {}

    expect(() => resolveModelMetadata(NoSchema, ConfigurableTableNameOverride.withConfig())).toThrow(/schema/i);
  });

  it("throws if table name metadata is missing", () => {
    class NoTable {}
    const schema: ItemSchema = {
      id: { type: "String", keyType: "HASH" },
    };
    Object.defineProperty(NoTable.prototype, DynamoDbSchema, { value: schema });

    expect(() => resolveModelMetadata(NoTable)).toThrow(/table/i);
  });
});
