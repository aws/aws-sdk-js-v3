import { Sha256 } from "@aws-crypto/sha256-js";
import { parseUrl } from "@aws-sdk/url-parser-native";
import { ClientDefaults } from "./Route53DomainsClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  sha256: Sha256,
  urlParser: parseUrl,
};
