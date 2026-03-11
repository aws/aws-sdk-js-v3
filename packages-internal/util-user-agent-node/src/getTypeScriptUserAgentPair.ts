import type { UserAgentPair } from "@smithy/types";
import { booleanSelector, SelectorType } from "@smithy/util-config-provider";
import { readFile } from "node:fs/promises";

import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";
import { getTypeScriptPackageJsonPaths } from "./getTypeScriptPackageJsonPaths";

let tscVersion: string | null | undefined;

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
  for (const typescriptPackageJsonPath of getTypeScriptPackageJsonPaths(dirname)) {
    try {
      const packageJson = await readFile(typescriptPackageJsonPath, "utf-8");
      const { version } = JSON.parse(packageJson);
      const sanitizedVersion = getSanitizedTypeScriptVersion(version);
      if (typeof sanitizedVersion !== "string") {
        continue;
      }
      tscVersion = sanitizedVersion;
      return ["md/tsc", tscVersion];
    } catch {
      // Ignore error in case of failure in file read or JSON parsing.
    }
  }

  // If we reach here, we couldn't find the TypeScript version, so we set tscVersion to null
  tscVersion = null;
  return undefined;
};
