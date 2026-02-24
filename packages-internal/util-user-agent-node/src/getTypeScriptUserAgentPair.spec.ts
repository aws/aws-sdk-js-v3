import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("node:path");
vi.mock("node:fs/promises");

describe("getTypeScriptUserAgentPair", () => {
  const mockTscVersion = "5.9.3";

  describe.each([
    // Searches for typescript in node_modules of current directory
    { dirPath: "/app", nodeModulesPath: "/app" },

    // Searches for typescript in node_modules
    { dirPath: "/app/node_modules/@aws-sdk/util-user-agent-node/dist-cjs", nodeModulesPath: "/app/node_modules" },

    // Searches for typescript in root node_modules
    {
      dirPath: "/app/node_modules/@aws-sdk/client-s3/node_modules/util-user-agent-node/dist-cjs",
      nodeModulesPath: "/app/node_modules",
    },
  ])("for current directory $dirPath", ({ dirPath, nodeModulesPath }) => {
    beforeEach(() => {
      vi.mocked(join).mockImplementation((...paths) => paths.join("/"));
      vi.mocked(dirname).mockReturnValueOnce(dirPath);
    });

    afterEach(() => {
      expect(readFile).toHaveBeenCalledWith(`${nodeModulesPath}/typescript/package.json`, "utf-8");
      vi.clearAllMocks();
      vi.resetModules();
    });

    describe("when typescript/package.json is available", () => {
      beforeEach(() => {
        vi.mocked(readFile).mockResolvedValueOnce(JSON.stringify({ version: mockTscVersion }));
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
        expect(dirname).toHaveBeenCalledTimes(1);
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
        expect(dirname).toHaveBeenCalledTimes(1);
      });
    });

    describe("when typescript/package.json is not a valid JSON", () => {
      beforeEach(() => {
        vi.mocked(readFile).mockResolvedValueOnce("Not a JSON");
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
        expect(dirname).toHaveBeenCalledTimes(1);
      });
    });
  });
});
