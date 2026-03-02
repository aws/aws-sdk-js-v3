import { join, normalize, sep } from "node:path";

const typeScriptPackageJsonPath = join("node_modules", "typescript", "package.json");

/**
 * Returns the paths to the TypeScript package.json file relative to the given directory.
 *
 * @param dirname - The directory path to resolve from.
 * @returns The path to the TypeScript package.json file.
 *
 * @internal
 */
export const getTypeScriptPackageJsonPaths = (dirname?: string): string[] => {
  const typescriptPackageJsonPaths = [join(process.cwd(), typeScriptPackageJsonPath)];

  if (!dirname) return typescriptPackageJsonPaths;

  let nodeModulesParentDirPath: string;

  // Normalize the path to handle mixed separators
  const normalizedPath = normalize(dirname);

  // Split into parts
  const parts = normalizedPath.split(sep);

  // Find the index of the first "node_modules" segment
  const nodeModulesIndex = parts.indexOf("node_modules");

  if (nodeModulesIndex !== -1) {
    // If we are inside node_modules, we use the first occurrence of 'node_modules'
    nodeModulesParentDirPath = parts.slice(0, nodeModulesIndex).join(sep);
  } else {
    // If we are not inside node_modules, we can use the current directory.
    nodeModulesParentDirPath = dirname;
  }

  typescriptPackageJsonPaths.push(join(nodeModulesParentDirPath, typeScriptPackageJsonPath));

  return typescriptPackageJsonPaths;
};
