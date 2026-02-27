import type { UserAgentPair } from "@smithy/types";
import { readFile } from "node:fs/promises";

import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";
import { getTypeScriptPackageJsonPath } from "./getTypeScriptPackageJsonPath";

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

  try {
    const packageJson = await readFile(getTypeScriptPackageJsonPath(__dirname), "utf-8");
    const { version } = JSON.parse(packageJson);
    const sanitizedVersion = getSanitizedTypeScriptVersion(version);
    if (typeof sanitizedVersion !== "string") {
      tscVersion = null;
      return undefined;
    }
    tscVersion = sanitizedVersion;
    return ["md/tsc", tscVersion];
  } catch {
    // Ignore error in case of failure in file read or JSON parsing.
    tscVersion = null;
  }
};
