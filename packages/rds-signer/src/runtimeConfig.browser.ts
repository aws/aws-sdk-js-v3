import { Sha256 } from "@aws-crypto/sha256-browser";
import { invalidProvider } from "@smithy/invalid-dependency";

import type { SignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerConfig) => {
  return {
    runtime: "browser",
    ...config,
    sha256: config?.sha256 ?? Sha256,
    credentials: config?.credentials ?? invalidProvider("Credential is missing"),
    region: config?.region ?? invalidProvider("Region is missing"),
  };
};
