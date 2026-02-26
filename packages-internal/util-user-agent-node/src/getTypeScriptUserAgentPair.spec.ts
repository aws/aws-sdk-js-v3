import { readFile } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getTypeScriptPackageJsonPath } from "./getTypeScriptPackageJsonPath";

vi.mock("node:fs/promises");
vi.mock("./getTypeScriptPackageJsonPath");

describe("getTypeScriptUserAgentPair", () => {
  const mockTscVersion = "5.9.3";
  const mockPackageJsonPath = "/mock/node_modules/typescript/package.json";

  beforeEach(() => {
    vi.mocked(getTypeScriptPackageJsonPath).mockReturnValue(mockPackageJsonPath);
  });

  afterEach(() => {
    expect(readFile).toHaveBeenCalledWith(mockPackageJsonPath, "utf-8");
    vi.clearAllMocks();
    vi.resetModules();
  });

  describe("when typescript/package.json is available", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));
    });

    it("returns version", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockTscVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");

      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockTscVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockTscVersion]);

      expect(readFile).toHaveBeenCalledTimes(1);
    });

    it("returns cached version on subsequent calls even if it's an empty string", async () => {
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: "" }));

      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", ""]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", ""]);

      expect(readFile).toHaveBeenCalledTimes(1);
    });
  });

  describe("when reading typescript/package.json throws error", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockRejectedValue(new Error("File not found"));
    });

    it("returns undefined when typescript package.json read fails", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
    });

    it("returns undefined on subsequent calls after read failure", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");

      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();

      expect(readFile).toHaveBeenCalledTimes(1);
    });
  });

  describe("when typescript/package.json is not a valid JSON", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue("Not a JSON");
    });

    it("returns undefined when typescript package.json parse fails", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
    });

    it("returns undefined on subsequent calls after parse failure", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");

      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();

      expect(readFile).toHaveBeenCalledTimes(1);
    });
  });
});
