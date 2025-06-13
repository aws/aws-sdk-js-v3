import { describe, expect, it } from "vitest";

import { DynamoDbTable } from "../schema";
import { DefaultTableNameResolver } from "./tableNameResolver";

class User {
  static [DynamoDbTable] = "Users";
}

class Product {}

describe("DefaultTableNameResolver", () => {
  it("resolves table name using static symbol", () => {
    const resolver = new DefaultTableNameResolver();
    expect(resolver.resolve(User)).toBe("Users");
  });

  it("resolves table name using class name if no symbol is set", () => {
    const resolver = new DefaultTableNameResolver();
    expect(resolver.resolve(Product)).toBe("Product");
  });

  it("applies prefix correctly", () => {
    const resolver = new DefaultTableNameResolver({ prefix: "dev_" });
    expect(resolver.resolve(User)).toBe("dev_Users");
  });

  it("applies env suffix correctly", () => {
    const resolver = new DefaultTableNameResolver({ env: "staging" });
    expect(resolver.resolve(User)).toBe("Users_staging");
  });

  it("applies both prefix and env", () => {
    const resolver = new DefaultTableNameResolver({ prefix: "qa_", env: "green" });
    expect(resolver.resolve(User)).toBe("qa_Users_green");
  });

  it("uses override if provided for class name", () => {
    const resolver = new DefaultTableNameResolver({
      overrides: { User: "Users_TestTable" },
    });
    expect(resolver.resolve(User)).toBe("Users_TestTable");
  });

  it("override takes precedence over prefix/env", () => {
    const resolver = new DefaultTableNameResolver({
      prefix: "dev_",
      env: "v2",
      overrides: { User: "Overridden_Users" },
    });
    expect(resolver.resolve(User)).toBe("Overridden_Users");
  });
});
