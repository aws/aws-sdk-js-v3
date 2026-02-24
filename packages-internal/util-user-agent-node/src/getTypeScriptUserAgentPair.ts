import type { UserAgentPair } from "@smithy/types";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

let tscVersion: string | null;

const getCurrentDirPath = () => {
  // ESM: import.meta.url is defined
  if (typeof import.meta !== "undefined" && import.meta.url) {
    return dirname(fileURLToPath(import.meta.url));
  }

  // CJS: __dirname is a global
  return __dirname;
};

/**
 * Returns the tyescript name and version as a user agent pair, if present.
 * @internal
 */
export const getTypeScriptUserAgentPair = async (): Promise<UserAgentPair | undefined> => {
  // If tscVersion is set from previous calls.
  if (tscVersion === null) {
    return undefined;
  } else if (tscVersion) {
    return ["md/tsc", tscVersion];
  }

  const currentDirPath = getCurrentDirPath();
  const nodeModulesIndex = currentDirPath.indexOf("node_modules");
  const nodeModulesPath =
    nodeModulesIndex !== -1 ? currentDirPath.slice(0, nodeModulesIndex + "node_modules".length) : currentDirPath;
  const packageJsonPath = join(nodeModulesPath, "typescript", "package.json");

  try {
    const packageJson = await readFile(packageJsonPath, "utf-8");
    tscVersion = JSON.parse(packageJson).version as string;
    return ["md/tsc", tscVersion];
  } catch {
    // Ignore error in case of failure in file read or JSON parsing.
    tscVersion = null;
  }
};
