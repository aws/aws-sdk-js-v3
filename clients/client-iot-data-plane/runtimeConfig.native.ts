import { Sha256 } from "@aws-crypto/sha256-js";
import { ClientDefaults } from "./IoTDataPlaneClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  sha256: Sha256,
};
