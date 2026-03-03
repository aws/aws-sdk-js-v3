import { join, normalize, sep } from "node:path";

const typescriptPackageJsonPath = join("node_modules", "typescript", "package.json");

/**
 * Returns candidate paths to the TypeScript package.json file derived from the current
 * working directory and, if provided, from the given directory.
 *
 * @param dirname - Optional directory path to derive an additional candidate path from.
 * @returns An array of unique candidate paths to the TypeScript package.json file.
 *
 * @internal
 */
export const getTypeScriptPackageJsonPaths = (dirname?: string): string[] => {
  const cwdPath = join(process.cwd(), typescriptPackageJsonPath);

  if (!dirname) {
    return [cwdPath];
  }

  const normalizedPath = normalize(dirname);
  const parts = normalizedPath.split(sep);
  const nodeModulesIndex = parts.indexOf("node_modules");
  const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(sep) : dirname;
  const parentDirPath = join(parentDir, typescriptPackageJsonPath);

  if (cwdPath === parentDirPath) {
    return [cwdPath];
  }

  return [parentDirPath, cwdPath];
};
