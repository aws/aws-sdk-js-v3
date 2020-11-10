import packageInfo from "./package.json";

import { Sha256 } from "@aws-crypto/sha256-js";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { ClientDefaults } from "./CognitoIdentityClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  runtime: "react-native",
  defaultUserAgent: defaultUserAgent(packageInfo.name, packageInfo.version),
  sha256: Sha256,
  urlParser: parseUrl,
};
