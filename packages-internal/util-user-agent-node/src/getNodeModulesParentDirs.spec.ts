import { join, sep } from "node:path";
import { describe, expect, it } from "vitest";

import { getNodeModulesParentDirs } from "./getNodeModulesParentDirs";

describe(getNodeModulesParentDirs.name, () => {
  const cwd = process.cwd();

  it("returns path from process.cwd() when dirname is empty", () => {
    expect(getNodeModulesParentDirs()).toEqual([cwd]);
  });

  it("returns single path when dirname resolves to same as cwd", () => {
    expect(getNodeModulesParentDirs(process.cwd())).toEqual([cwd]);
  });

  it("returns path relative to dirname when not inside node_modules", () => {
    const dirname = join("some", "path");
    expect(getNodeModulesParentDirs(dirname)).toEqual([dirname, cwd]);
  });

  it("returns path relative to first node_modules when inside node_modules", () => {
    const dirname = join("project", "node_modules", "@aws-sdk", "client-s3");
    expect(getNodeModulesParentDirs(dirname)).toEqual(["project", cwd]);
  });

  it("handles nested node_modules by using the first occurrence", () => {
    const dirname = join("project", "node_modules", "pkg", "node_modules", "nested");
    expect(getNodeModulesParentDirs(dirname)).toEqual(["project", cwd]);
  });

  it.each([
    [["foo", "."].join(sep), "foo"],
    [["foo", "..", "bar"].join(sep), "bar"],
    [["foo", ".", "bar"].join(sep), join("foo", "bar")],
  ])("normalizes dot segments in paths for '%s'", (dirname, nodeModulesParentDir) => {
    expect(getNodeModulesParentDirs(dirname)).toEqual([nodeModulesParentDir, cwd]);
  });
});
