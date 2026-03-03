import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getNodeModulesParentDirs } from "./getNodeModulesParentDirs";
import { getSanitizedDevTypeScriptVersion } from "./getSanitizedDevTypeScriptVersion";
import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";

vi.mock("node:fs/promises");
vi.mock("./getNodeModulesParentDirs");
vi.mock("./getSanitizedDevTypeScriptVersion");
vi.mock("./getSanitizedTypeScriptVersion");

describe("getTypeScriptUserAgentPair", () => {
  const mockTscVersion = "5.9.3+build123";
  const mockSanitizedVersion = "5.9.3";
  const mockParentDir1 = "/mock/cwd";
  const mockParentDir2 = "/mock/dirname";
  const mockTsPackageJson1 = join(mockParentDir1, "node_modules", "typescript", "package.json");
  const mockTsPackageJson2 = join(mockParentDir2, "node_modules", "typescript", "package.json");
  const mockAppPackageJson1 = join(mockParentDir1, "package.json");
  const mockAppPackageJson2 = join(mockParentDir2, "package.json");

  beforeEach(() => {
    vi.mocked(getNodeModulesParentDirs).mockReturnValue([mockParentDir1, mockParentDir2]);
    vi.mocked(getSanitizedDevTypeScriptVersion).mockReturnValue(mockSanitizedVersion);
    vi.mocked(getSanitizedTypeScriptVersion).mockReturnValue(mockSanitizedVersion);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  describe("when typescript/package.json is available", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(1);
      expect(readFile).toHaveBeenCalledWith(mockTsPackageJson1, "utf-8");
    });

    it("returns version from first path", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when first ts path fails but second succeeds", () => {
    beforeEach(() => {
      vi.mocked(readFile)
        .mockRejectedValueOnce(new Error("File not found"))
        .mockResolvedValueOnce(JSON.stringify({ version: mockTscVersion }));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockTsPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson2, "utf-8");
    });

    it("returns version from second path", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when getSanitizedTypeScriptVersion returns undefined for first ts path", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));
      vi.mocked(getSanitizedTypeScriptVersion).mockReturnValueOnce(undefined).mockReturnValueOnce(mockSanitizedVersion);
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockTsPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson2, "utf-8");
    });

    it("continues to next path and returns version", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when ts paths fail but app package.json has devDependencies.typescript", () => {
    beforeEach(() => {
      vi.mocked(readFile)
        .mockRejectedValueOnce(new Error("File not found"))
        .mockRejectedValueOnce(new Error("File not found"))
        .mockResolvedValueOnce(JSON.stringify({ devDependencies: { typescript: mockTscVersion } }));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(3);
      expect(readFile).toHaveBeenNthCalledWith(1, mockTsPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson2, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(3, mockAppPackageJson1, "utf-8");
    });

    it("returns version with dev_ prefix", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", `dev_${mockSanitizedVersion}`]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", `dev_${mockSanitizedVersion}`]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", `dev_${mockSanitizedVersion}`]);
    });
  });

  describe("when ts paths fail but app package.json has dependencies.typescript", () => {
    beforeEach(() => {
      vi.mocked(readFile)
        .mockRejectedValueOnce(new Error("File not found"))
        .mockRejectedValueOnce(new Error("File not found"))
        .mockResolvedValueOnce(JSON.stringify({ dependencies: { typescript: mockTscVersion } }));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(3);
    });

    it("returns version with dev_ prefix", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", `dev_${mockSanitizedVersion}`]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", `dev_${mockSanitizedVersion}`]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", `dev_${mockSanitizedVersion}`]);
    });
  });

  describe("when all paths fail", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockRejectedValue(new Error("File not found"));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(4);
      expect(readFile).toHaveBeenNthCalledWith(1, mockTsPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson2, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(3, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(4, mockAppPackageJson2, "utf-8");
    });

    it("returns undefined", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
    });

    it("returns cached undefined on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
    });
  });

  describe("when any package.json is not a valid JSON", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue("Not a JSON");
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(4);
    });

    it("returns undefined when all paths have invalid JSON", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
    });

    it("returns cached undefined on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
    });
  });
});
