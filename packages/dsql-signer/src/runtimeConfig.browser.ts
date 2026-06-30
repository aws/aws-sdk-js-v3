import { invalidProvider } from "@smithy/core/client";

import type { DsqlSignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DsqlSignerConfig) => {
  return {
    runtime: "browser",
    credentials: invalidProvider("Credential is missing"),
    region: invalidProvider("Region is missing"),
    ...config,
  };
};
