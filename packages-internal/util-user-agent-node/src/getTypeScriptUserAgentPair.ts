import type { UserAgentPair } from "@smithy/types";
import { booleanSelector, SelectorType } from "@smithy/util-config-provider";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { getNodeModulesParentDirs } from "./getNodeModulesParentDirs";
import { getSanitizedDevTypeScriptVersion } from "./getSanitizedDevTypeScriptVersion";
import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";

let tscVersion: string | null | undefined;

const TS_PACKAGE_JSON = join("node_modules", "typescript", "package.json");

/**
 * Returns the tyescript name and version as a user agent pair, if present.
 * @internal
 */
export const getTypeScriptUserAgentPair = async (): Promise<UserAgentPair | undefined> => {
  // If tscVersion is set from previous calls.
  if (tscVersion === null) {
    return undefined;
  } else if (typeof tscVersion === "string") {
    return ["md/tsc", tscVersion];
  }

  // Disable TypeScript detection if environment variable is set.
  let isTypeScriptDetectionDisabled = false;
  try {
    isTypeScriptDetectionDisabled =
      booleanSelector(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", SelectorType.ENV) || false;
  } catch {}
  if (isTypeScriptDetectionDisabled) {
    tscVersion = null;
    return undefined;
  }

  // typeof check is required as some ESM bundles throw ReferenceError error '__dirname is not defined'
  const dirname = typeof __dirname !== "undefined" ? __dirname : undefined;
  const nodeModulesParentDirs = getNodeModulesParentDirs(dirname);

  let versionFromApp: string | undefined;

  // We log typescript version only if it's in application package.json
  for (const nodeModulesParentDir of nodeModulesParentDirs) {
    try {
      const appPackageJsonPath = join(nodeModulesParentDir, "package.json");
      const packageJson = await readFile(appPackageJsonPath, "utf-8");
      const { dependencies, devDependencies } = JSON.parse(packageJson);
      const version = devDependencies?.typescript ?? dependencies?.typescript;
      if (typeof version !== "string") {
        continue;
      }
      versionFromApp = version;
      break;
    } catch {
      // Ignore error in case of failure in file read or JSON parsing.
    }
  }

  if (!versionFromApp) {
    // The TypeScript version is not defined in application package.json.
    tscVersion = null;
    return undefined;
  }

  let versionFromNodeModules: string | undefined;

  // We attempt to read typescript version from node_modules/typescript/package.json
  for (const nodeModulesParentDir of nodeModulesParentDirs) {
    try {
      const tsPackageJsonPath = join(nodeModulesParentDir, TS_PACKAGE_JSON);
      const packageJson = await readFile(tsPackageJsonPath, "utf-8");
      const { version } = JSON.parse(packageJson);
      const sanitizedVersion = getSanitizedTypeScriptVersion(version);
      if (typeof sanitizedVersion !== "string") {
        continue;
      }
      versionFromNodeModules = sanitizedVersion;
      break;
    } catch {
      // Ignore error in case of failure in file read or JSON parsing.
    }
  }

  if (versionFromNodeModules) {
    tscVersion = versionFromNodeModules;
    return ["md/tsc", tscVersion];
  }

  // If we reach here, we found version in application package.json and not in node_modules.
  // This can happen when typescript is not installed in production. We attempt to store sanitized version.
  const sanitizedVersion = getSanitizedDevTypeScriptVersion(versionFromApp);

  if (typeof sanitizedVersion !== "string") {
    tscVersion = null;
    return undefined;
  }

  tscVersion = `dev_${sanitizedVersion}`;
  return ["md/tsc", tscVersion];
};
