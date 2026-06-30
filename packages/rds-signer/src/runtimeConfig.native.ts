import { invalidProvider } from "@smithy/core/client";

import type { SignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerConfig) => {
  return {
    runtime: "react-native",
    ...config,
    credentials: config?.credentials ?? invalidProvider("Credential is missing"),
    region: config?.region ?? invalidProvider("Region is missing"),
  };
};
