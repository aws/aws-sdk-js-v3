import { describe, expect, it } from "vitest";

import { DynamoDbTable } from "./symbols";
import { ConfigurableTableNameOverride as TableNameOverride } from "./tableNameOverride";

// Sample models
class User {
  static [DynamoDbTable] = "Users";
}

class Product {}

describe("TableNameOverride", () => {
  it("end-to-end: resolves a full name with prefix/env and fallback", () => {
    const override = TableNameOverride.withConfig({
      prefix: "dev_",
      env: "test",
      overrides: {
        Product: "ExplicitProductTable",
      },
    });

    expect(override.tableName(User)).toBe("dev_Users_test");
    expect(override.tableName(Product)).toBe("ExplicitProductTable");
  });

  it("resolves table name using static symbol", () => {
    const override = TableNameOverride.withConfig({});
    expect(override.tableName(User)).toBe("Users");
  });

  it("resolves table name using class name if no symbol is set", () => {
    const override = TableNameOverride.withConfig({});
    expect(override.tableName(Product)).toBe("Product");
  });

  it("applies prefix correctly", () => {
    const override = TableNameOverride.withConfig({ prefix: "dev_" });
    expect(override.tableName(User)).toBe("dev_Users");
  });

  it("applies env suffix correctly", () => {
    const override = TableNameOverride.withConfig({ env: "staging" });
    expect(override.tableName(User)).toBe("Users_staging");
  });

  it("applies both prefix and env", () => {
    const override = TableNameOverride.withConfig({ prefix: "qa_", env: "green" });
    expect(override.tableName(User)).toBe("qa_Users_green");
  });

  it("uses override if provided for class name", () => {
    const override = TableNameOverride.withConfig({
      overrides: { User: "Users_TestTable" },
    });
    expect(override.tableName(User)).toBe("Users_TestTable");
  });

  it("override takes precedence over prefix/env", () => {
    const override = TableNameOverride.withConfig({
      prefix: "dev_",
      env: "v2",
      overrides: { User: "Overridden_Users" },
    });
    expect(override.tableName(User)).toBe("Overridden_Users");
  });

  it("uses override() static method (Java-style alias)", () => {
    const override = TableNameOverride.override("HardcodedTable");
    expect(override.tableName(User)).toBe("HardcodedTable");
    expect(override.tableName(Product)).toBe("HardcodedTable");
  });
});
