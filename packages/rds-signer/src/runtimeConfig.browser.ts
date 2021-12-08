import { Sha256 } from "@aws-crypto/sha256-browser";

import { SignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerConfig) => {
  return {
    ...config,
    runtime: "browser",
    sha256: config?.sha256 ?? Sha256,
  };
};
