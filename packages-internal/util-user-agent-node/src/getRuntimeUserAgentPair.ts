import type { UserAgentPair } from "@smithy/types";
import { versions } from "process";

/**
 * Returns the runtime name and version as a user agent pair.
 * @internal
 */
export const getRuntimeUserAgentPair = (): UserAgentPair => {
  const runtimesToCheck = ["deno", "bun", "llrt"];

  // Return first which is found in versions
  for (const runtime of runtimesToCheck) {
    if (versions[runtime]) {
      return [`md/${runtime}`, versions[runtime]];
    }
  }
  return ["md/nodejs", versions.node];
};
