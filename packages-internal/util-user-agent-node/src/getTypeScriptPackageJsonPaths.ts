import { join, normalize, sep } from "node:path";

const typeScriptPackageJsonPath = join("node_modules", "typescript", "package.json");

/**
 * Returns the paths to the TypeScript package.json file relative to the given directory.
 *
 * @param dirname - The directory path to resolve from.
 * @returns An array of unique paths to the TypeScript package.json file.
 *
 * @internal
 */
export const getTypeScriptPackageJsonPaths = (dirname?: string): string[] => {
  const paths = new Set<string>();
  paths.add(join(process.cwd(), typeScriptPackageJsonPath));

  if (dirname) {
    const normalizedPath = normalize(dirname);
    const parts = normalizedPath.split(sep);
    const nodeModulesIndex = parts.indexOf("node_modules");
    const parentDir = nodeModulesIndex !== -1 ? parts.slice(0, nodeModulesIndex).join(sep) : dirname;
    paths.add(join(parentDir, typeScriptPackageJsonPath));
  }

  return [...paths];
};
