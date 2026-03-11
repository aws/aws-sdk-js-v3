import { booleanSelector } from "@smithy/util-config-provider";
import { readFile } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";
import { getTypeScriptPackageJsonPaths } from "./getTypeScriptPackageJsonPaths";

vi.mock("@smithy/util-config-provider");
vi.mock("node:fs/promises");
vi.mock("./getSanitizedTypeScriptVersion");
vi.mock("./getTypeScriptPackageJsonPaths");

describe("getTypeScriptUserAgentPair", () => {
  const mockTscVersion = "5.9.3+build123";
  const mockSanitizedVersion = "5.9.3";
  const mockPackageJsonPath1 = "/mock/cwd/node_modules/typescript/package.json";
  const mockPackageJsonPath2 = "/mock/dirname/node_modules/typescript/package.json";

  beforeEach(() => {
    vi.mocked(getTypeScriptPackageJsonPaths).mockReturnValue([mockPackageJsonPath1, mockPackageJsonPath2]);
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
      expect(readFile).toHaveBeenCalledWith(mockPackageJsonPath1, "utf-8");
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

  describe("when first path fails but second succeeds", () => {
    beforeEach(() => {
      vi.mocked(readFile)
        .mockRejectedValueOnce(new Error("File not found"))
        .mockResolvedValueOnce(JSON.stringify({ version: mockTscVersion }));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockPackageJsonPath1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockPackageJsonPath2, "utf-8");
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

  describe("when getSanitizedTypeScriptVersion returns undefined for first path", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));
      vi.mocked(getSanitizedTypeScriptVersion).mockReturnValueOnce(undefined).mockReturnValueOnce(mockSanitizedVersion);
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockPackageJsonPath1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockPackageJsonPath2, "utf-8");
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

  describe("when all paths fail", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockRejectedValue(new Error("File not found"));
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockPackageJsonPath1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockPackageJsonPath2, "utf-8");
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

  describe("when typescript/package.json is not a valid JSON", () => {
    beforeEach(() => {
      vi.mocked(readFile).mockResolvedValue("Not a JSON");
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledTimes(2);
      expect(readFile).toHaveBeenNthCalledWith(1, mockPackageJsonPath1, "utf-8");
      expect(readFile).toHaveBeenNthCalledWith(2, mockPackageJsonPath2, "utf-8");
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
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));

      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));
      expect(readFile).toHaveBeenCalledOnce();
    });

    it("proceeds with TypeScript detection when booleanSelector throws error", async () => {
      vi.mocked(booleanSelector).mockImplementation(() => {
        throw new Error("Invalid value");
      });
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));

      const { getTypeScriptUserAgentPair } = await import("./getTypeScriptUserAgentPair");
      await expect(getTypeScriptUserAgentPair()).resolves.toEqual(["md/tsc", mockSanitizedVersion]);
      vi.mocked(readFile).mockResolvedValue(JSON.stringify({ version: mockTscVersion }));
      expect(readFile).toHaveBeenCalledOnce();
    });
  });
});
