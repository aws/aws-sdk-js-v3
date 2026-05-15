import { getSanitizedTypeScriptVersion } from "./getSanitizedTypeScriptVersion";

const ALLOWED_PREFIXES = ["^", "~", ">=", "<=", ">", "<"];
const ALLOWED_DIST_TAGS = ["latest", "beta", "dev", "rc", "insiders", "next"];

/**
 * Sanitizes a TypeScript version string for user-agent reporting.
 * Handles dist tags (e.g., "latest", "beta"), version prefixes (e.g., "^", "~"),
 * and semver strings. Returns undefined if the version is invalid.
 *
 * @internal
 */
export const getSanitizedDevTypeScriptVersion = (version = ""): string | undefined => {
  if (ALLOWED_DIST_TAGS.includes(version)) {
    return version;
  }

  const prefix = ALLOWED_PREFIXES.find((p) => version.startsWith(p)) ?? "";
  const sanitizedTypeScriptVersion = getSanitizedTypeScriptVersion(version.slice(prefix.length));

  if (!sanitizedTypeScriptVersion) {
    return undefined;
  }

  return `${prefix}${sanitizedTypeScriptVersion}`;
};
