import type { AwsCredentialIdentity } from "@smithy/types";

import type { CredentialCacheState, CredentialCacheWindows } from "./types";

/**
 * Classifies cached credentials into one of the five cache states.
 *
 * @internal
 *
 * @param credentials - currently cached credentials, or undefined if none have been obtained.
 * @param nowMs - current time in milliseconds.
 * @param windows - the windows in effect for these credentials.
 */
export const classifyCredentialCacheState = (
  credentials: AwsCredentialIdentity | undefined,
  nowMs: number,
  windows: CredentialCacheWindows
): CredentialCacheState => {
  if (!credentials) {
    return "none";
  }

  // Some callers set expiration to a string instead of a Date, so getTime may be missing.
  const expiresAtMs = credentials.expiration?.getTime?.();

  if (expiresAtMs !== undefined) {
    const remainingMs = expiresAtMs - nowMs;

    if (remainingMs <= 0) {
      return "expired";
    }
    if (remainingMs < windows.mandatoryWindow) {
      return "mandatory";
    }
    if (remainingMs < windows.advisoryWindow) {
      return "advisory";
    }
  }

  // Credentials with no expiration never need refreshing.
  return "valid";
};
