import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { describe, expect, it } from "vitest";

import { partitionsInfo } from "./partitions";

// Find repo root by walking up to the directory containing yarn.lock
let root = __dirname;
while (!existsSync(join(root, "yarn.lock"))) {
  root = dirname(root);
}

describe("partitions.ts", () => {
  it("should match the original partitions.json", () => {
    execSync("yarn prebuild", { cwd: join(root, "packages-internal/core") });
    const original = JSON.parse(
      readFileSync(join(root, "packages-internal/util-endpoints/src/lib/aws/partitions.json"), "utf-8")
    );
    expect(partitionsInfo).toEqual(original);
  });
});
