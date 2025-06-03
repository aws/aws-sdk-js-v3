import { describe, expect, it } from "vitest";

import { DynamoDbSchema, DynamoDbTable, getSchema, getTableName } from "./symbols";

describe("getSchema", () => {
  it("should return the schema bound at the DynamoDbSchema symbol", () => {
    const schema = { id: { type: "String" } };
    const obj = { [DynamoDbSchema]: schema };
    expect(getSchema(obj)).toBe(schema);
  });

  it("should throw if the provided object does not have a schema", () => {
    expect(() => getSchema({})).toThrow();
  });
});

describe("getTableName", () => {
  it("should return the name bound at the DynamoDbTable symbol", () => {
    const obj = { [DynamoDbTable]: "Users" };
    expect(getTableName(obj)).toBe("Users");
  });

  it("should throw if the provided object does not have a table name", () => {
    expect(() => getTableName({})).toThrow();
  });
});
