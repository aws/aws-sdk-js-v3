import { join, sep } from "node:path";
import { describe, expect, it } from "vitest";

import { getTypeScriptPackageJsonPaths } from "./getTypeScriptPackageJsonPaths";

describe(getTypeScriptPackageJsonPaths.name, () => {
  const typescriptPackageJsonPath = join("node_modules", "typescript", "package.json");
  const cwdPath = join(process.cwd(), typescriptPackageJsonPath);

  it("returns path from process.cwd() when dirname is empty", () => {
    expect(getTypeScriptPackageJsonPaths()).toEqual([cwdPath]);
  });

  it("returns single path when dirname resolves to same as cwd", () => {
    expect(getTypeScriptPackageJsonPaths(process.cwd())).toEqual([cwdPath]);
  });

  it("returns path relative to dirname when not inside node_modules", () => {
    const dirname = join("some", "path");
    expect(getTypeScriptPackageJsonPaths(dirname)).toEqual([join(dirname, typescriptPackageJsonPath), cwdPath]);
  });

  it("returns path relative to first node_modules when inside node_modules", () => {
    const dirname = join("project", "node_modules", "@aws-sdk", "client-s3");
    expect(getTypeScriptPackageJsonPaths(dirname)).toEqual([join("project", typescriptPackageJsonPath), cwdPath]);
  });

  it("handles nested node_modules by using the first occurrence", () => {
    const dirname = join("project", "node_modules", "pkg", "node_modules", "nested");
    expect(getTypeScriptPackageJsonPaths(dirname)).toEqual([join("project", typescriptPackageJsonPath), cwdPath]);
  });

  it.each([
    [["foo", "."].join(sep), "foo"],
    [["foo", "..", "bar"].join(sep), "bar"],
    [["foo", ".", "bar"].join(sep), join("foo", "bar")],
  ])("normalizes dot segments in paths for '%s'", (dirname, nodeModulesPath) => {
    expect(getTypeScriptPackageJsonPaths(dirname)).toEqual([join(nodeModulesPath, typescriptPackageJsonPath), cwdPath]);
  });
});
