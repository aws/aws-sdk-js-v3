import type { UserAgentPair } from "@smithy/types";

let tscVersion: string | null;

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

  try {
    const typescript = await import("typescript");
    tscVersion = typescript.version;
    return ["md/tsc", tscVersion];
  } catch {
    // Ignore error, but set tscVersion to null so we don't try to import again.
    tscVersion = null;
  }
};
