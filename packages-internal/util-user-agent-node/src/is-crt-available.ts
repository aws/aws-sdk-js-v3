import { UserAgentPair } from "@smithy/types";

import { crtAvailability } from "./crt-availability";

/**
 * @internal
 */
export const isCrtAvailable = (): UserAgentPair | null => {
  if (crtAvailability.isCrtAvailable) {
    return ["md/crt-avail"];
  }
  return null;
};
