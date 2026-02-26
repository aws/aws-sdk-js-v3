import { join, normalize, sep } from "node:path";

export const getTypeScriptPackageJsonPath = (dirname = ""): string => {
  let nodeModulesPath: string;

  // Normalize the path to handle mixed separators
  const normalizedPath = normalize(dirname);

  // Split into parts
  const parts = normalizedPath.split(sep);

  // Find the index of the first "node_modules" segment
  const nodeModulesIndex = parts.indexOf("node_modules");

  if (nodeModulesIndex !== -1) {
    // If we are inside node_modules, we use the first occurrence of 'node_modules'
    nodeModulesPath = parts.slice(0, nodeModulesIndex).join(sep);
  } else {
    // If we are not inside node_modules, we can use the current directory.
    nodeModulesPath = dirname;
  }

  return join(nodeModulesPath, "node_modules", "typescript", "package.json");
};
