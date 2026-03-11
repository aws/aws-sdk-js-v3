import { booleanSelector } from "@smithy/util-config-provider";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getNodeModulesParentDirs } from "./getNodeModulesParentDirs";
import { getSanitizedDevTypeScriptVersion } from "./getSanitizedDevTypeScriptVersion";
import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";

vi.mock("@smithy/util-config-provider");
vi.mock("node:fs/promises");
vi.mock("./getNodeModulesParentDirs");
vi.mock("./getSanitizedDevTypeScriptVersion");
vi.mock("./getSanitizedTypeScriptVersion");

describe("getTypeScriptUserAgentPair", () => {
  const mockTscVersion = "5.9.3+build123";
  const mockSanitizedVersion = "5.9.3";
  const mockParentDir1 = "/mock/cwd";
  const mockParentDir2 = "/mock/dirname";
  const mockAppPackageJson1 = join(mockParentDir1, "package.json");
  const mockAppPackageJson2 = join(mockParentDir2, "package.json");
  const mockTsPackageJson1 = join(mockParentDir1, "node_modules", "typescript", "package.json");
  const mockTsPackageJson2 = join(mockParentDir2, "node_modules", "typescript", "package.json");

  beforeEach(() => {
    vi.mocked(getNodeModulesParentDirs).mockReturnValue([mockParentDir1, mockParentDir2]);
    vi.mocked(getSanitizedDevTypeScriptVersion).mockReturnValue(mockSanitizedVersion);
    vi.mocked(getSanitizedTypeScriptVersion).mockReturnValue(mockSanitizedVersion);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  describe("when app package.json has devDependencies.typescript and node_modules has typescript", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ devDependencies: { typescript: mockTscVersion } });
        }
        if (path === mockTsPackageJson1) {
          return JSON.stringify({ version: mockTscVersion });
        }
        throw new Error("File not found");
      });
    });

    afterEach(() => {
      // Both loops break after finding values in first dir
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson1, "utf-8");
    });

    it("returns version from node_modules", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when app package.json has dependencies.typescript and node_modules has typescript", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ dependencies: { typescript: mockTscVersion } });
        }
        if (path === mockTsPackageJson1) {
          return JSON.stringify({ version: mockTscVersion });
        }
        throw new Error("File not found");
      });
    });

    afterEach(() => {
      // Both loops break after finding values in first dir
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson1, "utf-8");
    });

    it("returns version from node_modules", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when first app path fails but second succeeds", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson2) {
          return JSON.stringify({ devDependencies: { typescript: mockTscVersion } });
        }
        if (path === mockTsPackageJson1) {
          return JSON.stringify({ version: mockTscVersion });
        }
        throw new Error("File not found");
      });
    });

    afterEach(() => {
      // First loop: fails on dir1, finds in dir2, breaks. Second loop: finds in dir1, breaks.
      expect(readFile).toHaveBeenCalledTimes(3);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockAppPackageJson2, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(3, mockTsPackageJson1, "utf-8");
    });

    it("returns version from node_modules", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when app package.json has typescript but node_modules does not", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ devDependencies: { typescript: mockTscVersion } });
        }
        throw new Error("File not found");
      });
      vi.mocked(getSanitizedTypeScriptVersion).mockReturnValue(undefined);
    });

    afterEach(() => {
      // First loop breaks after dir1. Second loop iterates all dirs (no valid version found).
      expect(readFile).toHaveBeenCalledTimes(3);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(3, mockTsPackageJson2, "utf-8");
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

  describe("when getSanitizedTypeScriptVersion returns undefined for first node_modules path", () => {
    beforeEach(() => {
      vi.mocked(getSanitizedTypeScriptVersion).mockReturnValueOnce(undefined).mockReturnValueOnce(mockSanitizedVersion);
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ devDependencies: { typescript: mockTscVersion } });
        }
        if (path === mockTsPackageJson1 || path === mockTsPackageJson2) {
          return JSON.stringify({ version: mockTscVersion });
        }
        throw new Error("File not found");
      });
    });

    afterEach(() => {
      // First loop breaks after dir1. Second loop: dir1 returns undefined, dir2 succeeds, breaks.
      expect(readFile).toHaveBeenCalledTimes(3);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockTsPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(3, mockTsPackageJson2, "utf-8");
    });

    it("continues to next node_modules path and returns version", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });

    it("returns cached version on subsequent calls", async () => {
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
    });
  });

  describe("when no app package.json has typescript", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ dependencies: { lodash: "4.0.0" } });
        }
        if (path === mockAppPackageJson2) {
          return JSON.stringify({ devDependencies: { jest: "29.0.0" } });
        }
        throw new Error("File not found");
      });
      vi.mocked(getSanitizedDevTypeScriptVersion).mockReturnValue(undefined);
    });

    afterEach(() => {
      // Only app package.jsons are read; early return before node_modules loop
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockAppPackageJson2, "utf-8");
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

  describe("when all paths fail", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockRejectedValue(new Error("File not found"));
    });

    afterEach(() => {
      // Only app package.jsons are tried; early return before node_modules loop
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockAppPackageJson1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockAppPackageJson2, "utf-8");
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
      // JSON.parse throws for both app package.jsons; early return before node_modules loop
      expect(readFile).toHaveBeenCalledTimes(2);
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

  describe("when booleanSelector is used to read env var", () => {
    it("returns undefined without reading files when booleanSelector returns true", async () => {
      vi.mocked(booleanSelector).mockReturnValue(true);
      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toBeUndefined();
      expect(readFile).not.toHaveBeenCalled();
    });

    it("proceeds with TypeScript detection when booleanSelector returns undefined", async () => {
      vi.mocked(booleanSelector).mockReturnValue(undefined);
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ devDependencies: { typescript: mockTscVersion } });
        }
        if (path === mockTsPackageJson1) {
          return JSON.stringify({ version: mockTscVersion });
        }
        throw new Error("File not found");
      });

      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      expect(readFile).toHaveBeenCalledTimes(2);
    });

    it("proceeds with TypeScript detection when booleanSelector throws error", async () => {
      vi.mocked(booleanSelector).mockImplementation(() => {
        throw new Error("Invalid value");
      });
      vi.mocked(readFile).mockImplementation(async (path: any) => {
        if (path === mockAppPackageJson1) {
          return JSON.stringify({ devDependencies: { typescript: mockTscVersion } });
        }
        if (path === mockTsPackageJson1) {
          return JSON.stringify({ version: mockTscVersion });
        }
        throw new Error("File not found");
      });

      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      expect(readFile).toHaveBeenCalledTimes(2);
    });
  });
});
