import { versions } from "process";
import { afterEach, describe, expect, it, vi } from "vitest";

import { getRuntimeUserAgentPair } from "./getRuntimeUserAgentPair";

vi.mock("process");

describe(getRuntimeUserAgentPair.name, () => {
  const originalVersions = { ...versions };

  afterEach(() => {
    Object.keys(versions).forEach((key) => {
      if (!(key in originalVersions)) {
        delete versions[key];
      }
    });
  });

  it("returns deno runtime when deno version exists", () => {
    versions["deno"] = "1.0.0";
    expect(getRuntimeUserAgentPair()).toEqual(["md/deno", "1.0.0"]);
  });

  it("returns bun runtime when bun version exists", () => {
    versions["bun"] = "1.0.0";
    expect(getRuntimeUserAgentPair()).toEqual(["md/bun", "1.0.0"]);
  });

  it("returns llrt runtime when llrt version exists", () => {
    versions["llrt"] = "1.0.0";
    expect(getRuntimeUserAgentPair()).toEqual(["md/llrt", "1.0.0"]);
  });

  it("returns nodejs runtime as fallback", () => {
    expect(getRuntimeUserAgentPair()).toEqual(["md/nodejs", versions.node]);
  });

  it("returns first matching runtime in priority order", () => {
    versions["deno"] = "1.0.0";
    versions["bun"] = "2.0.0";
    expect(getRuntimeUserAgentPair()).toEqual(["md/deno", "1.0.0"]);
  });
});
