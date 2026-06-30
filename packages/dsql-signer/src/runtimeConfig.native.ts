import { invalidProvider } from "@smithy/core/client";

import type { DsqlSignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DsqlSignerConfig) => {
  return {
    runtime: "react-native",
    credentials: invalidProvider("Credential is missing"),
    region: invalidProvider("Region is missing"),
    ...config,
  };
};
