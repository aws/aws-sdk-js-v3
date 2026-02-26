import { join, sep } from "node:path";
import { describe, expect, it } from "vitest";

import { getTypeScriptPackageJsonPath } from "./getTypeScriptPackageJsonPath";

describe(getTypeScriptPackageJsonPath.name, () => {
  it("returns node_modules/typescript/package.json when dirname is empty", () => {
    expect(getTypeScriptPackageJsonPath()).toBe(join("node_modules", "typescript", "package.json"));
  });

  it("returns path relative to dirname when not inside node_modules", () => {
    const dirname = join("some", "path");
    expect(getTypeScriptPackageJsonPath(dirname)).toBe(join(dirname, "node_modules", "typescript", "package.json"));
  });

  it("returns path relative to first node_modules when inside node_modules", () => {
    const dirname = join("project", "node_modules", "@aws-sdk", "client-s3");
    expect(getTypeScriptPackageJsonPath(dirname)).toBe(join("project", "node_modules", "typescript", "package.json"));
  });

  it("handles nested node_modules by using the first occurrence", () => {
    const dirname = join("project", "node_modules", "pkg", "node_modules", "nested");
    expect(getTypeScriptPackageJsonPath(dirname)).toBe(join("project", "node_modules", "typescript", "package.json"));
  });

  it.each([
    [["foo", "."].join(sep), "foo"],
    [["foo", "..", "bar"].join(sep), "bar"],
    [["foo", ".", "bar"].join(sep), join("foo", "bar")],
  ])("normalizes mixed path separators for '%s'", (dirname, nodeModulesPath) => {
    expect(getTypeScriptPackageJsonPath(dirname)).toBe(
      join(nodeModulesPath, "node_modules", "typescript", "package.json")
    );
  });
});
