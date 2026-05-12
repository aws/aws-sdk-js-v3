import { normalize, sep } from "node:path";

/**
 * Returns candidate paths to the node_modules parent directories based on current
 * working directory and, if provided, from the given directory.
 *
 * @param dirname - Optional directory path to derive an additional candidate path from.
 * @returns An array of unique candidate paths to the TypeScript package.json file.
 *
 * @internal
 */
export const getNodeModulesParentDirs = (dirname?: string): string[] => {
  const cwd = process.cwd();

  if (!dirname) {
    return [cwd];
  }

  const normalizedPath = normalize(dirname);
  const parts = normalizedPath.split(sep);
  const nodeModulesIndex = parts.indexOf("node_modules");
  const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(sep) : normalizedPath;

  if (cwd === parentDir) {
    return [cwd];
  }

  return [parentDir, cwd];
};
